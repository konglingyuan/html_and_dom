function RealityJudgeAnswerScore(questionNum, realityAnswers) {
  RealityAnswer.call(this.questionNum, realityAnswers);
}

RealityJudgeAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityJudgeAnswerScore.prototype.constructor = RealityCheckAnswerScore;

RealityJudgeAnswerScore.prototype.getScore = function() {
  var score = 0;

  var findAllAnswer = DefaultAnswer.all();

  for(var i = 0; i < findAllAnswer.length; i++) {
    if(this.questionNum === findAllAnswer[i].qusetionNum) {
      score = (realityAnswers === findAllAnswer[i].defaultAnswer.toString()) ? findAllAnswer[i].score : 0;
    }
  }

  return score;
};
