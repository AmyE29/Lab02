'use strict';

var userName = prompt('What\'s your name?');
console.log('userName:' + userName);
alert('Hi ' + userName + '!');

var whereWasIBorn = prompt('Hi! I\'m Amy, was I born in Washington?');
console.log('whereWasIBorn:' + whereWasIBorn);
whereWasIBorn = whereWasIBorn.toLowerCase();

if(whereWasIBorn === 'yes' || whereWasIBorn === 'y') {
  alert('Nope! I was born in Omaha, Nebraska!');
} else if (whereWasIBorn === 'no' || whereWasIBorn === 'n') {
  alert('You\'re right! I was born in Omaha Nebraska!');
} else {
  alert ('That\'s a strange answer');
}

var didIgoToCollege = prompt('Did I attend a 4 year college?');
console.log('didIgoToCollege:' + didIgoToCollege);
didIgoToCollege = didIgoToCollege.toLowerCase();

if(didIgoToCollege === 'yes' || didIgoToCollege ==='y') {
  alert('Yep! I attended Western Washington University!');
} else if (didIgoToCollege === 'no' || didIgoToCollege ==='n'){
  alert('I did, I went to Western Washginton Univeristy, GO Vikings!!');
} else {
  alert ('That\'s a strange answer');
}

var myFavoriteColor = prompt('Is my favorite color turquoise?');
console.log('myFavoriteColor:' + myFavoriteColor);
myFavoriteColor = myFavoriteColor.toLowerCase();

if(myFavoriteColor === 'no' || myFavoriteColor ==='n') {
  alert('Of course its not! My fovorite color is purple');
} else if (myFavoriteColor === 'yes' || myFavoriteColor ==='y'){
  alert('I love turquoise, but my favorite color is purple');
} else {
  alert ('That\'s a strange answer');
}

var myLastJob = prompt('My last job was in advertising?');
console.log('myLastJob:' + myLastJob);
myLastJob = myLastJob.toLowerCase();

if(myLastJob === 'no' || myLastJob ==='n') {
  alert('I worked in Marketing Communications in my past life');
} else if(myLastJob === 'yes' || myLastJob ==='y') {
  alert('Nope, I\'ve never worked in advertising');
} else {
  alert ('That\'s a strange answer');
}

var howManyKids = prompt('Do I have 3 kids?');
console.log('howManyKids:' + howManyKids);
howManyKids = howManyKids.toLowerCase();

if(howManyKids === 'no' || howManyKids === 'n') {
  alert('I have 4 kids! OMG!!');
} else if (howManyKids === 'yes' || howManyKids === 'y'){
  alert('No, not 3.  I have 4 kids, and the youngest 2 are twins');
} else {
  alert ('That\'s a strange answer');
}

for (var i=0; i <=3 ; i++) {
  var guessNumber = prompt('Guess a number between 1-10');
  console.log('guessNumber:' + guessNumber);

  if (guessNumber < 5){
    alert('Too low, try again.');
  }else if (guessNumber > 5){
    alert('Too high, try again');
  } if(guessNumber === '5'){
    alert('Great Guess, You\'re correct!!!');
    break;
  }if (i === 3){
    alert ('Ooops! Out of tries.  The correct answer was 5');
  }
}

// eslint-disable-next-line no-unused-vars
var thankYou = alert('Thank you ' + userName + '!  I hope you enjoyed my quiz!');
