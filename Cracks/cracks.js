  window.addEventListener('click', function addCrack() {
     var img = ["./img/crack-1.png", "./img/crack-2.png", "./img/crack-3.png", "./img/crack-4.png", "./img/crack-5.png"]
    //   i = Math.floor(Math.random() * 4)
     var div = document.createElement('div')
    div.className = 'crack';
    var body = document.getElementsByTagName('BODY')[0]
    body.appendChild(div)
    div.style.backgroundImage = `url(${img[0]})`
    div.style.left = (event.clientX - div.clientWidth / 3) + 'px' ;
    div.style.top = (event.clientY - div.clientHeight/ 3) + 'px';
    
    setTimeout(removeCracks, 2000)
    
})

function removeCracks(){
    body = document.getElementsByTagName('BODY')[0]
    div = document.querySelector('.crack')
    body.removeChild(div)
}
