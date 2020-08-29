# terminating-newline
![dependencies](https://img.shields.io/david/bconnorwhite/terminating-newline)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/terminating-newline)
![npm](https://img.shields.io/npm/v/terminating-newline)

Add terminating newline if none exists. Supports Unix and Windows newline styles.

```
yarn add terminating-newline
```

## API
```ts
import { addTerminatingNewline, Options } from "terminating-newline";

addTerminatingNewline(string: string, options?: Options) => string;

export type Options = {
  default?: LineFeed | CarriageReturnLineFeed; // If newline style cannot be determined. Defaults to "\n".
}

export type LineFeed = "\n";

export type CarriageReturnLineFeed = "\r\n";
```

