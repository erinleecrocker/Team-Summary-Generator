// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor(github){
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer

// super(name, id, email, getName(), getId(), getEmail());