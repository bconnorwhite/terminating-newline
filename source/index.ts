import addTerminatingNewline from "./add-newline.js";
import removeTerminatingNewline from "./remove-newline.js";

export type LineFeed = "\n";

export type CarriageReturnLineFeed = "\r\n";

export const lineFeed = "\n";

export const carriageReturn = "\r";

export const carriageReturnLineFeed = "\r\n";

export type BufferOrString<T extends Buffer | string> = T extends Buffer ? Buffer : string;

export function isBuffer(input: string | Buffer): input is Buffer {
  return typeof input === "object";
}

export {
  addTerminatingNewline,
  removeTerminatingNewline
};
