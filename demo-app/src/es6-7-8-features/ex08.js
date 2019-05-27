// spread operator
// can be used with objects or arrays

let p1 = {
    name: 'Vinod',
    email: 'vinod@vinod.co',
    city: 'Bangalore',
    phone: '9731424784'
};

let p2 = p1; // two references; one object
// pre ES6:
let p3 = {}
for (let prop in p1) {
    p3[prop] = p1[prop];
}

// ES6+
let p4 = { ...p1, phone: '9844083934', website: 'vinod.co' };

p2.city = 'Bengaluru';

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

let nums1 = [12, 39, 45, 67, { name: 'vinod' }];
let nums2 = [...nums1, 100, 200];

nums1[4].name = 'Kumar';
nums1.push(999);
console.log(nums1);
console.log(nums2);

console.log(subtotal('sum', 10, 20, 30, 40));
console.log(subtotal('avg', 10, 20, 30, 40));
console.log(subtotal('count', 10, 20, 30, 40));

function subtotal(type, ...nums) {
    switch (type) {
        case 'sum':
            return nums.reduce(function (acc = 0, curr) {
                return acc + curr;
            });
        case 'avg':
            return nums.reduce(function (acc = 0, curr) {
                return acc + curr;
            }) / nums.length;
        case 'count':
            return nums.length;
        default:
            throw Error('Unknow operation type!');
    }
}