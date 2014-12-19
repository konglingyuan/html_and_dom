function RealityFillAnswerScore(questionNums) {
  this.questionNums = questionNums;
}

RealityFillAnswerScore.prototype.getScore = function() {
  var score = 0;

  var answers = [];

  var _this = this;

  var tagName;

  _.forEach(_this.questionNums, function(questionNum) {
    if(questionNum) {
      answers.push(questionNum.value);
      tagName = questionNum.name;
    }
  });

  var findName = _.find(DefaultAnswer.all(), { 'questionNum' : tagName });

  _.forEach(findName.defaultAnswer, function(defaultAnswer) {
    score += _.contains(answers, defaultAnswer) ? findName.score : 0;
  });

  return score;
};
