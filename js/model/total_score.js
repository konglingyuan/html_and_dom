function TotalScore(document, realityAnswers) {
  this.document = document;
  this.realityAnswers = realityAnswers;
}

TotalScore.prototype.getTotalScore = function() {
  var _this = this;

  var scores = [];
  _.forEach(_this.realityAnswers, function(realityAnswer) {
    realityAnswer.getScore(_this.document);
  });

  _.forEach(this.realityAnswers, function(realityAnswer) {
    scores.push(realityAnswer, "score");
  });

  return _.reduce(scores, function (scoreA, scoreB) {
    return scoreA + scoreB;
  });
};
