import { TextDocument, Range, Position } from "vscode";

export function getSelectionOrLine(
  document: TextDocument,
  range: Range
): { text: string; selection: boolean } {
  const selection = document.getText(range).length > 0;
  return selection
    ? { text: document.getText(range), selection: selection }
    : { text: document.lineAt(range.start.line).text, selection: selection };
}

export function createLineSelection(
  document: TextDocument,
  range: Range
): Range {
  return new Range(
    new Position(range.start.line, 0),
    new Position(
      range.start.line,
      document.lineAt(range.start.line).text.length
    )
  );
}
