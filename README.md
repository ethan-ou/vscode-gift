# VSCode GIFT Language Support and Snippets
[![Version](https://vsmarketplacebadge.apphb.com/version/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/version-short/ethan-ou.vscode-gift.svg)
[![Install](https://vsmarketplacebadge.apphb.com/installs/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/installs-short/ethan-ou.vscode-gift.svg)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/downloads-short/ethan-ou.vscode-gift.svg)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/ethan-ou.vscode-gift.svg)](https://vsmarketplacebadge.apphb.com/rating-short/ethan-ou.vscode-gift.svg)

**NOTE:** This plugin is in alpha.

This extension provides syntax highlighting and code snippets for Moodle's GIFT format. It allows for faster and easier development of Moodle quiz questions.

## Formats

* GIFT (.gift) [recommended]
* Plain Text (.txt)

It is recommended to save files with the GIFT file extension (.gift). VSCode will automatically set the language to Gift when these files are opened. 

If you prefer using Plain Text (.txt), you will need to manually set the language in VSCode to ```Gift``` by [accessing the language tab](https://code.visualstudio.com/docs/languages/overview#_changing-the-language-for-the-selected-file) in the bottom right-hand corner. Alternatively, use the shortcut ```Ctrl+K M```.

## Snippets

**NOTE:** Snippets are still subject to change.

### At a Glance

|  Prefix     | Description                                                                            |
| -----------:| ---------------------------------------------------------------------------------------|
|  `mcq`      | `Multiple choice question with four options.`                                          |
|  `mcqf`     | `Multiple choice question with four options and feedback.`                             |
|  `mcnq`     | `Multiple choice numerical question with four options.`                                |
|  `mcnqf`    | `Multiple choice numerical question with four options and feedback.`                   |
|  `maq`      | `Matching question with four options.`                                                 |
|  `saq`      | `Short answer question with three correct answers.`                                    |
|  `tfq`      | `True-False question.`                                                                 |
|  `ess`      | `Essay question.`                                                                      |
|  `nq`       | `Numerical question.`                                                                  |
|  `cat`      | `Category label.`                                                                      |
|  `catn`     | `Nested category label.`                                                               |

### For Power Users

These snippets are useful if you've mastered the basic commands. To use these snippets, replace the number in brackets with the number of options you would like. For instance, a multiple choice question with three options is `mc3`.

|  Prefix     | Description                                                                            |
| -----------:| ---------------------------------------------------------------------------------------|
|  `mc[2-5]`  | `Multiple choice question with two to five options.`                                   |
|  `mc[2-5]f` | `Multiple choice question with two to five options and feedback.`                      |
|  `mcn[2-5]` | `Multiple choice numerical question with two to five options.`                         |
|  `mcn[2-5]f`| `Multiple choice numerical question with two to five options and feedback.`            |
|  `ma[2-5]`  | `Matching question with two to five options.`                                          |
|  `sa[1-5]`  | `Short answer question with one to five correct answers.`                              |

### Table of Contents
- [Multiple Choice Question (mcq)](#mcq)
  - [Multiple Choice, 2 Options (mc2)](#mc2)
  - [Multiple Choice, 3 Options (mc3)](#mc3)
  - [Multiple Choice, 4 Options (mc4)](#mc4)
  - [Multiple Choice, 5 Options (mc5)](#mc5)
- [mcqf: Multiple Choice Question with Feedback](#mcqf)
  - [mc[2-5]f: Multiple Choice, 2-5 Options with Feedback](#mc2-5f)
- [mcnq: Multiple Choice Numeric Question](#mcnq)
  - [mcn[2-5]: Multple Choice Numeric, 2-5 Options](#mcn2-5)
- [mcnqf: Multiple Choice Numeric Question with Feedback](#mcnqf)
  - [mcn[2-5]f: Multple Choice Numeric, 2-5 Options with Feedback](#mcn2-5f)

### Multiple Choice Question (mcq)
```
::Title:: Question {
	=Correct Answer
	~Incorrect Answer 1
	~Incorrect Answer 2
	~Incorrect Answer 3
}
```
