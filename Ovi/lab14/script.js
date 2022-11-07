
// functie pt numar de intrebari rasp si highlighr pe care nu sunt
//
//buton inactiv pana nu se completeaza toate sau sa analizeze inainte de raspunsuri daca sunt toate completate

correct_results = 0;
incorrect_results = 0;
result = 0;
correct_answers = ["Vilnius", "Volga", "Mont Blanc", "Germania", "Serbia"];
function evaluateAnswers() {

  //debugger
  checkIfAnswerSelected();
}

var questionsDiv, index2;
function checkIfAnswerSelected() {
  var questionsDiv;
  var checkedElement;
  //debugger
  for (let index2 = 1; index2 <= correct_answers.length; index2++) {
    getQuestionsDiv(index2);
    getEachRadio(index2, questionsDiv);
    
  }
  if (result != 5) {
    alert(
      "nu ai rasp la toate intrebarile")
  }
  else{
    show_correct_results = document.getElementById("correct").innerHTML = "Ai raspuns corect la" + " " + correct_results + " " + "intrebari";
    show_incorrect_results = document.getElementById("incorrect").innerHTML = "Ai raspuns gresit la" + " " + incorrect_results + " " + "intrebari";
    result = 0;
    correct_results = 0;
    incorrect_results = 0;
  }
}

function getQuestionsDiv(index2) {
  //debugger

  var questionsDiv = document.getElementById("q" + index2);
  return questionsDiv;
}

function getEachRadio(index2, questionDiv) {
//  debugger

  var eachQuestion = document.getElementsByName("question" + index2);
  for (let counter = 0; counter < eachQuestion.length; counter++) {
    if (
      eachQuestion[counter].type === "radio" && eachQuestion[counter].checked
    ) {
      console.log(eachQuestion[counter]);
      //questionsDiv.classList.add("incorrect-answer")
      checkedElement = eachQuestion[counter].value;
      result++;
      validateCorrectResponse(checkedElement,eachQuestion)
    }
  }
}

function validateCorrectResponse(response,eachQuestion) {
    //debugger
  if (correct_answers.includes(response)) {
    correct_results++;
    //eachQuestion.classList.add("correct-answer");
  } else {
    incorrect_results++;
    //eachQuestion.classList.add("incorrect-answer");
  }

  console.log(correct_results);
  console.log(incorrect_results);
  
}
