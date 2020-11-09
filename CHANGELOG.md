# Changelog

## 0.1.4 (09-11-2020)

- Added new quick action to escape and unescape GIFT text.

## 0.1.3 (18-08-2020)

- Internal parser refactor through updated `gift-parser-ide` package.

## 0.1.2 (13-06-2020)

- Update parser to fix category errors with special characters.

## 0.1.1 (13-06-2020)

- Remove extra bundled files

## 0.1.0 (13-06-2020)

- Drastic improvements to parsing speed and quality. Plugin can now parse multiple syntax errors within a question.
- Changed error message from yellow warnings to red errors.

## 0.0.7 (27-02-2020)

- Merged vscode-gift-features to simplify GIFT extension set.

## 0.0.6 (21-02-2020)

- Added description snippet (e.g. `description`, `des`) and its title variants (`description title`, `dest`).

## 0.0.5 (10-02-2020)

- BREAKING: Removed feedback variant snippets
- BREAKING: Removed multiple choice numerical question type
- Added title variants for all question types. These can be accessed by adding a `title` to long snippets (e.g. `multiple choice question title`), or by adding a `t` at the end of a shorthand snippet (e.g. `mcqt`).
- Added missing word question snippets (e.g. `missing word question`, `mwq`, `mw[1-6]`)
- Added shorthand for categories: `$CAT`

- Fixed true-false question highlighting in short answer questions
- Added decimal number highlighting for numeric question tolerances
- Better number range highlighting for numeric questions
- Added multi-line highlighting for answers and feedback
- Fixed comment highlighting. Comments now only register at the beginning of a line.
- Changed default file format to `.gift` from `.txt`.

## 0.0.4 (01-02-2020)

- Added long plain English snippets designed for new users (e.g. `multiple choice question`).

## 0.0.3 (28-01-2020)

- Added checks for escaped characters (e.g. \\{, \\=)
- Fixed issue where partial answers were not registed when spaces are added beforehand (e.g. = %50%)
- Fixed issue with comments being registered when double slashes are used in categories (e.g. \$CATEGORY: \\\Accidental Comment)
- Added case insensitivity for true-false questions
- Fixed issue with categories not being highlighted when spaces are added beforehand (e.g. \s\s\$CATEGORY:)

## 0.0.2 (21-01-2020)

- BREAKING: Changed multiple choice numeric snippet key from `mcnq` to `mcqn` to improve usability.
- Added snippet documentation and GIF's to README.md
- Fixed issue where highlighting would overrun question scope when question written in a single line. (e.g. Question {Answer})

## 0.0.1 (08-01-2020)

- Initial Release
