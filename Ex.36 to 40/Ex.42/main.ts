let magician : string[] = ["Harry Potter" , "Hernione Granger", "Ron Weasley", "Albus Dumbledore"];
function make_great(macianArray:string[]){

    for(let i=0; i<macianArray.length; i++){

           magician[i] = "the great " + macianArray[i]
    }

}

function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);

    });

}

make_great(magician);
show_magicians(magician);