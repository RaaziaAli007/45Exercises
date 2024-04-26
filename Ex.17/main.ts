// Creatin a Guest List Array
let guestList = ["Raaz", "Seema", "Marzia", "Rafey"];

// Makin arible for guest  who cant come
let dontCome = guestList[0];

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
let midleIndex: number = Math.floor (guestList.length / 2);

// Adding a new guest to middle index of array 
guestList.splice(midleIndex, 0, "Abrish");

// Print Massage of Updatd List 
console.log("Updated List of Guest");

// Sending a invitation message to our guests one ny one with thier names  
guestList.forEach(oneguest => console.log(`salam ${oneguest}, Wold you like to dinner with me`));

// inform that only two guests can b invited  for dinner
console.log("Unfortunately, the new dinner table wont arrive on time,so I can only invite two Guests to dinner with me");

//Using while-loop to remove guests from the arrey until only two names remain
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} Icant invite you to dinner`);
}
// sending a invitation to the last two guest on the list
console.log("Invitations to last 2 Guests");

guestList.forEach(lasttow => console.log(`Lukly ${lasttow}, you are invited to dinner`));

//Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);