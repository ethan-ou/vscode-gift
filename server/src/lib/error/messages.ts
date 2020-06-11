import { IErrorArr } from "../types";
import { removeTokenError } from "../messages";

export function correctTokenMessages(errors: IErrorArr) {
  return {
    ...errors,
    error: errors.error.map((item, index) => removeTokenError(index, item)),
  };
}
