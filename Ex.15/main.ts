let guestList = ["Raaz", "Seema", "Marzia", "Rafey"];

let dontCome = guestList[0];

console.log(dontCome, "Nhi a sakti");

guestList.splice(0, 1, "Shabbir");

guestList.forEach(guest => console.log(`salam ${guest}, would u like to dinner with me?`));