var pac_r = 2   //  unde se afla pacmanul
var pac_c = 2   // unde se afla pacmanul







var gameGRid = [
    [null, null, null, null, null, null, null, null, null, null,],// 0
    [null, null, null, null, null, null, null, null, null, null,], // 1
    [null, null, 1, null, null, null, null, null, null, null,], // 2
    [null, null, null, null, null, null, null, null, null, null,], // 3
    [null, null, null, null, null, null, null, null, null, null,],// 4
    [null, null, null, null, null, null, null, null, null, null,],// 5
    [null, null, null, null, null, null, null, null, null, null,],// 6
    [null, null, null, null, null, null, null, null, null, null,],// 7
    [null, null, null, null, null, null, null, null, null, null,],// 8
    [null, null, null, null, null, null, null, null, null, null,]// 9
]     // 0  ,1  ,  2  , 3 , 4  , 5  , 6  ,  7 ,  8 ,  9

function initGame() {
    renderScene()
}

function renderScene() {
    //0) udalim map vechi
    var oldDivMap = document.getElementById('map')
    if (oldDivMap != null) {
        document.body.removeChild(oldDivMap)
    }
    //1) creare map > body
    var div_map = document.createElement('div')  //creem div parinte
    div_map.setAttribute('id', 'map')  // ii punem atributul map

    //1) div > map / 100 ori
    for (var r = 0; r < 10; r++) {
        for (var c = 0; c < 10; c++) {
            var div = document.createElement('div')    //creem div
            if (gameGRid[r][c] != null) {  // daca cardinatele acestea care se duce la Array de sus si gaseste vriun div care nu este (null) sa punem class 'pacman'
                div.className = 'pacman'
            }
            div_map.appendChild(div)     //si punem div in divul parinte

        }
    }
    document.body.appendChild(div_map)     //il punem in bodi ca copil /Se pune la urma ca sa creeze odata 100 de divuri da nu cite unul 
}
function executeAction(e) {
    // alert(e.keyCode)
    switch (e.keyCode) {
        case 37: moveleft(); break;
        case 38: moveUp(); break;
        case 39: moveRight(); break;
        case 40: moveDoun(); break;
    }


}

function moveleft() {
    gameGRid[pac_r][pac_c] = null
         pac_c--
    gameGRid[pac_r][pac_c] = 1
        console.log(pac_c)
    renderScene()
}
function moveRight() {
    gameGRid[pac_r][pac_c] = null
    pac_c++
    gameGRid[pac_r][pac_c] = 1
    renderScene()
}
function moveUp(){
    gameGRid[pac_r][pac_c] = null
    pac_r--
    gameGRid[pac_r][pac_c] = 1
    renderScene()
}
function moveDoun(){
    gameGRid[pac_r][pac_c] = null
    pac_r++
    gameGRid[pac_r][pac_c] = 1
    renderScene()
        
}

document.body.onkeydown = executeAction
window.onload = initGame    // cind o sa incarce saitul sa unasca functia

//de facut ca sa duca in toate directiile si sa aiba limite sau sa duca in dreapta max si sa apara la inceput left