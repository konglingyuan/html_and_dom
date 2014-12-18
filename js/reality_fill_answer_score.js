function RealityFillAnswerScore(questionNum, realityAnswers) {
  RealityAnswer.call(this.questionNum, realityAnswers);
}

RealityFillAnswerScore.prototype = Object.create(RealityAnswer.prototype);

RealityFillAnswerScore.prototype.constructor = RealityFillAnswerScore;

FillScore.prototype.getScore = function() {
  var score = 0;

  var answers = [];

  var findAllAnswer = _.find(DefaultAnswer.all(), function(findAllAnswer) {
    return findAllAnswer;
  });

  for(var i = 0; i < this.realityAnswers.length; i++) {
    if(this.realityAnswers[i]) {
      answer.push(this.realityAnswers[i]);
    }
  }

  if(this.questionNum === findAllAnswer.questionNum) {
    for(var j = 0; j < answer.length; j++) {
      if(_.contains(findAllAnswer.defaultAnswer, answer[i]) === true) {
        score = findAllAnswer.score;
      }
    }
  }

  return score;
};
