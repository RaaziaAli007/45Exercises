function show_magicians(magicions: string[]): void{

    for (const magicion of magicions){
        console.log(magicion.charAt(0).toUpperCase() + magicion.slice(1));
    }

}

const magicion: string[] = ["Ali", "Raaz", "Seema"];
show_magicians(magicion)