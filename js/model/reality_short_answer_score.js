function RealityShortAnswerScore(questionNum, realityAnswers, score) {
  RealityAnswer.call(this, questionNum, realityAnswer, score);
}

RealityShortAnswerScore.prototype = Object.create(RealityShortAnswerScore.prototype);

RealityShortAnswerScore.prototype.constructor = RealityShortAnswerScore;

RealityShortAnswerScore.prototype.getScore = function(elementName) {
  if (elementName) {
    this.totalScore = this.realityAnswers === elementName.value.trim() ? this.score : 0;
  }
};
