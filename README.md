<div align="center">
  <h1>terminating-newline</h1>
  <a href="https://npmjs.com/package/terminating-newline">
    <img alt="npm" src="https://img.shields.io/npm/v/terminating-newline.svg">
  </a>
  <a href="https://github.com/bconnorwhite/terminating-newline">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/terminating-newline.svg">
  </a>
  <a href="https://github.com/bconnorwhite/terminating-newline">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/terminating-newline?label=Stars%20Appreciated%21&style=social">
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
import { addTerminatingNewline, Options } from "terminating-newline";

addTerminatingNewline(string: string, options?: Options) => string;

removeTerminatingNewline(string: string) => string;

type Options = {
  default?: LineFeed | CarriageReturnLineFeed; // Fallback if newline type cannot be determined. Defaults to "\n".
}

type LineFeed = "\n";

type CarriageReturnLineFeed = "\r\n";
```

##

<br />


<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/terminating-newline.svg"></h2>

- [detect-newline](https://npmjs.com/package/detect-newline): Detect the dominant newline character of a string

##

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/terminating-newline.svg"></h2>

- [@bconnorwhite/bob](https://npmjs.com/package/@bconnorwhite/bob): Bob builds and watches typescript projects.
- [jest](https://npmjs.com/package/jest): Delightful JavaScript Testing.

##

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/terminating-newline.svg"></h2>

[MIT](https://mit-license.org/)

##

