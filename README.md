# VSCode GIFT Language Support and Snippets

[![Version](https://vsmarketplacebadge.apphb.com/version/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/version-short/ethan-ou.vscode-gift.svg)
[![Install](https://vsmarketplacebadge.apphb.com/installs/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/installs-short/ethan-ou.vscode-gift.svg)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/downloads-short/ethan-ou.vscode-gift.svg)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/rating-short/ethan-ou.vscode-gift.svg)

**NOTE:** This plugin is in alpha.

This extension provides syntax highlighting, error checking and code snippets for Moodle's GIFT format. It allows for faster and easier development of Moodle quiz questions. It is recommended to install this extension via the [GIFT Language Pack](https://marketplace.visualstudio.com/items?itemName=ethan-ou.vscode-gift-pack) as this will also bundle a preview extension.

Parser sourced from [fuhrmanator's GIFT parser](https://github.com/fuhrmanator/GIFT-grammar-PEG.js).

## Installing the Plugin
1. Install [VSCode](https://code.visualstudio.com/).
2. Go to the Extensions panel (CTRL + SHIFT + X). There, search "Gift Language".
3. Install the extension. 
4. Open a GIFT file or create a new file and change the language to Gift.

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
|                       `description` | `Description.`                                    |

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
|  `des` | `Description.`                                    |


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

## For Developers

### Developing the Plugin
Requirements: VSCode, Git, Node.js/NPM

1. Clone this repo using ```git clone <repository_name>```.
2. Run ```npm install``` in the main folder. This will install all npm modules for both the client and server.
3. Open VSCode by typing ```code .```.
4. To debug the extension, go to the debugger panel and select ```Attach to Server```. VSCode will build the extension and run another window for you to debug in.
5. Open a GIFT file or create a new file in the GIFT language.
6. To see any logs or error messages, go to the Output panel in the new window by pressing CTRL + SHIFT + U. Then in the right-hand drop-down select "Gift Language".

### Background
This extension follows Microsoft's [Language Server Protocol](https://microsoft.github.io/language-server-protocol), and is based on the ["LSP Example" starter](https://github.com/Microsoft/vscode-extension-samples/tree/master/lsp-sample). The plugin is split into two folders: client and server. All validation logic and syntax errors are parsed on the server, while the client receives the messages and relays them to VSCode.

## License

MIT
