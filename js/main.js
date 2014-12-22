function getScore () {
  var inputsInfomations = [
    { id : form.class, text : "class" },
    { id : form.schoolNum, text : "number" },
    { id : form.names, text : "name" }
  ];

  if(promptMessage(inputsInfomations)) {
    return false;
  }

  var realityAnswers = DefaultAnswer.all();

  var totalScore = new TotalScore(document, realityAnswers);

  var account = document.getElementById("account");
  if(account) {
    account.innerText = totalScore.getTotalScore();
  }
  return false;
}

function promptMessage(inputsInfomations) {
  for (var i = 0; i < inputsInfomations.length; i++) {
    var inputsInfomation = inputsInfomations[i];
    var element = inputsInfomation.id;
    if (element && _.isEmpty(element.value)) {
      alert("Please input " + inputsInfomation.text + "!");
      return true;
    }
  }

  return false;
}
