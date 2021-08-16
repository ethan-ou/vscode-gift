import { TextDocument, Range, Position } from "vscode";

export interface TextSelection {
  text: string;
  range: Range;
}

export function getSelectionOrLine(
  document: TextDocument,
  range: Range
): TextSelection {
  return range.isEmpty
    ? {
        text: document.lineAt(range.start.line).text,
        range: new Range(
          new Position(range.start.line, 0),
          new Position(
            range.start.line,
            document.lineAt(range.start.line).text.length
          )
        ),
      }
    : { text: document.getText(range), range: range };
}
