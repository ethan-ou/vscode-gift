import parser from "../parser";
import { IErrorArr, IError } from "../types";
import token from "./token";
import { SyntaxError } from "../parser/parser";
import { correctTokenMessages } from "../messages";

export default function (message: IError): IErrorArr {
  const ITERATION_LIMIT = 50;
  const stack: string[] = [];
  const errors: SyntaxError[] = [];

  stack.push(message.text);
  errors.push(message.error);

  const findErrors = (): void | Error => {
    try {
      let findToken = token(stack[stack.length - 1], errors[errors.length - 1]);
      stack.push(findToken);

      let newError = parser(findToken);

      if (newError.error !== null) {
        errors.push(newError.error);
      } else {
        throw new Error("No Parse Found");
      }
    } catch (err) {
      return err;
    }
  };

  let result;
  let i = 0;
  while (!(result instanceof Error) && i < ITERATION_LIMIT) {
    result = findErrors();
    i++;
  }

  const finalError: IErrorArr = {
    ...message,
    error: errors,
  };

  return correctTokenMessages(finalError);
}
