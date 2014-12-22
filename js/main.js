function getScore () {
  var score = 0;
  var form = document.getElementById("form");

  var inputsInfomations = [
    { id : form.class, text : "class" },
    { id : form.schoolNum, text : "number" },
    { id : form.names, text : "name" }
  ];

  if(promptMessage(inputsInfomations)) {
    return false;
  }

  var allAnswers = DefaultAnswer.all();

  var totalScore = new TotalScore(form.name, allAnswers);

  var account = document.getElementById("account").value = score;
  if(account) {
    account.innerText = totalScore.getTotalScpre();
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
