'user strict';
let answers = ['y', 'yes', 'n', 'no'];
console.log('hey world');
let score = 0;

function userNameAsk(){
  let userName = prompt('What is your name?');
  while (userName === '') {
    alert('name cannot be blank!');
    userName = prompt('What is your name?');
  }
  userName === '' ? alert('name cannot be blank!')
    : alert(`Welcome to my site ${userName}! Please answer the following questions with a yes or no.`);
  return userName;
}
let userName = userNameAsk();


function questionOne() {
  let questionOne = prompt('Do I have a dog?').toLowerCase();
  while (questionOne === '') {
    alert(`Please answer the question ${userName}.`);
    questionOne = prompt('Do I have a dog?').toLowerCase();
  }
  if(questionOne === 'y' || questionOne === 'yes') {
    alert(`That's right ${userName}!`);
  } else if(questionOne === 'n' || questionOne === 'no') {
    alert(`Sorry ${userName}, that is wrong.`);
  } else{
    alert(`Please answer the question ${userName}.`);
    questionOne = prompt('Do I have a dog?').toLowerCase();
  }
}
questionOne();


function questionTwo(){
  let questionTwo = prompt(`Was I born in the United States ${userName}?`).toLowerCase();
  while (questionTwo === '') {
    alert(`Please answer the question ${userName}.`);
    questionTwo = prompt(`Was I born in the United States ${userName}?`).toLowerCase();
  }
  if(questionTwo === 'y' || questionTwo === 'yes') {
    alert(`You are not paying attention ${userName}!`);
  } else if(questionTwo === 'n' || questionTwo === 'no') {
    alert(`You are right ${userName}!`);
    score++;
  } else{
    alert(`Please answer the question ${userName}.`);
    questionTwo = prompt(`Was I born in the United States ${userName}?`).toLowerCase();
  }
}
questionTwo();


function questionThree(){
  let questionThree = prompt(`Is English my first language ${userName}?`).toLowerCase();
  while (questionThree === '') {
    alert(`Please answer the question ${userName}.`);
    questionThree = prompt(`Is English my first language ${userName}?`).toLowerCase();
  }
  if(questionThree === 'y' || questionThree === 'yes') {
    alert(`You might want to read my biography again ${userName}!`);
  } else if(questionThree === 'n' || questionThree === 'no') {
    alert(`That is correct ${userName}!`);
    score++;
  } else{
    alert(`Please answer the question ${userName}.`);
    questionThree = prompt(`Is English my first language ${userName}?`).toLowerCase();
  }
}
questionThree();


function questionFour(){
  let questionFour = prompt(`Have I been outside the United States ${userName}?`).toLowerCase();
  while (questionFour === '') {
    alert(`Please answer the question ${userName}.`);
    questionFour = prompt(`Have I been outside the United States ${userName}?`).toLowerCase();
  }
  if(questionFour === 'y' || questionFour === 'yes') {
    alert(`That is right ${userName}!`);
    score++;
  } else if(questionFour === 'n' || questionFour === 'no') {
    alert(`I'm sorry, that is wrong ${userName}.`);
  } else{
    alert(`Please answer the question ${userName}.`);
    questionFour = prompt(`Have I been outside the United States ${userName}?`).toLowerCase();
  }
}
questionFour();


function questionFive(){
  let questionFive = prompt(`Do I work with cameras ${userName}?`).toLowerCase();
  while (questionFive === '') {
    alert(`Please answer the question ${userName}.`);
    questionFive = prompt(`Do I work with cameras ${userName}?`).toLowerCase();
  }
  if(questionFive === 'y' || questionFive === 'yes') {
    alert(`You are paying attention ${userName}!`);
    score++;
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
  console.log(myNum);
  let questionSix = +prompt('Guess a number between 1-20');
  for(let i=0;i<3;i++){
    if(questionSix === myNum){
      alert(`You guessed correctly ${userName}!`);
      score++;
      break;
    } else if(questionSix < myNum){
      alert(`Your guess is too low ${userName}. Try again`);
    } else{
      alert(`Your guess is too high ${userName}! Try Again`);
    } 
    questionSix = +prompt('Guess a number between 1-20');
  }
}
questionSix();


function questionSeven(){
  let myFavorite = ['pizza', 'snacks', 'brunch'];
  let questionSeven = '';
  let isCorrect = false;
  for(let i = 0;i<6;i++){
    questionSeven = prompt('Guess what my favorite kind of food is.');
    for(let j=0;j< myFavorite.length;j++){

      if(questionSeven === myFavorite[j]){
        isCorrect = true;
        score++;
        i = 6;
      }
    }
    if(isCorrect === false){
      alert('Sorry you\'re wrong');
    }
  }
  if(isCorrect === false){
    alert('These are the possible answers: pizza, snacks or brunch');
  } else{
    alert(`That's right ${userName}!`);
    score++;
  }
}
questionSeven();
alert(`Great job! Your score is ${score}`);
