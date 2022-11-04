function color_one()
{
    //debugger
    var element=document.getElementsByTagName('textarea')
    var element1=document.getElementsByTagName('h1')
    if(element[0].getAttribute('class') !=null) {
        element[0].removeAttribute('class')
        element1[0].removeAttribute('class')

    }
    //if (document.getElementsByClassName('color2').length  > 0 ) {
    //    // Existed
    //    element[0].removeAttribute('class')
    //    element1[0].removeAttribute('class')
    //}
    //debugger
    
element[0].classList.add('color1')
element1[0].classList.add('color1')
}


function color_doi()
{
    //debugger
        
    var element=document.getElementsByTagName('textarea')
    var element1=document.getElementsByTagName('h1')
        if(element[0].getAttribute('class') !=null) 
        {
            element[0].removeAttribute('class')
            element1[0].removeAttribute('class')

        }

    //    if (document.getElementsByClassName('color1').length  > 0) {
//        element[0].removeAttribute('class')
//        element1[0].removeAttribute('class')
//   } 


        element[0].classList.add('color2')
        element1[0].classList.add('color2')
        
 

}


function calcul(){
var a=35
var b=41

var c= Number(a)+ Number(b)

console.log(c)
}


    function bec(){
//debugger
    //var locatie=document.getElementById('beculet')
    //if(locatie.getAttribute('src') === 'img/aprins.png'){
    //    locatie.setAttribute('src','img/stins.png')
    //}
    //else{
    //    locatie.setAttribute('src','img/aprins.png')
    //}

    var locatie=document.getElementById('beculet')
    if(locatie.src.includes("aprins.png")){
        locatie.src='img/stins.png'
    }
    else{
        locatie.src='img/aprins.png'
    }



//var locatie=document.getElementById('beculet')
//console.log(locatie.src)
//if(locatie.src == 'img/aprins.png'){
//   locatie.src='img/stins.png'
//}
//else{
//   locatie.src='img/aprins.png'
//}

 
  }