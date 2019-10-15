
class Bird {
    constructor() {
        this.frames = [
            { x: -134, y: 0, w: 46, h: 54 },
            { x: -180, y: 0, w: 48, h: 54 },
        ]  

    }
    render(parent) {
        var div = document.createElement('div')
        div.className = 'bird'
        this.div = div
        this.apdateStyle()
        parent.appendChild(div)
    }
    apdateStyle() {

        this.div.style.backgroundPosition = `${this.frames[0].x}px ${this.frames[0].y}`
        this.div.style.width = `${this.frames[0].w}px`
        this.div.style.height = `${this.frames[0].h}px`
    }

    fly() {
        var that = this
        this.timer = setInterval(function () {
            that.frames.push(that.frames.shift())
            that.apdateStyle()
        }, 700)
    }
    

}

var b = new Bird()
b.render(document.getElementById('scene'))
b.fly()
