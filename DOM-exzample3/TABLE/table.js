function moveOneUp() {

    var table = document.getElementById('table')
    var row2 = document.querySelectorAll('.row')[1]
    row2.remove()
    table.prepend(row2)
   
}
function moveOneDown() {
    var table = document.getElementById('table')
    var row2 = document.querySelectorAll('.row')[1]
     row2.remove()
    table.append(row2)
}

function showProducts(){
    var array = ['Samsung Galaxy S10', "Samsung Galaxy A50","Samsung Galaxy Note10",
     20499 + ' ' + 'lei', 7000 + ' ' + 'lei', 17500 + ' ' + 'lei']
    var name = document.getElementsByClassName('name')[0]
    name.innerHTML = array[0]
    name = document.getElementsByClassName('name')[1]
    name.innerHTML = array[1]
    name = document.getElementsByClassName('name')[2]
    name.innerHTML = array[2]
    var price = document.getElementsByClassName('price')[0]
    price.innerHTML = array[3]
    var price = document.getElementsByClassName('price')[1]
    price.innerHTML = array[4]
    var price = document.getElementsByClassName('price')[2]
    price.innerHTML = array[5]
}

window.onload = showProducts