// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName();
        this.getRole();
        this.getId();
        this.getEmail();
    }
    getName(){
        return this.name;
    }
    getRole(){
        return "Employee";
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }

}

module.exports = Employee