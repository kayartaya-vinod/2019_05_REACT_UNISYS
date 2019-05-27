sayHello();

// loaded in the VM in advance; not part of the execution
function sayHello() {
    console.log('Hello, world!');
}

// the function comes to existence only during execution time
var greet = function() {
    console.log('Hello, friend!');
}

greet();