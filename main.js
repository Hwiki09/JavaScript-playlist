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

function converteDzdToEuro() {

    "use strict";

    var amount = document.getElementById("Euro").value,
        result = amount * 19.5,
        message = document.getElementById("message");

        if (amount === "") {
            message.innerHTML = "This Field Can't Be Empty"
        }
}