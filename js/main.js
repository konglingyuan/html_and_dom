function getScore () {
  var score = 0;
  var form = document.getElementById("form");

  this.getInfomationTip();

  var fillScoreOne = new RealityFillAnswerScore(form.fill_1_1);
  score += fillScoreOne.getScore();

  var fillScoreTwoA = new RealityFillAnswerScore(form.fill_1_2);
  score += fillScoreTwoA.getScore();

  var radioScoreOne = new RealityRadioAnswerScore(form.radio_2_1, form.radio_2_1.value);
  score += radioScoreOne.getScore();

  var radioScoreTwo = new RealityRadioAnswerScore(form.radio_2_2, form.radio_2_2.value);
  score += radioScoreTwo.getScore();

  var checkScoreOne = new RealityCheckAnswerScore(form.check_3_1);
  score += checkScoreOne.getScore();

  var checkScoreTwo = new RealityCheckAnswerScore(form.check_3_2);
  score += checkScoreTwo.getScore();

  var judgeScoreOne = new RealityJudgeAnswerScore(form.judge_4_1, form.judge_4_1.value);
  score += judgeScoreOne.getScore();

  var judgeScoreTwo = new RealityJudgeAnswerScore(form.judge_4_2, form.judge_4_2.value);
  score += judgeScoreTwo.getScore();

  var shortScoreOne = new RealityShortAnswerScore(form.short_5_1.name, form.short_5_1.value);
  score += shortScoreOne.getScore();

  document.getElementById("account").value = score;

  return false;
}

function getInfomationTip() {
  if(form.class.length === 0 && form.class === "") {
    alert("请输入班级!");
  }
  if(form.schoolNum.length === 0 && form.schoolNum === "") {
    alert("请输入学号!");
  }
  if(form.names.length === 0 && form.names === "") {
    alert("请输入姓名!");
  }
}
