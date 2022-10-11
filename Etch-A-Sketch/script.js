
const gridContainer = document.querySelector("#grid-container");
const changeSizeButton = document.querySelector("#resetButton");
const normalButton = document.querySelector("#normalButton");
const rainbowButton = document.querySelector("#rainbowButton");

let rainbow = false;
let currentSize = 24;

window.addEventListener("load", defaultGrid);
changeSizeButton.addEventListener("click", changeSize);
rainbowButton.addEventListener("click", function(){rainbowMode(currentSize)});
normalButton.addEventListener("click", function(){normalMode(currentSize)});

defaultGrid();
//Creates a default grid sized 24x24 
function defaultGrid() {
    setGridSize(24);
    fillGrid(24);
};

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};

//Creates columns
function fillGrid(size) {
    let iterationNum = size * size;
    for (let i = 0; i < iterationNum; i++) {
        const newCell = document.createElement("div");
        newCell.classList = "cell";
        newCell.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(newCell);
    };
};

function normalMode(currentSize){
    console.log("current size is: " + currentSize);
    clearGrid();
    setGridSize(currentSize);
    fillGrid(currentSize);
}

function rainbowMode(currentSize){
    console.log("current size is: " + currentSize);
    clearGrid();
    setGridSize(currentSize);
    fillGridRainbow(currentSize);

}

function fillGridRainbow(size) {
    let iterationNum = size * size;
    for (let i = 0; i < iterationNum; i++) {
        const newCell = document.createElement("div");
        newCell.classList = "cell";
        newCell.addEventListener("mouseover", rainbowColor);
        gridContainer.appendChild(newCell);
    };
};

function changeColor(e){
    e.target.style.backgroundColor = "black";
}

function rainbowColor(e){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}


function changeSize(){
    let newSize = prompt("Enter new size (1-100)");
    if (newSize !== null){
        newSize = parseInt(newSize);
        if(newSize < 1 || newSize >100 || Number.isNaN(newSize)){
            alert("Please choose a number between 1-100");
            changeSize();
        } else{
            currentSize = newSize;
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

function clearGrid(){
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}