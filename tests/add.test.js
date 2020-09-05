const { addTerminatingNewline } = require("../build/index.js");

test("line feed add", () => {
  const string = addTerminatingNewline("a\nb");
  expect(string).toBe("a\nb\n");
});

test("line feed no add", () => {
  const string = addTerminatingNewline("a\nb\n");
  expect(string).toBe("a\nb\n");
});

test("carriage return line feed add", () => {
  const string = addTerminatingNewline("a\r\nb");
  expect(string).toBe("a\r\nb\r\n");
});

test("carriage return line feed no add", () => {
  const string = addTerminatingNewline("a\r\nb\r\n");
  expect(string).toBe("a\r\nb\r\n");
});

test("line feed add default", () => {
  const string = addTerminatingNewline("a", { default: "\r\n" });
  expect(string).toBe("a\r\n");
});

test("line feed add no default", () => {
  const string = addTerminatingNewline("a");
  expect(string).toBe("a\n");
});


