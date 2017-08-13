/*
    Siblings:
        nextSiblings: Includes [Comments, Text & Elements]
        nextElementSibling: Includes [Only Elements]

    Focus: Place The Cursor inside The Inserting Field
    Blur: Place The Cursor Outside The Inserting Field

    Click
*/

var myMainDiv = document.getElementById("main");
console.log(myMainDiv.childNodes[1].nextSibling);
console.log(myMainDiv.childNodes[1].nextElementSibling);
console.log(myMainDiv.childNodes[2].previousSibling.textContent = 'This Text Was Changed By JavaScript');

window.onload = function () {
    document.getElementById('myInput').focus();
}
document.querySelector('button').onclick = function () {
    document.getElementById('myInput').blur();
}

document.getElementById('click').onclick = function () {
    this.style.display = 'none';
}
window.onload = function () {
    setTimeout(function() {
        document.getElementById('click').click();
    }, 2000);   // Wait 2 seconds before clicking the Button
}