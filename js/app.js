'user strict';

console.log('hey world');

let visitorName = prompt('What is your name?');

alert(`Welcome to my site ${visitorName}! Please guess yes or no to the following questions.`);

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionOneGuess === 'y' || questionOneGuess === 'yes') {
alert('You are correct!');
} else if(questionOneGuess === 'n' || 'no') {
alert('Sorry you are wrong');
}
