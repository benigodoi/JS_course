var classList = ['bodyClass1','bodyClass2','bodyClass3']
var countClass = [0 , 0 , 0]

/*
    functia clickMe, functia initiala de click, cu un For loop si timeout pentru apelarea urmatorei functii principale
*/
function buttonClick(){

    for (let index = 0; index < 10; index++) {
        setTimeout(buttonClickActions, index * 1000)
        
    }
}

/* 
    functia principala - buttonClickActions - toate actiunile se ruleaza in aceasta functie
*/

function buttonClickActions(){
    debugger
    var classIndex = generateRandomClassIndex()
    var appliedClassIndex = classList[classIndex]
    getBodyIDs(appliedClassIndex)
    //countClass[classIndex]++
    countClassIndexes(classIndex)
    displayUsedClasses()
    displayMaxResults()
}
/* 
    functia generateRandomClassFromList - va genera un id random din lista de clase
*/
function generateRandomClassIndex(){

    var newCSS = Math.floor(Math.random() * classList.length)
    return newCSS
}
/* 
    functia getBodyIDs - returneaza id'urile necesare si le stocheaza in variabile
*/
function getBodyIDs(classIndex){

    var bodyID = document.getElementById('body')
    bodyID.classList = []
    bodyID.classList.add(classIndex)
   
} 
   
/* 
    functia countClassIndexes - incrementeaza array'ul countClass
*/
function countClassIndexes(number){
    countClass[number]++
}
/* 
    functia displayUsedClasses - scrie in ul numele si valoarea clasei folosite
*/
function displayUsedClasses(){
    var usedClassDivID = document.getElementById('claseFolosite')
    var values = ''
    for (let index = 0; index < classList.length; index++) {
        var usedClass = classList[index];
        var numOfUsed = countClass[index]
        values += "<li> clasele utilizate sunt: " + usedClass + " si numarul lor este  " + numOfUsed + "</li>"     
    }
    usedClassDivID.innerHTML=values
}
/* 
    functia displayMaxResults - calculeaza clasa care a fost folosita ce-a mai des / 2 modalitati
*/
function displayMaxResults(){
  
    var maxDivID = document.getElementById('maxim')
    var maxValue=Math.max(...countClass)
    var className = countClass.indexOf(maxValue)
    //for (let index = 0; index < classList.length; index++) {
    //    var maxValue2 = countClass
    //}
    var textResult="Cea mai folosita clasa este "  + classList[className]+ " si a fost folosita de " + maxValue+ " ori"
    maxDivID.innerHTML=textResult
}