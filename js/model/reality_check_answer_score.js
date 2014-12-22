function RealityCheckAnswerScore(questionNums, realityAnswer, score) {
  RealityAnswer.call(this, questionNums, realityAnswer, score);
}

RealityCheckAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityCheckAnswerScore.prototype.constructor = RealityCheckAnswerScore;

RealityCheckAnswerScore.prototype.getScore = function(elementName) {
  var score = 0;

  var findAllAnswer = DefaultAnswer.all();

  var _this = this;

  var answer = [];

  _.forEach(this.questionNum, function(oneNum) {
    if(oneNum.checked) {
      answer.push(oneNum.value);
    }

    for(var i = 0; i < findAllAnswer.length; i++) {
      if(oneNum.name === findAllAnswer[i].questionNum) {
        score = (answer.toString() === findAllAnswer[i].defaultAnswer.toString()) ? findAllAnswer[i].score : 0;
      }
    }
  });

  return score;
};
