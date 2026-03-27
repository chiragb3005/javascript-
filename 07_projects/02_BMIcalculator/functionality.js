const form = document.querySelector('form')
// this usecase will give you empty value
// when the page loads as that time it will be empty
// const weight = new Number(document.querySelector('#weight').value)



form.addEventListener('submit', (event) => {
    event.preventDefault()
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height == '' || height <0 || isNaN(height)){
        // result.innerHTML = `Please give a valid height ${height}`
        alert(`Please give a valid height ${height}`)
    }
    else if(weight == '' || weight <0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>BMI is: ${bmi}</span>`
    }
})