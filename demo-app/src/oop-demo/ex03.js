// constructor Person
function Person(name = 'friend', city = 'unknown') {
    console.log('arguments supplied are: ', arguments);
    this.name = name;
    this.city = city;
}

Person.prototype.print = function() {
    console.log('Name = ', this.name);
    console.log('City = ', this.city);
}

var p1 = new Person();
var p2 = new Person('Vinod');
var p3 = new Person('Shyam', 'Bangalore');
var p4 = new Person('John', 'Dallas', 'Texas', 'USA');

p1.print();
p2.print();
p3.print();
p4.print();