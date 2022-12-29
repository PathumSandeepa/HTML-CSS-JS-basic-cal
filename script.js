// Get all the buttons in the calculator
const buttons = document.querySelectorAll('button');

// Get the display element where the result will be shown
const display = document.querySelector('#display');

// Initialize a string to store the current value displayed in the display element
let currentValue = '';

// Initialize a flag to keep track of whether the display element is showing a result or an intermediate value
let showingResult = false;

// Loop through all the buttons and add an event listener to each one
buttons.forEach(button => {
  button.addEventListener('click', event => {
    // Get the value of the button that was clicked
    const buttonValue = event.target.innerText;
    
    // Check if the button is a number or an operator
    if (buttonValue.match(/[0-9]/)) {
      // If it's a number, append it to the current value
      currentValue += buttonValue;
      showingResult = false;
    } else if (buttonValue === 'C') {
      // If the button is the clear button, reset the current value and set the showingResult flag to false
      currentValue = '';
      showingResult = false;
    } else if (buttonValue === '=') {
      // If the button is the equal button, evaluate the current value as an arithmetic expression and show the result
      const result = eval(currentValue);
      display.innerText = result;
      currentValue = result;
      showingResult = true;
    } else if (buttonValue === '<') {
      // If the button is the backspace button, remove the last character from the current value
      currentValue = currentValue.slice(0, -1);
    } else {
      // If the button is an operator, check if the current value is em,pty
      if (currentValue === '') {
        // If the current value is empty, show the message "Enter add number" in the display element
        display.innerText = "Enter add number";
      } else {
        // If the current value is not empty, append the operator to the current value
        currentValue += buttonValue;
        showingResult = false;
      }
    }
    
    // Update the display element with the current value
    if (!showingResult) {
      display.innerText = currentValue;
    }
  });
});
