function DefaultAnswer(questionNum, defaultAnswer, score) {
  this.questionNum = questionNum;
  this.defaultAnswer = defaultAnswer;
  this.score = score;
}

DefaultAnswer.all = function() {
  return [
    new DefaultAnswer("fill_1_1", ["统一建模语言"], 5, 1),
    new DefaultAnswer("fill_1_2", ["封装性", "继承性", "多态性"], 5, 3),
    new DefaultAnswer("radio_2_1", ["B"], 5),
    new DefaultAnswer("radio_2_2", ["A"], 5),
    new DefaultAnswer("check_3_1", ["A", "B", "D"], 5),
    new DefaultAnswer("check_3_2", ["A", "B", "C"], 5),
    new DefaultAnswer("judge_4_1", ["N"], 10),
    new DefaultAnswer("judge_4_2", ["Y"], 10),
    new DefaultAnswer("short_5_1", ["模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。"+
                      "可以是物理实体；可以是某种图形；或者是一种数学表达式。"], 20)
  ];
};
