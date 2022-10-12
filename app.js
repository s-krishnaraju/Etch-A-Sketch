
let size = 16
const change = document.querySelector(".prompt")
const reset = document.querySelector(".reset")
const grid = document.querySelector(".grid")
const rainbow = document.querySelector('.rainbow')
const transparent = document.querySelector('.transparent')

function randomRBG() {
    let o = Math.round
    let r = Math.random
    let s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

console.log(randomRBG())

function createGrid(desiredColor) {
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const square = document.createElement("div")
            square.setAttribute("class", "gridElement")
            square.style.width = 100 / size + "%";
            square.style.height = 100 / size + "%";
            square.style.background = "black";
            grid.appendChild(square)
        }
    }
    const cells = grid.childNodes;
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            let color = desiredColor
            cell.style.background = "" + color;
        })
    })
}

function createGridRainbow() {
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const square = document.createElement("div")
            square.setAttribute("class", "gridElement")
            square.style.width = 100 / size + "%";
            square.style.height = 100 / size + "%";
            square.style.background = "black";
            grid.appendChild(square)
        }
    }
    const cells = grid.childNodes;
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.background = randomRBG();
        })
    })
}

window.onload = createGrid("white")

change.addEventListener('click', () => {

    size = prompt("Enter Grid Size")
    resetGrid()
    createGrid("white")
})

reset.addEventListener('click', () => {
    resetGrid()
    createGrid("white")
})

rainbow.addEventListener('click', () => {
    resetGrid()
    createGridRainbow()
})


function resetGrid() {
    let child = grid.lastElementChild
    while (child) {
        grid.removeChild(child)
        child = grid.lastElementChild
    }
}

