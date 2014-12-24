function RealityShortAnswerScore(questionNum, defaultAnswer, score) {
  RealityAnswer.call(this, questionNum, defaultAnswer, score);
}

RealityShortAnswerScore.prototype = Object.create(RealityShortAnswerScore.prototype);

RealityShortAnswerScore.prototype.constructor = RealityShortAnswerScore;

RealityShortAnswerScore.prototype.getScore = function(document) {
  var element = document.getElementById(this.questionNum);

  if (element) {
    this.totalScore = this.defaultAnswer.toString() === element.value ? this.score : 0;
  }
  
  return this.totalScore;
};
