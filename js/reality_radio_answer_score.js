function RealityRadioAnswerScore(questionNum, realityAnswers) {
  RealityAnswer.call(this.questionNum, realityAnswers);
}

RealityRadioAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityRadioAnswerScore.prototype.constructor = RealityRadioAnswerScore;

RealityRadioAnswerScore.prototype.getScore =function() {
  var score = 0;

  var findAllAnswer = DefaultAnswer.all();

  for(var i = 0; i < findAllAnswer.length; i++) {
    if(this.questionNum === findAllAnswer[i].qusetionNum) {
      score = realityAnswers === findAllAnswer[i].defaultAnswer ? findAllAnswer[i].score : 0;
    }
  }

  return score;
};
