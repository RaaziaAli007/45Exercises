let magician : string[] = ["Harry Potter" , "Hernione Granger", "Ron Weasley", "Albus Dumbledore"];

function copyArray(arr: string[]){
   return [...arr]
}


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

const copyMagicianArray = copyArray(magician)

make_great(copyMagicianArray);

console.log("\nthis is my orignal array:");
show_magicians(magician);

console.log("\nthis is my orignal array:");
show_magicians(copyMagicianArray);
