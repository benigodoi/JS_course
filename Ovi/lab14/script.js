
// functie pt numar de intrebari rasp si highlighr pe care nu sunt
//
//buton inactiv pana nu se completeaza toate sau sa analizeze inainte de raspunsuri daca sunt toate completate

/*
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
   var currentQuestionDiv =  getQuestionsDiv(index2);
    getEachRadio(index2, currentQuestionDiv);
    
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
*/

/*

script no2

1. Verific daca toate intrebarile au raspuns. (cele care nu au raspuns le fac rosii)
  a. get question div in order to itterate through = done
  b. get element by tag name= input in order to check if checked = done
  c. if checked, continue( else color h1 tag to show unanswered questions) = done
2. Verific daca sunt corecte raspunsurile. - done

3. Afisez cu culori diferite daca raspunsul este corect/incorect.

4. Afisez rezultatul.

*/

let checkedElement
let correct_results = 0;
let incorrect_results = 0;
let result = 0;
correct_answers = ["Vilnius", "Volga", "Mont Blanc", "Germania", "Serbia"];





function buttonClickActions(){
  
var answers = mainActions()
    if(answers == correct_answers.length){
      showResults()
    }
    else{
        alert("nu ai raspuns ma la tot")
    }
}


function mainActions(){
//debugger
//
correct_results = 0;
incorrect_results = 0;
let answers = 0;
let questionElements = document.getElementsByClassName("question");

    for (let i = 0; i < questionElements.length; i++) {
      
      const questionElement = questionElements[i];
      let hasAnswer=false
      let inputsField = questionElement.getElementsByTagName("input");
      
        for (let index = 0; index < inputsField.length; index++) {
          const element = inputsField[index];
         
            if (element.checked) {
              hasAnswer = true;
              answers++;
              checkedElement = element.value;
              evaluateAnswers(checkedElement)
              highlightWrongAnswers(element)
              break;  
          }             
        }
     highlightUnansweredQuestions(hasAnswer,questionElement)
    }
    
  return answers
//merge si aici logica? sau mai ok ar fi sa fie in functia de click? 
//tehnic, asta face ce zice, adica check'uie daca a fost fiecare intrebare raspunsa...
//practic, are sens mai mult in functia de click, pt ca pot sa apelez functia ce evalueaza intrebarile dupa, sooo, mi-am rasp la intrebare :)))))))))))

//if(answers == correct_answers.length){
  
//}
//else{

//  alert("nu ai raspuns ma la tot")
//}
  }


function highlightUnansweredQuestions(hasAnswer,questionElement){
    let titleElement = questionElement.getElementsByTagName("h4")
    if(titleElement.length !=1) {
      alert("smthing ain't right ")
    }
      if (hasAnswer == false) {
        titleElement[0].classList.add("incorrect-answer")
      }
      else{
      titleElement[0].classList = []
    }
}

function highlightWrongAnswers(questionElement){
questionElement.classList.add("incorrect-answer")
  
}

function evaluateAnswers(response){
// debugger

    if (correct_answers.includes(response)) {
      correct_results++;
      
    } else {
      incorrect_results++; 
      //highlightWrongAnswers(response)
    }
  console.log(correct_results);
  console.log(incorrect_results); 
}

function showResults(){
 document.getElementById("correct").innerHTML = "Ai raspuns corect la" + " " + correct_results + " " + "intrebari";
 document.getElementById("incorrect").innerHTML = "Ai raspuns gresit la" + " " + incorrect_results + " " + "intrebari";

}
