import { IErrorArr } from "../types";
import {
  removeColumnStartError,
  removeColumnError,
  removeOffsetError,
} from "./error";

export function fixErrorMessages(
  originalText: string,
  message: IErrorArr
): IErrorArr {
  const newLine = "\n";
  const charNum = originalText.split(newLine).map((string) => string.length);
  return {
    ...message,
    error: message.error.map((item) => {
      return {
        ...item,
        location: {
          ...item.location,
          start: {
            ...item.location.start,
            offset: item.location.start.offset + charNum[message.start - 1],
            line: item.location.start.line + message.start - 1,
          },
          end: {
            ...item.location.end,
            offset: item.location.end.offset + charNum[message.start - 1],
            line: item.location.end.line + message.start - 1,
          },
        },
      };
    }),
  };
}

export function correctTokenMessages(errors: IErrorArr) {
  let iterators: { prevLine: undefined | number; count: number } = {
    prevLine: undefined,
    count: 0,
  };

  const removeColumn = errors.error.map((item) => {
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

export * from "./error";
