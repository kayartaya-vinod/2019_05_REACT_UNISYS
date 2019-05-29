
function createPerson(name, city) {

    let __name = 'John Doe';
    let __city = 'Unknown';

    
    function Person(name, city) {
        __name = name;
        __city = city;
    }
    Person.prototype.print = function(){
        console.log(`${__name} lives in ${__city} city`)
    };
    Person.prototype.setName = (name)=>{
        __name = name;
    }
    Person.prototype.setCity = (city)=>{
        __city = city;
    }

    return new Person(name, city);
}



let p1 = createPerson('Vinod', 'Bangalore');
p1.name = 'Kumar';
p1.__name = 'Ramesh';
p1.print();
p1.setName('Vinod Kumar');
p1.setCity('Bengaluru');
p1.print();