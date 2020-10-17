let switchButton = document.getElementById('switch')
let light = document.getElementsByClassName('light')

function toggle() {
    for (let i = 0; i < light.length; i++) {
        light[i].classList.toggle('dark')
    }
}

switchButton.addEventListener('click', toggle)