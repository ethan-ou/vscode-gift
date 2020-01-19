# VSCode GIFT Language Features

NOTE: This plugin is currently in alpha.

This extension provides basic parsing and linting of Moodle's GIFT Language. It gives warnings when potential errors in syntax are found, allowing for easier development of Moodle questions.

Parser sourced from [fuhrmanator's GIFT parser](https://github.com/fuhrmanator/GIFT-grammar-PEG.js).

## Installing the Plugin
1. Install [VSCode](https://code.visualstudio.com/).
2. Go to the Extensions panel (CTRL + SHIFT + X). There, search "Gift Language Features".
3. Install the extension. 
4. Open a GIFT file or create a new file and change the language to Gift.

This extension relies on the [GIFT Language support extension](https://github.com/ethan-ou/vscode-gift/), which is automatically downloaded when this extension is installed.

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
