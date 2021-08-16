import {
  CodeActionProvider,
  CodeActionKind,
  TextDocument,
  Range,
  CodeAction,
  WorkspaceEdit,
  commands,
  window,
  Disposable,
} from "vscode";
import {
  escapeMarkdownCodeBlock,
  unescapeMarkdownCodeBlock,
  escapeSpecialChar,
  unescapeSpecialChar,
} from "./GIFTHelpers";
import { getSelectionOrLine, TextSelection } from "./helpers";

const actions = [
  {
    name: `Escape special characters`,
    command: `gift.escapeSpecialChar`,
    fn: escapeSpecialChar,
  },
  {
    name: `Escape code block (Markdown)`,
    command: `gift.escapeMarkdownCodeBlock`,
    fn: escapeMarkdownCodeBlock,
  },
  {
    name: `Unescape special characters`,
    command: `gift.unescapeSpecialChar`,
    fn: unescapeSpecialChar,
  },
  {
    name: `Unescape code block (Markdown)`,
    command: `gift.unescapeMarkdownCodeBlock`,
    fn: unescapeMarkdownCodeBlock,
  },
];

export class GIFTCodeActions implements CodeActionProvider {
  public static readonly providedCodeActionKinds = [CodeActionKind.Refactor];

  public provideCodeActions(
    document: TextDocument,
    range: Range
  ): CodeAction[] | undefined {
    const selection = getSelectionOrLine(document, range);

    return actions.map((action) =>
      this.createCodeAction(
        action.name,
        CodeActionKind.Refactor,
        document,
        selection,
        action.fn
      )
    );
  }

  private createCodeAction(
    name: string,
    type: CodeActionKind,
    document: TextDocument,
    selection: TextSelection,
    textFn: (text: string) => string
  ): CodeAction {
    const fix = new CodeAction(name, type);

    fix.edit = new WorkspaceEdit();

    fix.edit.replace(document.uri, selection.range, textFn(selection.text));

    return fix;
  }
}

export class GIFTCodeCommands {
  public provideCodeCommands(): Disposable[] {
    return actions.map((action) =>
      this.createCodeCommand(action.command, action.fn)
    );
  }

  private createCodeCommand(name: string, textFn: (text: string) => string) {
    return commands.registerCommand(name, () => {
      const editor = window.activeTextEditor;

      if (!editor) {
        return;
      }

      const document = editor.document;
      const selection = getSelectionOrLine(document, editor.selection);

      editor.edit((editBuilder) => {
        editBuilder.replace(selection.range, textFn(selection.text));
      });
    });
  }
}
