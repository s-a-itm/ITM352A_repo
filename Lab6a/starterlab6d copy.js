
// define a variable for the month entry textbox and assign it the value from the DOM for that element
// define a variable for the result to be sent to the DOM and assign it the value from the DOM for that element (which is currently nothing)

// Add an event listener to the button
document.querySelector('button').addEventListener('click', function () {
    //note that the code for this program only executes when the button is clicked

    //define and assign a new month input variable as lowercase of input to make the switch statement easier to deal with

    // Initialize num_days to -1 (default value) because ...
    let num_days = -1;

    //run through a switch statement based on the lowercase month variable
    // when the month is january, march, may, july, august, october, december, set num_days = 31
    //for february, set num_days = 28
    //for april june september november, num_days=30
    // all others, num_days = -1 to indicate an error in the input

    //if num_days is -1, output an error message to the DOM, otherwise send the proper result from the switch statement

    if (num_days === -1) {
        resultElement.textContent = 'Invalid month. Please enter a valid month name.';
    } else {
        resultElement.textContent = `There are ${num_days} days in ${month}.`;
    }
});
