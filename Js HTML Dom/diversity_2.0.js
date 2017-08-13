/*
    Style:
        Element.style.property = 'value'

    Create: 
        Element
        textNode
        Comment
*/

// Style
var mainDiv = document.getElementById("main");
mainDiv.style.backgroundColor = 'red';
mainDiv.style.padding = '10px';
mainDiv.style.color = 'Black';
mainDiv.style.fontFamily = 'Consolas';

// inputEncoding | lastModified | URL

console.log(document.inputEncoding);
console.log(document.lastModified);
console.log(document.URL);

// Create: Element, textNode, Comment
var my1stComment = document.createComment('This is The 1st JavaScript Comment'); // Create a Comment
document.body.appendChild(my1stComment); // Append to Body
var myElement = document.createElement('p'); // Create a Paragraph Element
document.body.appendChild(myElement); // Append it to Body
var myText = document.createTextNode('Im a Text'); // Create a Text
myElement.appendChild(myText);  // When The Variable is Created -> No more need to write "document" befor the element !! // Append it to P
var my2ndComment = document.createComment('This is The 2nd JavaScript Comment'); // Create a Comment
document.body.appendChild(my2ndComment); // Append to Body