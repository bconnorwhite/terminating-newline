<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>terminating-newline</h1>
  <a href="https://npmjs.com/package/terminating-newline">
    <img alt="NPM" src="https://img.shields.io/npm/v/terminating-newline.svg">
  </a>
  <a href="https://github.com/bconnorwhite/terminating-newline">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/terminating-newline.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/terminating-newline?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/terminating-newline.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Add or remove a terminating newline.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/terminating-newline">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/terminating-newline?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

Supports both line feeds (/n) and carriage return line feeds (/r/n). Will only add a newline if one does not already exist.

## Installation

```sh
yarn add terminating-newline
```

```sh
npm install terminating-newline
```

```sh
pnpm add terminating-newline
```

## API

### Usage
```ts
import {
  addTerminatingNewline,
  removeTerminatingNewline,
  lineFeed, // "\n"
  carriageReturnLineFeed // "/r/n"
} from "terminating-newline";

addTerminatingNewline("abc", { default: lineFeed }); // "abc/n"

addTerminatingNewline("abc\n", { default: lineFeed }); // "abc/n"

removeTerminatingNewline("abc\n"); // "abc"

```
### Types
```ts
function addTerminatingNewline(string: string, options?: Options): string;
function addTerminatingNewline(buffer: Buffer, options?: Options): Buffer;

function removeTerminatingNewline(string: string): string;
function removeTerminatingNewline(buffer: Buffer): Buffer;

type Options = {
  // Fallback if newline type cannot be determined. Default: "\n"
  default?: LineFeed | CarriageReturnLineFeed;
}

type LineFeed = "\n";

type CarriageReturnLineFeed = "\r\n";
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/terminating-newline?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/terminating-newline.svg"></a></h2>

- [detect-newline](https://www.npmjs.com/package/detect-newline): Detect the dominant newline character of a string
- [ends-with-string](https://www.npmjs.com/package/ends-with-string): Check if a string or buffer ends with a given string

<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/terminating-newline.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
