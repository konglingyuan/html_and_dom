function RealityShortAnswerScore(questionNum, realityAnswer, score) {
  RealityAnswer.call(this, questionNum, realityAnswer, score);
}

RealityShortAnswerScore.prototype = Object.create(RealityShortAnswerScore.prototype);

RealityShortAnswerScore.prototype.constructor = RealityShortAnswerScore;

RealityShortAnswerScore.prototype.getScore = function(document) {
  var element = document.getElementsByName(this.questionNums);

  if (element) {
    this.totalScore = this.realityAnswer === element.value ? this.score : 0;
  }
};
