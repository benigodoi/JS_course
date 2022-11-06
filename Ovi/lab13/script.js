var classList = ['bodyClass1', 'bodyClass2', 'bodyClass3']
var countClass = [0, 0, 0]

//eu nu sunt mare fan comentariilor astea, dar daca pe tine te ajuta is ok
/*
    functia clickMe, functia initiala de click, cu un For loop si timeout pentru apelarea urmatorei functii principale
*/
function buttonClick() {
    for (let index = 0; index < 10; index++) {
        setTimeout(buttonClickActions, index * 1000)
    }
}

/* 
    functia principala - buttonClickActions - toate actiunile se ruleaza in aceasta functie
*/
function buttonClickActions() {
    debugger
    var appliedClassIndex = generateRandomClassIndex()
    // index-ul e un numar n-are cum sa fie string
    var appliedClass = classList[appliedClassIndex]
    setBodyClass(appliedClass)
    countClassIndexes(appliedClassIndex)
    displayUsedClasses()
    displayMaxResults()
}

/* 
    functia generateRandomClassFromList - va genera un id random din lista de clase
*/
function generateRandomClassIndex() {
    var newCSSIndex = Math.floor(Math.random() * classList.length)
    return newCSSIndex
}

/* 
    functia getBodyIDs - returneaza id'urile necesare si le stocheaza in variabile
*/
// metodele get trebuie sa returneze ceva
function setBodyClass(cssClass) {
    var bodyElement = document.getElementById('body')
    bodyElement.classList = []
    bodyElement.classList.add(cssClass)
}

/* 
    functia countClassIndexes - incrementeaza array'ul countClass
*/
function countClassIndexes(appliedClassIndex) {
    countClass[appliedClassIndex]++
}

/* 
    functia displayUsedClasses - scrie in ul numele si valoarea clasei folosite
*/
function displayUsedClasses() {
    var claseFolositeElement = document.getElementById('claseFolosite')
    var values = ''
    for (let index = 0; index < classList.length; index++) {
        var usedClass = classList[index];
        var numOfUsed = countClass[index]
        values += "<li> clasele utilizate sunt: " + usedClass + " si numarul lor este  " + numOfUsed + "</li>"
    }
    claseFolositeElement.innerHTML = values
}

/* 
    functia displayMaxResults - calculeaza clasa care a fost folosita ce-a mai des / 2 modalitati
*/
function displayMaxResults() {

    var maximElement = document.getElementById('maxim')
    var maxValue = Math.max(...countClass)
    //asta e un int n-are cum sa fie un class name
    var classNameIndex = countClass.indexOf(maxValue)
    //for (let index = 0; index < classList.length; index++) {
    //    var maxValue2 = countClass
    //}
    var textResult = "Cea mai folosita clasa este " + classList[classNameIndex] + " si a fost folosita de " + maxValue + " ori"
    maximElement.innerHTML = textResult
}

// foarte buna implementarea. 
// am adaugat pe ici pe colo cate un comentariu
// astept si varianta a doua, cu for-ul 