// Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirts`)
}

//Calling a function with by-defualt values
make_shirt();

// calling a function now with Medium size and defualt message
make_shirt("Medium")

// Calling a Function now Small size and Different Print Message
make_shirt("Small", "I Love JavaScript")