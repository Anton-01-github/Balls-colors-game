const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#e200b2' , '#00e9aa', '#c69a1a', '#ff2e8c', '#ffdbad','#2bdf80', '#fd6839', '#2436b3', '#95cafd']

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
event.preventDefault()
screens[0].classList.add('up')
})

timeList.addEventListener('click', event => 
{
if (event.target.classList.contains('time-btn')){
   time = parseInt(event.target.getAttribute('data-time'))
   screens[1].classList.add('up')
    startGame()
}
})

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})



function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
    //function setTime(value=time) {timeEl.innerHTML = `00:${time}`
}

function decreaseTime() {
    if(time === 0) {
    finishGame()
    }else {
    let current = --time
    if(current < 10) {
        current = `0${current}`
    }
   setTime(current)
   //function setTime(value=current) {timeEl.innerHTML = `00:${current}`
}
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

// создаем кружки разных размеров и положения на поле

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const {width, height} = board.getBoundingClientRect()

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    setColor(circle)
    
    board.append(circle)
}


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

// устанавливаем сменный цвет для кружка "о"

    function setColor(element) {
        const color = getRandomColor()
        element.style.backgroundColor = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }
   
    function removeColor(element) {
        element.style.backgroundColor = '#46aef7'
        element.style.boxShadow = `0 0 2px #000`
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
       
    }
  
