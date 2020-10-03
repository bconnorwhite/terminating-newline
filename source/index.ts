import detectNewline from "detect-newline";
import endsWith from "ends-with-string";

export type LineFeed = "\n";

export type CarriageReturnLineFeed = "\r\n";

export type Options = {
  /**
   * Fallback if newline type cannot be determined. Default: "\n"
   */
  default?: LineFeed | CarriageReturnLineFeed;
}

export const lineFeed = "\n";

export const carriageReturn = "\r";

export const carriageReturnLineFeed = "\r\n";

const defaultNewline = lineFeed;

export function addTerminatingNewline(string: string, options?: Options): string;
export function addTerminatingNewline(buffer: Buffer, options?: Options): Buffer;
export function addTerminatingNewline(input: string | Buffer, options?: Options) {
  const newline = detectNewline(input.toString()) ?? options?.default ?? defaultNewline;
  if(endsWith(input, newline)) {
    return input;
  } else if(typeof input === "string") {
    return input + newline;
  } else {
    return Buffer.concat([input, Buffer.from(newline)]);
  }
}

export function removeTerminatingNewline(string: string): string;
export function removeTerminatingNewline(buffer: Buffer): Buffer;
export function removeTerminatingNewline(string: string | Buffer) {
  if(endsWith(string, carriageReturnLineFeed)) {
    return string.slice(0, string.length - carriageReturnLineFeed.length);
  } else if(endsWith(string, lineFeed)) {
    return string.slice(0, string.length - lineFeed.length);
  } else {
    return string;
  }
}
