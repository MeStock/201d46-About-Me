'use strict';


/*

This program will ask a visitor 5 Yes/No questions about Melissa

Q1:Is Melissa from the Greater Seattle area?
Q2: Does Melissa enjoy dim sum for breakfast on sundays?
Q3:Is Melissa's favorite dog the Old Enlish Sheepdog?
Q4:Is snowboarding Melissa's favorite winter sport?
Q5: 

*/

//Create an array variable with possible answers
var possibleAnswers = ['yes', 'y', 'no', 'n'];

//Ask & store visitors name
var userName = prompt('What is your name?');
console.log('User name is: ' + userName);
alert('Thanks ' + userName + '! Welcome to my page :)');

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
} else if(checkFromSeattleGuess === possibleAnswers[0] || checkFromSeattleGuess === possibleAnswers[1]){
    alert('Nice guess, she\'s actually from Hawaii but stuck around after college.');
}else {
    alert('She\'s from Hawaii, Alooooooohhhaaaa.');
};

//QUESTION 2: Does Melissa enjoy dim sum for breakfast on sundays?
//Correct answer
console.log('Eats Dim Sum Answer: ' + possibleAnswers[0]);

//Create a variable for visitor response
var dimSumGuess = prompt('Does Melissa enjoy dim sum for breakfast on sundays?');
console.log('Eats Dim Sum Guess: ' + dimSumGuess);
var checkDimSumGuess = dimSumGuess.toLowerCase();

//Compare response with correct answer
if(checkDimSumGuess === possibleAnswers[0] || checkDimSumGuess === possibleAnswers[1]){
    alert('YUM! Who doesn\'t love dim sum?!');
}else if(checkDimSumGuess === possibleAnswers[2] || checkDimSumGuess === possibleAnswers[3]){
    alert(userName + '....That would be INSANE.');
}else {
    alert('She loves dim sum!');
};

//Q3:Is Melissa's favorite dog the Old Enlish Sheepdog?
//Correct answer
console.log('Loves Old English Sheepdog: ' + possibleAnswers[0]);

//Create a variable for a visitor response
var favDogGuess = prompt('Is Melissa\'s favorite dog the Old English Sheepdog?');
console.log('Favorite Dog Guess: ' + favDogGuess);
var checkFavDogGuess = favDogGuess.toLowerCase();

//Compare response with correct answer
if(checkFavDogGuess === possibleAnswers[0] || checkFavDogGuess === possibleAnswers[1]){
    alert('You got it. Old English Sheepdogs are for snuggling.');
}else if(checkFavDogGuess === possibleAnswers[2] || checkFavDogGuess === possibleAnswers[3]) {
    alert('But they\'re the fluffiest doggies, therefore the best doggies.');
}else {
    alert('Old English Sheepdogs are the best!');
};

//Q4:Is snowboarding Melissa's favorite winter sport?
//Correct answer
console.log('Favorite Winter Sport: ' + possibleAnswers[0]);

//Create variable for a visitor response
var favSportGuess = prompt('Is snowboarding Melissa\'s favorite winter sport?');
console.log('Favorite Winter Sport Guess: ' + favSportGuess);
var checkFavSportGuess = favSportGuess.toLowerCase();

//Compare response with correct answer
if(checkFavSportGuess === possibleAnswers[0] || checkFavSportGuess === possibleAnswers[1]){
    alert('Haha ' + userName + ' does it look like she can snowboard?');
}else if(checkFavSportGuess === possibleAnswers[2] || checkFavSportGuess === possibleAnswers[3]){
    alert('Of course! Skiing is clearly the superior sport.');
}else {
    alert('She tries to get up to the mountain for skiing a few times a month.');
};

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