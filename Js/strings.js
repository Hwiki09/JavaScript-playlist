var myString = "I Love \"Javascript\"";
console.log(myString);
console.log(typeof (myString));
console.log(myString.length);

var myNumber = 109;
console.log(myNumber);
console.log(typeof (myNumber));
var myNewNumber = myNumber.toString(); // Or we can use "String();" Function
console.log(typeof (myNewNumber));
console.log(myNewNumber);

var myString2 = "I'm In Love With JavaScript <3";
console.log(myString2.search(/LovE/i)); // (i) insensitive letters !! 

/*
    Split: split( Separator, Limit )
    Slice: slice( Start [Required], End [Optional])
    SubStr: SubStr( Start [Required], End [Optional])
    SubString: SubString( Start [Required], End [Optional])
*/ 

var myJavascript = "I Love Javascript & JSON",
    myStringg = myJavascript.substring(17,7); // Swap the biggest number with the small one

console.log(myJavascript);
console.log(myStringg);

/*
    charAt(index)
    charCodeAt(index) -> Unicode
    replace(value, new value)
*/

var js = "I Love Javascript, Javascript is too Fun",
    myJs = js.charCodeAt(5),
    myJs2 = js.replace(/Javascript/gi, "Swift"); // Regular expression g: Global, i: insensitive
console.log(myJs);
console.log(myJs2);

var myConcat = "Hello, I love ".concat(" ", "Javascript & Python", "wiht some Chocolate.. !");
console.log(myConcat);

var myMixedString = "JavScriPt",
    lowerCase = myMixedString.toLocaleLowerCase();
console.log(lowerCase);

var mm = "AlgEriA".toUpperCase();
console.log(mm);

var trimmedString = "       Hello World!   ";
console.log(trimmedString);
console.log(trimmedString.trim());

var link = "Google";
console.log(link.link("https://www.Google.com"))


var monNumero = 12000,
    monNvNumero = monNumero.toString().replace(/0/g, 1).split("");
console.log(typeof(monNumero));
console.log(monNumero);
console.log(typeof(monNvNumero));
console.log(monNvNumero);

