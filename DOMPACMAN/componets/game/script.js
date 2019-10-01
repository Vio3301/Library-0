var pac_r = rendCoord()   //  unde se afla pacmanul
var pac_c = rendCoord()   // unde se afla pacmanul

var pac_healf = 100 // viata 100% -
var pac_coin = 0   // monede 0+
var pac_explode = false


var gameGRid = [
    [null,null,null,null,null,null,null,null,null,null,],// 0
    [null,null,null,null,null,null,null,null,null,null,], // 1
    [null,null,null,null,null,null,null,null,null,null,], // 2
    [null,null,null,null,null,null,null,null,null,null,], // 3
    [null,null,null,null,null,null,null,null,null,null,],// 4
    [null,null,null,null,null,null,null,null,null,null,],// 5
    [null,null,null,null,null,null,null,null,null,null,],// 6
    [null,null,null,null,null,null,null,null,null,null,],// 7
    [null,null,null,null,null,null,null,null,null,null,],// 8
    [null,null,null,null,null,null,null,null,null,null,]// 9
]     // 0  ,1  ,  2  , 3 , 4  , 5  , 6  ,  7 ,  8 ,  9


gameGRid[pac_r][pac_c] = 1          //pacman code
gameGRid[rendCoord()][rendCoord()] = 2 //coin code
gameGRid[rendCoord()][rendCoord()] = 3
while(Math.random()< 0.6){
gameGRid[rendCoord()][rendCoord()] = 4   // bomb
}


function initGame(){   
    renderScene()
}

function renderScene(){
    //0) udalim map vechi
    var oldDivMap = document.getElementById('map')
    if(oldDivMap!=null){
    document.body.removeChild(oldDivMap)
    }
    //1) creare map > body
    var div_map = document.createElement('div')  //creem div parinte
    div_map.setAttribute('id','map')  // ii punem atributul map
    
    //1) div > map / 100 ori
    for(var r=0;r<10;r++){
        for(var c=0;c<10;c++){
            var div = document.createElement('div')    //creem div
            if(gameGRid[r][c] == 1){  // daca cardinatele acestea care se duce la Array de sus si gaseste vriun div care nu este (null) sa punem class 'pacman'
           if(pac_explode == true){
            div.className ='pacman explode'
           }else{
            div.className ='pacman'
           }
            
            
        }
        if(gameGRid[r][c] == 2){  // daca cardinatele acestea care se duce la Array de sus si gaseste vriun div care nu este (null) sa punem class 'pacman'
        div.className ='coin'
    }
    if(gameGRid[r][c] == 3){  // daca cardinatele acestea care se duce la Array de sus si gaseste vriun div care nu este (null) sa punem class 'pacman'
    div.className ='life'
}
    if(gameGRid[r][c] == 4){  // daca cardinatele acestea care se duce la Array de sus si gaseste vriun div care nu este (null) sa punem class 'pacman'
    div.className ='bomb'
     }
        div_map.appendChild(div)     //si punem div in divul parinte
        
    }
}
document.body.appendChild(div_map)     //il punem in bodi ca copil /Se pune la urma ca sa creeze odata 100 de divuri da nu cite unul 

      //Status
      // creem un div cu indentificator status
      //pubem pac_healf in inerrHTML
      //div#status punem in bodi


    //   var div = document.createElement('div')
    //   div.setAttribute('id','status')
    //     div.innerHTML = `${pac_healf}`

    //     document.body.appendChild(div) 

      
            
       
    
        


}
function executeAction(e){
    // alert(e.keyCode)
    switch(e.keyCode){
        case 37: moveleft();break;
        case 38: moveUp();break;
        case 39: moveRight();break;
        case 40: moveDown();break;
    }
    
    
}

function checkContent(r,c){
    if(gameGRid[r][c]== 2){
        pac_coin += 5
    }
    if(gameGRid[r][c]== 3){
        pac_healf+=10
    }
    if(gameGRid[r][c]== 4){
        pac_healf -= 50
        pac_explode  = true
        setTimeout(function(){  pac_explode  = false; renderScene() },1000)
    }
   
}


      // miscarea pacmanului##################
      function moveleft(){
        if(pac_c>0){
        gameGRid[pac_r][pac_c] = null
        pac_c--
        checkContent(pac_r,pac_c)
        gameGRid[pac_r][pac_c] = 1
        renderScene()
        }
    }
    function moveRight(){
        if(pac_c<9){
       gameGRid[pac_r][pac_c] = null
       pac_c++
       checkContent(pac_r,pac_c)
       gameGRid[pac_r][pac_c] = 1
       renderScene()
        }
    }
function moveUp(){
    if(pac_r>0){
    gameGRid[pac_r][pac_c] = null
    pac_r--
    checkContent(pac_r,pac_c)
    gameGRid[pac_r][pac_c] = 1
    renderScene()
    }
}
function moveDown(){
    if(pac_r<9){
    gameGRid[pac_r][pac_c] = null
       pac_r++
       checkContent(pac_r,pac_c)
       gameGRid[pac_r][pac_c] = 1
       renderScene()
    }
}
    //##########################################################
        function rendCoord(){
            //random number from 0 to 9
           return  Math.round(Math.random()*9) // punem pacmanul aliatoriu din 9
        }

      



document.body.onkeydown = executeAction
window.onload = initGame    // cind o sa incarce saitul sa unasca functia

//de facut ca sa duca in toate directiile si sa aiba limite sau sa duca in dreapta max si sa apara la inceput left