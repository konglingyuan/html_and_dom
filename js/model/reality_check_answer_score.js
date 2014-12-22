function RealityCheckAnswerScore(questionNums, realityAnswer, score) {
  RealityAnswer.call(this, questionNums, realityAnswer, score);
}

RealityCheckAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityCheckAnswerScore.prototype.constructor = RealityCheckAnswerScore;

RealityCheckAnswerScore.prototype.getScore = function(document) {
  var _this = this;

  var answer = [];

  var elements = document.getElementsByName(this.questionNums);

  _.forEach(elements, function(oneNum) {
    if(oneNum.checked) {
      answer.push(oneNum.value);
    }

    if(oneNum.name === this.questionNums) {
      this.totalScore = (answer.toString() === this.questionNums.value.toString()) ? this.score : 0;
    }
  });
};
