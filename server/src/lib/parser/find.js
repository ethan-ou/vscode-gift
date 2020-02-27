import { createOptions, addOffset, removeOffset } from "./utils";

export default function(text, error, options) {
  if (!options) options = createOptions();

  const location = removeOffset(error.location.end, options);
  const find = findNextLine(text, location);
  if (!find) return;

  const newLocation = addOffset(find, options);
  return {
    text: find ? text.slice(find.offset) : null,
    options: newLocation
  };
}

// This function finds the next line relative to the split document.
// The exported function makes sure the error is correct for the original document.
function findNextLine(text, location) {
  //Be conservative with throwing warnings.
  //More accuracy is preferred over false positives.

  let p = location && location.offset,
    lineCount = 0,
    found,
    match,
    safe = false,
    newProcess = true;

  //if /n, check ahead to find the next category, comment, question, or EOF.
  //if "}", keep going
  //if "{", backtrack and cut
  //if "}", keep going until the next /n or EOF.
  //if "{", keep going until "}" and next /n or EOF.
  //if "$CATEGORY", next /n or EOF.
  //if "//", next /n or EOF.

  while (!found && p < text.length) {
    // Note: Match for different line times (CRLF & LF)

    const test = {
      newLine: text.charCodeAt(p) === 10,
      emptyNewLine: text.charCodeAt(p) === 10 && text.charCodeAt(p + 1) === 10,
      closedBracket: text.charAt(p) === "}",
      openBracket: text.charAt(p) === "{",
      category: text.charAt(p) === "$" && text.slice(p, p + 8) === "$CATEGORY",
      comment:
        text.charAt(p) === "/" && text.charAt(p + 1) === "/" && newProcess
    };

    // 1. NEW LINE => Safe line count
    if (test.newLine) {
      lineCount++;
    }

    // 2: EMPTY LINE FOUND => Split if safe to do so.
    // 2a. FIRST MATCH => Save current empty line for later
    if (test.emptyNewLine && newProcess) {
      match = {
        offset: p + 1,
        line: lineCount
      };
    }
    // 2b. MATCHED && SAFE => Use previous match
    if (test.emptyNewLine && safe && !newProcess && match) {
      found = Object.assign({}, match);
    }

    // 2b. NO MATCHES && SAFE => Use current match
    if (test.emptyNewLine && safe && !newProcess && !match) {
      found = {
        offset: p + 1,
        line: lineCount
      };
    }

    // 3. OPEN BRACKET => Most likely start of question
    // Avoid new lines within a question.
    if (test.openBracket) {
      if (match) {
        found = Object.assign({}, match);
      } else {
        safe = false;
        newProcess = false;
      }
    }

    // 4. CLOSED BRACKET || CATEGORY || COMMENT => Most likely
    // end of a scope. Safe to split at the next blank line.
    if (test.closedBracket || test.category || test.comment) {
      safe = true;
      newProcess = false;
    }
    // if (p > 2000) {
    //   break;
    // }

    p++;
  }
  // console.log(match, found);

  if (p >= text.length - 1) return;

  //output: first character of next line + line number

  return {
    offset: found.offset,
    line: found.line + location.line
  };
}
