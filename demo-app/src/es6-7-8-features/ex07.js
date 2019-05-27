// object destructuring (creating variables using object properties) 
// and structuring (creating objects using variables having same name as properties)

let p1 = {
    name: 'Vinod',
    email: 'vinod@vinod.co',
    city: 'Bangalore',
    phone: '9731424784'
};

// es5 and prior
// var name = p1.name;
// var email  = p1.email;

// es6 and later:
let { name, email, city, state } = p1;
console.log(`name=${name}, email=${email}, city=${city}, state=${state}`);

greet(p1);
greet({ name: 'Shyam' });
greet({});

function greet({ name = 'friend', city = 'your city' }) {
    console.log(`Hello ${name}, how's weather in ${city}?`);
}

let x = 10, y = 20, w = 5.5, h = 4.5;

// ES5 and prior: object creation using variables that have the same name as properties
let rect1 = {
    x: x,
    y: y,
    w: w,
    h: h,
    color: 'blue'
}
// ES6+
let rect2 = { x, y, w, h, color: 'red' };

console.log(rect1);
console.log(rect2);