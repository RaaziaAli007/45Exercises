// Making a Array  of Contries and Print its Orignal Oder
let countriesTovist:string[] = ["China","Denmark", "Brazil", "Argentina", ];
console.log("orignal oder", countriesTovist);

//Print the Array in tha Alphabatical Oder without Modifying tha Actual Array list  
console.log("Alphabaticl oder:", [...countriesTovist].sort());

//show that the array in still in its orignl oder
console.log("still in orignal oder:", countriesTovist);

//Print Array in Reversed Order Without Modifying the Actual Array Llist
console.log("Reverse oder:", [...countriesTovist].reverse());

//show that the array in still in its orignl oder
console.log("still in orignal oder:", countriesTovist);

//We haveChanged the orignal Array oder Now
console.log("Orignal Array Reversed:", countriesTovist.reverse());

//print the array to  show that its back to its orignal oder
console.log("Back to original oder:", countriesTovist.reverse());

//print the array to show that its oder has been changed in Alphabetical oder
console.log("sorted in Alphabetical oder:",countriesTovist.sort());

//We haveChanged again the orignal Array oder Now in reverse oder again
console.log("Orignal Array Reversed Again:", countriesTovist.reverse());



