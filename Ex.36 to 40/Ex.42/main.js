var magician = ["Harry Potter", "Hernione Granger", "Ron Weasley", "Albus Dumbledore"];
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
make_great(magician);
show_magicians(magician);
