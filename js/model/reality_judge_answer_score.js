function RealityJudgeAnswerScore(questionNum, defaultAnswer, score) {
  RealityAnswer.call(this, questionNum, defaultAnswer, score);
}

RealityJudgeAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityJudgeAnswerScore.prototype.constructor = RealityJudgeAnswerScore;

RealityJudgeAnswerScore.prototype.getScore = function(document) {
  var elements = document.getElementsByName(this.questionNum);

  var oneNum = _.find(elements, { checked : true });

  if(oneNum) {
    this.totalScore = this.defaultAnswer.toString() === oneNum.value ? this.score : 0;
  }

  return this.totalScore;
};
