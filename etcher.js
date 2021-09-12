let gridSize = 16;
let color = 'black';
const entireGrid = document.querySelector('.entireGrid');
entireGrid.setAttribute('style', 'display:grid;grid-template-columns: repeat('+ gridSize +', 1fr); grid-template-rows: repeat('+gridSize+', 1fr);');

function addHover(item){
    item.addEventListener('mouseover', (e) => {
        item.style['background-color'] = color;
    });
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

/* gridItems.addEventListener('mouseover', (e) => {
  console.log(e);
}); */


//make a grid
//make a hover effect when hovering over a gridsq
//change a grid sq color when it is hovered over
//add a button to clear the grid once