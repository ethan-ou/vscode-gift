interface Parse {
  token: string;
  line: number;
  char: number;
}

type TextToken =
  | "SCOPE_OPEN"
  | "SCOPE_CLOSED"
  | "EMPTY_LINE"
  | "SCOPE"
  | undefined;

interface TextSplit {
  start: number;
  end: number;
  text: string;
}
