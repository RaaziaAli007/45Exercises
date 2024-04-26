//Define Veriables
let apple = "apple";
let uppercaseapple = "APPLE"
let ten = 10;
let twenty = 20; 
let fruits = ["apple", "banana", "orange",];

//Test for equality and inequality with string
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?")
console.log(apple !="apple");

//Tests using Lowercase Funtion
console.log("\nIs APqual to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase()== "apple");


console.log("\nIs APqual to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() != "apple");

// Numerical tests
//Equal to 
console.log("\n is ten equal to  twenty?");
console.log(ten == twenty);

//not Equal
console.log("\nis ten is not equal to twenty?");
console.log(ten != twenty);

// greater then
console.log("\nis ten is greater then zero?");
console.log(ten > 0);

// Less then
console.log("\nIs twenty is less then 10");
console.log(twenty < 10);

//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less then or equal to 
console.log("\n twenty less then or equal to 10");
console.log(twenty <= 10);

// Tests using "and" & "or" Operetors

//Using  && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// Using || (or)
console.log("\n 20 is greater than 50 OR 20 IS EQUAL TO 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 IS  not EQUAL TO 20");
console.log(20 > 50 || 20 != 20);

// Test weather an item is inlude in array
console.log("\nIs orange inculde in my fruits array");
console.log(fruits.includes("orange"));

console.log("\nIs orange not inculde in my fruits array");
console.log(!fruits.includes("orange"));







