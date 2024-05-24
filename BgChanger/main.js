const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
       const color = e.target.id;
       switch (color) {
        case 'grey':
            body.style.background = 'grey'
            break;
        case 'white':
            body.style.background = 'white'
            break;
        case 'blue':
            body.style.background = 'blue'
            break;
        case 'yellow':
            body.style.background = 'yellow'
            break;
        case 'green':
            body.style.background = 'green'
            break;
        default:
            // Handle unexpected colors or do nothing
            break;
       }
    });
});