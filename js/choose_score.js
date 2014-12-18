function ChooseScore (qusetionNum, defaultAnswers, score) {
  this.questionNum = questionNum;
  this.defaultAnswers = defaultAnswers;
  this.score = score;
}

ChooseScore.prototype.getChooseScore = function() {
  var score = 0;

  var chooseAnswer = this.questionNum.value;

};
