const grids = document.querySelector('.grids');

let gridSize = 16;
createGrid(gridSize);

const dimensionButton = document.querySelector('button');

dimensionButton.addEventListener('click', () =>{
    let currentGridSize = gridSize;
    gridSize = prompt('Enter grid size (less than 100)');
    if (gridSize != null && gridSize <100 && !isNaN(gridSize)) {
        deleteGrid(currentGridSize);
        createGrid(gridSize);
    }else{
        deleteGrid(currentGridSize);
    }
});
function createGrid(grid) {
    const gridTotal = grid * grid;
    
    const gridItemHeight = 720 / grid;
    for (let i = 0; i < gridTotal; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = gridItemHeight + 'px';
        grid.style.width = gridItemHeight + 'px';

        grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'black';
        grid.style.borderColor = 'white';
        });

        grids.appendChild(grid);
    }
}
function deleteGrid(currentGridSize){
    const currentGridTotal = currentGridSize * currentGridSize;
    for (i = currentGridTotal; i > 0; i--){
        grids.removeChild(grids.lastChild);
    }
}






