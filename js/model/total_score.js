function TotalScore(document, realityAnswers) {
  this.document = document;
  this.realityAnswers = realityAnswers;
}

TotalScore.prototype.getTotalScore = function() {
  var scores = [];
  _.forEach(this.realityAnswers, function(realityAnswer) {
    realityAnswer.getScore(this.document);
  });

  _.forEach(this.realityAnswers, function(realityAnswer) {
    scores.push(realityAnswer, "score");
  });

  return _.reduce(scores, function (scoreA, scoreB) {
    return scoreA + scoreB;
  });
};
