let gridSize = 16;
let color = 'black';
let startColor = 'white';
const entireGrid = document.querySelector('.entireGrid');
entireGrid.setAttribute('style', 'display:grid;grid-template-columns: repeat('+ gridSize +', 1fr); grid-template-rows: repeat('+gridSize+', 1fr);');

function addHover(item){
    item.addEventListener('mouseover', (e) => {
        item.style['background-color'] = color;
    });
}

function resetGrid(){
    let gridItems = document.querySelectorAll('.gridSq');
    gridItems.forEach((e) => {e.style['background-color'] = startColor});
}

function createGrid(gridSize){
    let columns = gridSize;
    while (columns > 0){
        let rows = gridSize;
        while (rows > 0){
            const newDiv = document.createElement('div');
            newDiv.classList.add('gridSq');
            entireGrid.appendChild(newDiv);
            rows--;
        }
        columns--;
    }
}

createGrid(gridSize);


const gridItems = document.querySelectorAll('.gridSq');
gridItems.forEach((e) => {addHover(e)});

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGrid);