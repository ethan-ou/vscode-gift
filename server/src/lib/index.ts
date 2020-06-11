import eol from "eol";
import split from "./split";
import parse from "./parser";
import error from "./error";
import { IResult, IError, IParse, IErrorArr } from "./types";
import { SyntaxError } from "./parser/parser";
import { fixErrorMessages } from "./messages";

export default function parser(text: string) {
  const cleanText = eol.lf(text);
  const splitText = split(cleanText);
  const parsedText: any[] = splitText.map((text) => {
    return { ...parse(text.text), ...text };
  });
  const checkErrors: (IParse | IErrorArr)[] = parsedText.map((text) => {
    if (text.error !== null && (text as IError)) {
      return error(text);
    } else {
      return text;
    }
  });

  const fixErrors = checkErrors.map((item) => {
    if (item.error !== null) {
      return fixErrorMessages(cleanText, item);
    } else {
      return item;
    }
  });

  return fixErrors
    .filter((item): item is IErrorArr => item.error !== null)
    .map((item) => item.error)
    .reduce((a, b) => a.concat(b), []);
}
