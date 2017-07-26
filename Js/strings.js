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
console.log(myString2.search(/LovE/i)); // (i) sensitive letters !! 

/*
    Split: split( Separator, Limit )
    Slice: slice( Start [Required], End [Optional])
    SubStr: SubStr( Start [Required], End [Optional])
    SubString: SubString( Start [Required], End [Optional])
*/ 