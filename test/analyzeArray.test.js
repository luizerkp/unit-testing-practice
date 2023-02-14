import analyzeArray from "../src/analyzeArray";

test("Check analyzeArray function exists", () => {
  expect(typeof analyzeArray).toBe("function");
});

describe("Error checks", () => {
  test("Throws Error on non-array inputs", () => {
    expect(() => {
      analyzeArray("Hello, word");
    }).toThrow("Expected array received string");
  });

  test("Throw Error on non-convertable to Number values in Array (chars)", () => {
    expect(() => {
      analyzeArray([1, 2, 3, 4, 45, "a", "b", "c"]);
    }).toThrow();
  });

  test("Throw Error on non-convertable to Number values in Array (boolean)", () => {
    expect(() => {
      analyzeArray([1, 2, 3, 4, 45, true, false]);
    }).toThrow();
  });

  test("Throw Error on non-convertable to Number values in Array (unicode)", () => {
    expect(() => {
      analyzeArray([1, 2, 3, 4, 45, "\uD83E\uDC9C", "\u2103", "\u2109"]);
    }).toThrow();
  });

  test("Throw Error on non-convertable to Number values in Array (null)", () => {
    expect(() => {
      analyzeArray([1, 2, 3, null, 4, 45]);
    }).toThrow();
  });

  test("Throw Error on non-convertable to Number values in Array (undefined)", () => {
    expect(() => {
      analyzeArray([1, 2, 3, undefined, 4, 45]);
    }).toThrow();
  });
});

test("Throw Error on non-convertable to Number values in Array (empty array)", () => {
  expect(() => {
    analyzeArray([1, 2, 3, [], 4, 45]);
  }).toThrow();
});

describe("Happy Path Tests", () => {
  test("Returns the average of numbers in Array", () => {
    const input = [7, 2, 9, 6, 4, 5, 8, 1, 3, 0];
    const avg = 4.5;
    const output = analyzeArray(input);
    expect(output.average).toBe(avg);
  });

  test("Returns the min number in an array", () => {
    const input = [7, 2, 9, 6, 4, 5, 8, 1, 3, 0];
    const min = 0;
    const output = analyzeArray(input);
    expect(output.min).toBe(min);
  });

  test("Returns the min number in an array", () => {
    const input = [7, 2, 9, 6, 4, 5, 8, 1, 3, 0];
    const max = 9;
    const output = analyzeArray(input);
    expect(output.max).toBe(max);
  });

  test("Returns the length of the array correctly", () => {
    const input = [7, 2, 9, 6, 4, 5, 8, 1, 3, 0];
    const length = 10;
    const output = analyzeArray(input);
    expect(output.length).toBe(length);
  });

  test("Handles an array of size 1", () => {
    const input = [7];
    const expected = {
      average: 7,
      min: 7,
      max: 7,
      length: 1,
    };

    const output = analyzeArray(input);
    expect(output).toStrictEqual(expected);
  });

  test("Handles mix polarity", () => {
    const input = [7, 2, -9, 6, 4, 5, -8, 1, 3, 0];
    const expected = {
      average: 1.1,
      min: -9,
      max: 7,
      length: 10,
    };

    const output = analyzeArray(input);
    expect(output).toStrictEqual(expected);
  });

  test("Happy Path", () => {
    const input = [11, 17, 3, 19, 8, 12, 6, 15, 16, 7, 20, 4, 10, 9, 1, 18, 14, 2, 5, 13];
    const expected = {
      average: 10.5,
      min: 1,
      max: 20,
      length: 20,
    };

    const output = analyzeArray(input);
    expect(output).toStrictEqual(expected);
  });
});
