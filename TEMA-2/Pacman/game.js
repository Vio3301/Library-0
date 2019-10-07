function renderPacman(l, t, e) {
    var box = document.getElementById("box");
    if (e == "checkFantom") {
        box.innerHTML = `<div style="left: ${l}px; top: ${t}px;" class=""></div>`
        health -= 50;
        if (health <= 0) {
            box.innerHTML = `<div style="left: ${l}px; top: ${t}px;"class="over"><h1>GAME OVER!</></div>`
        }
        if(health){
            box.innerHTML = `<div style="left: ${l}px; top: ${t}px;"><span>${health}</span></div>`
        }
    } else if (e == "checkCoin") {
        box.innerHTML = `<div style="left: ${l}px; top: ${t}px;" class="pacman"></div>`
        money += 10;
        if (money >= 0) {
            box.innerHTML = `<div style="left: ${l}px; top: ${t}px;"><h3>${money} </h3></div>`
            if (money == 50) {
                box.innerHTML = `<div style="left: ${l}px; top: ${t}px;"class="wine"><h1>You Wine</h1></div>`
                 
            }
        } 

    } else {
        box.innerHTML = `<div style="left: ${l}px; top: ${t}px;" class="pacman"></div>`
    }
}

function renderFantom(l, t) {
    var box = document.getElementById("box");
    box.innerHTML += `<div style="left: ${l}px; top: ${t}px;" class="fantom"></div>`
}
function renderCoin(l, t) {
    var box = document.getElementById("box");
    box.innerHTML += `<div style="left: ${l}px; top: ${t}px;" class="coin"></div>`
}
////////////////////////////////
function moveRite() {
    if (pl <= 450) {
        pl += 10
    }
}

function moveLeft() {
    if (pl >= 20) {
        pl -= 10
    }
}

function moveUp() {
    if (pt >= 10) {
        pt--
    }
}

function moveDown() {
    if (pt <= 420){
        pt += 10
    }
}







////////////////////////////////////////////////////////////////////////////////////////////////
function checkfantom() {      /// scopul functii este return cind este aproape de bomba
    if (pl == bl && pt == bt) {
        return true;
    } else {
        return false;
    }

}
function checkCoin() {
    if (pl == cl && pt == ct) {
        return "checkCoin";
    }
}

function move() {
    console.log(event.key)
    switch (event.key) {
        case "ArrowUp": moveUp(); break;
        case "ArrowDown": moveDown(); break;
        case "ArrowRight": moveRite(); break;
        case "ArrowLeft": moveLeft(); break;
    }
    if (checkfantom()) {
        renderPacman(pl, pt, "checkFantom");
    } else if (checkCoin()) {
        renderPacman(pl, pt, "checkCoin");
    }

    else {
        renderPacman(pl, pt);
    }

    renderCoin(cl, ct);
    renderFantom(bl, bt);

}
///////


var pl = 100
var pt = 100
var bl = 200
var bt = 200
var cl = 300
var ct = 400


var health = 100
var money = 0;

renderPacman(pl,pt)
renderFantom(bl,bt)
renderCoin(cl,ct)
