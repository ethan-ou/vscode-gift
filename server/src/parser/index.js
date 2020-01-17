import eol from "eol";
import parser from "./parser";
import findNextLine from "./find";
import { recursionLimits, processError } from "./utils";

export default function(text) {
  return validate(eol.lf(text));
}

function validate(text, options) {
  const output = [];

  function parse(text, options) {
    const validation = parser.parse(text);
    if (!validation) return;
    if (!options) options = { offset: 0, line: 1 };

    const newError = processError(Object.assign({}, validation[0]), options);
    const newLine = findNextLine(text, newError, options);

    output.push(newError);
    const newText = newLine && newLine.text;
    if (newText && !recursionLimits(text, newLine)) {
      const newOptions = {
        offset: newLine.offset,
        line: newLine.line
      };
      parse(newText, newOptions);
    }
  }

  parse(text, { offset: 0, line: 1 });
  return output;
}
