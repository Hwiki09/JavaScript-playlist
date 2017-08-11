/*
    For Loop Syntaxe:

        for (initialization; Condition; First Expression) {

            // Statement
        }

        initialization: Executed Before The Loop Once
        Condition: Define The Condition To Run The Code
        First Expression: Executed Everytime The Code Run
*/
var j;
for (j = 0; j <= 1000; j = j + 1) {
    console.log(j);
}


var i;
var friends = ["Oubaye", "Anas", "Ahmed", "Rached", "Mourad"];

for (i = 0; i < friends.length; i +=1 ) { // i++ Or i = i + 1

    console.log(friends[i]);
}


/*
    For In Loop :

    for ( Variable in Object ) {
        if ( Object.hasOwnProperty(Variable)){

            // Statement
        }
    }
*/

var myCar = {
    colour:"White",
    model:"Sedan",
    price: "50.000",
    year:"2014"
};
var prop;

for (prop in myCar){
    if(myCar.hasOwnProperty(prop)){
        console.log(prop + ": " + myCar[prop])
    }
}

console.log(myCar.hasOwnProperty("prop")); // Check wither the property is inside the Object or not ! 

// Advanced For Loop

var p = 0;

for (;;) {
    if (p > 10) break;
    console.log(p);
    p++;
}

//FIXME: document.write() -> Doesn't Work !!

// function generateYears(Start, End) {
//     var years;

//     document.write("<select>");
//     for (years = Start; years < End; years++) {

//         document.write("<option value=\"" + years + "\">" + "</option>")
//     }
//     document.write("</select>");
// }
    
// generateYears(1900, 2017);

/*
    While Syntax:
        while (Condition) {
            Statement
        }
*/

var k = 0;

while (k <= 100) {
    console.log(k);
    k += 1;
}

/*
    Do While Syntax:
        Do {
            Statement
        } While (Condition)
*/

var iter = 1;

do {
    console.log(iter);
    iter = iter + 2;
} while (iter < 20)

/* Break, Continu & Label */

var x,
    y;

MainLoop:
for (x = 1; x <= 5; x++) {

    ChildLoop: 
    for (y = 15; y < 20; y++) {
        if (y === 17) {
            continue ChildLoop;
        }
        console.log(x + " => " + y);
    }
}