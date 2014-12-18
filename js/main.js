function getScore () {
  var score = 0;
  var form = document.getElementById("form");

  var fillScoreOne = new RealityFillAnswerScore(form.fill_1_1.name, form.fill_1_1.value);
  score += fillScoreOne.getScore();

  var fillScoreTwoA = new RealityFillAnswerScore(form.fill_1_2_1.name, form.fill_1_2_1.value);
  score += fillScoreTwoA.getScore();

  var fillScoreTwoB = new RealityFillAnswerScore(form.fill_1_2_2.name, form.fill_1_2_2.value);
  score += fillScoreTwoB.getScore();

  var fillScoreTwoC = new RealityFillAnswerScore(form.fill_1_2_3.name, form.fill_1_2_3.value);
  score += fillScoreTwoC.getScore();

  var radioScoreOne = new RealityRadioAnswerScore(form.radio_2_1, form.radio_2_1.value);
  score += radioScoreOne.getScore();

  var radioScoreTwo = new RealityRadioAnswerScore(form.radio_2_2, form.radio_2_2.value);
  score += radioScoreTwo.getScore();

  var judgeScoreOne = new RealityRadioAnswerScore(form.judge_4_1, form.judge_4_1.value);
  score += judgeScoreOne.getScore();

  var judgeScoreTwo = new RealityRadioAnswerScore(form.judge_4_2, form.judge_4_2.value);
  score += judgeScoreTwo.getScore();

  document.getElementById("account").value = score;

  return false;
}
