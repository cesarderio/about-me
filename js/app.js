'user strict';

console.log('hey world');

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with a yes or no.`);

let questionOne = prompt('Do I have a dog?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes') {
  alert(`That's right ${userName}!`);
} else if(questionOne === 'n' || questionOne === 'no') {
  alert(`Sorry ${userName}, that is wrong.`);
}

let questionTwo = prompt(`Was I born in the United States ${userName}?`).toLowerCase();

if(questionTwo === 'y' || questionTwo === 'yes') {
  alert(`You are not paying attention ${userName}!`);
} else if(questionTwo === 'n' || questionTwo === 'no') {
  alert(`You are right ${userName}!`);
}


let questionThree = prompt(`Is English my first language ${userName}?`).toLowerCase();

if(questionThree === 'y' || questionThree === 'yes') {
  alert(`You might want to read my biography again ${userName}!`);
} else if(questionThree === 'n' || questionThree === 'no') {
  alert(`That is correct ${userName}!`);
}

let questionFour = prompt(`Have I been outside the United States ${userName}?`).toLowerCase();

if(questionFour === 'y' || questionFour === 'yes') {
  alert(`That is right ${userName}!`);
} else if(questionFour === 'n' || questionFour === 'no') {
  alert(`I'm sorry, that is wrong ${userName}.`);
}

let questionFive = prompt(`Do I work with cameras ${userName}?`).toLowerCase();

if(questionFive === 'y' || questionFive === 'yes') {
  alert(`You are paying attention ${userName}!`);
} else if(questionFive === 'n' || questionFive === 'no') {
  alert(`That is not correct ${userName}!`);
}
