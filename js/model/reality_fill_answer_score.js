function RealityFillAnswerScore(questionNum, defaultAnswer, score, fillCount) {
  RealityAnswer.call(this, questionNum, defaultAnswer, score);
  this.fillCount = fillCount;
}

RealityFillAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityFillAnswerScore.prototype.constructor = RealityFillAnswerScore;

RealityFillAnswerScore.prototype.getScore = function(document) {
  var answers = [];

  var _this = this;

  for(var i = 0; i < _this.fillCount; i++) {
    var elements = document.getElementsByName(this.questionNum);
    for(var j = 0; j < elements.length; j++) {
      if(elements[i]) {
        answers.push(elements[i].value);
      }
    }
  }

  var realAnswers = _.uniq(answers);
  _.forEach(_this.defaultAnswer, function(defaultAnswer) {
    _this.totalScore += _.contains(realAnswers, defaultAnswer) ? _this.score : 0;
  });

  return _this.totalScore;
};
