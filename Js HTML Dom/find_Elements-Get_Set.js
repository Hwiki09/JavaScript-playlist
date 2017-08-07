/*
    Call Elements:
        [1]- document.getElementById()
        [2]- document.getElementsByTagName()
        [3]- document.getElementsByClassName() | Not Compatible with IE8 | Call all Objects with That Class | Don't Forget [Index]
        [4]- document.querySelectorAll() | Not Compatible with IE8 | use the Nesting model | Don't Forget [Index] | querySelectorAll returns non-live elements
        [5]- document.querySelector | Select Only The First Element
*/

// var myElement = document.querySelectorAll('div.test')
//     // document.getElementsByClassName('test'); 
//     // document.getElementsByTagName('p');
// myElement[1].innerHTML = "This text is written with JavaScript";

/*
    Call Elemets 2:
        [1]- document.title
        [2]- document.images
        [3]- document.form
        [4]- dicument.body
*/

// var myTitle = document.getElementById("title");
// myTitle.innerHTML = document.title; // Wihtout ()

// var myDiv = document.getElementById('show'),
//     i;

// for (i = 0; i < document.images.length; i+= 1) {
//     document.write(document.images[i].src + '<br>'); // Iterating images source in the myDiv Tag
// }

// var myForm = document.getElementById('show2');
// // myForm.innerHTML = document.forms[0].x2.type;
// myForm.innerHTML = document.forms[1].z1.value; // Even it's a password we can show it !

// var myBody = document.getElementById('show3');
// myBody.innerHTML = document.body.innerText; // Or InnerHTML

// var myLinks = document.getElementById('show4');
// // myLinks.innerHTML = document.links.length; // Shows Only Links
// myLinks.innerHTML = document.anchors.length; // Shows Only Anchor Tag


        // Get-Set Elements // Get-Set Elements // Get-Set Elements // Get-Set Elements // Get-Set Elements

            // setAttribute Create it if it doesn't exist

/*
    innerText // Not Standard
    outerText // Not Standard
    innerHTML
    outerHTML
    textContent 

    // Get HTML Content
        Element.innerHTML
    // Get Text Content
        Elemnt.textContent
*/

var myText = document.querySelectorAll('div');
console.log(myText[0].textContent);                // Get Text Content
console.log(myText[1].innerHTML);                  // Get HTML Content

// Element.Attribute = Direct Method | Create the Attributes if it doesn't exist
// setAttrbute('Attribute Name', 'Value'), getAttribute("Attribute Name")

var myImg = document.querySelectorAll('img');
myImg[0].src = "https://www.placehold.it/150/fgh/fff";
// myImage.src -> Display the Source Link
myImg[0].alt = "Image";
myImg[0].title = "Title by JavaScript";
myImg[0].className = "ImgClass";
myImg[0].id = "imgId";

myImg[1].setAttribute('src', "https://www.placehold.it/130/ddd");
myImg[1].setAttribute('alt', "Set Alternative Text");
myImg[1].setAttribute('title', "Javascript Title");

