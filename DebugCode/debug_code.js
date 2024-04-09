function performOperation() {
    // Get user input from input fields
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result;
        switch (operation) {
            case 'add':
                result = addition(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                result = 'Invalid operation';
                break;
        }

        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function addition(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    return a + b;
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    return a * b;
}

function divide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}