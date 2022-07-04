function Person() {
    this.name = "john",
    this.age = 23
}
const people = new Person();

console.log(people.name);

//Multiple constructors

function Emp(){
    this.name = "Abhi",
    this.id = 1001;
     this.greet = function(){
        console.log("Hello"+" "+ emp.name)
     }
}
const emp = new Emp();
//emp.greet();

// function parameters

function Person (Name, Age, Gender) {
    this.name = Name;
    this.age = Age;
    this.gender = Gender;
}

Person.prototype.id = 1001;
const p1 = new Person("Abhi",23,"Male");
console.log(p1.name+ " " + p1.id);
console.log(Person.prototype)

// Getters & Setters

const student = {
    fname:"Abhishek",
    get getName(){
        return this.fname;
    },
    set setName(newName){
        this.fname = newName;
    }
};

console.log(student.getName);
student.setName = "Avinash"
console.log(student.fname)

const set1 = new Set([1,"Hello",{count:true}]);
console.log(set1);

// Classes in JS
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }