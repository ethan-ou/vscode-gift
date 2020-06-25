# GIFT Format Support For Visual Studio Code

[![Version](https://vsmarketplacebadge.apphb.com/version/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/version-short/ethan-ou.vscode-gift.svg)
[![Install](https://vsmarketplacebadge.apphb.com/installs/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/installs-short/ethan-ou.vscode-gift.svg)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/downloads-short/ethan-ou.vscode-gift.svg)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/rating-short/ethan-ou.vscode-gift.svg)

This extension provides basic language support for Moodle's GIFT format. Using this extension, you can quickly generate and write questions in GIFT that are accepted when imported into Moodle.

![Code Snippets](https://github.com/ethan-ou/vscode-gift/blob/master/examples/code-snippets.gif?raw=true)

## Table of Contents

**Background:**

* [About the GIFT Format](#about-the-gift-format)
* [Learn GIFT](#learn-gift)

**Plugin:** 

* [Getting Started](#getting-started)
* [Installation](#installation)
* [Using the Plugin](#using-the-plugin)
* [Using Snippets](#using-snippets)

**Reference:**

* [Snippet Reference](#snippet-reference)

## About the GIFT Format

The GIFT format is an alternative way of authoring Moodle quizzes that makes writing large banks of questions easy.

Using just a text editor, you can prototype, edit and test Moodle quizzes without needing to log onto Moodle. Once your question bank is ready to be used, you can import questions written in GIFT into your Moodle course.

GIFT supports many common question types including:

* Multiple Choice 
* Missing Word/Cloze
* Short Answer
* Matching
* True-False
* Essay
* Numerical

Best of all, writing in GIFT is simple and fun, and makes creating large question banks in Moodle a breeze.

## Learn GIFT

Currently, the best way to learn the GIFT format is to look through the [Moodle docs](https://docs.moodle.org/39/en/GIFT_format).

## Getting Started

To install the plugin, we'll first need to install [Visual Studio Code](https://code.visualstudio.com/). Visual Studio Code is an open-source text editor for Windows, macOS and Linux, with powerful features for working with programming languages.

To install Visual Studio Code:

1. Download the installation file from the [Visual Studio Code website](https://code.visualstudio.com/).
2. Install the program.

If you're having trouble with installation, you can also consult the [Visual Studio Code documentation](https://code.visualstudio.com/docs/setup/setup-overview).

## Installation

Once you've installed Visual Studio Code, you can install the extension through the Extension Marketplace.

For the majority of users, we recommend installing this extension through the [GIFT Language Pack](https://marketplace.visualstudio.com/items?itemName=ethan-ou.vscode-gift-pack), which adds support for live question previews.

To install the GIFT Language Pack:

1. Open Visual Studio Code.
2. Follow [this link to the GIFT Language Pack](https://marketplace.visualstudio.com/items?itemName=ethan-ou.vscode-gift-pack) and click the `Install` button.
3. When prompted, allow your browser to open Visual Studio Code.
4. The extension should now be installing in your editor.

Once installation has completed, we're now ready to write Moodle quizzes in the GIFT format.

## Using the Plugin

To start writing in the GIFT format, create a new file in Visual Studio Code by going to `File > New File`. 

Next, we'll need to change the language mode of the current file. Go to the bottom right corner and click on the label `Plain Text`. Alternatively, press `CTRL+K` followed by `M` on your keyboard.

A list of languages will appear in your window. Find `Gift` and click on it to select it as the file's language.

Once the language is activated, you'll be able to write GIFT into your editor window with colorful highlighting, error checking and snippets enabled.

If you need help in using the GIFT format, refer to the [Learn GIFT section](#learn-gift) for more information.

## Using Snippets

This extension also provides code snippets, which allow you to quickly scaffold and create GIFT questions. 

To activate a snippet, start typing the name of a question type into the editor (e.g. `multiple choice question`, `short answer question`). Visual Studio Code will automatically suggest a template that corresponds to this question type. 

You can navigate these snippets by pressing the `UP` and `DOWN` arrow keys on your keyboard. To preview a snippet, click on the small icon on the right of the dropdown.

Once you've found the relevant snippet, press `ENTER`. Visual Studio Code will insert a template at the cursor location.

To navigate through the snippet, use the `TAB` and `SHIFT+TAB` keys. Then, start typing!

## Snippet Reference

To use a snippet, type the corresponding prefix into your editor. Snippets with a number correspond to the number of answers in the template.

|                              Prefix | Shorthand                                       |
| ----------------------------------: | ------------------------------------------------- |
|          `multiple choice question` | `mcq`, `mc2`, `mc3`, `mc4`, `mc5`, `mc6`     |
| `multiple choice question multiple` | `mcqm`, `mc2m`, `mc3m`, `mc4m`, `mc5m`, `mc6m` |
|                 `matching question` | `maq`, `ma2`, `ma3`, `ma4`, `ma5`, `ma6`            |
|             `short answer question` | `saq`, `sa1`, `sa2`, `sa3`, `sa4`, `sa5`, `sa6`  |
|             `missing word question` | `mwq`, `mw1`, `mw2`, `mw3`, `mw4`, `mw5`, `mw6`       |
|               `true false question` | `tfq`                            |
|                    `essay question` | `ess`                                 |
|                `numerical question` | `nq`                             |
|                             `title` |                                  |
|                          `category` | `cat`                                 |
|                   `category nested` | `catn`                          |
|                       `description` | `des`                                    |


### Title Variants

All question types also include snippets with titles. For long snippets, add `title` to the end of your existing snippet. For short snippets, add a `t`.

|                              Prefix | Shorthand                                       |
| ----------------------------------: | ------------------------------------------------- |
|          `multiple choice question title` | `mcqt`, `mc2t`, `mc3t`, `mc4t`, `mc5t`, `mc6t`     |
| `multiple choice question multiple title` | `mcqmt`, `mc2mt`, `mc3mt`, `mc4mt`, `mc5mt`, `mc6mt` |
|                 `matching question title` | `maqt`, `ma2t`, `ma3t`, `ma4t`, `ma5t`, `ma6`            |
|             `short answer question title` | `saqt`, `sa1t`, `sa2t`, `sa3t`, `sa4t`, `sa5t`, `sa6`  |
|             `missing word question title` | `mwqt`, `mw1t`, `mw2t`, `mw3t`, `mw4t`, `mw5t`, `ma6`       |
|               `true false question title` | `tfqt`                            |
|                    `essay question title` | `esst`                                 |
|                `numerical question title` | `nqt`                             |

### Snippet Templates:

#### `multiple choice question`

```
Question {
    =Correct Answer
    ~Incorrect Answer 1
    ~Incorrect Answer 2
    ~Incorrect Answer 3
}
```

#### `multiple choice question multiple`

```
Question {
    ~%50%Correct Option 1
    ~%50%Correct Option 2
    ~%-100%Incorrect Option 1
    ~%-100%Incorrect Option 2
}
```

#### `matching question`

```
Question {
    =Item 1 -> Match 1
    =Item 2 -> Match 2
    =Item 3 -> Match 3
    =Item 4 -> Match 4
}
```

#### `short answer question`

```
Question { =Answer }
```

#### `missing word question`

```
Sentence Start { =Correct Answer ~Incorrect Answer 1 ~Incorrect Answer 2} Sentence End
```

#### `true false question`

```
Question {TRUE}
```

#### `essay question`

```
Question {}
```

#### `numerical question`

```
Question {#Number:Range}
```

#### `title`

```
::Title::
```


#### `category`

```
$CATEGORY: Name
```

#### `category nested`

```
$CATEGORY: Level 1/Level 2/Level 3
```

#### `description`

```
Description
```

## Credits

Special thanks to [Chris Fuhrman](https://github.com/fuhrmanator) for his work in creating a [parser for the GIFT format](https://github.com/fuhrmanator/GIFT-grammar-PEG.js) and for his invaluable support in the project.

## License

MIT
