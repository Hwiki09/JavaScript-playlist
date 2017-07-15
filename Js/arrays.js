// Arrays
// Arrays are 0 based Elements

// var friends = new Array("Oubaye", "Adel", "Mohamed");
var friends = [" Oubaye","Rafik","Zakaria"];
console.log(friends[1]);
if (Array.isArray(friends)) {
    console.log("This is an Array");
} else {
    console.log("This is not an Array");
}

console.log(friends.length); // Get the Length
friends.length = 2; // Set the Length
console.log(friends.length);
console.log(friends);
friends = friends.toString();
console.log(friends);

var myDate = new Date(),
    myString = myDate.toLocaleString();
console.log(myDate);
console.log(myString);
// There is Also JOIN Function to converte an Array to a String
// friends = friends.join("-");

// Inserting Elements
var amis = ["Karim", "Mehdi", "Youcef"];
amis[3]= "Anes";
console.log(amis);
amis[amis.length] = "Khaled"; // Add the element is the end of the Array
console.log(amis);
amis.push("Rabei"); // PUSH -> Add the element is the end of the Array
console.log(amis);
// amis.unshift = "Brahim"; // UNSHIFT -> Add the element is the end of the Array
console.log(amis);
amis.splice(2,0,"Sidahmed")  // splice(index, how many item to delete, Item1, Item2, Item3)
console.log(amis);

amis.pop();  // Delete the last item
console.log(amis);
amis.shift(); // Delete the first item
console.log(amis);

amis.sort(); // Ordrae croissant des alphabets
console.log(amis);
amis.reverse(); // Ordrae decroissant des alphabets
console.log(amis);

var slicedAmis = amis.slice(0,2); // Slice the Array
console.log(slicedAmis);

var workFriends = ["kiki","Mourad","Yacine"];

var allMyFriends = friends.concat(workFriends);
console.log(allMyFriends);

// FIXME: 

var amigos = [
            "Kader",
            "Mahmoud",
            "Amine",
            "Lamine",
            "Mounib"
];
var specialAmigo = amigos.indexOf("Mahmoud"); // indexOf("Value to search", Starting index)  / Same thing with lastIndexOf()
console.log(amigos);
console.log(specialAmigo);
console.log(amigos[specialAmigo]);

// document.getElementById("all").innerHTML = "Mes Amigos are " + amigos; FIXME: 
// document.getElementById("special").innerHTML = "My Specials Amigo is " + specialAmigo; FIXME: 




