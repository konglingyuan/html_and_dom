function RealityFillAnswerScore(questionNum, realityAnswers) {
  this.questionNum = questionNum;
  this.realityAnswers = realityAnswers;
}

RealityFillAnswerScore.prototype.getScore = function() {
  var score = 0;

  var answers = [];

  var _this = this;

  if(this.realityAnswers) {
    answers.push(this.realityAnswers);
  }

  _.forEach(DefaultAnswer.all(), function(findAllAnswer) {
    if(_this.questionNum === findAllAnswer.questionNum) {
      for(var i = 0; i < answers.length; i++) {
        score = _.contains(findAllAnswer.defaultAnswer, answers[i]) ? findAllAnswer.score : 0;
      }
    }
    return;
  });

  return score;
};
