// es6 template strings

// prefer 'const' over 'let', and 'let' over 'var'

const name = 'Vinod';
const email = 'vinod@vinod.co';
const phones = ['9731424784', '9844083934'];

const message = `My contact details:
====================================
Name             = ${name}
Email            = ${email}
Primary phone    = ${phones[0]}
Secondary phone  = ${phones[1]}
====================================`;

console.log(message);

function tagFunction(strings, ...values) {
    console.log(arguments);
}

var msg = tagFunction`My contact details:
====================================
Name             = ${name}
Email            = ${email}
Primary phone    = ${phones[0]}
Secondary phone  = ${phones[1]}
====================================`;