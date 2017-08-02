
/* 
    Regular Expression Syntax:
    /pattern/attributes
    use it with: split, replace, match.. etc
    Attributes List:
    [ i ] ->    Case Insensitive
    [ g ] ->    Global Search
    [ m ] ->    Multi Line Search
    Brackets use:
    [...] -> Character
    [^...] -> Inverse of Character
    [a-z] -> Small Letters Range
    [A-Z] -> Capital Letters Range
    [0-9] -> Numbers Range
    [^0-9] -> Not Numbers
    [A-g] -> Range[A-Z] & Range [a-g]
    [0-9a-g] -> Double Range
    Quantifiers:
    Letter+ -> Word Contain One Letter
    Letter{Number} -> Word Contain Number Letter
    Letter{Number, Number} -> Word Contain Number Or Number of a specified Letter
    Letter{Number,} -> Word Contain qt Least that Number
    
*/

var string = "Elzero Web School",
    result = string.replace(/L/ig, "@");

console.log(result);

var sentence = 'Hello World 009',
    answer = sentence.replace(/[0-8a-g]/g, '@');

console.log(answer);

var jomla = "I Love Elzeero Weeeb School",
    jomla2 = jomla.replace(/e{2,}/gi, '@');

console.log(jomla2);