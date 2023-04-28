let number1 = +prompt("Please enter a number");
let number2 = +prompt("Please enter another number");

let result;
let operator = prompt("Please enter a mathematical operator in +. -, / and *");

if (result) {
  alert(`The result ${number1} ${operator} ${number2} is ${result}`);
}

function calculator(number1, number2, operator) {
  let result;
    if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else if (operator === "/") {
    result = number1 / number2;
  } else {
    alert("This is not an allowed operator. Please try again.");
  }
}
