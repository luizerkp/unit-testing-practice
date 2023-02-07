import capitalize from "../src/capitalizeFirstChar";

test("Does not mutate input data type", () => {
  const input = "hello";
  const output = capitalize(input);
  expect(typeof output).toBe(typeof input);
});
