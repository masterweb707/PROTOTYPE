function runCode() {
  const consoleOutput = document.getElementById('output');

  // Debugging log to check if the function is triggered
  consoleOutput.textContent = "Function triggered. Please choose an option.";

  // Get the user's choice for conversion
  const userChoice = prompt("Enter '1' for converting Celsius to Fahrenheit or '2' for Fahrenheit to Celsius:");

  // Debugging log to check the user's choice
  console.log("User choice: ", userChoice);

  if (userChoice === '1') {
    // If user chooses to convert Celsius to Fahrenheit
    const celsius = prompt("Enter the value of temperature in Celsius scale: ");
    // Debugging log to check the Celsius value
    console.log("Celsius value: ", celsius);

    if (celsius !== null) { // Ensure input is not null
      const fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
      consoleOutput.textContent = `The temperature is ${fahrenheit.toFixed(2)}°F`;
    }
  } else if (userChoice === '2') {
    // If user chooses to convert Fahrenheit to Celsius
    const fahrenheit = prompt("Enter the value of temperature in Fahrenheit scale: ");
    // Debugging log to check the Fahrenheit value
    console.log("Fahrenheit value: ", fahrenheit);

    if (fahrenheit !== null) { // Ensure input is not null
      const celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
      consoleOutput.textContent = `The temperature is ${celsius.toFixed(2)}°C`;
    }
  } else {
    // If the user input is invalid
    consoleOutput.textContent = "Invalid option. Please refresh the page and try again.";
  }
}