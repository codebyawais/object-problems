// const myName="asad"
// let user1={
//   name:"Awais",
//   // `age`: 23, backticks are  not allowed
//   //only one age can be show
//   // "age":23,
//   // 'age':23,
  
//   // last-age:23 , //NOT ALLOWED
//   "last-age":24 , //NOT ALLOWED
//   lastName:"rafiq",
//   asad:"developer"
// }
// console.log(user1.lastName);
// console.log(user1["last-age"]);
// console.log(user1["lastName"]);

// console.log(user1[myName]);
// console.log(user1["last" + "Name"]);





// let user1={
//   firstName:"Awais",
//   lastName:"rafiq",
// }
// user1.age=26
// user1["is-student "]= true
// console.log(user1);





// let user2={
//   firstName:"Awais",
//   lastName:"rafiq",
//   address:{
//     city:"bangalore",
//     pinCode:"82478932",
//     state:"lahore"
//   }
// }
// console.log(user2);
// console.log(user2.address.pinCode);

// Question: How can you create a simple object with properties?
// let person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer"
// };

// console.log(person);


// Question: How can you access and modify properties of an object?

// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020
// };

// // Accessing properties
// console.log(car.make);  // Toyota
// console.log(car['model']);  // Corolla

// // Modifying a property
// car.year = 2021,
// console.log(car.year);  // 2021

// Question: How can you add a new property to an existing object?
// let laptop = {
//   brand: "Dell",
//   model: "XPS 13"
// };
// // Adding a new property
// laptop.color = "Silver";
// console.log(laptop);




// Question: How can you remove a property from an object?

// let book = {
//   title: "JavaScript Basics",
//   author: "Jane Doe",
//   pages: 250
// };

// // Deleting a property
// // delete book.pages && book.author;//and not work
// // delete book.title;
// console.log(book);  // { title: "JavaScript Basics", author: "Jane Doe" }



// Question: How can you check if an object contains a specific property?

// let smartphone = {
//   'brand': `Apple`,
//   model: "iPhone 12"
// };

// console.log('brand' in smartphone);  // true
// console.log('color' in smartphone);  // false


// Question: How can you loop through the properties of an object?

// let user = {
//   name: "Alice",
//   age: 25,
//   country: "USA"
// };

// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// Output:
// name: Alice
// age: 25
// country: USA

// let students={
//   name:"awais",
//   class:"bscs",
//   roolNm:67567,
//   roolNm1:67567,
//   roolNm2:67567,
//   roolNm34:67567,
// }
// for( let key in students){
//   console.log(`${key}: ${students[key]}`);
  
// }


// let students={
//   name:"awais",
//   class:"bscs",
//   roolNm:67567,
//   roolNm1:67567,
//   roolNm2:67567,
//   roolNm34:67567,
// }
// for(  indexes in students){
//   console.log(`${indexes}: ${students[indexes]}`);
  
// }





// Question: How can you create a shallow copy of an object?

// let original = {
//   a: 1,
//   b: 2,
//   c:3
// };

// // Cloning using Object.assign()
// let clone = Object.assign({}, original);
// console.log(clone);  // { a: 1, b: 2 }

// // Cloning using spread operator
// let clone2 = { ...original };
// console.log(clone2);  // { a: 1, b: 2 }

// let originalObj={
//   name:"awais",
//   age:23,
//   class:"bscs"
// }
// originalObj.newadd="newadd";

// let clone = Object.assign({},originalObj );

// console.log("original clone",clone);


// let clone2 = {...originalObj}
// console.log("copy of ",clone2);

// let clone3 = {...originalObj}
// console.log("copy of ",clone3);


//Question: How can you merge three or more objects into one?

// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let obj3 = { e: 5, f: 6 };

// // Merging using Object.assign()
// let merged = Object.assign({}, obj1, obj2, obj3);
// console.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }

// // Merging using spread operator
// let merged2 = { ...obj1, ...obj2, ...obj3 };
// console.log(merged2);  // { a: 1, b: 2, c: 3, d: 4 }


// Question: How can you convert an object to an array of its values or key-value pairs?



// let user = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Getting an array of values
// let values = Object.values(user);
// console.log(values);  // ["John", 30, "New York"]

// // // Getting an array of keys
// let keys = Object.keys(user);
// console.log(keys);  // ["name", "age", "city"]

// // // Getting an array of key-value pairs
// let entries = Object.entries(user);
// console.log(entries);  // [["name", "John"], ["age", 30], ["city", "New York"]]







// In JavaScript, an object of arrays is an object
//  where each property contains an array as its value. This structure is useful when you need to group related arrays under a single object.
let studentData = {
  names: ["Alice", "Bob", "Charlie"],
  ages: [20, 22, 21],
  grades: ["A", "B", "A"]
};


// Accessing Elements of in an Objects of Array
// console.log(studentData.names);
// console.log(studentData.ages);
// console.log(studentData.names[0]);
// console.log(studentData.names[1]);
// console.log(studentData.names[2]);
// console.log(studentData.names[3]);// undefined
// console.log(studentData.names);

// Adding a new Student
// studentData.names.push("awais");
// // studentData.ages.push(21);
// studentData.grades.push('f');
// studentData.grades.pop('');//pop can remove the last value of index



// To loop through the arrays inside the object, you can use regular for loops or array methods like forEach.
// studentData.names.forEach(name =>{
//   console.log(name);
// })
// studentData.ages.forEach(age =>{
//   console.log(age);
// })
// studentData.grades.forEach(grade =>{
//   console.log(grade);
// })
// console.log(studentData);




// for(let i=0; i<studentData.names.length; i++){
//   console.log(`Name: ${studentData.names[i]},  Age:${studentData.ages[i]}, grade:${studentData.grades[i]} `);
// }

let courseData = {
  courseNames: ["Math", "Science", "History"],
  studentCounts: [30, 25, 28],
  instructors: ["Mr. Smith", "Ms. Johnson", "Dr. Brown"]
};
// console.log(courseData.courseNames[1]);
// console.log(` Course: ${courseData.courseNames[1]}  `);
// console.log(courseData.studentCounts[1]);
// console.log(courseData.instructors[1]);











// let n = 11;
// if(n%2===0){
//     console.log("the numbr is divisible of 2.");
// }
// else{
//     console.log("the number is divisible by 3");
// }


// let n = 121;
// if(n % 2 === 0){
//     console.log("the numbr is divisible of 2.");
// }

// if(n % 3 === 0){
//     console.log("the number is divisible by 3");
// }


// let userName = '';

// if (!userName) {
//   console.log("Username is empty.");
// } else {
//   console.log("Username is set.");
// }

// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(-1));
// console.log(Boolean(Infinity));
// console.log(Boolean(-Infinity));
// console.log(Boolean(NaN));

// let isLoggedIn = true;
// let isLoggedIn = ``;

// if (isLoggedIn) {
//   console.log("Welcome, user!");
// } else {
//   console.log("Please log in.");
// }

// let arr = [];

// if (arr.length === 0) {
//   console.log("The array is empty.");
// } else {
//   console.log("The array is not empty.");
// }





