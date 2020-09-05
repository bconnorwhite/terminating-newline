import detectNewline from "detect-newline";

export type LineFeed = "\n";

export type CarriageReturnLineFeed = "\r\n";

export type Options = {
  default?: LineFeed | CarriageReturnLineFeed; // Fallback if newline type cannot be determined. Defaults to "\n".
}

export const lineFeed = "\n";

export const carriageReturn = "\r";

export const carriageReturnLineFeed = "\r";

export function addTerminatingNewline(string: string, options?: Options) {
  const newline = detectNewline(string) ?? options?.default ?? "\n";
  if(string.endsWith(newline)) {
    return string;
  } else {
    return string.concat(newline);
  }
}

export function removeTerminatingNewline(string: string) {
  if(string.endsWith(lineFeed)) {
    string = string.slice(0, string.length-1);
  }
  if(string.endsWith(carriageReturn)) {
    string = string.slice(0, string.length-1);
  }
  return string;
}
