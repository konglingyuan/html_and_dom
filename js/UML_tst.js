function getScore () {
  var form = document.getElementById("form");
  var score = 0;

  score += getInputAnswer(form);

  score += getRadioAnswer(form);

  score += getCheckAnswer(form.checkOne, "A,B,D");

  score += getCheckAnswer(form.checkTwo, "A,B,C");

  score += getJudgeAnswer(form);

  score += getSimpleAnswer(form);

  document.getElementById("account").value = score;
}

function getInputAnswer (form) {
  var score = 0;

  if (form.firstFile.value === "统一建模语言") {
    score += 5;
  }

  var arrays = ["封装性", "继承性", "多态性"];

  var secondFileOne = form.secondFileOne.value;
  var secondFileTwo = form.secondFileTwo.value;
  var secondFileThree = form.secondFileThree.value;

  _.forEach (arrays, function (array) {
    if (secondFileOne === array) {
      score += 5;
    }

    if (secondFileTwo !== secondFileOne && secondFileTwo === array) {
      score += 5;
    }

    if (secondFileThree !== secondFileTwo && secondFileThree !== secondFileOne && secondFileThree === array) {
      score += 5;
    }
  });

  return score;
}

function getRadioAnswer (form) {
  var score = 0;

  _.forEach (form.radioOne, function (radioOne) {
    if (radioOne.checked && radioOne.value === "B") {
      score += 10;
    }
  });

  _.forEach (form.radioTwo, function (radioTwo) {
    if (radioTwo.checked && radioTwo.value === "A") {
      score += 10;
    }
  });

  return score;
}

function getCheckAnswer (checkBoxs, checkAnswer) {
  var score = 0;

  var answer = [];

  _.forEach(checkBoxs, function (checkBox) {
    if (checkBox.checked) {
      answer.push(checkBox.value);
    }
  });

  if (answer.toString() === checkAnswer) {
    score += 10;
  }

  return score;
}

function getJudgeAnswer (form) {
  var score = 0;

  _.forEach(form.radioForJudgeOne, function (radioForJudgeOne) {
    if (radioForJudgeOne.checked && radioForJudgeOne.value == "N") {
      score += 10;
    }
  });

  _.forEach(form.radioForJudgeTwo, function (radioForJudgeTwo) {
    if (radioForJudgeTwo.checked && radioForJudgeTwo.value == "Y") {
      score += 10;
    }
  });

  return score;
}

function getSimpleAnswer (form) {
  var score = 0;

  var str = "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。"+
            "可以是物理实体；可以是某种图形；或者是一种数学表达式。";

  if (form.simpleOne.value === str) {
    score += 20;
  }

  return score;
}
