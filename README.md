# WP HighlightJS

Loads [highlight.js](https://highlightjs.org/) and [clipboard.js](https://clipboardjs.com/) on single pages in WordPress for syntax highlighting with a 1-click copy to clipboard button.

![Screenshot](https://d.pr/i/nOniJ6+ "Screenshot")

[Live Example](https://brickslabs.com/using-automatic-css-in-bricks/).

From 768px and below, it will always appear.

Included Theme:

- GitHub Dark Dimmed

Included Languages:

- HTML, XML
- CSS
- PHP
- JavaScript
- JSON
- Markdown
- Plain text
- SCSS

## Installation

1. Click on the `Download ZIP` button at the right to download the plugin.

2. Upload the entire `wp-highlightjs` folder to the `/wp-content/plugins/` directory.

3. Activate the plugin through the `Plugins` menu in WordPress.

## Usage

In WordPress' Gutenberg editor, type / to begin typing `code` and hit return when you see a match.

Paste your code.

If using [Oxygen](https://oxygenbuilder.com/), wrap your code in a `code` element and that in a `pre` element having a class of `wp-block-code`.

Ensure that there are no spaces between the HTML tags.

[Screenshot](https://d.pr/i/ajM7sm).

## Changelog

### 2.0.4 - May 27, 2022

- Made the script to load on all singular pages, not just posts.
- Fixed JS error with the forEach loop in the initilization script.
- Updated highlight.js and clipboard.js libraries to their latest versions.
- Removed the call to Google for the Source Code Pro font. It is now included in the plugin.
- Replaced the syntax highlighting theme with "GitHub Dark Dimmed".
- Replaced `wp_localize_script()` with `wp_add_inline_script()` for passing the copy icon's URL from PHP to JS.

### 2.0.3 - Aug 20, 2021

- Updated deprecated HLJS Function. Thanks to [Taylor](https://github.com/srikat/WP-HighlightJS/issues/3).

### 2.0.2 - Aug 07, 2021

- Updated highlight.js and clipboard.js libraries to their latest versions.
- Removed "word-wrap: break-word" block for body element in CSS.
- Set the plugin to load only on singular posts and not all singular pages.

### 2.0.1 - Jan 11, 2021

- Updated highlight.js and clipboard.js libraries to their latest versions.
- Misc. CSS fixes.

### 2.0.0 - August 21, 2019

- Updated highlight.js and clipboard.js libraries to their latest versions.
- Updated init js file to fix errors in the console.
- Plugin name is not hardcoded any more in the init js file.
- Replaced Github color theme with Gruvbox Dark.

### 1.0.0

- Initial Release

## Others

Tested up to: 5.8

License: GPLv2 or later

License URI: [http://www.gnu.org/licenses/gpl-2.0.html](http://www.gnu.org/licenses/gpl-2.0.html)

Donate link: [https://www.paypal.me/sridharkatakam](https://www.paypal.me/sridharkatakam)
