'user strict';

console.log('hey world');
let score = 0;

function userName(){

  let userName = prompt('What is your name?');
  /* console.log(`Welcome to my site ${userName}! Please answer the following questions with a yes or no.`); */
  alert(`Welcome to my site ${userName}! Please answer the following questions with a yes or no.`);
}

userName();

function questionOne(){
  let questionOne = prompt('Do I have a dog?').toLowerCase();
  // console.log(`That's right ${userName}!`); //
  if(questionOne === 'y' || questionOne === 'yes') {
    alert(`That's right ${userName}!`);
  } else if(questionOne === 'n' || questionOne === 'no') {
    alert(`Sorry ${userName}, that is wrong.`);
  } 
}

questionOne();


function questionTwo(){
  let questionTwo = prompt(`Was I born in the United States ${userName}?`).toLowerCase();
  /* console.log(`You are not paying attention ${userName}!`); */
  if(questionTwo === 'y' || questionTwo === 'yes') {
    alert(`You are not paying attention ${userName}!`);
  } else if(questionTwo === 'n' || questionTwo === 'no') {
    alert(`You are right ${userName}!`);
  }
}

questionTwo();

function questionThree(){
  let questionThree = prompt(`Is English my first language ${userName}?`).toLowerCase();
  /* console.log(`You might want to read my biography again ${userName}!` */
  if(questionThree === 'y' || questionThree === 'yes') {
    alert(`You might want to read my biography again ${userName}!`);
  } else if(questionThree === 'n' || questionThree === 'no') {
    alert(`That is correct ${userName}!`);
  }
}

questionThree();

function questionFour(){
  let questionFour = prompt(`Have I been outside the United States ${userName}?`).toLowerCase();
  // console.log(`That is right ${userName}!`); //
  if(questionFour === 'y' || questionFour === 'yes') {
    alert(`That is right ${userName}!`);
  } else if(questionFour === 'n' || questionFour === 'no') {
    alert(`I'm sorry, that is wrong ${userName}.`);
  }
}

questionFour();

function questionFive(){
  let questionFive = prompt(`Do I work with cameras ${userName}?`).toLowerCase();
  // console.log(`You are paying attention ${userName}!`); //
  if(questionFive === 'y' || questionFive === 'yes') {
    alert(`You are paying attention ${userName}!`);
  } else if(questionFive === 'n' || questionFive === 'no') {
    alert(`That is not correct ${userName}!`);
  } else{
    alert(`Please answer the question ${userName}.`);
    questionFive = prompt(`Do I work with cameras ${userName}?`);
  }
}

questionFive();


function questionSix(){
  let myNum = 7;
  let questionSix = +prompt('Guess a number between 1-20');

  for(let i=0;i<4;i++){
    if(questionSix === myNum){
      alert(`You guessed correctly ${userName}!`);
      break;
    } else if(questionSix < myNum){
      alert(`Your guess is too low ${userName}. Try again`);
      questionSix = prompt('Guess a number between 1-20');
    } else{
      alert(`Your guess is too high ${userName}! Try Again`);
      questionSix = prompt('Guess a number between 1-20');
    }
  }
}

questionSix();


function questionSeven(){
  let myFavorite = ['pizza', 'snacks', 'brunch'];
  let guesses = 6;
  let questionSeven = '';
  let isCorrect = false;
  for(let i = 0;i<6;i++){
    questionSeven = prompt('Guess what my favorite kind of food is.');
    for(let j=0;j< myFavorite.length;j++){

      if(questionSeven === myFavorite[j]){
        isCorrect = true;
        score++;
        i = 6; // changing 'i' to 6 so we exit 'for' loop //
      }
    } 
    if(isCorrect === false){
      alert("Sorry you're wrong");
    }
  }
  if(isCorrect === false){
    alert('These are the possible answers: pizza, snacks or brunch');
  } else{
    alert(`That's right ${userName}!`);
  }
}

questionSeven();

alert(`${score}`);





