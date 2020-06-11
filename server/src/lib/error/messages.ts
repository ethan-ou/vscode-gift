import { IErrorArr } from "../types";
import {
  removeOffsetError,
  removeColumnError,
  removeColumnStartError,
} from "../messages";

export function correctTokenMessages(errors: IErrorArr) {
  let iterators: { prevLine: undefined | number; count: number } = {
    prevLine: undefined,
    count: 0,
  };

  const removeColumn = errors.error.map((item, index) => {
    const { start, end } = item.location;

    if (iterators.prevLine === start.line) {
      iterators.count++;
    } else {
      iterators.count = 0;
      iterators.prevLine = start.line;
    }

    if (end.line > start.line) {
      return removeColumnStartError(iterators.count, item);
    } else {
      return removeColumnError(iterators.count, item);
    }
  });

  const output = removeColumn.map((item, index) =>
    removeOffsetError(index, item)
  );

  return {
    ...errors,
    error: output,
  };
}
