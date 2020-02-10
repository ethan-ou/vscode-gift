# VSCode GIFT Language Support and Snippets

[![Version](https://vsmarketplacebadge.apphb.com/version/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/version-short/ethan-ou.vscode-gift.svg)
[![Install](https://vsmarketplacebadge.apphb.com/installs/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/installs-short/ethan-ou.vscode-gift.svg)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/downloads-short/ethan-ou.vscode-gift.svg)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/rating-short/ethan-ou.vscode-gift.svg)

**NOTE:** This plugin is in alpha.

This extension provides syntax highlighting and code snippets for Moodle's GIFT format. It allows for faster and easier development of Moodle quiz questions.

## Demo

### Syntax Highlighting

![Syntax Highlighting](https://github.com/ethan-ou/vscode-gift/blob/master/examples/syntax-highlighting.gif?raw=true)

### Snippets

![Code Snippets](https://github.com/ethan-ou/vscode-gift/blob/master/examples/code-snippets.gif?raw=true)

## Formats

* GIFT (.gift) [recommended]
* Plain Text (.txt)

It is recommended to save files with the GIFT file extension (.gift). VSCode will automatically set the language to Gift when these files are opened. 

If you prefer using Plain Text (.txt), you will need to manually set the language in VSCode to ```Gift``` by [accessing the language tab](https://code.visualstudio.com/docs/languages/overview#_changing-the-language-for-the-selected-file) in the bottom right-hand corner. Alternatively, use the shortcut ```Ctrl+K M```.

## Snippets

**NOTE:** Snippets are still subject to change.

|                              Prefix | Description                                       |
| ----------------------------------: | ------------------------------------------------- |
|          `multiple choice question` | `Multiple choice question with four options.`     |
| `multiple choice question multiple` | `Multiple choice question with multiple answers.` |
|                 `matching question` | `Matching question with four options.`            |
|             `short answer question` | `Short answer question with one correct answer.`  |
|             `missing word question` | `Missing word question with three options.`       |
|               `true false question` | `True-false question.`                            |
|                    `essay question` | `Essay question.`                                 |
|                `numerical question` | `Numerical question.`                             |
|                             `title` | `Question title.`                                 |
|                          `category` | `Category label.`                                 |
|                   `category nested` | `Nested category label.`                          |

If you prefer questions with titles, add a `title` at the end of the snippet. For instance, a multiple choice question with a title is `multiple choice question title`.

### Shorthand

| Prefix | Description                                       |
| -----: | ------------------------------------------------- |
|  `mcq` | `Multiple choice question with four options.`     |
| `mcqm` | `Multiple choice question with multiple answers.` |
|  `maq` | `Matching question with four options.`            |
|  `saq` | `Short answer question with one correct answer.`  |
|  `mwq` | `Missing word question with three options.`       |
|  `tfq` | `True-False question.`                            |
|  `ess` | `Essay question.`                                 |
|   `nq` | `Numerical question.`                             |
|  `cat` | `Category label.`                                 |
| `catn` | `Nested category label.`                          |

You can also add titles by adding a `t` at the end of the snippet. For instance, a multiple choice question with a title is `mcqt`.

### For Power Users

These snippets are useful for adding a specific number of answers to your question. For instance, a multiple choice question with two options is `mc2`.

|     Prefix | Description                                                  |
| ---------: | ------------------------------------------------------------ |
|  `mc[2-6]` | `Multiple choice with two to six options.`                  |
| `mc[2-6]m` | `Multiple choice question with two to six correct answers.` |
|  `ma[2-6]` | `Matching question with two to six options.`                |
|  `sa[1-6]` | `Short answer question with one to six correct answers.`    |
|  `mw[1-6]` | `Missing word with one to six options.`                     |

## License

MIT
