'user strict';

console.log('hey world');

let userName = prompt('What is your name?');
/* console.log(`Welcome to my site ${userName}! Please answer the following questions with a yes or no.`); */
alert(`Welcome to my site ${userName}! Please answer the following questions with a yes or no.`);

let questionOne = prompt('Do I have a dog?').toLowerCase();
// console.log(`That's right ${userName}!`); //
if(questionOne === 'y' || questionOne === 'yes') {
  alert(`That's right ${userName}!`);
} else if(questionOne === 'n' || questionOne === 'no') {
  alert(`Sorry ${userName}, that is wrong.`);
}

let questionTwo = prompt(`Was I born in the United States ${userName}?`).toLowerCase();
/* console.log(`You are not paying attention ${userName}!`); */
if(questionTwo === 'y' || questionTwo === 'yes') {
  alert(`You are not paying attention ${userName}!`);
} else if(questionTwo === 'n' || questionTwo === 'no') {
  alert(`You are right ${userName}!`);
}


let questionThree = prompt(`Is English my first language ${userName}?`).toLowerCase();
/* console.log(`You might want to read my biography again ${userName}!` */
if(questionThree === 'y' || questionThree === 'yes') {
  alert(`You might want to read my biography again ${userName}!`);
} else if(questionThree === 'n' || questionThree === 'no') {
  alert(`That is correct ${userName}!`);
}

let questionFour = prompt(`Have I been outside the United States ${userName}?`).toLowerCase();
// console.log(`That is right ${userName}!`); //
if(questionFour === 'y' || questionFour === 'yes') {
  alert(`That is right ${userName}!`);
} else if(questionFour === 'n' || questionFour === 'no') {
  alert(`I'm sorry, that is wrong ${userName}.`);
}

let questionFive = prompt(`Do I work with cameras ${userName}?`).toLowerCase();
// console.log(`You are paying attention ${userName}!`); //
if(questionFive === 'y' || questionFive === 'yes') {
  alert(`You are paying attention ${userName}!`);
} else if(questionFive === 'n' || questionFive === 'no') {
  alert(`That is not correct ${userName}!`);
}

let myNum = 7;

let questionSix = prompt('Guess a number between 1-20');

for(i=0;i<5;i++){
  if(questionSix == myNum){
    alert(`You guessed correctly ${userName}!`);
    break;
  } else if(questionSix < myNum){
    alert(`Your guess is too low ${userName}. Try again`);
  } else(question > myNum){
    alert(`Your guess is too high ${userName}! Try Again`);
  }
}

// *TOP* let score = 0; //

// alert('you are correct'); //
// score++; //

// alert(1`${score}`); //





