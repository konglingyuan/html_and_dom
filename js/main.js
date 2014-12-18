function getScore () {
  var form = document.getElementById("form");

  var fillScore = new RealityFillAnswerScore(form.fill_1_1, form.fill_1_1.value);
  var score = fillScore.getScore();

  // var score = 0;
  //
  // var fillOne = new FillScore(form.fill_1_1, ["统一建模语言"], 5);
  // score += fillOne.getFillScore();
  //
  // var radioOne = new ChooseScore(form.radio_2_1, ["B"], 5);
  // score += radioOne.getChooseScore();
  //
  // //score += getRadioAnswer(form);
  //
  // score += getCheckAnswer(form.checkOne, "A,B,D");
  //
  // score += getCheckAnswer(form.checkTwo, "A,B,C");
  //
  // score += getJudgeAnswer(form);
  //
  // var simpleOneAnswer = ["模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。"+
  //                       "可以是物理实体；可以是某种图形；或者是一种数学表达式。"];
  //
  // var simpleOne = new FillScore(form.short_5_1, simpleOneAnswer, 20);
  // score += simpleOne.getFillScore();
  //
  document.getElementById("account").value = score;

  return false;
}

// function getRadioAnswer (form) {
//   var score = 0;
//
//   _.forEach (form.radioOne, function (radioOne) {
//     if (radioOne.checked && radioOne.value === "B") {
//       score += 10;
//     }
//   });
//
//   _.forEach (form.radioTwo, function (radioTwo) {
//     if (radioTwo.checked && radioTwo.value === "A") {
//       score += 10;
//     }
//   });
//
//   return score;
// }
//
// function getCheckAnswer (checkBoxs, checkAnswer) {
//   var score = 0;
//
//   var answer = [];
//
//   _.forEach (checkBoxs, function (checkBox) {
//     if (checkBox.checked) {
//       answer.push(checkBox.value);
//     }
//   });
//
//   if (answer.toString() === checkAnswer) {
//     score += 10;
//   }
//
//   return score;
// }
//
// function getJudgeAnswer (form) {
//   var score = 0;
//
//   _.forEach (form.radioForJudgeOne, function (radioForJudgeOne) {
//     if (radioForJudgeOne.checked && radioForJudgeOne.value == "N") {
//       score += 10;
//     }
//   });
//
//   _.forEach (form.radioForJudgeTwo, function (radioForJudgeTwo) {
//     if (radioForJudgeTwo.checked && radioForJudgeTwo.value == "Y") {
//       score += 10;
//     }
//   });
//
//   return score;
// }
