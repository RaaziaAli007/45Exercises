// Creatin a Guest List Array
var guestList = ["Raaz", "Seema", "Marzia", "Rafey"];
// Makin arible for guest  who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Nhi a skti");
// Add or Remove frome Guest List Array
guestList.splice(0, 1, "Shabbir");
// Massage print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Add a new value at starting index of array
guestList.unshift("Ali");
// Adding a new value at ending index of array
guestList.push("Wajdan");
// Get a middle index of our guest list array
var midleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array 
guestList.splice(midleIndex, 0, "Abrish");
// Print Massage of Updatd List 
console.log("Updated List of Guest");
// Sending a invitation message to our guests one ny one with thier names  
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", Wold you like to dinner with me")); });
