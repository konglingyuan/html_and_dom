function RealityShortAnswerScore(questionNum, realityAnswers) {
  RealityAnswer.call(this.questionNum, realityAnswers);
}

RealityShortAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityShortAnswerScore.prototype.constructor = RealityCheckAnswerScore;

RealityShortAnswerScore.prototype.getScore = function() {
  var score = 0;

  var findAllAnswer = DefaultAnswer.all();

  for(var i = 0; i < findAllAnswer.length; i++) {
    if(this.questionNum === findAllAnswer[i].qusetionNum) {
      score = (realityAnswers === findAllAnswer[i].defaultAnswer.toString()) ? findAllAnswer[i].score : 0;
    }
  }

  return score;
};
