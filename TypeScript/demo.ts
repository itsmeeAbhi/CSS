//let msg: string = 'Hello, TypeScript!';

// let heading = document.createElement('h1');
// heading.textContent = msg;

// document.body.appendChild(heading);

"Hello"
// console.log("Hello".length);
// console.log("Hello".toLocaleUpperCase());

let count: number;
count = 1;
console.log(count)

let num: number = 6;
console.log(num);

// Array annotation
let arrName: string[] = ['john', 'Jane', 'Peter', 'david'];
console.log(arrName);

// object annotation;

let person: {
    name: string,
    age: Number
};
person = {
    name: 'John',
    age:25
};

console.log(person.name);
console.log(person.age);

// Function arguments & return types

let emp: object;
emp = {
    fname:'John',
    lname: 'Doe',
    age:25
};
console.log(emp);

enum Month {
    Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
};
function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Jun));