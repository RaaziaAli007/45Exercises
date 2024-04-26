const personName: string = "raazAli";

// lowerCase
console.log(personName.toLowerCase());

// uperCase
console.log(personName.toUpperCase());


 // titlecase
 let firstLetter: string = personName.charAt(0).toUpperCase();
 let restLetter: string = personName.slice(1).toLowerCase();

 let titlecase = firstLetter + restLetter;

 console.log(titlecase);
  


