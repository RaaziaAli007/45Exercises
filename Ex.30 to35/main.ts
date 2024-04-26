// Creating a Array
let userNames = ["Ali", "Sana", "Saima", "Admin", "Sadaf"];
    
// Using ForEach Loop on Array 
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
