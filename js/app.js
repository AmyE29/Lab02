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



