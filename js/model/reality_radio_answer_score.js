function RealityRadioAnswerScore(questionNum, defaultAnswer, score) {
  RealityAnswer.call(this, questionNum, defaultAnswer, score);
}

RealityRadioAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityRadioAnswerScore.prototype.constructor = RealityRadioAnswerScore;

RealityRadioAnswerScore.prototype.getScore =function(document) {
  var elements = document.getElementsByName(this.questionNum);

  var oneNum = _.find(elements, { checked : true });
  if(oneNum) {
    this.totalScore = this.defaultAnswer.toString() === oneNum.value ? this.score : 0;
  }

  return this.totalScore;
};
