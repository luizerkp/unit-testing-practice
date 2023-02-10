const error = {
  onlyOneNumber: "At least two numbers needed to to perform operation",
  nonNumericValue: "At least one of your inputs contains a value that can not be converted to a number",
  maxSafeIntValue: "At least one of your inputs is larger than Number.MAX_SAFE_INTERGER",
  minSafeIntValue: "At least one of your inputs is smaller than Number.MIN_SAFE_INTERGER",
};
const roundToDecimalPlaces = (value, decimalPlaces) =>
  Number(`${Math.round(`${value}e${decimalPlaces}`)}e-${decimalPlaces}`);

const isNumeric = (nums) =>
  nums.every(
    (num) => (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) && !Number.isNaN(+num)
  );

const beyondMaxSafeIntValue = (nums) => {
  if (nums.some((num) => num > Number.MAX_SAFE_INTEGER)) {
    return true;
  }
  return false;
};

const smallerThanMinSafeIntValue = (nums) => {
  if (nums.some((num) => num < Number.MIN_SAFE_INTEGER)) {
    return true;
  }
  return false;
};

const checkValidNumbers = (nums) => {
  const valid = {
    error: false,
    errorMessage: "",
  };

  if (nums.length === 1 || nums.some((num) => !num)) {
    valid.error = true;
    valid.errorMessage = error.onlyOneNumber;
    return valid;
  }

  if (!isNumeric(nums)) {
    valid.error = true;
    valid.errorMessage = error.nonNumericValue;
    return valid;
  }

  if (smallerThanMinSafeIntValue(nums)) {
    valid.error = true;
    valid.errorMessage = error.minSafeIntValue;
    return valid;
  }

  if (beyondMaxSafeIntValue(nums)) {
    valid.error = true;
    valid.errorMessage = error.maxSafeIntValue;
    return valid;
  }
  return valid;
};

const add = (...nums) => {
  const valid = checkValidNumbers(nums);

  if (valid.error) {
    throw new Error(valid.errorMessage);
  }
  const result = nums.reduce((total, current) => {
    const currentNumber = +current;
    let currentTotal = +total;
    currentTotal += currentNumber;
    return currentTotal;
  });
  return result;
};

const subtract = (...nums) => {
  const valid = checkValidNumbers(nums);

  if (valid.error) {
    throw new Error(valid.errorMessage);
  }
  const result = nums.reduce((total, current) => {
    const currentNumber = +current;
    let currentTotal = +total;
    currentTotal -= currentNumber;
    return currentTotal;
  });
  return result;
};

const multiply = (...nums) => {
  const valid = checkValidNumbers(nums);

  if (valid.error) {
    throw new Error(valid.errorMessage);
  }
  const result = nums.reduce((total, current) => {
    const currentNumber = +current;
    let currentTotal = +total;
    currentTotal *= currentNumber;
    return currentTotal;
  });
  return result;
};

const divide = (...nums) => {
  const valid = checkValidNumbers(nums);
  const decimalPlaces = 8;
  if (valid.error) {
    throw new Error(valid.errorMessage);
  }
  const result = nums.reduce((total, current) => {
    const currentNumber = +current;
    let currentTotal = +total;
    currentTotal /= currentNumber;
    return currentTotal;
  });

  return roundToDecimalPlaces(result, decimalPlaces);
};

const calculator = {
  add,
  subtract,
  multiply,
  divide,
  error,
};

export default calculator;
