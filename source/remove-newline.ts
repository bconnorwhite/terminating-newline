import endsWith from "ends-with-string";
import { lineFeed, carriageReturnLineFeed, ReturnValue } from ".";

export default function removeTerminatingNewline<T extends string | Buffer>(input: T): ReturnValue<T> {
  if(endsWith(input, carriageReturnLineFeed)) {
    return input.slice(0, input.length - carriageReturnLineFeed.length) as ReturnValue<T>;
  } else if(endsWith(input, lineFeed)) {
    return input.slice(0, input.length - lineFeed.length) as ReturnValue<T>;
  } else {
    return input as (string | Buffer) as ReturnValue<T>
  }
}
