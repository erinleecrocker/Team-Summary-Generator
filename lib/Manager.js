// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ("./Employee");

class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOffice(){};
    getRole() {
        return "Manager";
    };
}

module.exports = Manager

// super(name, id, email, getName(), getId(), getEmail());