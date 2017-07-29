/*
    For Loop Syntaxe:

        for (initialization; Condition; First Expression) {

            // Statment
        }

        initialization: Executed Before The Loop Once
        Condition: Define The Condition To Run The Code
        First Expression: Executed Everytime The Code Run
*/
var i;
var friends = ["Oubaye", "Anas", "Ahmed", "Rached", "Mourad"];

for (i = 0; i < friends.length; i +=1 ) { // i++ Or i = i + 1

    console.log(friends[i]);
}