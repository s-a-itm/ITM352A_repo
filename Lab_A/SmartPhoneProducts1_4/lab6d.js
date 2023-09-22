// Get the necessary elements from the HTML
const monthInput = document.getElementById('monthInput');
const resultElement = document.getElementById('result');

// Add an event listener to the button
document.querySelector('button').addEventListener('click', function () {
    // Get the user input from the text box
    const month = monthInput.value.toLowerCase();

    // Initialize num_days to -1 (default value)
    let num_days = -1;

    // Use a switch statement to determine the number of days in the month
    switch (month) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            num_days = 31;
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            num_days = 30;
            break;
        case 'february':
            num_days = 28;
            break;
        default:
            // Handle the case where the input is not a valid month
            num_days = -1;
            break;
    }
    // Display the result in the HTML page
    if (num_days === -1) {
        resultElement.textContent = 'Invalid month. Please enter a valid month name.';
    } else {
        resultElement.textContent = `There are ${num_days} days in ${month}.`;
    }
});