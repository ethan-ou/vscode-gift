import parser from "./parser";
import findNextLine from "./find";
import sanitise from "./sanitise";
import { recursionLimits, processError, createOptions } from "./utils";

export default function(text) {
  return validate(sanitise.lf(text));
}

function validate(text, options) {
  const output = [];

  function parse(text, options) {
    if (!options) options = createOptions();

    const validation = parser.parse(text);
    if (validation.type !== "error") return;

    const newError = processError(validation.result, options);
    output.push(newError);

    const newLine = findNextLine(text, newError, options);
    if (!newLine || recursionLimits(text, newLine)) return;

    parse(newLine.text, newLine.options);
  }

  parse(text);
  return output;
}
