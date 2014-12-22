function RealityFillAnswerScore(questionNums, realityAnswer, score, fillCount) {
  RealityAnswer.call(this, questionNums, realityAnswer, score);
  this.fillCount = fillCount;
}

RealityFillAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityFillAnswerScore.prototype.constructor = RealityFillAnswerScore;

RealityFillAnswerScore.prototype.getScore = function(elementName) {
  var answers = [];

  var _this = this;

  var getFillScore = function(realityAnswers, defaultAnswer, score) {
    var answer = _.some(realityAnswers, function(realityAnswer) {
      return realityAnswer === defaultAnswer;
    });
    return answer ? score : 0;
  };

  _.forEach(this.questionNums, function(questionNum) {
    if(elementName) {
      answers.push(elementName.value);
    }
  });

  _.forEach(answers, function(answer) {
    _this.score += _.contains(answers, defaultAnswer) ? getFillScore(_.this.score) : 0;
  });
};
