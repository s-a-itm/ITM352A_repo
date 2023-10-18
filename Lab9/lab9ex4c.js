// Define the attributes string
let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";

// Split the attributes string into an array of parts using ";" as the separator
let pieces = attributes.split(";");

/**
 * Validates whether a string represents a non-negative integer.
 *
 * @param {string} input - The input string to validate.
 * @param {boolean} returnErrors - (Optional) When true, returns an array of errors; otherwise, returns a boolean.
 * @returns {boolean|array} - Returns true if the input is a non-negative integer, or an array of errors if returnErrors is true.
 */
function validateNonNegInt(input, returnErrors = false) {
  let errors = [];

  if (Number(input) != input) errors.push('Not a number!');
  if (input < 0) errors.push('Negative value!');
  if (parseInt(input) != input) errors.push('Not an integer!');

  return returnErrors ? errors : (errors.length === 0);
}

// Loop through the pieces array and test each element
for (let i = 0; i < pieces.length; i++) {
  let validationResult = validateNonNegInt(pieces[i], true);
  console.log(`Validation result for element "${pieces[i]}": ${validationResult}`);
}
