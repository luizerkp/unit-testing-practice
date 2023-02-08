import capitalizeFirstChar from "../src/capitalizeFirstChar";

test("Does not mutate input data type", () => {
  const input = "hello";
  const output = capitalizeFirstChar(input);
  expect(typeof output).toBe(typeof input);
});

test("capitalizes first letter only", () => {
  const input = "hello";
  const output = capitalizeFirstChar(input);
  expect(output).toBe("Hello");
});

test("Capilatlizes first letter and leave other char unchanged", () => {
  const input = "heLLo";
  const output = capitalizeFirstChar(input);
  expect(output).toBe("HeLLo");
});

test("Handles numbers", () => {
  const input = 1;
  const output = capitalizeFirstChar(input);
  expect(output).toBe(1);
});

test("Handles non-letters", () => {
  // "\u2103" is the celcius symbol unicode
  const input = "\u2103";
  const output = capitalizeFirstChar(input);
  expect(output).toBe("\u2103");
});

test("Handles multi-word strings", () => {
  const input = "hello, world";
  const output = capitalizeFirstChar(input);
  expect(output).toBe("Hello, world");
});
