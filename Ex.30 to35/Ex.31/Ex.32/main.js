//Array of Current Users
var current_users = ["Ali", "Raaz", "Seema", "Saima", "Marzia"];
//Array of New Users
var new_users = ["Abrish", "Wajdan", "Raaz", "Shabbir", "Ali"];
//Loop through new_useres to check for usesname avaliblity
new_users.forEach(function (new_one_user) {
    //Makin a Condition for username already exits and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLowerCase(); });
    //Print Defferent messages using If_Else statments
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this Username ".concat(new_one_user, " is availlable"));
    }
});
