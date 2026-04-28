//! SHALLOW COPY AND DEEP COPY
// let obj1 = {
//   id: 1,
//   name: "Raj",
// };

 // let obj2 = obj1; //! both poinst to same reference
 // let obj2 = { ...obj1 }; //! SHALLOW COPY - WAY 1
// let obj2 = Object.assign({}, obj1); //! SHALLOW COPY - WAY 2

// obj2.name = "Rahul";

// console.log(obj1);
// console.log(obj2);

//! DEEP COPY EXAMPLE
// let student1 = {
//   id: 1,
//   name: "John Doe",
//   address: { city: "Delhi" },
// };

 // let student2 = { ...student1 };//! This is Shallow Copy
// let student2 = structuredClone(student1); // ! DEEP COPY

// student2.name = "Rahul";
// student2.address.city = "Noida";

// console.log(student1);
// console.log(student2);

// import lodash from 'lodash';


// let obj1 = {
//     id: 1,
//     name: 'John Doe',
//     address: { city: "Delhi", demo: function() {} },
    
// };

//let obj2 = {...obj1}; // shallow copy
//let obj2 = structuredClone(obj1); // deep 
// structuredClone(obj1) se fn ko deep copy nhi kar skte
//! ye upar wale dono normal method h inme fn copy nhi hota error dega

//? fn ko copy karne ke liye lodash library use karte h 
// let obj2 = lodash.cloneDeep(obj1);
// fn ko deep copy karne ke liye cloneDeep use karna hota hai
// ye ek third party package hota hai jo ki lodash library ke andar hai

// let obj2 = lodash.clone(obj1); // shallow ke liye use karte hai
//obj2.name = "anurag";
// obj2.name = "anurag"
// console.log(obj1);
// console.log(obj2);