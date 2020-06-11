import { error as parseError } from "../parser";
import { IErrorArr, IError } from "../types";
import token from "./token";
import { SyntaxError } from "../parser/parser";
import { correctTokenMessages } from "./messages";

export default function (message: IError): IErrorArr {
  const stack: string[] = [];
  const errors: SyntaxError[] = [];

  stack.push(message.text);
  errors.push(message.error);

  const findErrors = (): void | Error => {
    try {
      let findToken = token(stack[stack.length - 1], errors[errors.length - 1]);
      console.log(stack[stack.length - 1]);
      stack.push(findToken);

      let newError = parseError(findToken);

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
  let iterationLimit = 0;
  while (!(result instanceof Error) && iterationLimit < 25) {
    result = findErrors();
    iterationLimit++;
  }

  const finalError: IErrorArr = {
    ...message,
    error: errors,
  };

  return correctTokenMessages(finalError);
}
