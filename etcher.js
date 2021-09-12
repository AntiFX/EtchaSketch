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

/*function resetGrid(){
    createGrid();
    let gridItems = document.querySelectorAll('.gridSq');
    gridItems.forEach((e) => {e.style['background-color'] = startColor});
}*/

function getGridSize(){
    let gridSize = prompt("Input a size for the grid. 1 -100")
    if (+gridSize > 0 && +gridSize <= 100){
        return gridSize;
    } else {
        getGridSize();
    }
}

function deleteGrid(){
    while (entireGrid.lastElementChild) {
      entireGrid.removeChild(entireGrid.lastElementChild);
    }
}

function createGrid(reset){
    if (reset = true){
        deleteGrid();
    }
    let columns = getGridSize();
    while (columns > 0){
        let rows = gridSize;
        while (rows > 0){
            const newDiv = document.createElement('div');
            newDiv.classList.add('gridSq');
            newDiv.style['background-color'] = startColor
            entireGrid.appendChild(newDiv);
            rows--;
        }
        columns--;
    }
    const gridItems = document.querySelectorAll('.gridSq');
    gridItems.forEach((e) => {addHover(e)});
}

createGrid(false);




const reset = document.querySelector('.reset');
reset.addEventListener('click', createGrid);