// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = () => {
            return this.name;
        };
        this.getRole = () => {
            return "Employee";
        };
        this.getId = () => {
            return this.id;
        };
        this.getEmail = () => {
            return this.email;
        };
    }
    // getName(){
    //     return this.name;
    // }
    // getRole(){
    //     return "Employee";
    // }
    // getId(){
    //     return this.id;
    // }
    // getEmail(){
    //     return this.email;
    // }

}

module.exports = Employee