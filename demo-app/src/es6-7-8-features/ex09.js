// arrow function or lambda expressions

let id = setInterval(() => console.log('doing something...', Math.random()), 1000);
setTimeout(() => clearInterval(id), 5000);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// common array functions that take callbacks: filter, map, reduce, forEach

let evens = nums.filter(val => val % 2 === 0);
console.log('evens is', evens);

let squares = nums.map(val => val * val);
console.log('squares is', squares);

let total = nums.reduce((a = 0, c) => a + c);
console.log('total is', total);
