'use strict';

let questionNumber = 0;
let counter = 0;
let score = 0;

function handleStartButton(){
    $('.js-start-now').click(function(){
    $('.js-start-quiz').remove();
    quizPage();
  });
}

function handleSubmitButton(){
  console.log("handle answer ran");
  $('.quiz').on('submit', event =>{
    event.preventDefault();
    const answer = ($('input[type="radio"]:checked').next().text());
    determineFeedback(answer);
  });
}

function handleNextButton(){
  console.log("handle next button ran");
  $('.focus-area').on('click', '.js-next-button', event =>{
   console.log("Next button clicked");
   //$('.js-feedback').remove();
   if (questionNumber < quizSTORE.length){
     console.log(`${questionNumber}`);
     quizPage();
     }
   else {console.log(questionNumber);
     resultsPage();
   }
 });
}

function handleRestartButton(){
  $('.focus-area').on('click', '.js-restart-button', event =>{
    console.log("restart button clicked");
    questionNumber = 0;
    score = 0;
    counter = 0;
    quizPage();
  });
 
}

function handleLinkButton(){
  $('.focus-area').on('click', '.js-visit-button', event =>{
    console.log("link button ran");
    window.open("https://usagym.org/");
  });
}

function quizPage(){
  console.log("quiz page ran");
  displayQuestion();
  displayChart();
  manageCounter();
  }
  
function manageCounter(){
  console.log("manage counter ran");
  counter++;
  $('.js-counter').html(`<h2>Question ${counter}/10</h2>`);
}

function displayChart(){
  console.log("display chart ran");
  $('.js-score-chart').html(`
      <div class="score">
        <img src="http://carenkeyes.com/wp-content/uploads/2018/03/Asset-1.png" alt="Flip scorebook icon">
          <p>${score}.0</p>
      </div>`
      );  
}

function displayQuestion(){
  console.log("display question ran");
    const question = generateQuestion();
    $('.quiz').html(question);
    //console.log(question);
}

function retrieveAnswers(){
  console.log("retrive answers ran");
  let Answers=[quizSTORE[questionNumber].rightChoice, quizSTORE[questionNumber].wrongChoices[0], quizSTORE[questionNumber].wrongChoices[1], quizSTORE[questionNumber].wrongChoices[2]];
  //console.log(Answers);
  return Answers;
}

function shuffleQuestions(array){
  console.log("shuffle questions ran");
  let m = array.length;
  let t;
  let i;
  while (m){
    i = Math.floor(Math.random()*m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  //console.log(array);
  return array;
}

function generateQuestion(){
  console.log("generate question ran");
  let array = shuffleQuestions(retrieveAnswers());
  return`
          <form class="quiz-questions">
            <h3>${quizSTORE[questionNumber].Question}</h3>
              <fieldset id="questions">
                <legend>Multiple choice answers</legend>
                <p><input type="radio" name="choice" required id="r1" checked>
                <label for="r1">${array[0]}</label></p>
                <p><input type="radio" name="choice" required id="r2">
                <label for="r2">${array[1]}</label></p>
                <p><input type="radio" name="choice" required id="r3">
                <label for="r3">${array[2]}</label></p>
                <p><input type="radio" name="choice" required id="r4">
                <label for="r4">${array[3]}</label></p>
              </fieldset>
              <input type="submit" value="Submit" class="js-submit-answer userButton">
          </form>`;
}

function determineFeedback(answer){
  console.log("determine feedback ran");
  if (answer === quizSTORE[questionNumber].rightChoice){
    correctFeedback();
  }
  else {incorrectFeedback();}
  questionNumber++;
}

function correctFeedback(){
  console.log("correct feedback ran");
  $('.quiz').html(`
  <div class="js-feedback">
    <h3>You are correct!</h3>
    <p>${quizSTORE[questionNumber].rightFeedback}</p>
    <button type=button class="js-next-button userButton">Next</button></div>`);
  score++;
  displayChart(score);
}

function incorrectFeedback(){
  console.log("incorrect feedback ran");
  $('.quiz').html(`
  <div class="js-feedback">
    <h3>Sorry, not quite.</h3>
    <p>${quizSTORE[questionNumber].wrongFeedback}</p>
    <button type=button class="js-next-button userButton">Next</button></div>`);
}

function resultsPage(){
  console.log("Results page ran");
  $('.js-score-chart').hide();
  let message = displayResults();
  $('.quiz').html(`
  <div class="js-results">
    
    ${message}
    <button type=button class="js-restart-button userButton">Restart</button>
    <button type="button" class="js-visit-button userButton">USAG</button></div>`);
}

function displayResults(){
  console.log("display results ran");
  let message;
  if (score === 10){return `<h3>You scored a perfect 10.0!</h3>${RESULTS[0]}`}
  else if (score >= 7){return `<h3>You got ${score} correct! Not bad!</h3>${RESULTS[1]}`;}
  else if (score >=4){return `<h3>You answered ${score} questions correctly.</h3>${RESULTS[2]}`;}
  else {return `<h3>Well, you got ${score} correct, but don't despair!</h3>${RESULTS[3]}`}
}

function initializeApp(){
  handleStartButton();
  handleNextButton();
  handleSubmitButton();
  handleRestartButton();
  handleLinkButton();
}

initializeApp();