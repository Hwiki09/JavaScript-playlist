/*
    Call Elements:
        [1]- document.getElementById()
        [2]- document.getElementsByTagName()
        [3]- document.getElementsByClassName() | Not Compatible with IE8 | Call all Objects with That Class | Don't Forget [Index]
        [4]- document.querySelectorAll() | Not Compatible with IE8 | use the Nesting model | Don't Forget [Index]
*/

var myElement = document.querySelectorAll('div.test')
    // document.getElementsByClassName('test'); 
    // document.getElementsByTagName('p');
myElement[1].innerHTML = "This text is written with JavaScript";

