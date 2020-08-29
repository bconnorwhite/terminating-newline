import detectNewline from "detect-newline";

export type LineFeed = "\n";

export type CarriageReturnLineFeed = "\r\n";

export type Options = {
  default?: LineFeed | CarriageReturnLineFeed;
}

export function addTerminatingNewline(string: string, options?: Options) {
  const newline = detectNewline(string) ?? options?.default ?? "\n";
  if(string.endsWith(newline)) {
    return string;
  } else {
    return string.concat(newline);
  }
}
