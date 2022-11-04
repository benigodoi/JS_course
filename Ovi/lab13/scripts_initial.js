var cssList = ['bodyClass1','bodyClass2','bodyClass3']
var cssCount = [0, 0, 0]

function newclick(){
    for (let index = 0; index < 10; index++) {
        setTimeout(actionsDone, index * 1000)
    }
}

function actionsDone() {
    var newColor = schimbaCSS()
    var body = document.getElementById('body')
    var appliedCSS =cssList[newColor]
    body.classList= [];
    body.classList.add(appliedCSS)
    numaraCSS(newColor)
    afiseazaResultatele()
    agregareRezultate()
}
function schimbaCSS() {

    var newCSS = Math.floor(Math.random() * cssList.length)
    return newCSS
} 

function numaraCSS(option){
    cssCount[option]++
}

function afiseazaResultatele(){
    var values = ''
    var lista = document.getElementById('claseFolosite')

    for (let index = 0; index < cssList.length; index++) {
        var clasaFolosita = cssList[index];
        var numarulUtlizarilor = cssCount[index]
        values+="<li> clasele utilizate sunt: " + clasaFolosita + " si numarul lor este  " + numarulUtlizarilor + "</li>"     
    }
    lista.innerHTML=values
}

function agregareRezultate(){
    var listaMax = document.getElementById('maxim')
    
    var valueMax=Math.max(...cssCount)
    
    var posMax = cssCount.indexOf(valueMax)
    
    var textResult="Cea mai folosita clasa este : " + cssList[posMax] + " si a fost folosita de " + valueMax + "ori"
   
    listaMax.innerHTML=textResult
}