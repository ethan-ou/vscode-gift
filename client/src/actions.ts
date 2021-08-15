import {
  CodeActionProvider,
  CodeActionKind,
  TextDocument,
  Range,
  CodeAction,
  WorkspaceEdit,
} from "vscode";
import {
  escapeMarkdownCodeBlock,
  unescapeMarkdownCodeBlock,
  escapeText,
  unescapeText,
} from "./GIFTHelpers";
import {
  getSelectionOrLine,
  createLineSelection,
  TextSelection,
} from "./helpers";

export class GIFTCodeActions implements CodeActionProvider {
  public static readonly providedCodeActionKinds = [CodeActionKind.Refactor];

  public provideCodeActions(
    document: TextDocument,
    range: Range
  ): CodeAction[] | undefined {
    const selection = getSelectionOrLine(document, range);

    const actions = [
      {
        name: `Escape special characters`,
        fn: escapeText(selection.text),
      },
      {
        name: `Escape code block (Markdown)`,
        fn: escapeMarkdownCodeBlock(selection.text),
      },
      {
        name: `Unescape special characters`,
        fn: unescapeText(selection.text),
      },
      {
        name: `Unescape code block (Markdown)`,
        fn: unescapeMarkdownCodeBlock(selection.text),
      },
    ];

    return actions.map((action) =>
      this.createCodeAction(
        action.name,
        CodeActionKind.Refactor,
        selection,
        action.fn,
        document,
        range
      )
    );
  }

  private createCodeAction(
    name: string,
    type: CodeActionKind,
    selection: TextSelection,
    text: string,
    document: TextDocument,
    range: Range
  ): CodeAction {
    const fix = new CodeAction(name, type);

    fix.edit = new WorkspaceEdit();

    const selectionRange = selection.selection
      ? range
      : createLineSelection(document, range);

    fix.edit.replace(document.uri, selectionRange, text);

    return fix;
  }
}
