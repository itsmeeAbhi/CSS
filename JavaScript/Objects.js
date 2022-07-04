// const car = {
//     name: "Verna",
//     brand: "hyundai",
//     price: 10
// };
// console.log(car["name"] + " " + car.price);
// console.log(typeof name);

// const student = {
//     name: "Avinash", age: 25, marks:{
//         Maths: 100,
//         Programming:100
//     },
// };
// console.log(student["marks"]["Maths"]);
// console.log(student.marks.Maths);

// const person = {
//     name:"john", age:27, gender:"Male",
//     greet: function () {
//         console.log("Hello" + " "+ person.name)
//     }
// };
// person.greet();
// console.log(person.age);

// let num = 45.35;
// // let res = parseInt(num);
// let res = parseFloat(num);
// console.log(res);

// // Adding methods in an object

// let employee = {};
// employee.id = 1001;
// employee.name = "Abhi";
// employee.doj = new Date(2022,07,01);
// employee.greet = function() {
//     console.log("Hello"+" "+ employee.name +" Your Id is " + employee.id +" and your Doj is"+ employee.doj) 
// }
// employee.greet();

// const name = "w3schools";
// let text = " ";
// for(const x of name){
//     text += x ;
// }
// console.log(text);

function mynum() {
    let n = 0;
    return {
        next: function(){
            n +=10;
            return{value:n, done:false};
        }
    };
}
const n = mynum();
console.log(n.next());