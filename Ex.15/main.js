var guestList = ["Raaz", "Seema", "Marzia", "Rafey"];
var dontCome = guestList[0];
console.log(dontCome, "Nhi a sakti");
guestList.splice(0, 1, "Shabbir");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would u like to dinner with me?")); });
