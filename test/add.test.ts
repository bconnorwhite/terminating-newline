import { test, expect } from "@jest/globals";
import { addTerminatingNewline } from "../source";

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

test("line feed add (buffer)", () => {
  const string = addTerminatingNewline(Buffer.from("a\nb"));
  expect(string.toString()).toBe(Buffer.from("a\nb\n").toString());
});

test("line feed no add (buffer)", () => {
  const string = addTerminatingNewline(Buffer.from("a\nb\n"));
  expect(string.toString()).toBe(Buffer.from("a\nb\n").toString());
});

test("carriage return line feed add (buffer)", () => {
  const string = addTerminatingNewline(Buffer.from("a\r\nb"));
  expect(string.toString()).toBe(Buffer.from("a\r\nb\r\n").toString());
});

test("carriage return line feed no add (buffer)", () => {
  const string = addTerminatingNewline(Buffer.from("a\r\nb\r\n"));
  expect(string.toString()).toBe(Buffer.from("a\r\nb\r\n").toString());
});

test("line feed add default (buffer)", () => {
  const string = addTerminatingNewline(Buffer.from("a"), { default: "\r\n" });
  expect(string.toString()).toBe(Buffer.from("a\r\n").toString());
});

test("line feed add no default (buffer)", () => {
  const string = addTerminatingNewline(Buffer.from("a"));
  expect(string.toString()).toBe(Buffer.from("a\n").toString());
});

test("empty", () => {
  const string = addTerminatingNewline("");
  expect(string).toBe("\n");
});

test("empty (buffer)", () => {
  const buffer = addTerminatingNewline(Buffer.from(""));
  expect(buffer.toString()).toBe("\n");
});
