function RealityJudgeAnswerScore(questionNums, realityAnswer, score) {
  RealityAnswer.call(this, questionNums, realityAnswer, score);
}

RealityJudgeAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityJudgeAnswerScore.prototype.constructor = RealityJudgeAnswerScore;

RealityJudgeAnswerScore.prototype.getScore = function(document) {
  var elements = document.getElementsByName(this.questionNums);

  var oneNum = _.find(elements, { checked : true });

  if(oneNum) {
    this.totalScore = this.realityAnswer === oneNum.value ? this.score : 0;
  }
};
