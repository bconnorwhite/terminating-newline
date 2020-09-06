const { removeTerminatingNewline } = require("../build/index.js");

test("line feed remove", () => {
  const string = removeTerminatingNewline("a\nb\n");
  expect(string).toBe("a\nb");
});

test("line feed no remove", () => {
  const string = removeTerminatingNewline("a\nb");
  expect(string).toBe("a\nb");
});

test("carriage return line feed remove", () => {
  const string = removeTerminatingNewline("a\r\nb\r\n");
  expect(string).toBe("a\r\nb");
});

test("carriage return line feed no remove", () => {
  const string = removeTerminatingNewline("a\r\nb");
  expect(string).toBe("a\r\nb");
});

test("line feed remove (buffer)", () => {
  const string = removeTerminatingNewline(Buffer.from("a\nb\n"));
  expect(string.toString()).toBe(Buffer.from("a\nb").toString());
});

test("line feed no remove (buffer)", () => {
  const string = removeTerminatingNewline(Buffer.from("a\nb"));
  expect(string.toString()).toBe(Buffer.from("a\nb").toString());
});

test("carriage return line feed remove (buffer)", () => {
  const string = removeTerminatingNewline(Buffer.from("a\r\nb\r\n"));
  expect(string.toString()).toBe(Buffer.from("a\r\nb").toString());
});

test("carriage return line feed no remove (buffer)", () => {
  const string = removeTerminatingNewline(Buffer.from("a\r\nb"));
  expect(string.toString()).toBe(Buffer.from("a\r\nb").toString());
});

test("empty", () => {
  const string = removeTerminatingNewline("");
  expect(string).toBe("");
});

test("empty (buffer)", () => {
  const buffer = removeTerminatingNewline(Buffer.from(""));
  expect(buffer.toString()).toBe("");
});
