import calculator from "../src/calculator";

test("Calculator object exist", () => {
  expect(typeof calculator).toBe("object");
});
describe("Calculator Add tests", () => {
  test("add(a, b) returns a + b", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test("Add handles only one num", () => {
    expect(calculator.add(2)).toBe("At least two numbers need to to perform addtion");
  });
});
