var userName = ["Ali", "Raaz", "Saima", "Marzia", "Seema"];
userName = [];
if (userName.length === 0) {
    console.log("your Array in Empty we need to find some user!");
}
else {
    // Using ForEach Loop on Array 
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
