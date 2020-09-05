import detectNewline from "detect-newline";

export type LineFeed = "\n";

export type CarriageReturnLineFeed = "\r\n";

export type Options = {
  default?: LineFeed | CarriageReturnLineFeed; // Fallback if newline type cannot be determined. Defaults to "\n".
}

export const lineFeed = "\n";

export const carriageReturn = "\r";

export const carriageReturnLineFeed = "\r\n";

function charToString(character: string | number) {
  return typeof character === "string" ? character : String.fromCharCode(character);
}

function endsWith(input: string | Buffer, string: string) { // Does input end with string?
  return Array.from(string).reverse().reduce((retval, match, index) => {
    const char = input[input.length-(index+1)];
    return retval && charToString(char) === match;
  }, true);
}

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
