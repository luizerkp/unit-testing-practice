import reverseString from "../src/reverseString";

test("Does not mutate input data type", () => {
  const input = "hello";
  const output = reverseString(input);
  expect(typeof output).toBe(typeof input);
});

test("Handles single word strings", () => {
  const input = "hello";
  const output = reverseString(input);
  expect(output).toBe("olleh");
});

test("Handles multi-word strings, without changing word position", () => {
  const input = "Hello World I really Love Programing";
  const output = reverseString(input);
  expect(output).toBe("olleH dlroW I yllaer evoL gnimargorP");
});

test("Handles numbers", () => {
  const input = 1;
  const output = reverseString(input);
  expect(output).toBe(1);
});

test("Handles symbols", () => {
  const input = "\u2103";
  const output = reverseString(input);
  expect(output).toBe("\u2103");
});
