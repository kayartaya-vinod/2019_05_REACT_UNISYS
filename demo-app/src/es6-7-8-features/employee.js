import Person from "./person";

export default class Employee extends Person {

    id = undefined;
    salary = 5000;

    constructor(id, name, city, salary) {
        // must call super class constructor
        super(name, city);
        this.id = id;
        this.salary = salary;
    }

    print() {
        console.log(`Id = ${this.id}`);
        super.print();
        console.log(`Salary = ${this.salary}`);
    }

}