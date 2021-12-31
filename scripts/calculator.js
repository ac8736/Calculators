var operand1 = "";
var operand2 = "";
var selectedOperator = "";
var justComputed = false;
const displayScreen = document.getElementById("display");

function display(operand) {
    if (operand.length > 9) {
        displayScreen.innerHTML = "Overflow";
    } else {
        displayScreen.innerHTML = operand;
    }
}

function updateDisplay(id) {
    if (justComputed && selectedOperator == "") {
        justComputed = false;
        operand1 = "" + document.getElementById(id).value;
        display(operand1);
        return;
    }
    if (justComputed && selectedOperator != "") {
        justComputed = false;
        operand2 = document.getElementById(id).value;
        display(operand2);
        return;
    }
    if (selectedOperator == "") {
        if (id == "decimal" && operand1.indexOf('.') != -1) {
            operand1 += "";
        } else {
            operand1 += document.getElementById(id).value;
        }
        display(operand1);
    }
    if (selectedOperator != "") {
        if (id == "decimal" &&  operand2.indexOf('.') != -1) {
            operand2 += "";
        } else {
            operand2 += document.getElementById(id).value;
        }
        display(operand2);
    }
}

function clearEntries() {
    operand1 = "";
    operand2 = "";
    selectedOperator = "";
    displayScreen.innerHTML = "0";
    performedSqrt = false;
}

function setOperator(operation) {
    selectedOperator = document.getElementById(operation).value;
}

function compute() {
    if (selectedOperator == "") {
        return;
    }
    let operandNum1 = parseFloat(operand1);
    let operandNum2 = parseFloat(operand2);
    let result;
    switch (selectedOperator) {
        case "%":
            result = operandNum1 % operandNum2;
            break;
        case "/":
            result = operandNum1 / operandNum2;
            break;
        case "*":
            result = operandNum1 * operandNum2;
            break;
        case "+":
            result = operandNum1 + operandNum2;
            break;
        case "-":
            result = operandNum1 - operandNum2;
            break;
        default:
            result = 0;
    }
    selectedOperator = "";
    operand1 = result.toString();
    if (operand1.length > 9) {
        operand1 = operand1.substring(0, 8);
    }
    operand2 = "";
    justComputed = true;
    display(operand1);
}

function getSqrt() {
    if (operand1[0] != '-' && displayScreen.innerHTML != "0") {
        operand1 = Math.sqrt(parseFloat(operand1)).toString();
        operand1 = operand1.substring(0, 5);
        document.getElementById("display").innerHTML = operand1;
        justComputed = true;
    }
}

function updatePolarity() {
    if (selectedOperator === "") {
        if (operand1[0] == "-") {
            operand1 = operand1.substring(1, operand1.length);
        } else {
            operand1 = '-' + operand1;
        }
        display(operand1);
    } else {
        if (operand2[0] == "-") {
            operand2 = operand2.substring(1, operand2.length);
        } else {
            operand2 = '-' + operand2;
        }
        display(operand2);
    }
}