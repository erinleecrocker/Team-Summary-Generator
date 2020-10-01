// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = function(){
            return employee.name;
        };
        this.getRole = function(){
            return "Employee";
        };
        this.getId = function(){
            return employee.id;
        }
        this.getEmail = function(){
            return employee.email;
        }
    }
}

module.exports = Employee