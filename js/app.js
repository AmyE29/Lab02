'use strict';

var userName = prompt('What\'s your name?');
alert('Hi ' + userName + '!');

var whereWasIBorn = prompt('Hi! I\'m Amy, was I born in Washington?');
whereWasIBorn = whereWasIBorn.toLowerCase();

if(whereWasIBorn === 'yes') {
  alert('Nope! I was born in Omaha, Nebraska!');
} else {
  alert('You\'re right! I was born in Omaha Nebraska!');
}

var didIgoToCollege = prompt('Did I attend a 4 year college?');
didIgoToCollege = didIgoToCollege.toLowerCase();

if(didIgoToCollege === 'yes') {
  alert('Yep! I attended Western Washington University!');
} else {
  alert('I did, I went to Western Washginton Univeristy, GO Vikings!!');
}

var myFavoriteColor = prompt('Is my favorite color turquoise?');
myFavoriteColor = myFavoriteColor.toLowerCase();

if(myFavoriteColor === 'no') {
  alert('Of course its not! My fovorite color is purple');
} else {
  alert('I love turquoise, but my favorite color is purple');
}

var myLastJob = prompt('My last job was in advertising?');
myLastJob = myLastJob.toLowerCase();

if(myLastJob === 'no') {
  alert('I worked in Marketing Communications in my past life');
} else {
  alert('Nope, I\'ve never worked in advertising');
}



