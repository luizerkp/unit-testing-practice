import caesarCipher from "../src/caesar";
import { helloTests, longParatest } from "./caesarTestCases";

describe(" Caesar tests", () => {
  test("Does not mutate input data type", () => {
    const input = "hello";
    const output = caesarCipher(input);
    expect(typeof output).toBe(typeof input);
  });

  test("Encrypts hello as ifmmp with a key of 1", () => {
    const input = "hello";
    const output = caesarCipher(input, 1);
    expect(output).toBe("ifmmp");
  });

  test("Handles Puntuation", () => {
    const input = "hello,";
    const output = caesarCipher(input, 1);
    expect(output).toBe("ifmmp,");
  });

  test("Handles spaces", () => {
    const input = "hello, world";
    const output = caesarCipher(input, 1);
    expect(output).toBe("ifmmp, xpsme");
  });

  test("Handles non-letter chars(unicode)", () => {
    const input = "hello, \u2103 world";
    const output = caesarCipher(input, 1);
    expect(output).toBe("ifmmp, \u2103 xpsme");
  });

  test("Handles non-letter chars(numbers)", () => {
    const input = "hello, 23 world";
    const output = caesarCipher(input, 1);
    expect(output).toBe("ifmmp, 23 xpsme");
  });

  test("Passes for keys (1, 2, 7, 13, 21, 26)", () => {
    helloTests.caesarText.forEach((text) => {
      const key = text[0];
      const expected = text[1];
      const input = helloTests.plainText;
      const output = caesarCipher(input, key);

      expect(output).toBe(expected);
    });
  });

  test("Handles keys larger than 26", () => {
    const input = "I love programming";
    const key = 131;
    const output = caesarCipher(input, key);
    expect(output).toBe("J mpwf qsphsbnnjoh");
  });

  test("Handles long full paragraph", () => {
    const input = longParatest.plainText;
    const key = longParatest.caesarKey;
    const output = caesarCipher(input, key);
    expect(output).toBe(longParatest.caesarText);
  });

  test("Handles text with mix capitalized, unicode and numbers", () => {
    const input = "Mr. McBride and Mrs. McgoUerven were appalle that the temperature was 17\u2103";
    const key = 18;
    const output = caesarCipher(input, key);
    expect(output).toBe("Ej. EuTjavw sfv Ejk. EuygMwjnwf owjw shhsddw lzsl lzw lwehwjslmjw osk 17\u2103");
  });
});
