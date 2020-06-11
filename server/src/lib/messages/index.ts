import { IErrorArr } from "../types";

export * from "./error";

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
