//////////////// MAP ///////////////////
var step = 5
var game_map = new Array(200)
game_map.fill(null)
game_map[0] = new Dino()
game_map[0].run()

game_map.push(new Cactus())

game_map.forEach((object, index) => {
    if (object == null) {

    } else {
        addToScene(index)
        var left = step * index
        object.div.style.transform = `translateX(${left}px)`
    }
    // console.log(object, index)
})


function addToScene(index) {
    if (game_map[index] != null) {
        game_map[index].render(document.getElementById('scene'))
    }
}

function removeFromScene(index) {
    if (game_map[index] != null) {
        document.getElementById('scene').removeChild(game_map[index].div)
    }
}

function updateScene() {
    game_map.forEach((object, index) => {
        if (object != null) {
            var left = step * index
            object.div.style.transform = `translateX(${left}px)`
        }

        document.getElementById('score').innerText = game_map[0].health

    })
}

function gameLoop() {
    setInterval(() => {

        removeFromScene(1)
        game_map.splice(1, 1)
        if (Math.random() < 0.01) {
            game_map.push(new Cactus())
            addToScene(game_map.length - 1)
        } else if (Math.random() > 0.99) {
            game_map.push(new Bird())
            addToScene(game_map.length - 1)
            game_map[game_map.length - 1].run()

        } else {
            game_map.push(null)
        }

        if (game_map[1] instanceof Cactus && !game_map[0].jumping) { // elem din class
            game_map[0].health -= 50



        } else if (game_map[1] instanceof Bird) { // elem din class
            game_map[0].health -= 30
        } else {

        }

        updateScene()

    }, 50)

}

gameLoop()
//////////////// MAP ///////////////////



function executeAction(e) {
    // alert(e.keyCode)

    switch (e.keyCode) {
        case 32: game_map[0].jump(); break;
        case 40: d.stop(); break;
        case 39: d.run(); break;

        default: break;
    }


}

document.body.onkeydown = executeAction 