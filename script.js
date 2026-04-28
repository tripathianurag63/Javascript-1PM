//! PRINTING STATEMENTS

// console.log("External JS"); // (MOST USED)
// document.write("Hello"); // DEPRECATED
// document.writeln("Byee"); // DEPRECATED

//! TOKENS : smallest unit of any programming lang.
// there are 4 types:-
// 1) keywords : reserved words which specific meaning. ex- for,let,var,const...

// 2) identifier : name given to a variables, functions, class etc

// 3) literals : values stored in a variable

// 4) operators : symbol whoch is used to perform some operation on operands

//! DATATYPES
// there are 2 types

//! Primitive - immutable - call by value
// 1) number
// 2) string
// 3) boolean
// 4) undefined
// 5) null
// 6) bigint
// 7) symbol

//! Non-Primitive - mutable - call by reference
// 1) object
// 2) array
// 3) function

//! EXAMPLE OF MUTABLE AND IMMUTABLE
// var str = "Hello";
// str[0] = "A";
// console.log(str); // Hello

// var arr = [10, 20, 30];
// arr[0] = 100;
// console.log(arr); // [100, 20, 30]

//! PRIMITIVE DATA TYPES
// var n1 = 10.9;
// console.log(n1); // 10.9
// console.log(typeof n1); // number
// console.log(typeof typeof n1); // string

// var n2 = "Hello world";
// console.log(n2); // Hello world
// console.log(typeof n2); // string

// var n3 = true;
// console.log(n3); // true
// console.log(typeof n3); // boolean

// var n4;
// console.log(n4); // undefined (default value assigned by js-engine)
// console.log(typeof n4); // undefined

// //! INTERVIEW QUESTION -> what is the diff between undefined and not defined ?
 /*
 undefined is a literal which is assigned by the js-engine to variables if the varible is not initialized

 Not defined is a reference error occured when a variable is not present or declared

 var x;
 console.log(x); // ud

 console.log(y); // Reference err: not defined
 */

// //! INTERVEIW QUE -> Diff between null and undefined?
 // null:- when developer intentionally wants to keep a variable empty
 // undefined:- default value provided by js-engine

// var n5 = null;
// console.log(n5); // null
// console.log(typeof n5); // object

// (-2^53 - 1) to (2^53 - 1)
// var n6 = 9n;
// console.log(n6);
// console.log(typeof n6);

// var n7 = Symbol("Hello");
// var n8 = Symbol("Hello");
// console.log(n7); // Symbol(Hello)
// console.log(n8); // Symbol(Hello)
// console.log(typeof n7); // symbol

// console.log(n7 == n8); // loosely comparison
// console.log(n7 === n8); // strictly comparison

// console.log(10 == "10"); // true
// console.log(10 === "10"); // false

// //! NON-PRIMITIVE DATATYPES

// var arr = [10, 20, 30];
// console.log(arr); // [10,20,30]

// var obj = { name: "John", age: 20 };
// console.log(obj);

// function demo() {
//   console.log("I am demo");
// }
// demo()

//! WAYS TO CREATE A VARIABLE -> 3 Ways -> var,let,const

// var a1;
// console.log(a1); // ud

// a1 = 10;
// console.log(a1); // 10

// var b1 = 20;
// console.log(b1); // 20

// var b1 = 40;
// console.log(b1); // 40

// let x1;
// console.log(x1); // ud

// x1 = 100;
// console.log(x1); // 1000

// let x2 = 200;
// console.log(x2); // 200

// let x2 = 100 //!NOT POSSIBLE

// x2 = 900;
// console.log(x2); // 900

// similar to "final" keyword in java
// const data = "John doe";

//! HOISTING : moving declaration part at the top of the original code internally by js-engine

//! TEMPORAL DEAD ZONE : timeperiod of accessing let/const variable before initialization

// var a = undefined <-- hoisting
// console.log(a);// ud
// var a = 10;
// console.log(a);// 10

// const b;  <-- Temporal Dead Zone (TDZ)
// console.log(b);//! Cannot access 'b' before initialization
// const b = 20;
// console.log(b); // 20

//! TYPES OF VARIABLE -> 2 Types
//! SCOPES OF VARIABLE -> 5 Types

//! 1) GLOBAL VARIABLES : which can be accessed anywhere thougout the code.
//! 2) LOCAL VARIABLES : which can be accessed within a block

// var a = 10; // global variable - global scope
// let b = 20; // global variable - script scope
// const c = 30; // global variable - script scope

// console.log(a);
// console.log(b);
// console.log(c);

// if (100 > 2) {
//   var a = 10; // global variable - global scope
//   let b = 20; // local variable - block scope
//   const c = 30; // local variable - block scope
// }
// console.log(a); // 10 <-- due to global scope

// function demo() {
//   var x = 100; // local variable - local / function scope
//   let y = 200; // local variable - local / function scope
//   const z = 3000; // local variable - local / function scope
// }
// demo()

//! GEC -> Global Execution Context
// it has 2 phases
// 1) Declaration Phase
// 2) Execution Phase

// debugger;
// console.log("Start");
// console.log(a);
// var b;
// console.log(b);
// let x;
// console.log(x, b);
// var a = 100;
// x = 40;
// console.log(a, x);
// const z = 1000;
// a = 20;
// console.log(a, x, b);
// console.log("End");

//! FUNCTIONS :
// There are 10 types of functions:

//! 1) Named Function : a function which has name
//! NOTE: function hoisting is ONLY possible in named function

// greet(); // <--- due to function hoisting

// function greet() {
  // function declaration
//   console.log("I am Named Function");
// }

// greet(); // <--- function call

//! GEC using Named Function
// console.log("Start");
// console.log(a);
// function Demo() {
//   console.log("I am demo");
// }
// console.log(Demo);
// var a;
// Student();
// a = 100;
// function Student() {
//   let fullname = "John Doe";
//   console.log(fullname);
// }
// Demo();
// console.log(a);
// console.log("End");

//! EXAMPLE 2
// console.log("Start");
// greet();
// let a = 20;
// console.log(b);
// function greet() {
//   var a = 100;
//   console.log(a);
// }
// var b = 30;
// function demo() {
//   const c = 30;
//   console.log(c);
// }
// a = 90;
// demo();
// console.log("End");

//! 2) ANONYMOUS FUNCTION : function without name
// function (){}

//! 3) FUNCTION EXPRESSION : used to call anonymous function
// const a1 = function () {
//   console.log("I am Function expression");
// };

// a1();

//! 4) PARAMETRIZED FUNCTION
// n1 and n2 are parameters
// function sum(n1 = 0, n2 = 0) {
//   console.log(n1 + n2);
// }
// sum(10, 20); // here 10 and 20 are arguements

// sum(100);

//! 5) REST PARAMETERIZED FUNCTION
// function demo(a, b, ...c) {
//   console.log(a, b);

//   console.log("Rest", c); //[30, 40, 50, 60, 70]
//   console.log(arguments); // Array-Like Object

//   //! to check array is pure or not --> Array.isArray() --> returns boolean
//   console.log(Array.isArray(c)); // true
//   console.log(Array.isArray(arguments)); // false
// }
// demo(10, 20, 30, 40, 50, 60, 70);

//! 6) NESTED FUNCTION

// //! EXAMPLE 1
// function Parent() {
//   let money = 80000;
//   console.log(money);

//   function Child() {
//     let savings = 2000;
//     console.log(savings);
//   }
//   Child();
// }

// Parent();

//! CLOSURE : it is a temporary memory which is created whenever we use parent function's property inside child function

//! NOTE : Closures are used for data hiding

//! LEXICAL SCOPING : The ability of js-engine to search a variable outside of its current scope

// //! EXAMPLE 2
// debugger
// function Parent() {
//   let money = 80000;
//   console.log(money);

//   function Child() {
//     let savings = 2000;
//     console.log(savings + money);
//   }
//   Child();
// }

// Parent();

//! EXAMPLE 3
// debugger
// function Parent() {
//   let money = 80000;
//   console.log(money);

//   function Child() {
//     let savings = 2000;
//     console.log(savings + money);
//   }

//   return Child;
// }

// let fun = Parent();
// fun();

//! DATA HIDING EXAMPLE
// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log("Count is", count);
//   };
// }
// let f1 = counter();
// f1();
// f1();

//! 7) HIGHER ORDER FUNCTION & CALLBACK FUNCTION
// HOF :- A function which either accept another function as an arguement or returns a function. OR BOTH
// CB :- A function which passes as an arguement to another function.

//! EXAMPLE 1:
// function demo1() {
  // demo1 is HOF --> bcoz it returns a function
//   return function () {};
// }

//! EXAMPLE 2:
// function demo2(fun) {
//    demo2 is HOF --> bcoz it accepts a function as arguement
// }
// demo2(function () {});

//! EXAMPLE 3:
// function demo3(fn) {
//    demo3 is HOF --> bcoz it accepts a function as arguement and it returns a function
//   return function () {};
// }
// demo3(function () {});

//! EXAMPLE :- HOF and CB functions are used in map(), forEach(), find(), filter()...etc

//! 8) IMMEDIATLY INVOKED FUNCTION EXPRESSION ( IIFE )
// IIFE should be called immediatly after the declaration
// NOTE :- IIFE function can be called only once during execution.

// let val = (function () {
//   let count = 0;

//   return function () {
//     count++;
//     console.log("Count is", count);
//   };
// })();
// val()
// val()
// val()

//! 9) ARROW FUNCTION : introduced in ES6, for short syntax

 // WAY 1
// let a1 = () => {
//   console.log("I am Arrow function 1");
// };
// a1();

 // WAY 2 : if no parameter () can be replaced with _
// let a2 = (_) => {
//   console.log("I am Arrow function 2");
// };
// a2();

 // WAY 3 : if only one parameter , ignore ()
// let a3 = (x) => {
//   console.log("I am Arrow function 3", x);
// };
// a3(10);

 // WAY 4 : if only one line of code , ignore {}
// let a4 = () => console.log("I am Arrow function 4");
// a4();

 // WAY 5 : Explicit return, {} and "return" keyword is mandatory
// let a5 = () => {
//   return "I am Arrow function 5";
// };
// console.log(a5());

// WAY 6 : Implicit return, {} and "return" keyword not required
// let a6 = () => "I am Arrow function 6";
// console.log(a6());

 // WAY 7 : Implicit return using (), {} and "return" keyword not required
// let a7 = () => ({ name: "John" });
// console.log(a7());

//! 10) CONSTRUCTOR FUNCTION : used to create objects
// function Student(studentName) {
//   this.name = studentName;
// }

// let s1 = new Student("John");
// let s2 = new Student("Jane");
// console.log(s1); // Student {name: 'John'}
// console.log(s2); // Student {name: 'Jane'}

//! OBJECT : used to store data in key and value pair

// In JS we can create object in 3 ways
//! 1) using object literals <--- MOSTLY USED
// let obj1 = { name: "John" };

//! 2) using Object constructor
// let obj2 = new Object({ name: "Jane" });

//! 3) using Constructor function

//! CRUD using objects

 // CREATE
// let Employee = {
//   id: 1,
//   firstName: "John",
//   lastName: "Doe",
// };
// console.log(Employee);

// //! READ :- we can read in 2 ways

 // 1) using dot operator
// console.log(Employee.firstName); // John

 // 2) using square brackets :- ObjectName["key"]
// console.log(Employee["lastName"]); // Doe

// //! ONLY WAY TO ITERATE AN OBJECT using forIn loop
// for (let x in Employee) {
//   console.log(Employee[x]);
// }

// //! UPDATE :- objectName.existingKey = newValue
// Employee.id = "1Ac2";
// console.log(Employee);

// //! NEW KEY :- objectName.newKey = newValue
// Employee.salary = 60000;
// Employee.demo = "I am Demo";
// console.log(Employee);

// //! DELETE :
// delete Employee.demo
// console.log(Employee);



//! OBJECT METHODS
// let obj = {
//     id:1,
//     name: "anurag",
//     salary: 10000,
    
// }

//! Object.keys()
// only get keys
// let keys = Object.keys(obj);
// console.log(keys);


//! Object.values()
// only get values
// let values = Object.values(obj);
// console.log(values);

//! Object.entries()
// key and value dono milega but array ke form me
// ye obj ko array me convert karne ke liye use hota h
// let entries = Object.entries(obj);
// console.log(entries);


//! Object.fromEntries()
// ye array ko wapas se obj me convert karta hai
// let convertedObj = Object.fromEntries(entries);
// console.log(convertedObj);


//! OBJECT DESTRUCTURING
//let student = {
//    id:1,
//    name: "anurag",
//    salary: 10000,
    
//}
//console.log(student.name);
// aise bar bar dot kaha tak likhege data nikalne ke liye
// isliye dekhne ke liye object destructuring use hota hai
// mtlb ek variable bnaya aur usme sari values ko copy kar liya
// ab directly un values ko likh skte h bar bar dot karke nhi karna padega
//let {id, name, salary} = student; // key name same hona chahiye agar same nhi hua to error aayega
//console.log(id, name, salary);

// let employee = {
//     id: 2,
//     fullName: {
//         firshName: "John",
//         lastName: "Doe",
//     },
//     age: 25,
//     address: {
//         city: "Delhi"
//     }
// };

// let {fullName: {firshName}, address: {city}} = employee; // nested obj destructuring

// console.log(firshName, city);

// let obj1 = {
//     username: "anurag",
//     password: "123"
// };
// let {username, salary = null, designation: desg = "NA"} = obj1;
// agar do obj h aur dono me key same h to fr aise colon laga kar uska name change karna padega tabhi access kar skte h
// aur agar koi default value pass karna chahe to wo "" me pass kar dete h
// console.log(username, salary, desg);

// let obj2 = {
//     username: "JOhn",
//     salary: 80000,
// };

// let {username: name, salary: sal} = obj2;
// console.log(name,sal);

//! ARRAY DESTRUCTURING

// let arr1 = [10,20,30,40,50];
// isme sequence same hona chahiye but obj me aisa jaruri nhi h kyuki obj me indexing nhi hota
// let [a1, a2, a3, a4 , a5] = arr1;

// let arr2 = [100, 200, 300, 400, 500];
// let [ , b1, , ,b2] = arr2;
// agar element skip karna ho to comma laga kar chhod denge
// console.log(b1,b2);


// let arr3 = [1000, 2000, [10,["Hello", "Bye"],20]];
// js me array heteregeneous h
// we have to fetch 1000, 10, bye, 20
// let [x1, ,[x2, [ , x3], x4]] = arr3;
// console.log(x1,x2,x3,x4);

//! ARRAYS


//! THERE ARE 2 WAYS
//! 1)array literals <----- mostly used
// let arr1 = []
// let arr1 = [10]; // isme agar ek ele doge to wo ele hi store hoga naa ki size
// console.log(arr1);

// //! 2) using array constructors
//let arr2 = new Array();
// let arr2 = new Array(10); // agar isme sirf ek ele pass karoge to ye use size declare karega naa ki ele
// isme 10 size ki array ban jayegi
// console.log(arr2);


//! ARRAY METHODS
// let arr1 = [10, 20, 30, 40, 50];
// console.log(arr1);

//! push() :Appends new elements to the end of an array, and returns the new length of the array.
// arr1.push(60, 70, 80);
// console.log(arr1);

//! pop(): Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// arr1.pop();
// console.log(arr1);

//! unshift(): Inserts new elements at the start of an array, and returns the new length of the array.
// arr1.unshift(1000, 2000, 3000);
// console.log(arr1);

//! shift() : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// arr1.shift();
// console.log(arr1);

//! splice(index, deleteCount, newElements)
// NOTE : it modifies the original array
// let arr2 = [10, 20, 30, 40, 50];

//! remove
// arr2.splice(2, 2);
// console.log(arr2); // [10, 20, 50]

//! add
// arr2.splice(1, 0, 15);
// console.log(arr2); // [10, 15, 20, 30, 40, 50]

// //! add and remove
// arr2.splice(1, 3, 100);
// console.log(arr2); // [10, 100, 50]

