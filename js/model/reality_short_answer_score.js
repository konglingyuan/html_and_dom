function RealityShortAnswerScore(questionNum, realityAnswer, score) {
  RealityAnswer.call(this, questionNum, realityAnswer, score);
}

RealityShortAnswerScore.prototype = Object.create(RealityShortAnswerScore.prototype);

RealityShortAnswerScore.prototype.constructor = RealityShortAnswerScore;

RealityShortAnswerScore.prototype.getScore = function(elementName) {
  if (elementName) {
    this.totalScore = this.realityAnswer === elementName.value.trim() ? this.score : 0;
  }
};
