const reverseWord = (word) => {
  if (typeof word !== "string" || word.length === 1 || word.trim().length === 0) {
    return word;
  }
  const reversedWord = word
    .split("")
    .reverse()
    .reduce((currentWord, currentChar) => currentWord.concat(currentChar));
  return reversedWord;
};

const reverseString = (string) => {
  if (typeof string !== "string") {
    return string;
  }

  const newString = string.split(" ");
  let reversedString = "";

  if (newString.length === 1) {
    reversedString = reverseWord(string);
  } else {
    newString.forEach((word) => {
      reversedString = reversedString.concat(`${reverseWord(word)} `);
    });

    /* 
        get rid of the last empty space added by 
        reversedString = reversedString.concat(`${reverseWord(word)} `);
        while preserving original string
    */
    reversedString = reversedString.slice(0, reversedString.length - 1);
  }

  return reversedString;
};

export default reverseString;
