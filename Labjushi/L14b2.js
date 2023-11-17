const fs = require('fs');
//This line imports the Node.js built-in fs (file system) module, which provides methods for interacting with the file system, including reading and writing files.

let filename = __dirname + '/user_data.json';
//This line constructs the complete path to the JSON file by combining the __dirname global variable (which represents the directory name of the currently executing script) with '/user_data.json'.

if (fs.existsSync(filename)){
    let data = fs.readFileSync(filename, 'utf-8');
    //This line uses the fs.readFileSync method to read the contents of the file specified by filename. It reads the file synchronously, meaning it will block the program's execution until the file is fully read. The 'utf-8' argument specifies the file's character encoding as UTF-8, which is a common encoding for text files.

    let user_reg_data = JSON.parse(data);
    //After reading the file's contents into the data variable, the code uses JSON.parse to parse the JSON data in data into a JavaScript object. This is necessary because fs.readFileSync returns the file's contents as a string, and parsing it is needed to work with it as a structured object.

    let user_data_stats=fs.statSync(filename);
    //This line uses the fs.statSync method to retrieve statistics about the file specified by the filename variable.
    //fs.statSync is a synchronous function that returns a fs.Stats object containing various information about the file, such as its size, modification date, access permissions, etc.

    let stats_size=user_data_stats.size;
    //After calling fs.statSync, the code extracts the size of the file from the fs.Stats object and assigns it to the stats_size variable.

    console.log(`The file name ${filename} has ${stats_size} characters`);
    //you know what this does

} else {
    console.log(`The file name ${filename} does not exist.`);
}



