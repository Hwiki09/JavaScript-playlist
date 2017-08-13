/*
    Siblings:
        nextSiblings: Includes [Comments, Text & Elements]
        nextElementSibling: Includes [Only Elements]

    Focus: Place The Cursor inside The Inserting Field
    Blur: Place The Cursor Outside The Inserting Field

    Click

    addEventListener('action', function())

    Contains() function

    Client Height/Width:
        Viewable Area
        Inculdes Padding
        No Margin
        No Border
        No Scroll

    Scroll Height/Width:
        Viewable Area + Hidden Area
        Inculdes Padding
        No Margin
        No Border
        No Scroll
*/

// Siblings
var myMainDiv = document.getElementById("main");
console.log(myMainDiv.childNodes[1].nextSibling);
console.log(myMainDiv.childNodes[1].nextElementSibling);
console.log(myMainDiv.childNodes[2].previousSibling.textContent = 'This Text Was Changed By JavaScript');

// Focus & Blur
window.onload = function () {
    document.getElementById('myInput').focus();
}
document.querySelector('button').onclick = function () {
    document.getElementById('myInput').blur();
}

// Click Fucntion
document.getElementById('click').onclick = function () {
    this.style.display = 'none';
}
window.onload = function () {
    setTimeout(function() {
        document.getElementById('click').click();
    }, 2000);   // Wait 2 seconds before clicking the Button
}

//  addEventListener('action', function())
var eatButton = document.getElementById("monster"),
    powerUpButton = document.getElementById("power");

eatButton.onclick = function () {
    document.getElementById("monster1").style.display = "none"; // When eatButton is clicked hide Monster 1
}
powerUpButton.onclick = function () {
    eatButton.addEventListener('click', function () {
        document.getElementById("monster2").style.display = "none";  // When eatButton is clicked after clicking powerUp Button hide the 2 Monsters      
    })
}

// Contains()
var myContainer = document.getElementById("contains"),
    mychild = document.getElementById("myChild");
if (myContainer.contains(mychild)) {
    console.log("We're Good !")
}

// Client Height/Width
var myMainDiv2 = document.getElementById("main2");
console.log(myMainDiv2.clientHeight + "px");
console.log(myMainDiv2.clientWidth + "px");

// Scroll Height/Width
console.log(myMainDiv2.scrollHeight + "px");
console.log(myMainDiv2.scrollWidth + "px");