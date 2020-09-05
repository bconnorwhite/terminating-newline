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
