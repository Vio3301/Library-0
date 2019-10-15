
class Dino {
    constructor() {
        this.frames = [
            { x: -848, y: 0, w: 44, h: 54 },
            { x: -892, y: 0, w: 44, h: 54 },
            { x: -936, y: 0, w: 44, h: 54 },
            { x: -980, y: 0, w: 44, h: 54 },
            { x: -1024, y: 0, w: 45, h: 54 }




        ]   // cadrele dino animation

    }
    render(parent  /* element*/) {
        var div = document.createElement('div')
        div.className = 'dino'
        this.div = div
        this.apdateStyle()
        parent.appendChild(div)
    }
    apdateStyle() {

        this.div.style.backgroundPosition = `${this.frames[0].x}px ${this.frames[0].y}`
        this.div.style.width = `${this.frames[0].w}px`
        this.div.style.height = `${this.frames[0].h}px`
    }

    ran() {
        var that = this
        this.timer = setInterval(function () {
            console.log('>>>>>', that)
            that.frames.push(that.frames.shift())
            that.apdateStyle()
        }, 700)
    }
    stop() {
        clearInterval(this.timer)
    }

    jump() {
        this.div.className = 'dino jump'
        var that = this
        // animationend cind se termina animatia //div

        setTimeout(function () {
            that.div.className = 'dino'
        }, 500)
    }
}

function executeAction(e) {
    if (e.keyCode == 32) {
        d.jump()
    }
}
// de scos clas dino in fail aparte dino.js
//de vazut cum unim fisierile 
// de facut componentele cactusului
// sa apara pe harta jocului 
//Bonus de facut aripele pasarile sus in jos

var d = new Dino()
d.render(document.getElementById('scene'))
d.ran()
/* <div class="dino"></div> */