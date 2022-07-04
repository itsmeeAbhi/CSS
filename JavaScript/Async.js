// function greet(){
//     console.log('Hello world');
// }
// //setTimeout(greet, 2000);
// let intervalId = setTimeout(greet, 3000);
// console.log('ID: ' +intervalId);
// console.log('This message is shown first');


// function showTime(){
//     let date = new Date();

//     let time = date.toLocaleTimeString();
//     console.log(time);
//     let intervalId = setTimeout(showTime);
//     // clearTimeout(intervalId);

// }
// showTime();

// function show(){
//     console.log("abhi");
// }

// setTimeout(show,5000);

// function greet(name, callback){
//     console.log('hi' + ' '+name);
//     callback();
// }
// function callMe() {
//     console.log('I am call back function');
// }
// greet ('Abhi', callMe);

// //  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
  countValue
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    })
    .then(function successValue2() {
        console.log("called again")
    });

