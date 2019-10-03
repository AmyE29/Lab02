'use strict';

var counter = 0;

function greeting() {
  var userName = prompt('What\'s your name?');
  // console.log('userName:' + userName);
  alert('Hi ' + userName + '!');
  return userName;
}
var greetingName = greeting();

function questionOne() {
  var whereWasIBorn = prompt('Hi! I\'m Amy, was I born in Washington?');
  // console.log('whereWasIBorn:' + whereWasIBorn);
  whereWasIBorn = whereWasIBorn.toLowerCase();

  if(whereWasIBorn === 'yes' || whereWasIBorn === 'y') {
    alert('Nope! I was born in Omaha, Nebraska!');
  } else if (whereWasIBorn === 'no' || whereWasIBorn === 'n') {
    alert('You\'re right! I was born in Omaha Nebraska!');
    counter++;
  } else {
    alert ('That\'s a strange answer');
  }
}
questionOne();

function questionTwo() {
  var didIgoToCollege = prompt('Did I attend a 4 year college?');
  // console.log('didIgoToCollege:' + didIgoToCollege);
  didIgoToCollege = didIgoToCollege.toLowerCase();

  if(didIgoToCollege === 'yes' || didIgoToCollege ==='y') {
    alert('Yep! I attended Western Washington University!');
    counter++;
  } else if (didIgoToCollege === 'no' || didIgoToCollege ==='n'){
    alert('I did, I went to Western Washginton Univeristy, GO Vikings!!');
  } else {
    alert ('That\'s a strange answer');
  }
}
questionTwo();

function questionThree() {
  var myFavoriteColor = prompt('Is my favorite color turquoise?');
  // console.log('myFavoriteColor:' + myFavoriteColor);
  myFavoriteColor = myFavoriteColor.toLowerCase();

  if(myFavoriteColor === 'no' || myFavoriteColor ==='n') {
    alert('Of course its not! My fovorite color is purple');
    counter++;
  } else if (myFavoriteColor === 'yes' || myFavoriteColor ==='y'){
    alert('I love turquoise, but my favorite color is purple');
  } else {
    alert ('That\'s a strange answer');
  }
}
questionThree();

function questionFour() {
  var myLastJob = prompt('My last job was in advertising?');
  // console.log('myLastJob:' + myLastJob);
  myLastJob = myLastJob.toLowerCase();

  if(myLastJob === 'no' || myLastJob ==='n') {
    alert('I worked in Marketing Communications in my past life');
    counter++;
  } else if(myLastJob === 'yes' || myLastJob ==='y') {
    alert('Nope, I\'ve never worked in advertising');
  } else {
    alert ('That\'s a strange answer');
  }
}
questionFour();

function questionFive() {
  var howManyKids = prompt('Do I have 3 kids?');
  // console.log('howManyKids:' + howManyKids);
  howManyKids = howManyKids.toLowerCase();

  if(howManyKids === 'no' || howManyKids === 'n') {
    alert('I have 4 kids! OMG!!');
    counter++;
  } else if (howManyKids === 'yes' || howManyKids === 'y'){
    alert('No, not 3.  I have 4 kids, and the youngest 2 are twins');
  } else {
    alert ('That\'s a strange answer');
  }
}
questionFive();

function questionSix() {
  var answerNumber = 6;
  for (var i=0; i < 4 ; i++) {
    var guessNumber = prompt('Guess a number between 1-10');
    // console.log('guessNumber:' + guessNumber);

    guessNumber = parseInt(guessNumber);
    if(guessNumber === answerNumber){
      alert('Great Guess, You\'re correct!!!');
      counter++;
      break;
    } else if (guessNumber < answerNumber){
      alert('Too low, try again.');
    } else if (guessNumber > answerNumber){
      alert('Too high, try again');
    } else {
      alert ('that\'s a strange answer');
    }
  }
  alert ('The correct answer was ' + answerNumber);
}
questionSix();

function questionSeven() {
  var worstFoods = ['mustard', 'peaches', 'mayonaise', 'coconut','raisins','olives' ];
  for (var f=0; f <= 5; f++){
    var guessFoods = prompt('Guess which foods I absolutely hate');
    // console.log('guessFoods:' + guessFoods);
    guessFoods = guessFoods.toLowerCase();
    if (guessFoods === worstFoods[0] || guessFoods === worstFoods[1] || guessFoods === worstFoods[2] || guessFoods === worstFoods[3] || guessFoods === worstFoods[4] || guessFoods === worstFoods[5]){
      alert('Great Guess, I hate ' + guessFoods + ' !!!');
      counter++;
      break;
    } else if(guessFoods !== worstFoods[f]){
      alert('Nope, try again.');
    }
  }
  alert ('The correct answers are ' + worstFoods);
}
questionSeven();

// eslint-disable-next-line no-unused-vars
var thankYou = alert('Thank you ' + greetingName + '!  I hope you enjoyed my quiz! You got ' + counter + ' out of 7 questions correct');

