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
import { getSelectionOrLine, createLineSelection } from "./helpers";

export class EscapeSpecialChar implements CodeActionProvider {
  public static readonly providedCodeActionKinds = [CodeActionKind.Refactor];

  public provideCodeActions(
    document: TextDocument,
    range: Range
  ): CodeAction[] | undefined {
    const selection = getSelectionOrLine(document, range);
    const newText = escapeText(selection.text);

    const action = this.createFix(
      document,
      range,
      newText,
      selection.selection
    );
    return [action];
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
      : createLineSelection(document, range);

    fix.edit.replace(document.uri, selectionRange, newText);

    return fix;
  }
}

export class UnescapeSpecialChar implements CodeActionProvider {
  public static readonly providedCodeActionKinds = [CodeActionKind.Refactor];

  public provideCodeActions(
    document: TextDocument,
    range: Range
  ): CodeAction[] | undefined {
    const selection = getSelectionOrLine(document, range);
    const newText = unescapeText(selection.text);

    const action = this.createFix(
      document,
      range,
      newText,
      selection.selection
    );
    return [action];
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
      : createLineSelection(document, range);

    fix.edit.replace(document.uri, selectionRange, newText);

    return fix;
  }
}

export class EscapeMarkdownCodeBlock implements CodeActionProvider {
  public static readonly providedCodeActionKinds = [CodeActionKind.Refactor];

  public provideCodeActions(
    document: TextDocument,
    range: Range
  ): CodeAction[] | undefined {
    const selection = getSelectionOrLine(document, range);
    const newText = escapeMarkdownCodeBlock(selection.text);

    const action = this.createFix(
      document,
      range,
      newText,
      selection.selection
    );
    return [action];
  }

  private createFix(
    document: TextDocument,
    range: Range,
    newText: string,
    selection: boolean
  ): CodeAction {
    const fix = new CodeAction(
      `Escape Markdown code block`,
      CodeActionKind.Refactor
    );

    fix.edit = new WorkspaceEdit();

    const selectionRange = selection
      ? range
      : createLineSelection(document, range);

    fix.edit.replace(document.uri, selectionRange, newText);

    return fix;
  }
}

export class UnescapeMarkdownCodeBlock implements CodeActionProvider {
  public static readonly providedCodeActionKinds = [CodeActionKind.Refactor];

  public provideCodeActions(
    document: TextDocument,
    range: Range
  ): CodeAction[] | undefined {
    const selection = getSelectionOrLine(document, range);
    const newText = unescapeMarkdownCodeBlock(selection.text);

    const action = this.createFix(
      document,
      range,
      newText,
      selection.selection
    );
    return [action];
  }

  private createFix(
    document: TextDocument,
    range: Range,
    newText: string,
    selection: boolean
  ): CodeAction {
    const fix = new CodeAction(
      `Unescape Markdown code block`,
      CodeActionKind.Refactor
    );

    fix.edit = new WorkspaceEdit();

    const selectionRange = selection
      ? range
      : createLineSelection(document, range);

    fix.edit.replace(document.uri, selectionRange, newText);

    return fix;
  }
}
