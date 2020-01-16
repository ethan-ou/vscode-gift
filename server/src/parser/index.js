import parser from "./parser";

export default function(text) {
  return validate(text);
}

function validate(text, options) {
  let output = [];

  function parse(text, options) {
    const validation = parser.parse(text);
    if (!validation) return;

    const newError = processError(Object.assign({}, validation[0]), options);
    output.push(newError);

    const nextLine = findNextLine(text, newError);
    const newText = nextLine ? text.slice(nextLine.offset) : null;

    const recursionLimits =
      (nextLine && nextLine.offset && nextLine.offset > 1000000) ||
      (nextLine && nextLine.line && nextLine.line > 100000) ||
      (nextLine && nextLine.offset && nextLine.offset > text.length - 1);

    if (newText && !recursionLimits) {
      parse(newText, {
        offset: nextLine.offset + options.offset,
        line: nextLine.line + options.line - 1
      });
    }
  }

  function processError(error, options) {
    const offset = (options && options.offset) || 0;
    const line = (options && options.line) || 1;

    error.location.start = {
      offset: error.location.start.offset + offset,
      line: error.location.start.line + line - 1,
      column: error.location.start.column
    };

    error.location.end = {
      offset: error.location.end.offset + offset,
      line: error.location.end.line + line - 1,
      column: error.location.end.column
    };

    return error;
  }

  function findNextLine(text, error) {
    //Be conservative with throwing warnings.
    //More accuracy is preferred over false positives.

    const lastError = error.location.end.offset;
    let p = lastError;
    let found;
    let foundLine = error.location.end.line;

    let possibleMatch = null;
    let possibleMatchLine = error.location.end.line;

    let safe = null;

    while (!found && p < text.length) {
      //if /n, check ahead to find the next category, comment, question, or EOF.
      //if "}", keep going
      //if "{", backtrack and cut
      //if "}", keep going until the next /n or EOF.
      //if "{", keep going until "}" and next /n or EOF.
      //if "$CATEGORY", next /n or EOF.
      //if "//", next /n or EOF.

      //If there's a new line,
      if (text.charCodeAt(p) === 10) {
        foundLine++;

        //If there is an empty line on the next line
        if (text.charCodeAt(p + 1) === 10) {
          //If no checking has occured
          if (safe === null) {
            possibleMatch = p;
            possibleMatchLine = foundLine;
          }

          //If checking has occurred and there was a previous match
          if (safe === true && possibleMatch) {
            found = possibleMatch;
            foundLine = possibleMatchLine;
          }

          //If checking has occurred and there was no previous match
          if (safe === true && !possibleMatch) {
            found = p;
          }
        }
      }

      if (text.charAt(p) === "}") {
        safe = true;
      }

      if (text.charAt(p) === "{") {
        if (possibleMatch) {
          found = possibleMatch;
        } else {
          safe = false;
        }
      }

      if (text.charAt(p) === "$") {
        if (text.slice(p, p + 8) === "$CATEGORY") {
          safe = true;
        }
      }

      if (text.charAt(p) === "/") {
        if (text.charAt(p + 1) === "/" && safe === null) {
          safe = true;
        }
      }

      if (text.charAt(p) === ":") {
        if (text.charAt(p + 1) === ":") {
          safe = true;
        }
      }

      // if (p > 2000) {
      //   break;
      // }
      p++;
    }

    if (p >= text.length - 1) return;

    //output: first character of next line + line number
    return {
      offset: found + 1,
      line: foundLine
    };
  }

  parse(text, { offset: 0, line: 1 });
  return output;
}
