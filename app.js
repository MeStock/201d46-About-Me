'use strict';


/*

This program will ask a visitor 5 Yes/No questions about Melissa

Q1:Is Melissa from the Greater Seattle area?
Q2:Does Melissa enjoy dim sum for breakfast on Sundays?
Q3:Is Melissa's favorite dog the Old Enlish Sheepdog?
Q4:Is snowboarding Melissa's favorite winter sport?
Q5:Can Melissa make at least 100 different cocktails from memory?

then play a guessing game with 2 questions about Melissa

Q6: How many years has Melissa lived in Seattle?
Q7: What languages does Melissa speak?

At the end the user will get a score of how well they know Melissa.

*/


//Create an array variable with possible answers
var possibleAnswers = ['yes', 'y', 'no', 'n'];

//Create a variable to store number of correct guesses
var numCorrectGuesses= 0;

//Ask & store visitors name
var userName = prompt('What is your name?');
console.log('User name is: ' + userName);
alert('Thanks ' + userName + '! Welcome to my page. Here are some yes/no trivia questions about myself.');

//QUESTION 1: Is Melissa from Seattle?
//Correct answer
console.log('From Seattle Answer: ' + possibleAnswers[2]);

//This function will ask visitor the first question about Melissa
function fromSeattle (){
  //Create a variable for visitor response
  var fromSeattleGuess = prompt('Is Melissa from the Greater Seattle area?');

  //Store & edit response to lowercase
  console.log('From Seattle Guess: ' + fromSeattleGuess);
  var checkFromSeattleGuess = fromSeattleGuess.toLowerCase();

  //Compare response with correct answer
  if(checkFromSeattleGuess === possibleAnswers[2] || checkFromSeattleGuess === possibleAnswers[3]){
    alert('You\'re right! She grew up in Hawaii');
    numCorrectGuesses++;
  } else if(checkFromSeattleGuess === possibleAnswers[0] || checkFromSeattleGuess === possibleAnswers[1]){
    alert('Nice guess, she\'s actually from Hawaii but stuck around after college.');
  }else {
    alert('She\'s from Hawaii, Alooooooohhhaaaa.');
  }
}
fromSeattle();

//Print results so far
console.log('Correct Answers: ' + numCorrectGuesses + '/1');

//QUESTION 2: Does Melissa enjoy dim sum for breakfast on Sundays?
//Correct answer
console.log('Eats Dim Sum Answer: ' + possibleAnswers[0]);

//This function will ask the visitor the second question about Melissa
function dimSum(){

  //Create a variable for visitor response
  var dimSumGuess = prompt('Does Melissa enjoy dim sum for breakfast on Sundays?');
  console.log('Eats Dim Sum Guess: ' + dimSumGuess);
  var checkDimSumGuess = dimSumGuess.toLowerCase();

  //Compare response with correct answer
  if(checkDimSumGuess === possibleAnswers[0] || checkDimSumGuess === possibleAnswers[1]){
    alert('YUM! Who doesn\'t love dim sum?!');
    numCorrectGuesses++;
  }else if(checkDimSumGuess === possibleAnswers[2] || checkDimSumGuess === possibleAnswers[3]){
    alert(userName + '....That would be INSANE.');
  }else {
    alert('She loves dim sum!');
  }
}
dimSum();

//Print results so far
console.log('Correct Answers: ' + numCorrectGuesses + '/2');

//QUESTION 3: Is Melissa's favorite dog the Old Enlish Sheepdog?
//Correct answer
console.log('Loves Old English Sheepdog Answer: ' + possibleAnswers[0]);

//This function will ask the visitor the third question about Melissa
function favDog(){

  //Create a variable for a visitor response
  var favDogGuess = prompt('Is Melissa\'s favorite dog the Old English Sheepdog?');
  console.log('Favorite Dog Guess: ' + favDogGuess);
  var checkFavDogGuess = favDogGuess.toLowerCase();

  //Compare response with correct answer
  if(checkFavDogGuess === possibleAnswers[0] || checkFavDogGuess === possibleAnswers[1]){
    alert('You got it. Old English Sheepdogs are for snuggling.');
    numCorrectGuesses++;
  }else if(checkFavDogGuess === possibleAnswers[2] || checkFavDogGuess === possibleAnswers[3]) {
    alert('But they\'re the fluffiest doggies, therefore the best doggies.');
  }else {
    alert('Old English Sheepdogs are the best!');
  }
}
favDog();

//Print results so far
console.log('Correct Answers: ' + numCorrectGuesses + '/3');

//QUESTION 4: Is snowboarding Melissa's favorite winter sport?
//Correct answer
console.log('Favorite Winter Sport Answer: ' + possibleAnswers[0]);

//This function will ask the visitor the fourth question about Melissa
function favSport(){

  //Create variable for a visitor response
  var favSportGuess = prompt('Is snowboarding Melissa\'s favorite winter sport?');
  console.log('Favorite Winter Sport Guess: ' + favSportGuess);
  var checkFavSportGuess = favSportGuess.toLowerCase();

  //Compare response with correct answer
  if(checkFavSportGuess === possibleAnswers[0] || checkFavSportGuess === possibleAnswers[1]){
    alert('Haha ' + userName + ', does it look like she can snowboard?');
    numCorrectGuesses++;
  }else if(checkFavSportGuess === possibleAnswers[2] || checkFavSportGuess === possibleAnswers[3]){
    alert('Of course! Skiing is clearly the superior sport.');
  }else {
    alert('She tries to get up to the mountain for skiing a few times a month.');
  }
}
favSport();

//Print results so far
console.log('Correct Answers: ' + numCorrectGuesses + '/4');

//QUESTION 5: Can Melissa make at least 100 different cocktails from memory?
//Correct answer
console.log('Make Lots of Cocktails Answer: ' + possibleAnswers[0]);

//This question will ask the visitor the fifth question about Melissa
function numCocktails(){

  //Create variable for a visitor response
  var numCocktailsGuess = prompt('Can Melissa make at least 100 different cocktails from memory?');
  console.log('Make Lots of Cocktails Guess: ' + numCocktailsGuess);
  var checkNumCocktailsGuess = numCocktailsGuess.toLowerCase();

  //Compare response with correct answer
  if(checkNumCocktailsGuess === possibleAnswers[0] || checkNumCocktailsGuess === possibleAnswers[1]){
    alert('Fun fact: you bet she can!');
    numCorrectGuesses++;
  }else if(checkNumCocktailsGuess === possibleAnswers[2] || checkNumCocktailsGuess === possibleAnswers[3]){
    alert('She would be a terrible bartender if she couldn\'t.');
  }else {
    alert('With years of bartending experience, she can make more than 100 from memory.');
  }
}
numCocktails();

//Print results so far
console.log('Correct Answers: ' + numCorrectGuesses + '/5');

//Prepare visitor for non y/n questions
alert('Yes/No questions are too easy for you ' + userName + '. Lets try a guessing game instead :)');

//QUESTION 6: How many years has Melissa lived in Seattle?
//Correct Answer
var numOfYears = '8';
console.log('Number of years in Seattle Answer: ' + numOfYears);

//This function will ask the visitor the sixth question about Melissa
function yearsInSeattle(){

  //Ask Question
  var numOfYearsGuess = prompt('How many years has Melissa lived in Seattle?');
  var numOfYearsAttempts = 1;
  console.log('Years in Seattle Guess: ' + numOfYearsGuess);

  //Compare response with correct answer
  while(numOfYearsAttempts < 4){
    if(numOfYearsGuess === numOfYears){
      alert('You got it in ' + numOfYearsAttempts + ' out of 4 attempts, nice job!');
      numCorrectGuesses++;
      break;
    }else if (numOfYearsGuess < 8){
      alert(numOfYearsAttempts + ' out of 4 attempts');
      numOfYearsGuess = prompt('Too low, try again!');
    }else if(numOfYearsGuess > 8){
      alert(numOfYearsAttempts + ' out of 4 attempts');
      numOfYearsGuess = prompt('Too high, try again!');
    }else {
      alert(numOfYearsAttempts + ' out of 4 attempts');
      numOfYearsGuess = prompt('Thats not a valid guess. Try another number?');
    }
    numOfYearsAttempts++;
  }
}
yearsInSeattle();

//Print results so far
console.log('Correct Answers: ' + numCorrectGuesses + '/6');

//QUESTION 7: What languages does Melissa speak?
//Correct Answer
var langAnswer = ['english', 'vietnamese'];
console.log('Melissa speaks: ' + langAnswer[0] + ' and ' + langAnswer[1]);

//This function will as the visitor the seventh question about Melissa
function lang(){

  //Ask Question
  var langGuess = prompt('What languages does Melissa speak?');
  langGuess = langGuess.toLowerCase();
  console.log('Language Guess: ' + langGuess);
  var numOfLangAttempts = 1;

  //Compare response with correct answer
  for(var i = 0; i < 5; i++) {
    switch (langGuess) {
    case 'english':
      alert(numOfLangAttempts + ' out of 6 attempts');
      langGuess = prompt('Melissa does speak english! Any other languages?');
      numCorrectGuesses++;
      break;
    case 'vietnamese':
      alert(numOfLangAttempts + ' out of 6 attempts');
      langGuess = prompt('Melissa does speak vietnamese! Any other languages?');
      numCorrectGuesses++;
      break;
    default:
      alert(numOfLangAttempts + ' out of 6 attempts');
      langGuess = prompt('Unfortunately not. Try again?');
      break;
    }
    numOfLangAttempts++;
    if(numCorrectGuesses === '8'){
      break;
    }
    if(numOfLangAttempts === 6){
      alert('Bummer! You are out of attempts. Melissa is bilingual in English and Vietnamese.');
    }
  }
}
lang();

//Print results so far
console.log('Correct Answers: ' + numCorrectGuesses + '/8');

//Return results to visitor
var percent = (numCorrectGuesses / 8) * 100;
alert('Congrats ' + userName + '! You got ' + numCorrectGuesses + ' out of 8 possible points.' + ' That\'s ' + percent + '%!');




