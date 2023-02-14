import calculator from "../src/calculator";

test("Calculator object exist", () => {
  expect(typeof calculator).toBe("object");
});

describe("calculator Error Check Tests", () => {
  test("Throws Error with only one num", () => {
    expect(() => {
      calculator.add(2);
    }).toThrow(calculator.error.onlyOneNumber);
    expect(() => {
      calculator.subtract(2);
    }).toThrow(calculator.error.onlyOneNumber);
    expect(() => {
      calculator.multiply(2);
    }).toThrow(calculator.error.onlyOneNumber);
    expect(() => {
      calculator.divide(2);
    }).toThrow(calculator.error.onlyOneNumber);
  });

  test("Throws Error with non-numbers (char)", () => {
    expect(() => {
      calculator.add("a", 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.subtract("a", 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.multiply("a", 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.divide("a", 2);
    }).toThrow(calculator.error.nonNumericValue);
  });

  test("Throws Error with non-numbers (boolean)", () => {
    expect(() => {
      calculator.add(true, 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.subtract(true, 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.multiply(true, 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.divide(true, 2);
    }).toThrow(calculator.error.nonNumericValue);
  });

  test("Throws Error with non-numbers (unicode)", () => {
    expect(() => {
      calculator.add("\u2103", 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.subtract("\u2103", 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.multiply("\u2103", 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.divide("\u2103", 2);
    }).toThrow(calculator.error.nonNumericValue);
  });

  test("Throws Error with non-numbers (null)", () => {
    expect(() => {
      calculator.add(null, 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.subtract(null, 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.multiply(null, 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.divide(null, 2);
    }).toThrow(calculator.error.nonNumericValue);
  });

  test("Throws Error with non-numbers (empty arr [])", () => {
    expect(() => {
      calculator.add([], 2);
    }).toThrow(calculator.error.onlyOneNumber);
    expect(() => {
      calculator.subtract([], 2);
    }).toThrow(calculator.error.onlyOneNumber);
    expect(() => {
      calculator.multiply([], 2);
    }).toThrow(calculator.error.onlyOneNumber);
    expect(() => {
      calculator.divide([], 2);
    }).toThrow(calculator.error.onlyOneNumber);
  });

  test("Throws Error with non-numbers (arr with non-convertibe value)", () => {
    expect(() => {
      calculator.add([], 2, ["a"]);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.subtract([], 2, ["a"]);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.multiply([], 2, ["a"]);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.divide([], 2, ["a"]);
    }).toThrow(calculator.error.nonNumericValue);
  });

  test("Throws Error with non-numbers (empty obj {})", () => {
    expect(() => {
      calculator.add({}, 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.subtract({}, 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.multiply({}, 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.divide({}, 2);
    }).toThrow(calculator.error.nonNumericValue);
  });

  test("Throws Error with a string number with letters", () => {
    expect(() => {
      calculator.add("2a", 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.subtract("2a", 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.multiply("2a", 2);
    }).toThrow(calculator.error.nonNumericValue);
    expect(() => {
      calculator.divide("2a", 2);
    }).toThrow(calculator.error.nonNumericValue);
  });

  test("Throws Error with a number larger than Number.MAX_SAFE_INTEGER", () => {
    const num = Number.MAX_SAFE_INTEGER + 1;
    expect(() => {
      calculator.add(num, 2e3);
    }).toThrow(calculator.error.maxSafeIntValue);
    expect(() => {
      calculator.subtract(num, 2e3);
    }).toThrow(calculator.error.maxSafeIntValue);
    expect(() => {
      calculator.multiply(num, 2e3);
    }).toThrow(calculator.error.maxSafeIntValue);
    expect(() => {
      calculator.divide(num, 2e3);
    }).toThrow(calculator.error.maxSafeIntValue);
  });

  test("Throws Error with a number smaller than Number.MIN_SAFE_INTEGER", () => {
    const num = Number.MIN_SAFE_INTEGER - 1;
    expect(() => {
      calculator.add(num, 2e3);
    }).toThrow(calculator.error.minSafeIntValue);
    expect(() => {
      calculator.subtract(num, 2e3);
    }).toThrow(calculator.error.minSafeIntValue);
    expect(() => {
      calculator.multiply(num, 2e3);
    }).toThrow(calculator.error.minSafeIntValue);
    expect(() => {
      calculator.divide(num, 2e3);
    }).toThrow(calculator.error.minSafeIntValue);
  });

  test("Throws Error when division by is attempted", () => {
    expect(() => {
      calculator.divide(1, 3, 6, 7, 0, 5, 2);
    }).toThrow(calculator.error.divisionByZero);
  });
});
describe("calculator Happy Path tests", () => {
  test("Handles Zero Properly", () => {
    expect(calculator.add(2, 0)).toBe(2);
    expect(calculator.subtract(2, 0)).toBe(2);
    expect(calculator.multiply(2, 0)).toBe(0);
    expect(calculator.divide(0, 2)).toBe(0);
  });

  test("Test basic calculation of two numbers", () => {
    expect(calculator.add(2.5, 2)).toBe(4.5);
    expect(calculator.subtract(2.5, 2)).toBe(0.5);
    expect(calculator.multiply(2.5, 2)).toBe(5);
    expect(calculator.divide(2.5, 2)).toBe(1.25);
  });

  test("Handles string numbers (ints)", () => {
    expect(calculator.add("1", 2)).toBe(3);
    expect(calculator.subtract("1", 2)).toBe(-1);
    expect(calculator.multiply("1", 2)).toBe(2);
    expect(calculator.divide("1", 2)).toBe(0.5);
  });

  test("Handles string numbers (floats)", () => {
    expect(calculator.add("1.5", 2)).toBe(3.5);
    expect(calculator.subtract("1.5", 2)).toBe(-0.5);
    expect(calculator.multiply("1.5", 2)).toBe(3);
    expect(calculator.divide("1.5", 2)).toBe(0.75);
  });

  test("Handles negative numbers", () => {
    expect(calculator.add(-3, 2)).toBe(-1);
    expect(calculator.subtract(-3, 2)).toBe(-5);
    expect(calculator.multiply(-3, 2)).toBe(-6);
    expect(calculator.divide(-3, 2)).toBe(-1.5);
  });

  test("Handles scientific notation", () => {
    expect(calculator.add(2e3, 2e3)).toBe(4e3);
    expect(calculator.subtract(2e3, 2e3)).toBe(0);
    expect(calculator.multiply(2e3, 2e3)).toBe(4e6);
    expect(calculator.divide(2e3, 2e3)).toBe(1);
  });

  test("Handles scientific notation and regular numbers", () => {
    expect(calculator.add(2e3, 100)).toBe(2.1e3);
    expect(calculator.subtract(2e3, 100)).toBe(1.9e3);
    expect(calculator.multiply(2e3, 100)).toBe(2e5);
    expect(calculator.divide(2e3, 100)).toBe(20);
  });

  test("Handles string scientific notation", () => {
    expect(calculator.add("2e3", 2e3)).toBe(4e3);
    expect(calculator.subtract("2e3", 2e3)).toBe(0);
    expect(calculator.multiply("2e3", 2e3)).toBe(4e6);
    expect(calculator.divide("2e3", 2e3)).toBe(1);
  });
  test("Handles more than two numbers", () => {
    expect(calculator.add(1, 2, 3, 4)).toBe(10);
    expect(calculator.subtract(1, 2, 3, 4)).toBe(-8);
    expect(calculator.multiply(1, 2, 3, 4)).toBe(24);
    expect(calculator.divide(1, 2, 3, 4)).toBe(0.04166667);
  });

  test("Handles more than two numbers with different polarities", () => {
    expect(calculator.add(1, -2, 3, -4)).toBe(-2);
    expect(calculator.subtract(1, -2, 3, -4)).toBe(4);
    expect(calculator.multiply(1, -2, 3, -4)).toBe(24);
    expect(calculator.divide(1, -2, 3, -4)).toBe(0.04166667);
  });

  test("handles Arrays", () => {
    expect(calculator.add([1, 2, 3])).toBe(6);
    expect(calculator.subtract([1, 2, 3])).toBe(-4);
    expect(calculator.multiply([1, 2, 3])).toBe(6);
    expect(calculator.divide([1, 2, 3])).toBe(0.16666667);
  });

  test("handles Arrays and numbers", () => {
    expect(calculator.add([1, 2, 3], 1, 2, 3)).toBe(12);
    expect(calculator.subtract([1, 2, 3], 1, 2, 3)).toBe(-10);
    expect(calculator.multiply([1, 2, 3], 1, 2, 3)).toBe(36);
    expect(calculator.divide([1, 2, 3], 1, 2, 3)).toBe(0.02777778);
  });
});
