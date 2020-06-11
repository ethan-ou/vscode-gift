import { SyntaxError } from "../parser/parser";

export function incrementError(
  number: {
    line: number;
    offset: number;
    column: number;
  },
  message: SyntaxError
): SyntaxError {
  return {
    ...message,
    location: {
      ...message.location,
      start: {
        ...message.location.start,
        line: message.location.start.line + number.line,
        offset: message.location.start.offset + number.offset,
        column: message.location.start.column + number.column,
      },
      end: {
        ...message.location.end,
        line: message.location.end.line + number.line,
        offset: message.location.end.offset + number.offset,
        column: message.location.end.column + number.column,
      },
    },
  };
}

export function incrementColumnError(
  number: number,
  message: SyntaxError
): SyntaxError {
  return {
    ...message,
    location: {
      ...message.location,
      start: {
        ...message.location.start,
        column: message.location.start.column + number,
      },
      end: {
        ...message.location.end,
        column: message.location.end.column + number,
      },
    },
  };
}

export function incrementOffsetError(
  number: number,
  message: SyntaxError
): SyntaxError {
  return {
    ...message,
    location: {
      ...message.location,
      start: {
        ...message.location.start,
        offset: message.location.start.offset + number,
      },
      end: {
        ...message.location.end,
        offset: message.location.end.offset + number,
      },
    },
  };
}

export function incrementLineError(
  number: number,
  message: SyntaxError
): SyntaxError {
  return {
    ...message,
    location: {
      ...message.location,
      start: {
        ...message.location.start,
        line: message.location.start.line + number,
      },
      end: {
        ...message.location.end,
        line: message.location.end.line + number,
      },
    },
  };
}

export function removeOffsetError(
  number: number,
  message: SyntaxError
): SyntaxError {
  return {
    ...message,
    location: {
      ...message.location,
      start: {
        ...message.location.start,
        offset: message.location.start.offset - number,
      },
      end: {
        ...message.location.end,
        offset: message.location.end.offset - number,
      },
    },
  };
}

export function removeLineError(
  number: number,
  message: SyntaxError
): SyntaxError {
  return {
    ...message,
    location: {
      ...message.location,
      start: {
        ...message.location.start,
        line: message.location.start.line - number,
      },
      end: {
        ...message.location.end,
        line: message.location.end.line - number,
      },
    },
  };
}

export function removeColumnError(
  number: number,
  message: SyntaxError
): SyntaxError {
  return {
    ...message,
    location: {
      ...message.location,
      start: {
        ...message.location.start,
        column: message.location.start.column - number,
      },
      end: {
        ...message.location.end,
        column: message.location.end.column - number,
      },
    },
  };
}

export function removeColumnStartError(
  number: number,
  message: SyntaxError
): SyntaxError {
  return {
    ...message,
    location: {
      ...message.location,
      start: {
        ...message.location.start,
        column: message.location.start.column - number,
      },
    },
  };
}
