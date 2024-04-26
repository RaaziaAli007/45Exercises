var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Harry Potter", "Hernione Granger", "Ron Weasley", "Albus Dumbledore"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(macianArray) {
    for (var i = 0; i < macianArray.length; i++) {
        magician[i] = "the great " + macianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log("\nthis is my orignal array:");
show_magicians(magician);
console.log("\nthis is my orignal array:");
show_magicians(copyMagicianArray);
