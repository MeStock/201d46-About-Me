'use strict';


/*

This program will ask a visitor 5 Yes/No questions about Melissa

*/

//Create an array variable with possible answers
var possibleAnswers = ['Yes', 'yes', 'Y', 'y', 'No', 'no', 'N', 'n'];

//Q1:Is Melissa from the Greater Seattle area?
//Create a variable for viewer response
var fromSeattle = prompt('Is Melissa from the Greater Seattle area?');

//Create & store correct answer
var fromSeattleAnswer = 'No';
console.log('From Seattle Answer: ' + fromSeattleAnswer);

//Store & check response
console.log('From Seattle Guess: ' + fromSeattle);

if(fromSeattle === fromSeattleAnswer){
    alert('You\'re right! She grew up in Hawaii');
} else{
    alert('Nice guess. She actually left Hawaii for college and just stuck around.')
};

//Q2:Does enjoy dim sum for breakfast on sundays?
//Q3:Is Melissa's favorite dog the Old Enlish Sheepdog?
//Q4:Is snowboarding Melissa's favorite winter sport?
//Q5:








/*

var favColor = prompt('is Nicholas\'s favorite color red?');
var favColorAnswer = 'no';

if(favColor === favColorAnswer){
    alert('nice guess');
}else {
    alert('nope');
};

*/

/*

+++Basic Syntax for an If Statement+++
if (some condition) {
some code to be executed if condition is true    
} <optional> else if{
some code to be executed if condition is not true
}//} <optional> else {
some code to be executed if condition is not true
}

*/