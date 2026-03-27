const buttons = document.querySelectorAll('.button')
// targeting all butons
const body = document.querySelector('body')
// targeting full body


buttons.forEach( (button) => {
    console.log(button)
    button.addEventListener('click', function(event) {
        console.log(event)
        console.log(event.target)
        if(event.target.id === "grey"){
            body.style.backgroundColor = 'grey'
        }
        if(event.target.id === "white"){
            body.style.backgroundColor = 'white'
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = 'yellow'
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id
            // as id is also blue
        }
    })
} )