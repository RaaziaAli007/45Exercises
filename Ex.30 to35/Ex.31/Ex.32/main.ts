//Array of Current Users
let current_users = ["Ali", "Raaz", "Seema", "Saima", "Marzia"]

//Array of New Users
let new_users =["Abrish", "Wajdan", "Raaz", "Shabbir", "Ali"]

//Loop through new_useres to check for usesname avaliblity
new_users.forEach(new_one_user => {

    //Makin a Condition for username already exits and save in our_condition variable
let our_condition =current_users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLowerCase())

//Print Defferent messages using If_Else statments
if(our_condition){
     console.log(`sorry ${new_one_user} is already taken`)
}else{
    console.log(`this Username ${new_one_user} is availlable`)
}

})
    

    

