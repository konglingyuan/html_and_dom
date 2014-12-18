function getScore () {
  var score = 0;
  var form = document.getElementById("form");

  var fillScore = new RealityFillAnswerScore(form.fill_1_1.name, form.fill_1_1.value);
  score += fillScore.getScore();

  document.getElementById("account").value = score;

  return false;
}
