// Шаг 
step = ''

// Чей ход
spanWho = document.getElementById('who')

// Победитель
let winner = ''

// Оапределяем чей ход
const who = () => {
    if (step == 'circle') {
        step = 'cross'
        spanWho.innerText = 'crosses'
    } else {
        step = 'circle'
        spanWho.innerText = 'zeroes'
    }
}

who()

// Получем элементы 
let blockItem = document.querySelectorAll('.blockItem')

// Счетчик
let counter = 0

// Перебераем все элементы
blockItem.forEach((item) => {
    // Прослушаем все клики
    item.addEventListener('click', () => {
        if (
            !item.classList.contains('circle') &&
            !item.classList.contains('cross')
        ) {
            item.classList.add(step)
            if (step == 'circle') {
                item.innerText = '0'
            }
            if (step == 'cross') {
                item.innerText = 'X'
            }

            counter++
            who()
            circle()
            cross()
            nowWin()
        }
    })
})


// Победная комбинация
let win = [      
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

// Победа кружков
let circle = () => {
    for (let i = 0; i < win.length; i++) {
        if (
            blockItem[win[i][0]].classList.contains('circle') &&
            blockItem[win[i][1]].classList.contains('circle') &&
            blockItem[win[i][2]].classList.contains('circle')
        ) {
            blockItem[win[i][0]].classList.add('winColor')
            blockItem[win[i][1]].classList.add('winColor')
            blockItem[win[i][2]].classList.add('winColor')

            winner = 'zeroes'
            endGame(winner)
            return 1
        }
    }
}

let cross = () => {
    for (let i = 0; i < win.length; i++) {
        if (
            blockItem[win[i][0]].classList.contains('cross') &&
            blockItem[win[i][1]].classList.contains('cross') &&
            blockItem[win[i][2]].classList.contains('cross')
        ) {
            blockItem[win[i][0]].classList.add('winColor')
            blockItem[win[i][1]].classList.add('winColor')
            blockItem[win[i][2]].classList.add('winColor')

            winner = 'crosses'
            endGame(winner)
            return 1
        }
    }
}

//Ниичья
let nowWin = () => {
    if (!cross() && !circle() && (counter >= 9)) {
        winner = 'drow!'
        endGame(winner)
    }
}

// Получаем все нужные элементы
let blockArea = document.getElementById('blockArea')
let whoWinner = document.getElementById('whoWinner')
let blockWinner = document.getElementById('winner')
let btnNewGame = document.getElementById('btnNewGame')

//Концовка игры
let endGame = (winner) => {
    blockArea.style.pointerEvents = 'none'
    blockWinner.style.display = 'flex'
    whoWinner.innerText = winner
}

// Кнопка перезагрузки
btnNewGame.addEventListener('click', () => document.location.reload())