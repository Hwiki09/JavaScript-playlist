/*
    Siblings:
        nextSiblings: Includes [Comments, Text & Elements]
        nextElementSibling: Includes [Only Elements]
*/

var myMainDiv = document.getElementById("main");
console.log(myMainDiv.childNodes[1].nextSibling);
console.log(myMainDiv.childNodes[1].nextElementSibling);
console.log(myMainDiv.childNodes[2].previousSibling.textContent = 'This Text Was Changed By JavaScript');