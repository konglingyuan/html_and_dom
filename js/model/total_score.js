function TotalScore(document, defaultAnswers) {
  this.document = document;
  this.defaultAnswers = defaultAnswers;
}

TotalScore.prototype.getTotalScore = function() {
  var scores = [];
  var totalScore = 0;
  var _this = this;
  _.forEach(_this.defaultAnswers, function(defaultAnswer) {
    totalScore += defaultAnswer.getScore(_this.document);
  });

  return totalScore;
};
