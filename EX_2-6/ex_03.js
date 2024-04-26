var personName = "raazAli";
// lowerCase
console.log(personName.toLowerCase());
// uperCase
console.log(personName.toUpperCase());
// titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetter = personName.slice(1).toLowerCase();
var titlecase = firstLetter + restLetter;
console.log(titlecase);
