const isUpperCaseLetterASCIICode = (code) => code >= 65 && code <= 90;
const isLowerCaseLetterASCIICode = (code) => code >= 97 && code <= 122;
const isASCIILetter = (charCode) => isLowerCaseLetterASCIICode(charCode) || isUpperCaseLetterASCIICode(charCode);

const encodeChar = (charCode, key) => {
  const lowerCaseASCIISetFirstLetter = "a".charCodeAt();
  const upperCaseASCIISetFirstLetter = "A".charCodeAt();

  const newChar = isLowerCaseLetterASCIICode(charCode)
    ? ((charCode - lowerCaseASCIISetFirstLetter + key) % 26) + lowerCaseASCIISetFirstLetter
    : ((charCode - upperCaseASCIISetFirstLetter + key) % 26) + upperCaseASCIISetFirstLetter;

  return newChar;
};

const createEncipheredText = (encodedChars) => {
  let newEncipheredText = "";
  encodedChars.forEach((char) => {
    if (isASCIILetter(char)) {
      const newChar = String.fromCharCode(char);
      newEncipheredText = newEncipheredText.concat(newChar);
    } else {
      newEncipheredText = newEncipheredText.concat(char);
    }
  });
  return newEncipheredText;
};
const createASCIIArray = (text, key) => {
  if (typeof text !== "string") {
    return text;
  }
  const charArray = text.split("");
  const charCodeArray = [];

  charArray.forEach((char) => {
    const charCode = char.charCodeAt();
    if (isASCIILetter(charCode)) {
      const newCharCode = encodeChar(charCode, key);
      charCodeArray.push(newCharCode);
    } else {
      charCodeArray.push(char);
    }
  });
  return charCodeArray;
};
const caesarCipher = (text, key) => {
  const encodedChars = createASCIIArray(text, key);
  const encipheredText = createEncipheredText(encodedChars);
  return encipheredText;
};

export default caesarCipher;
