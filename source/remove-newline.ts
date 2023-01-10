import endsWith from "ends-with-string";
import { lineFeed, carriageReturnLineFeed, BufferOrString } from "./index.js";

function sliceStringOrBuffer(input: string | Buffer, start: number, end: number) {
  if(typeof input === "string") {
    return input.slice(start, end);
  } else {
    return input.subarray(start, end);
  }
}

export default function removeTerminatingNewline<T extends string | Buffer>(input: T): BufferOrString<T> {
  if(endsWith(input, carriageReturnLineFeed)) {
    return sliceStringOrBuffer(input, 0, input.length - carriageReturnLineFeed.length) as BufferOrString<T>;
  } else if(endsWith(input, lineFeed)) {
    return sliceStringOrBuffer(input, 0, input.length - lineFeed.length) as BufferOrString<T>;
  } else {
    return input as (string | Buffer) as BufferOrString<T>;
  }
}
