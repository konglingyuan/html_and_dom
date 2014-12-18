function RealityRadioAnswerScore(questionNum, realityAnswers) {
  this.questionNum = questionNum;
  this.realityAnswers = realityAnswers;
}

RealityRadioAnswerScore.prototype.getScore =function() {
  var score = 0;

  var findAllAnswer = DefaultAnswer.all();

  var _this = this;

  var oneNum = _.find(_this.questionNum, function(oneNum) {
    return oneNum;
  });

  for(var i = 0; i < findAllAnswer.length; i++) {
    if(oneNum.name === findAllAnswer[i].questionNum) {
      score = (this.realityAnswers === findAllAnswer[i].defaultAnswer.toString()) ? findAllAnswer[i].score : 0;
    }
  }

  return score;
};
