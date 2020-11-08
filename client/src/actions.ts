import {
  CodeActionProvider,
  CodeActionKind,
  TextDocument,
  Range,
  CodeAction,
  WorkspaceEdit,
} from "vscode";

export class EscapeSpecialChar implements CodeActionProvider {
  public static readonly providedCodeActionKinds = [CodeActionKind.QuickFix];

  public provideCodeActions(
    document: TextDocument,
    range: Range
  ): CodeAction[] | undefined {
    const escapeSpecialChar = this.createFix(document, range);
    return [escapeSpecialChar];
  }

  private createFix(document: TextDocument, range: Range): CodeAction {
    const fix = new CodeAction(
      `Escape all special characters`,
      CodeActionKind.QuickFix
    );
    fix.edit = new WorkspaceEdit();
    return fix;
  }

  private escapeLocations(document: TextDocument, range: Range): number[] {
    const SPECIALCHAR = ["~", "=", "#", "{", "}", ":"];
    const ESCAPE = "\\";

    const text = document.getText(range);
    const escapeLocations = [];

    let i = 0;

    while (i < text.length) {
      if (SPECIALCHAR.includes(text[i])) {
        const charIsEscaped = i > 0 ? text[i - 1] === ESCAPE : false;

        if (!charIsEscaped) {
          escapeLocations.push(range.start.character + i);
        }
      }

      i++;
    }

    return escapeLocations;
  }
}
