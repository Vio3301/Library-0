class Cactus {
    constructor(){
        this.frames = [
            { x: -332, y: 0, w: 50, h: 54 },
           
        ]
        this.cactusSmall = [
            { x: -229, y: 0, w: 16, h: 54}
        ]
    }

    render(parent) {
        var div = document.createElement('div')
        div.className = 'cactus'
        this.div = div
        this.apdateStyle()
        parent.appendChild(div)
    }
    cactusS(parent){
        var div = document.createElement('div')
        div.className = 'cactusSmall'
        this.div = div
        this.apdateStyle(this.frames = this.cactusSmall)
        parent.appendChild(div)
    }
    apdateStyle() {

    this.div.style.backgroundPosition = `${this.frames[0].x}px ${this.frames[0].y}`
     this.div.style.width = `${this.frames[0].w}px`
        this.div.style.height = `${this.frames[0].h}px`
    }
}
var c = new Cactus
c.render(document.getElementById('scene'))
c.cactusS(document.getElementById('scene'))