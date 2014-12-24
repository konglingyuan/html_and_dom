function RealityCheckAnswerScore(questionNums, defaultAnswer, score) {
  RealityAnswer.call(this, questionNums, defaultAnswer, score);
}

RealityCheckAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityCheckAnswerScore.prototype.constructor = RealityCheckAnswerScore;

RealityCheckAnswerScore.prototype.getScore = function(document) {
  var _this = this;

  var answer = [];

  var elements = document.getElementsByName(_this.questionNum);
  var oneNum;
  _.forEach(elements, function(element) {
    oneNum = element;
    if(element.checked) {
      answer.push(oneNum.value);
    }
  });

  if(oneNum.name === _this.questionNum) {
    this.totalScore += answer.toString() ? this.score : 0;
  }

  return this.totalScore;
};
