
let filename=__dirname+'/user_data.json';
/* This line creates a variable named filename and assigns it a value. __dirname is a Node.js global variable that represents the directory name of the currently executing script. In this case, it is used to get the absolute path of the directory where the script is located. Then, the string '/user_data.json' is appended to it, forming the complete path to the JSON file. */

let user_reg_data=require(filename);
/*This line uses the require function in Node.js to import the contents of the JSON file specified by the filename variable. In this case, it imports the data from "user_data.json" and assigns it to a variable named user_reg_data. This assumes that "user_data.json" contains valid JSON data.*/

console.log(user_reg_data['kazman'].password);
/*user_reg_data['kazman'] accesses an object property in the JSON data. In this case, it is trying to access an object with the key 'kazman' in the user_reg_data object.
.password is used to access the password property of the object with the key 'kazman'. */