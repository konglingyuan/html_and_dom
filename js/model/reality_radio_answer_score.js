function RealityRadioAnswerScore(questionNums, realityAnswer, score) {
  RealityAnswer.call(this, questionNums, realityAnswer, score);
}

RealityRadioAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityRadioAnswerScore.prototype.constructor = RealityRadioAnswerScore;

RealityRadioAnswerScore.prototype.getScore =function(elementName) {
  var _this = this;

  var oneNum = _.find(elementName, { checked : true });

  if(oneNum) {
    this.totalScore = this.realityAnswer === oneNum.value ? this.score : 0;
  }
};
