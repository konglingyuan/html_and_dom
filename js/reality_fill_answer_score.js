function RealityFillAnswerScore(questionNum, realityAnswers) {
  RealityAnswer.call(this.questionNum, realityAnswers);
}

RealityFillAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityFillAnswerScore.prototype.constructor = RealityFillAnswerScore;

FillScore.prototype.getScore = function() {
  var score = 0;

  var findAllAnswer = DefaultAnswer.all();

  for(var i = 0; i < findAllAnswer.length; i++) {
    if(this.questionNum === findAllAnswer[i].qusetionNum) {
      score = realityAnswers === findAllAnswer[i].defaultAnswer ? findAllAnswer[i].score : 0;
    }
  }

  return score;
};
