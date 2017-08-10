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


/*
    Children Elements:
        childElementCount: Predifinied Function To Count Elements (We Can Use Children.length) 
        Children: Show Only Elements
        ChildNodes: Show Elements, Comments & Text

        [first/last]Child: Shows Elements, Comments & Text
        [fisrt/last]elementChild: Shows Only Elements  | #IMPORTANT Or We Can Access to any Element by 'childNodes[index]'
*/

var myMainDiv = document.getElementById('main');
console.log(myMainDiv.children, myMainDiv.children.length);
console.log(myMainDiv.childNodes ,myMainDiv.childNodes.length);
console.log(myMainDiv.children[0]); // Show the first element
console.log(myMainDiv.childNodes[0]); // Show the first Text
console.log(myMainDiv.childElementCount);

console.log(myMainDiv.firstChild);
console.log(myMainDiv.firstElementChild);
console.log(myMainDiv.lastChild);
console.log(myMainDiv.lastElementChild);

