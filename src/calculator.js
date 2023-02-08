const add = (num1, num2) => {
  let result;
  if (!num1 || !num2) {
    result = "At least two numbers need to to perform addtion";
  } else {
    result = num1 + num2;
  }
  return result;
};

const subtract = () => {}; // TODO

const multiply = () => {}; // TODO

const divide = () => {}; // TODO

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

export default calculator;
