let operand1 = 0;
let operand2 = "";
let operator = "";

function addNumber(num) {
  operand2 += num.toString();
  displayNum(operand2);
  console.log("Current number: " + operand2);
}

function chooseOperator(op) {
  if (operand2 !== "") {
    if (operator !== "") {
      totalEqual();
    } else {
      operand1 = Number(operand2);
    }
    operand2 = "";
  }
  operator = op;
  console.log("Chosen operator: " + operator);

  if (op === "%") {
    if (operand1 !== 0 && operand2 === "") {
      operand2 = (operand1 / 100).toString();
      displayNum(operand2);
      console.log("Converted to decimal: " + operand2);
    } else if (operand2 !== "") {
      operand2 = (Number(operand2) / 100).toString();
      displayNum(operand2);
      console.log("Converted to decimal: " + operand2);
    }
  }
}

function displayNum(num) {
  document.getElementById("total").textContent = "Total: " + num;
}

function clearAll() {
  operand1 = 0;
  operand2 = "";
  operator = "";
  document.getElementById("total").textContent = "Total: 0";
  console.log("Calculator reset");
}

function totalEqual() {
  if (operand2 === "" || operator === "") {
    return;
  }
  let secondNumber = Number(operand2);
  let result = 0;

  switch (operator) {
    case "+":
      result = operand1 + secondNumber;
      break;
    case "-":
      result = operand1 - secondNumber;
      break;
    case "x":
      result = operand1 * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        document.getElementById("total").textContent = "Error";
        operator = "";
        operand2 = "";
        console.log("Error: Division by zero");
        return;
      }
      result = operand1 / secondNumber;
      break;
    case "%":
      result = (operand1 * secondNumber) / 100;
      break;
  }

  document.getElementById("total").textContent = "Total: " + result;
  console.log("Result: " + result);
  operand2 = "";
  operator = "";
  operand1 = result;
}

function toggleSign() {
  if (operand2 !== "") {
    operand2 = (-Number(operand2)).toString();
    displayNum(operand2);
    console.log("Toggled sign: " + operand2);
  }
}

function addDecimal() {
  if (!operand2.includes(".")) {
    operand2 += ".";
    displayNum(operand2);
    console.log("Added decimal: " + operand2);
  }
}
