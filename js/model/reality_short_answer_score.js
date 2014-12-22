function RealityShortAnswerScore(questionNum, realityAnswers, score) {
  RealityAnswer.call(this, questionNum, realityAnswer, score);
}

RealityShortAnswerScore.prototype = Object.create(RealityShortAnswerScore.prototype);

RealityShortAnswerScore.prototype.constructor = RealityShortAnswerScore;

RealityShortAnswerScore.prototype.getScore = function(elementName) {
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
