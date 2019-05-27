// constructor
function Book (config = {}) {
    // 'this' is a new Object

    // config = config || {};

    // adding new property 'title' to the newly created object
    this.title = config.title || 'no-title';
    this.price = config.price || 0.0;
}

var b1 = new Book({title: 'Let us C'});
var b2 = new Book({title: 'Java Unleashed', price: 799});
var b3 = new Book();

console.log(b1);
console.log(b2);
console.log(b3);
