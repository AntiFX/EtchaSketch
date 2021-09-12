let startGridSize = 16;
let startColor = 'rgba(255,255,255,0.1)';
let gridResets = 0;
const entireGrid = document.querySelector('.entireGrid');

function getOpacity(item){
    let opacityIncrement = 0.1;
    let currentOpacity = item.style.backgroundColor.slice(-4, -1);
    let newOpacity = parseFloat(currentOpacity) + parseFloat(opacityIncrement);
    color = 'rgba(0,0,0,'+ newOpacity.toFixed(1) +')';
    return color;
}

function addHover(item){    
    item.addEventListener('mouseover', (e) => {
        item.style['background-color'] = getOpacity(item);
    });
}


function getGridSize(){
    goodInput = false;
    while (goodInput == false){
        let gridSize = prompt("Input a size for the grid. 1 -100")
        if (+gridSize > 0 && +gridSize <= 100){
            goodInput = true;
            return gridSize;
        }
    }
}

function deleteGrid(){
    while (entireGrid.lastElementChild) {
      entireGrid.removeChild(entireGrid.lastElementChild);
    }
}

function createGrid(){
    if (gridResets >= 1){
        deleteGrid();
        startGridSize = getGridSize();
    }

    let columns = startGridSize;
    entireGrid.setAttribute('style', 'display:grid;grid-template-columns: repeat('+ startGridSize +', 1fr); grid-template-rows: repeat('+startGridSize+', 1fr);');
    while (columns > 0){
        let rows = startGridSize;
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
    gridResets++;
}



const reset = document.querySelector('.reset');
reset.addEventListener('click', createGrid);

createGrid();