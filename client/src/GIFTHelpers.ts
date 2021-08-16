import { ESCAPE, SPECIALCHAR, MARKDOWNCODE, NEWLINE } from "./GIFTConstants";

export function escapeSpecialChar(text: string): string {
  const escapeLocations = [];

  let index = 0;
  while (index < text.length) {
    if (SPECIALCHAR.includes(text[index])) {
      const charIsEscaped =
        index > 0 ? text[index - ESCAPE.length] === ESCAPE : false;

      if (!charIsEscaped) {
        escapeLocations.push(index);
      }
    }

    index++;
  }

  let offset = 0;
  for (const location of escapeLocations) {
    if (location + offset > 0) {
      text = `${text.substring(0, location + offset)}${ESCAPE}${text.substr(
        location + offset
      )}`;
    } else {
      text = ESCAPE + text;
    }

    offset++;
  }

  return text;
}

export function unescapeSpecialChar(text: string): string {
  const unescapeLocations = [];

  let index = 0;
  while (index < text.length) {
    if (text[index] === ESCAPE) {
      const charIsSpecial = SPECIALCHAR.includes(text[index + ESCAPE.length]);

      if (charIsSpecial) {
        unescapeLocations.push(index);
      }
    }

    index++;
  }

  let offset = 0;
  for (const location of unescapeLocations) {
    if (location - offset > 0) {
      text = `${text.slice(0, location - offset)}${text.slice(
        location - offset + ESCAPE.length
      )}`;
    } else {
      text = text.slice(1);
    }

    offset++;
  }

  return text;
}

export function escapeMarkdownCodeBlock(text: string): string {
  const escapedText = escapeSpecialChar(text);
  const newLines = escapedText.replace(/\r?\n/g, NEWLINE);

  // Replace non-breaking space at beginning of line to preserve indentation
  const newText = newLines.replace(/\\n /g, "\\n ");

  const markdownCodeStart = `${NEWLINE}${MARKDOWNCODE}${NEWLINE}`;
  const markdownCodeEnd = `${NEWLINE}${MARKDOWNCODE}`;

  return `${markdownCodeStart}${newText}${markdownCodeEnd}`;
}

export function unescapeMarkdownCodeBlock(text: string): string {
  const markdownScope = [...text.matchAll(new RegExp(MARKDOWNCODE, "g"))].map(
    (match) => match.index
  );

  let newText = text;
  if (markdownScope.length > 1) {
    const locations = {
      textStart: 0,
      blockStart: markdownScope[0] + MARKDOWNCODE.length,
      blockEnd: markdownScope[1],
      textEnd: newText.length,
    };

    const unescapedText = unescapeSpecialChar(
      newText.slice(locations.blockStart, locations.blockEnd)
    );

    newText = `${newText.slice(
      locations.textStart,
      locations.blockStart
    )}${unescapedText}${newText.slice(locations.blockEnd, locations.textEnd)}`;
  } else {
    newText = unescapeSpecialChar(newText);
  }

  const removeMarkdownBlockCases = [
    `${NEWLINE}${MARKDOWNCODE}${NEWLINE}`,
    `${NEWLINE}${MARKDOWNCODE}`,
    `${MARKDOWNCODE}${NEWLINE}`,
    `${MARKDOWNCODE}`,
  ];

  const removeMarkdownBlock = removeMarkdownBlockCases.reduce(
    (textValue, markdownCase) => textValue.replaceAll(markdownCase, ""),
    newText
  );

  const replaceNewLines = removeMarkdownBlock.replaceAll(NEWLINE, "\n");

  return replaceNewLines;
}
