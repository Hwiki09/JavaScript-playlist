/*
    Element ClassList:    // NOT SUPPORTED IN IE9
        classList.lenght
        classList.item
        classList.contains
        classList.add
        classList.remove
        classList.toggle
*/

var myDiv = document.getElementById('Hi');
console.log(myDiv.classList);
console.log(myDiv.classList.contains('zero'));
console.log(myDiv.classList.item('1'));
console.log(myDiv.classList.length);

var myButton = document.querySelector('button'),
    myHiddenText = document.getElementById('hidden');

myButton.onclick = function () {
    myHiddenText.classList.toggle('show'); // If it Exist Delete it, Wether Create it !
    myHiddenText.classList.add('Classs');  // Add a Class 
}
