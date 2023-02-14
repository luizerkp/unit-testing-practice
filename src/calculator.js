const error = {
  onlyOneNumber: "At least two numbers needed to to perform operation",
  nonNumericValue: "At least one of your inputs contains a value that can not be converted to a number",
  maxSafeIntValue: "At least one of your inputs is larger than Number.MAX_SAFE_INTERGER",
  minSafeIntValue: "At least one of your inputs is smaller than Number.MIN_SAFE_INTERGER",
  divisionByZero: "One of your divisors is zero and division by zero is undefined",
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

  if (nums.length === 1) {
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

const checkSubArrays = (arr) => arr.some((value) => Array.isArray(value));
const checkZeroDivisors = (arr) => arr.some((value) => parseFloat(value) === 0);

const add = (...nums) => {
  // checks if an array or group of array were passed
  const hasSubArrays = checkSubArrays(nums);
  const numsArr = hasSubArrays ? nums.flat(Infinity) : nums;
  const valid = checkValidNumbers(numsArr);

  if (valid.error) {
    throw new Error(valid.errorMessage);
  }
  const result = numsArr.reduce((total, current) => {
    const currentNumber = +current;
    return +total + currentNumber;
  });

  return result;
};

const subtract = (...nums) => {
  // checks if an array or group of array were passed
  const hasSubArrays = checkSubArrays(nums);
  const numsArr = hasSubArrays ? nums.flat(Infinity) : nums;
  const valid = checkValidNumbers(numsArr);

  if (valid.error) {
    throw new Error(valid.errorMessage);
  }
  const result = numsArr.reduce((total, current) => {
    const currentNumber = +current;
    return +total - currentNumber;
  });

  return result;
};

const multiply = (...nums) => {
  // checks if an array or group of array were passed
  const hasSubArrays = checkSubArrays(nums);
  const numsArr = hasSubArrays ? nums.flat(Infinity) : nums;
  const valid = checkValidNumbers(numsArr);

  if (valid.error) {
    throw new Error(valid.errorMessage);
  }
  const result = numsArr.reduce((total, current) => {
    const currentNumber = +current;
    return +total * currentNumber;
  });

  return result;
};

const divide = (...nums) => {
  // checks if an array or group of array were passed
  const hasSubArrays = checkSubArrays(nums);
  const numsArr = hasSubArrays ? nums.flat(Infinity) : nums;
  const valid = checkValidNumbers(numsArr);
  const decimalPlaces = 8;
  const contaisZeroDivisor = checkZeroDivisors(numsArr.slice(1));

  if (valid.error || contaisZeroDivisor) {
    const errorMessage = valid.error ? valid.errorMessage : error.divisionByZero;
    throw new Error(errorMessage);
  }
  const result = numsArr.reduce((total, current) => {
    const currentNumber = +current;
    return +total / currentNumber;
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
