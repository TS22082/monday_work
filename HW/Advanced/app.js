$(document).ready(function() {
  const questions = [
    { q: 'javascript is easy?', a: 'f' },
    { q: 'everyone can learn javascript', a: 't' },
    { q: 'javascript is fun', a: 't' }
  ];

  let arrayIndex = 0;
  let score = 0;
  let myTimer;

  displayQuestion();
  startTimer();

  document.onkeyup = function(e) {
    clearInterval(myTimer);
    startTimer();

    const answer = questions[arrayIndex].a;
    const userGuess = e.key;

    if (userGuess === answer) {
      score++;
    }

    arrayIndex++;

    displayQuestion();
    $('#score').text(score);
  };

  function displayQuestion() {
    if (arrayIndex === questions.length) {
      alert(score);

      score = 0;
      arrayIndex = 0;
    }
    $('#question').html('<h1>' + questions[arrayIndex].q + '</h1>');
  }

  function startTimer() {
    count = 5;
    myTimer = setInterval(timer, 1000);
    function timer() {
      $('#timer').text(count);
      count--;
      if (count === 0) {
        arrayIndex++;
        displayQuestion();
        count = 5;
      }
    }
  }
});
