<div align="center">
  <h1>terminating-newline</h1>
  <a href="https://npmjs.com/package/terminating-newline">
    <img alt="NPM" src="https://img.shields.io/npm/v/terminating-newline.svg">
  </a>
  <a href="https://github.com/bconnorwhite/terminating-newline">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/terminating-newline.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/terminating-newline?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/terminating-newline.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/terminating-newline">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/terminating-newline?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Add or remove a terminating newline.

Supports both line feeds (/n) and carriage return line feeds (/r/n). Will only add a newline if one does not already exist.

## Installation

```bash
yarn add terminating-newline
```

```bash
npm install terminating-newline
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

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/terminating-newline.svg"></h2>

- [detect-newline](https://www.npmjs.com/package/detect-newline): Detect the dominant newline character of a string
- [ends-with-string](https://www.npmjs.com/package/ends-with-string): Check if a string or buffer ends with a given string

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/terminating-newline.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/terminating-newline.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
