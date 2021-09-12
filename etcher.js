let gridSize = 16;
const entireGrid = document.querySelector('.entireGrid');
entireGrid.setAttribute('style', 'display:grid;grid-template-columns: repeat('+ gridSize +', 1fr); grid-template-rows: repeat('+gridSize+', 1fr);');

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