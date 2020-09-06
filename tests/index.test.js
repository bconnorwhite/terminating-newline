const { addTerminatingNewline } = require("../build/index.js");

test("empty", () => {
  const string = addTerminatingNewline("");
  expect(string).toBe("\n");
});

test("empty (buffer)", () => {
  const buffer = addTerminatingNewline(Buffer.from(""));
  expect(buffer.toString()).toBe("\n");
});
