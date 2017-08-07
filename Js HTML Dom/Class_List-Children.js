/*
    Element ClassList:    // NOT SUPPORTED IN IE9
        classList.lenght
        classList.item
        classList.contains
*/

var myDiv = document.getElementById('Hi');
console.log(myDiv.classList);
console.log(myDiv.classList.contains('zero'));
console.log(myDiv.classList.item('1'));
console.log(myDiv.classList.length);