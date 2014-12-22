function TotalScore(elementName, realityAnswers) {
  this.elementName = elementName;
  this.realityAnswer = realityAnswer;
}

TotalScore.prototype.getTotalScore = function() {
  var _this = this;

  var scores = [];
  _.forEach(realityAnswers, function(realityAnswer) {
    realityAnswer.getScore(this.elementName);
  });

  _.forEach(realityAnswers, function(realityAnswer) {
    scores.push(realityAnswer, "score");
  });

  return _.reduce(scores, function (scoreA, scoreB) {
    return scoreA + scoreB;
  });
};
