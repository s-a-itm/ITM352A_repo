const fs = require('fs');
//This line imports the Node.js built-in fs (file system) module, which provides methods for interacting with the file system, including reading and writing files.

let filename = __dirname + '/user_data.json';
//This line constructs the complete path to the JSON file by combining the __dirname global variable (which represents the directory name of the currently executing script) with '/user_data.json'.

let user_reg_data;
//this a change from previous program in order to allow user_reg_data to be in scope for use in the app.post /login route

if (fs.existsSync(filename)){
    let data = fs.readFileSync(filename, 'utf-8');
    //This line uses the fs.readFileSync method to read the contents of the file specified by filename. It reads the file synchronously, meaning it will block the program's execution until the file is fully read. The 'utf-8' argument specifies the file's character encoding as UTF-8, which is a common encoding for text files.

    user_reg_data = JSON.parse(data);
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

//Part 4
let username = 'newuser';
user_reg_data[username] = {};
user_reg_data[username].password = 'newpass';
user_reg_data[username].email = 'newuser@user.com';

fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');
//This line writes the updated user_reg_data back to the JSON file specified by the filename variable. It uses the fs.writeFileSync method, which is a synchronous operation that writes data to a file.
//JSON.stringify(user_reg_data) is used to convert the JavaScript object user_reg_data into a JSON-formatted string before writing it to the file.

let express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    login_form = `
        <body>
        <form action="" method="POST">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="submit" value="Submit" id="submit">
        </form>
        </body>
        `;
    response.send(login_form);
});

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    // Retrieve the user's entered information
    let username_entered = request.body['username'];
    let password_entered = request.body['password'];

    let response_msg = "";
    let errors = false;

    // Check if the username exists in user_reg_data
    if (typeof user_reg_data[username_entered] != 'undefined') {
        // Check if the password matches with the username
        if (password_entered == user_reg_data[username_entered].password) {
            response_msg = `${username_entered} is logged in.`;
        } else {
            response_msg = `Incorrect password.`;
            errors = true;
        }
    } else {
        response_msg = `${username_entered} does not exist.`;
        errors = true;
    }

    if (!errors) {
        response.send(response_msg);
    } else {
        response.redirect(`./login?error=${response_msg}`)
    }

});

app.listen(8080, () => console.log(`listening on port 8080`));

app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
        <body>
        <form action="" method="POST">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
        <input type="email" name="email" size="40" placeholder="enter email"><br />
        <input type="submit" value="Submit" id="submit">
        </form>
        </body>
    `;
    response.send(str);
 });

 app.post("/register", function (request, response) {
    // process a simple register form
    let new_user = request.body.username;
    let errors = false;
    let resp_msg = "";

    //let params = new URLSearchParams(request.body);

    // If the username already exists
    if (typeof user_reg_data[new_user] != 'undefined') {
        resp_msg = 'Username unavailable. Please enter a different username.';
        errors = true;
    } 
    // If the username does not exist and the password and repeat password matches
    else if (request.body.password == request.body.repeat_password) {
        user_reg_data[new_user] = {};
        user_reg_data[new_user].name = request.body.name;
        user_reg_data[new_user].password = request.body.password;
        user_reg_data[new_user].email = request.body.email;

        fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');
        response.redirect(`./login`);
    } else {
        resp_msg = 'Repeat password does not match with password.'
        errors = true;
    }

    if (errors) {
        response.send(resp_msg);
        // Alternatively, you can redirect to the register page with an error query parameter:
        // response.redirect(`./register?error=${resp_msg}&${params.toString()}`);
    }
    
 });