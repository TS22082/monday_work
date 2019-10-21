$(document).ready(function() {
  let score = 0;
  let userAnswer1;
  let userAnswer2;

  $('#btnSubmit').on('click', function() {
    getScore();
    alert(score);
  });

  let timerGoing = 10;
  let timer = setInterval(function() {
    timerGoing--;
    if (timerGoing === 0) {
      getScore();
      alert(score);
      clearInterval(timer);
    }
    $('#timerScreen').text(timerGoing);
  }, 1000);

  function getScore() {
    userAnswer1 = $('input[name="question1"]:checked').val();
    userAnswer2 = $('input[name="question2"]:checked').val();

    if (userAnswer1 === 'CSS') {
      score++;
    }
    if (userAnswer2 === 'Javascript') {
      score++;
    }
  }
});
