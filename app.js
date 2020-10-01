const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var employeeArray = [""];

// gather standard employee data, then ask role specific questions; then push to employeeArray 
var employeePrompt = function() {
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What the Employee's name?"
        },
        {
          type: "input",
          name: "id",
          message: "What is the Employee's id?"
        },
        {
          type: "input",
          name: "email",
          message: "What is the Employee's email?"
        },
        {
          type: "list",
          name: "role",
          message: "Employee Role?",
          choices: [ "Manager" , "Engineer" , "Intern" ]
        }
    ]).then(function(userResponse) {
        
        roleSpecificPrompt(userResponse);

    }).catch(function(err){
        if (err) throw err
    })
}
// role specific prompts, create objects for each employee that are pushed to the empty array
var roleSpecificPrompt = function(userResponse) {
    // console.log(userResponse);

    if (userResponse.role === "Manager"){
        inquirer.prompt([
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Manager's Office Number?"
            }
        ]).then(function(data){
        const manager = new Manager(userResponse.name, userResponse.id, userResponse.email, data.officeNumber)
        // console.log(manager);
        employeeArray.push(manager);
        startPrompt();
        }).catch(function(err){
            if (err) throw err
        })

    } else if (userResponse.role === "Engineer"){
        inquirer.prompt([
            {
                type: "input",
                name: "github",
                message: "What is your Engineer's GitHub Username?"
            }
        ]).then(function(data){
        const engineer = new Engineer(userResponse.name, userResponse.id, userResponse.email, data.github)
        // console.log(engineer);
        employeeArray.push(engineer);
        startPrompt();
        }).catch(function(err){
            if (err) throw err
        })

    } else if (userResponse.role === "Intern"){
        inquirer.prompt([
            {
                type: "input",
                name: "school",
                message: "What is the name of your Intern's School?"
            }
        ]).then(function(data){
        const intern = new Intern(userResponse.name, userResponse.id, userResponse.email, data.school)
        // console.log(intern);
        employeeArray.push(intern);
        startPrompt();
        }).catch(function(err){
            if (err) throw err
        })
    }
}

//  start prompt to see if new employees need to be added
const startPrompt = function(){
    inquirer.prompt([
        {
            type: "confirm",
            name: "start",
            message: "Would you like to add an employee?"
        }
    ]).then(function(res){
        console.log(res);
        if (res.start === true) {
            employeePrompt();
        } else {
            console.log("false, done");
            const currentEmployeeData = render(employeeArray);
            fs.writeFile(outputPath, currentEmployeeData, function(err){
            if (err) throw err;
            })
        };
        
    })
}


employeePrompt();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
