import {
  CodeActionProvider,
  CodeActionKind,
  TextDocument,
  Range,
  CodeAction,
  WorkspaceEdit,
  Position,
} from "vscode";
import { ESCAPE, SPECIALCHAR } from "./GIFTConstants";

export class EscapeSpecialChar implements CodeActionProvider {
  public static readonly providedCodeActionKinds = [CodeActionKind.Refactor];

  public provideCodeActions(
    document: TextDocument,
    range: Range
  ): CodeAction[] | undefined {
    const selection = this.getSelectionOrLine(document, range);
    const locations = this.escapeLocations(selection.text);
    const newText = this.escapeText(selection.text, locations);

    const escapeSpecialChar = this.createFix(
      document,
      range,
      newText,
      selection.selection
    );
    return [escapeSpecialChar];
  }

  private createFix(
    document: TextDocument,
    range: Range,
    newText: string,
    selection: boolean
  ): CodeAction {
    const fix = new CodeAction(
      `Escape special characters`,
      CodeActionKind.Refactor
    );

    fix.edit = new WorkspaceEdit();

    const selectionRange = selection
      ? range
      : new Range(
          new Position(range.start.line, 0),
          new Position(
            range.start.line,
            document.lineAt(range.start.line).text.length
          )
        );

    fix.edit.replace(document.uri, selectionRange, newText);

    return fix;
  }

  private getSelectionOrLine(
    document: TextDocument,
    range: Range
  ): { text: string; selection: boolean } {
    const selection = document.getText(range).length > 0;
    return selection
      ? { text: document.getText(range), selection: selection }
      : { text: document.lineAt(range.start.line).text, selection: selection };
  }

  private escapeLocations(text: string): number[] {
    const escapeLocations = [];

    let i = 0;
    while (i < text.length) {
      if (SPECIALCHAR.includes(text[i])) {
        const charIsEscaped = i > 0 ? text[i - 1] === ESCAPE : false;

        if (!charIsEscaped) {
          escapeLocations.push(i);
        }
      }

      i++;
    }

    return escapeLocations;
  }

  private escapeText(text: string, locations: number[]): string {
    let i = 0;
    for (const location of locations) {
      if (location + i > 0) {
        text = `${text.substring(0, location + i)}${ESCAPE}${text.substr(
          location + i
        )}`;
      } else {
        text = ESCAPE + text;
      }

      i++;
    }

    return text;
  }
}

export class UnescapeSpecialChar implements CodeActionProvider {
  public static readonly providedCodeActionKinds = [CodeActionKind.Refactor];

  public provideCodeActions(
    document: TextDocument,
    range: Range
  ): CodeAction[] | undefined {
    const selection = this.getSelectionOrLine(document, range);
    const locations = this.unescapeLocations(selection.text);
    const newText = this.unescapeText(selection.text, locations);

    const unescapeSpecialChar = this.createFix(
      document,
      range,
      newText,
      selection.selection
    );
    return [unescapeSpecialChar];
  }

  private createFix(
    document: TextDocument,
    range: Range,
    newText: string,
    selection: boolean
  ): CodeAction {
    const fix = new CodeAction(
      `Unescape special characters`,
      CodeActionKind.Refactor
    );

    fix.edit = new WorkspaceEdit();

    const selectionRange = selection
      ? range
      : new Range(
          new Position(range.start.line, 0),
          new Position(
            range.start.line,
            document.lineAt(range.start.line).text.length
          )
        );

    fix.edit.replace(document.uri, selectionRange, newText);

    return fix;
  }

  private getSelectionOrLine(
    document: TextDocument,
    range: Range
  ): { text: string; selection: boolean } {
    const selection = document.getText(range).length > 0;
    return selection
      ? { text: document.getText(range), selection: selection }
      : { text: document.lineAt(range.start.line).text, selection: selection };
  }

  private unescapeLocations(text: string): number[] {
    const unescapeLocations = [];

    let i = 0;
    while (i < text.length) {
      if (text[i] === ESCAPE) {
        const charIsSpecial = SPECIALCHAR.includes(text[i + 1]);

        if (charIsSpecial) {
          unescapeLocations.push(i);
        }
      }

      i++;
    }

    return unescapeLocations;
  }

  private unescapeText(text: string, locations: number[]): string {
    let i = 0;
    for (const location of locations) {
      if (location - i > 0) {
        text = `${text.slice(0, location - i)}${text.slice(location - i + 1)}`;
      } else {
        text = text.slice(1, location - i);
      }

      i++;
    }

    return text;
  }
}
