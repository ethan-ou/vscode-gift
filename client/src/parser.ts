import { parser } from "gift-parser-ide";
import { GIFTResult } from "gift-parser-ide/out/types";
import { TextDocument, Range } from "vscode";

export function getSelectedQuestions(
  document: TextDocument,
  range: Range
): GIFTResult[] {
  const parsedDocument = parser
    .parse(document.getText())
    .filter((question) => question.type === "result");

  const filteredQuestions = parsedDocument.filter((question) => {
    const selectionStart = question.end >= range.start.line;
    const selectionEnd = question.start <= range.end.line;
    return selectionStart || selectionEnd;
  });

  return filteredQuestions;
}
