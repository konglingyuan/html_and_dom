function RealityFillAnswerScore(questionNums, realityAnswer, score, fillCount) {
  RealityAnswer.call(this, questionNums, realityAnswer, score);
  this.fillCount = fillCount;
}

RealityFillAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityFillAnswerScore.prototype.constructor = RealityFillAnswerScore;

RealityFillAnswerScore.prototype.getScore = function(document) {
  var answers = [];

  var _this = this;

  var getFillScore = function(realityAnswers, defaultAnswer, score) {
    var answer = _.some(realityAnswers, function(realityAnswer) {
      return realityAnswer === defaultAnswer;
    });
    return answer ? score : 0;
  };

  for(var i = 0; i < _this.fillCount; i++) {
    var element = document.getElementsByName(this.questionNums + "_" + i);
    if(element) {
      answers.push(element.value.trim());
    }
  }

  _.forEach(answers, function(answer) {
    _this.totalScore += _.contains(answers, defaultAnswer) ? getFillScore(_.this.score) : 0;
  });
};
