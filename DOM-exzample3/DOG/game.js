
function findNextBone() {
    
    // Алгоритм функции:
    var div = document.getElementsByClassName("bone")
    div[0].classList = 'bone-found' ;
    if (div.length == 0 ){
        style1()
    }
    console.log(div)
}
function style1(){
    for(var a=0;a<100;a++){
        var grass1 = document.getElementsByClassName('grass')[a]
        grass1.setAttribute('style', 'background: none;')
        grass1.innerHTML = '<h4>GAME OVER</h4>'
     for(var b=0;b<5;b++){
        var yard1 = document.getElementsByClassName('bone-found')[b]
        yard1.setAttribute('style', 'background: none;')              
        yard1.innerHTML = '<h4>GAME OVER</h4>'
         }
        
    }
}


