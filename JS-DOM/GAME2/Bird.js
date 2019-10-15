
class Bird {
    constructor() {
        // animation cadre
        this.frames = [
            { x: -135, y: 0, w: 45, h: 54 },
            { x: -180, y: 0, w: 45, h: 54 },
        ]
    }

    render(parent /* element */) {
        var div = document.createElement('div')
        div.className = 'bird'
        this.div = div
        this.randomPosition()
        parent.appendChild(div)
    }


    randomPosition() {
        var rand = Math.round(Math.random() * (this.frames.length - 1))
        var position = Math.round(Math.random() * 1233)
        console.log(" >>> ", rand)

        this.div.style.width = `${this.frames[rand].w}px`
        this.div.style.height = `${this.frames[rand].h}px`
        this.div.style.backgroundPosition = `${this.frames[rand].x}px ${this.frames[rand].y}px`
        this.div.style.transform = `translate(${position}px, -140px)`
    }

}

var c = new Bird()

c.render(document.getElementById('scene'))
c.render(document.getElementById('scene'))