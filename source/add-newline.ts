import { detectNewline } from "detect-newline";
import endsWith from "ends-with-string";
import { isBuffer, lineFeed, LineFeed, CarriageReturnLineFeed, BufferOrString } from "./index.js";

export type Options = {
  /**
   * Fallback if newline type cannot be determined. Default: "\n"
   */
  default?: LineFeed | CarriageReturnLineFeed;
};

function addTerminatingNewlineToBuffer(input: Buffer, options?: Options) {
  const newline = detectNewline(input.toString()) ?? options?.default ?? lineFeed;
  if(endsWith(input, newline)) {
    return input;
  } else {
    return Buffer.concat([input, Buffer.from(newline)]);
  }
}

function addTerminatingNewlineToString(input: string, options?: Options) {
  const newline = detectNewline(input) ?? options?.default ?? lineFeed;
  if(endsWith(input, newline)) {
    return input;
  } else {
    return input + newline;
  }
}

export default function addTerminatingNewline<T extends string | Buffer>(input: T, options?: Options): BufferOrString<T> {
  const content: string | Buffer = input;
  if(isBuffer(content)) {
    return addTerminatingNewlineToBuffer(content, options) as BufferOrString<T>;
  } else {
    return addTerminatingNewlineToString(content, options) as BufferOrString<T>;
  }
}
