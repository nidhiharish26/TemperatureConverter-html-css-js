let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input', function(){
    let cel = parseFloat(celsiusInput.value)
    let far = (cel*(9/5)) + 32
    let kel = cel + 273.15

    fahrenheitInput.value = roundNumber(far)
    kelvinInput.value = roundNumber(kel)
})

fahrenheitInput.addEventListener('input', function(){
    let far = parseFloat(fahrenheitInput.value)
    let cel = (far - 32) * (5/9)
    let kel = (far - 32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cel)
    kelvinInput.value = roundNumber(kel)
})

kelvinInput.addEventListener('input', function(){
    let kel = parseFloat(kelvinInput.value)
    let cel = kel - 273.15
    let far = ((kel - 273.15)*(9/5)) + 32

    celsiusInput.value = roundNumber(cel)
    fahrenheitInput.value = roundNumber(far)
})

btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})