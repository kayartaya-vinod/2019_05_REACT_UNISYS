// import * as p from  './person';
// console.log(p);

import Person, { TRAINER_EMAIL, TRAINER_NAME } from './person';
import Employee from './employee';
// const Person = require('./person').Person;

console.log('My name', TRAINER_NAME);
console.log('My email', TRAINER_EMAIL);

let p1 = new Person();
let p2 = new Person('John');
let p3 = new Person('Vinod', 'Bangalore');

p1.print();
p2.print();
p3.print();

let e1 = new Employee(12, 'Ramesh', 'Chennai', 45000);
e1.print();