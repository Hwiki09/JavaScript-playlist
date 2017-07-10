/* globalconsole, alerte*/ 

/*
function sayHi() {
    "use strict";

    var myName = "Oubaye"
        if (myName == "Oubaye") {
            alert("It's me !")
        }else {
            alert("It's not me !")
        }
    alert("Say Hi !");
}
sayHi();
*/
/*
function myAgeInHours() {
    "use strict";
    var myName = "Oubaye",
        myAge = "21";
        
        return myAge * 24 * 365;
}

document.getElementById("test").innerHTML = "Your age in Hours is " + myAgeInHours();
*/
/*
function myAgeInDays(myAge) {
    "use strict";

    return alert ( "Your age in Days is " + myAge * 365 + " Days");
}

function myName2(firstname,middlename) {
    "use strict";
        return "Hello " + firstname + " " + middlename  + " How r u today ?"
}

document.getElementById("test").innerHTML = myName2("Oubaye", "Rouaki")

function makeDiscount(price) {
    "use strict";
        var discount = 200;
        return price - discount ;
}

var dynamicPrice = prompt("Whats Your Age ?");
document.getElementById("test2").innerHTML = makeDiscount(500);

     Self Invoke  

    (function sayHello() {
        alert("Hello World !");
    })();
*/
 /*
function converteDzdToEuro() {

    "use strict";

    var amount = document.getElementById("Euro").value,
        result = amount * 19.5,
        message = document.getElementById("message");

        if (amount === "") {
            message.innerHTML = "This Field Can't Be Empty"
        }
}
*/

/*
var season = prompt("What is the best season for you ?");

switch (season) {
    case "Winter":
        alert("Winter is too Cold");    
        break;
    case "Summer":
        alert("Summer is too Hot");    
        break;
    case "Spring":
    case "Autumn":
        alert("This is an Amazing Season !")
        break;

    default:
        alert("You didn't enter a season");
        break;
}
*/
/*
var x = 1;  // Global Variable
function changeXto2() {
    "use strict";
     x = 2
}
function changeXto3() {
    "use strict";
    var x = 3 // Local Variable
}
console.log(x);
changeXto2();
console.log(x);
changeXto3();
console.log(x);
*/
var y = 1;
function testParent() {
    "use strict";
    var y = 5;

    function testChild() {
        var calc = y + 2;

        console.log(calc);
        console.log(y);
    }
    console.log(y);
    return testChild();
}
testParent();
console.log(y + 2);