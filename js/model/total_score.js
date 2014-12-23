function TotalScore(document, defaultAnswers) {
  this.document = document;
  this.defaultAnswers = defaultAnswers;
}

TotalScore.prototype.getTotalScore = function() {
  var scores = [];
  var totalScore = 0;
  _.forEach(this.defaultAnswers, function(defaultAnswer) {
    defaultAnswer.getScore(this.document);
  });

  _.forEach(this.defaultAnswers, function(answer) {
    if(this.document.value === answer.defaultAnswer) {
      scores.push(answer);
    }
  });

  _.find(scores, function(score) {
    totalScore += score.score;
  });
  return totalScore;
};
