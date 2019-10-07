

// let element = {
//     class: 'className',
//     value: 30
// }
// let findElement = document.querySelector('.'+element.class);

// findElement.value = element.value;

// console.log(findElement.value);

/------------------------------------------/ 

// let age = 33;





class Car {
    constructor (viteza){
        this.viteza = viteza
    }

    viewSpeed(){
       
        return `Моя скорость ${this.viteza} km/h`
    }
}
let audi = new Car(200)

document.querySelector('#car').innerText = audi.viewSpeed();
audi.viteza = 300;

document.querySelector('#car2').innerText = audi.viewSpeed();
