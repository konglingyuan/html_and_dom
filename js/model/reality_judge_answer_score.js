function RealityJudgeAnswerScore(questionNums, realityAnswer, score) {
  RealityAnswer.call(this, questionNums, realityAnswer, score);
}

RealityJudgeAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityJudgeAnswerScore.prototype.constructor = RealityJudgeAnswerScore;

RealityJudgeAnswerScore.prototype.getScore = function(elementName) {
  var _this = this;

  var oneNum = _.find(elementName, { checked : true });

  if(oneNum) {
    this.totalScore = this.realityAnswer === oneNum.value ? this.score : 0;
  }
};
