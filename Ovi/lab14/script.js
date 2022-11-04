
function checkAnswerv2() { 
//  debugger
  correct_results = 0;
  incorrect_results = 0;
  correct_answers = ['Vilnius','Volga','Mont Blanc','Germania','Serbia']
  for (let i = 1; i <= correct_answers.length; i++) {
      var answer = document.getElementsByName("question" + i)
      for (let j = 0; j < answer.length; j++) {
          selected_elem = document.getElementById(answer[j].value);

          if(selected_elem.getAttribute('class') !=null) {
            selected_elem.removeAttribute('class')
        }
          //selected_elem.classList.remove("correct-answer")
          //selected_elem.classList.remove("incorrect-answer")
          if (answer[j].checked) {
              if (correct_answers.includes(answer[j].value)) {
                  correct_results++;
                  selected_elem.classList.add("correct-answer");
              } else { 
                  incorrect_results++
                  selected_elem.classList.add("incorrect-answer") 
              }
          }
      }
  }
  if (correct_results + incorrect_results != 5) {
      alert("Nu ai raspuns la toate intrebarile")
      return;
  }
  console.log(correct_results)
  console.log(incorrect_results)
  show_correct_results = document.getElementById("correct").innerHTML = "Ai raspuns corect la" + " " + correct_results + " " + "intrebari";
  show_incorrect_results = document.getElementById("incorrect").innerHTML = "Ai raspuns gresit la" + " " + incorrect_results + " " + "intrebari";
  //show_correct_results.innerHTML = "Ai raspuns corect la" + " " + correct_results + " " + "intrebari";
  //show_incorrect_results.innerHTML = "Ai raspuns gresit la" + " " + incorrect_results + " " + "intrebari";
}



// functie pt numar de intrebari rasp si highlighr pe care nu sunt
//
//buton inactiv pana nu se completeaza toate sau sa analizeze inainte de raspunsuri daca sunt toate completate