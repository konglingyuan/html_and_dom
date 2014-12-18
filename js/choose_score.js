function ChooseScore (qusetionNum, defaultAnswers, score) {
  this.questionNum = questionNum;
  this.defaultAnswers = defaultAnswers;
  this.score = score;
}

ChooseScore.prototype.getChooseScore = function() {
  var score = 0;

  var chooseAnswer = this.questionNum.value;

  for(var i = 0; i < questionNum.length; i++) {
    for(var j = 0; j < this.defaultAnswers.length; j++) {
      if(this.questionNum.checked && chooseAnswer === this.defaultAnswers[i]) {
        score += this.score;
      }
    }
  }

  return score;
};
