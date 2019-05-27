function Person() {
    this.fullname = 'Vinod Kumar';
    this['city'] = 'Bangalore';
}

// Person.prototype --> class for which Person is a constructor
Person.prototype.print = function() {
    console.log(this.fullname + ' lives in ' + this.city);
}

var p1 = new Person();
var p2 = new Person();

delete p2.print;
p1.print();
p2.print();