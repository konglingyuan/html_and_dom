function RealityFillAnswerScore(questionNum, realityAnswer, score, fillCount) {
  RealityAnswer.call(this, questionNum, realityAnswer, score);
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
    var elements = document.getElementsByName(this.questionNum);
    for(var j = 0; j < elements.length; j++) {
      if(elements[i]) {
        answers.push(elements[i].value);
      }
    }
  }

  _.uniq(answers).forEach(function (answer) {
    _this.score += getScore(this.realityAnswer, answer, this.score);
  });
};
