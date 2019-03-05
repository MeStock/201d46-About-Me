'use strict';


/*

This program will ask a visitor 5 Yes/No questions about Melissa

Q1:Is Melissa from the Greater Seattle area?
Q2: Does Melissa enjoy dim sum for breakfast on sundays?

*/

//Create an array variable with possible answers
var possibleAnswers = ['yes', 'y', 'no', 'n'];

//QUESTION 1: Is Melissa from Seattle?
//Correct answer
console.log('From Seattle Answer: ' + possibleAnswers[2]);

//Create a variable for visitor response
var fromSeattleGuess = prompt('Is Melissa from the Greater Seattle area?');

//Store & edit response to lowercase
console.log('From Seattle Guess: ' + fromSeattleGuess);
var checkFromSeattleGuess = fromSeattleGuess.toLowerCase();

//Compare response with correct answer
if(checkFromSeattleGuess === possibleAnswers[2] || checkFromSeattleGuess === possibleAnswers[3]){
    alert('You\'re right! She grew up in Hawaii');
} else{
    alert('Nice guess, she\'s actually from Hawaii but stuck around after college.');
};

//QUESTION 2: Does Melissa enjoy dim sum for breakfast on sundays?
//Correct answer
console.log('Eats Dim Sum Answer: ' + possibleAnswers[0]);

//Create a variable for visitor response
var dimSumGuess = prompt('Does Melissa enjoy dim sum for breakfast on sundays?');
console.log('Eats dim sum guess: ' + dimSumGuess);
var checkDimSumGuess = dimSumGuess.toLowerCase();

//Compare response with correct answer
if(checkDimSumGuess === possibleAnswers[0] || checkDimSumGuess === possibleAnswers[1]){
    alert('YUM! Who doesn\'t love dim sum?!');
}else{
    alert('That would be insane');
};

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