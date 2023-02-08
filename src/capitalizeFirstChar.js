const capitalizeFirstChar = (text) => {
  let capitalizedFirstLetter = text;
  if (typeof text === "string") {
    capitalizedFirstLetter = capitalizedFirstLetter.charAt(0).toUpperCase() + capitalizedFirstLetter.slice(1);
  }

  return capitalizedFirstLetter;
};

export default capitalizeFirstChar;
