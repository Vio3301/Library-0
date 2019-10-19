
const url = 'http://data.fixer.io/api/latest?access_key=6b7097f2a196d14cbde236d985111ab9'
async function test() {
    if (localStorage.length == 0) {
        const response = await fetch(url)
        const data = await response.json()
        localStorage.setItem('Data', data)
        localStorage.Data = JSON.stringify(data);

    } else {
        convert()
    }

}
function convert(param1) {
    var Data = JSON.parse(localStorage.Data);
    var rezult;
    var selectOne = document.querySelector('.select').value

    var selectTwo = document.querySelector('.select2').value
    var span = document.getElementById('spanInputTwo')
    span.innerText = `Курс BNM от ${Data.date}`


    if (selectOne == selectTwo) { rezult = 1 }
    else if (selectOne == 'EUR' && selectTwo == 'USD') { rezult = Data.rates.USD }
    else if (selectOne == 'USD' && selectTwo == 'EUR') { rezult = 1 / Data.rates.USD }
    else if (selectOne == 'EUR' && selectTwo == 'MDL') { rezult = Data.rates.MDL }
    else if (selectOne == 'MDL' && selectTwo == 'EUR') { rezult = 1 / Data.rates.MDL }
    else if (selectOne == 'MDL' && selectTwo == 'USD') { rezult = Data.rates.USD / Data.rates.MDL }
    else if (selectOne == 'USD' && selectTwo == 'MDL') { rezult = Data.rates.MDL / Data.rates.USD }

    if (param1 == "A") {
        document.getElementById('inputTwo').value = document.getElementById('inputOne').value * rezult
    }

    if (param1 == "B") {
        document.getElementById('inputOne').value = document.getElementById('inputTwo').value * rezult
    }
}
test()