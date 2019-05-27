function Person (name, city) {
    this.name = name;
    this.city = city;
}

Person.prototype.print = function() {
    console.log('Name =', this.name);
    console.log('City =', this.city);
}

function Employee(id, name, city, salary) {
    // call to super constructor
    // 1st parameter must be the context object
    Person.call(this, name, city); 
    this.id = id;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype); // equivalent to "extends"

// print function in Employee overrides the print function in Person
Employee.prototype.print = function() {
    console.log('Id =', this.id);
    Person.prototype.print.call(this); // like super.print()
    console.log('Salary = $', this.salary);
}

var e1 = new Employee(7788, 'Scott', 'Dallas', 3000);
console.log(e1);
e1.print();