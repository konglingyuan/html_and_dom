function FillScore(questionNum, defaultAnswers, score) {
  this.questionNum = questionNum;
  this.defaultAnswers = defaultAnswers;
  this.score = score;
}

FillScore.prototype.getFillScore = function() {
  var score = 0;

  var fillAnswer = this.questionNum.value;
  var defaultAnswers = this.defaultAnswers;

  for(var i = 0; i < defaultAnswers.length; i++) {
    if(fillAnswer === defaultAnswers[i]) {
      score += this.score;
    }
  }

  return score;
};
