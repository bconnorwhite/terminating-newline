const { addTerminatingNewline } = require("../build/index.js");

test("unix add", () => {
  const string = addTerminatingNewline("a\nb");
  expect(string).toBe("a\nb\n");
});

test("unix no add", () => {
  const string = addTerminatingNewline("a\nb\n");
  expect(string).toBe("a\nb\n");
});

test("windows add", () => {
  const string = addTerminatingNewline("a\r\nb");
  expect(string).toBe("a\r\nb\r\n");
});

test("windows no add", () => {
  const string = addTerminatingNewline("a\r\nb\r\n");
  expect(string).toBe("a\r\nb\r\n");
});
