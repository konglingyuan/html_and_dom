function RealityCheckAnswerScore(questionNums, realityAnswer, score) {
  RealityAnswer.call(this, questionNums, realityAnswer, score);
}

RealityCheckAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityCheckAnswerScore.prototype.constructor = RealityCheckAnswerScore;

RealityCheckAnswerScore.prototype.getScore = function(elementName) {
  var _this = this;

  var answer = [];

  _.forEach(elementName, function(oneNum) {
    if(oneNum.checked) {
      answer.push(oneNum.value);
    }

    if(oneNum.name === elementName) {
      this.totalScore = (answer.toString() === elementName.value.toString()) ? this.score : 0;
    }
  });
};
