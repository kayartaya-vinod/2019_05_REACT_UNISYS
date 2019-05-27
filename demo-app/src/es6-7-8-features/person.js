export default class Person {
    constructor(name = 'No-name', city='Unknown') {
        this.name = name;
        this.city = city;
    }

    print() {
        console.log(`Name = ${this.name}
City = ${this.city}`);
    }
}

export const TRAINER_NAME = 'Vinod Kumar';
export const TRAINER_EMAIL = 'vinod@vinod.co';


// module.exports = Person;