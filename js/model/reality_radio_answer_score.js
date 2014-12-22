function RealityRadioAnswerScore(questionNums, realityAnswer, score) {
  RealityAnswer.call(this, questionNums, realityAnswer, score);
}

RealityRadioAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityRadioAnswerScore.prototype.constructor = RealityRadioAnswerScore;

RealityRadioAnswerScore.prototype.getScore =function(document) {
  var elements = document.getElementsByName(this.questionNums);

  var oneNum = _.find(elements, { checked : true });
  if(oneNum) {
    this.totalScore = this.realityAnswer === oneNum.value ? this.score : 0;
  }
};
