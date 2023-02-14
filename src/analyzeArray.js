import calculator from "./calculator";

const arrayStatsFactory = (average = null, min = null, max = null, length = null) => ({
  average,
  min,
  max,
  length,
});

const findMin = (arr) => arr.reduce((min, current) => (+min < +current ? min : current));
const findMax = (arr) => arr.reduce((max, current) => (+max > +current ? max : current));

const isNumeric = (nums) =>
  nums.every(
    (num) => (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) && !Number.isNaN(+num)
  );

const checkValid = (arr) => {
  const valid = {
    error: false,
    errorMessage: "",
  };

  if (!Array.isArray(arr)) {
    valid.error = true;
    valid.errorMessage = `Expected array received ${typeof arr}`;
    return valid;
  }

  if (arr.length === 0) {
    valid.error = true;
    valid.errorMessage = "Array is empty";
    return valid;
  }

  if (!isNumeric(arr)) {
    valid.error = true;
    valid.errorMessage = "At least one of your inputs contains a value that can not be converted to a number";
    return valid;
  }

  return valid;
};

const analyzeArray = (arr) => {
  const valid = checkValid(arr);
  if (valid.error) {
    throw new Error(valid.errorMessage);
  }

  const len = arr.length;
  const total = len === 1 ? arr[0] : calculator.add(arr);
  const average = calculator.divide(total, len);
  const min = findMin(arr);
  const max = findMax(arr);

  return arrayStatsFactory(average, min, max, len);
};

export default analyzeArray;
