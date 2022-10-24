/**1. Creating a Layout*/

const body = document.querySelector("body");

const wrapper = document.createElement('div');
body.appendChild(wrapper);
wrapper.classList.add('wrapper');

const title = document.createElement('h1');
wrapper.appendChild(title);
title.classList.add('title');
title.textContent = 'Gem Puzzle';

const wrapperButtons = document.createElement('div');
wrapper.appendChild(wrapperButtons);
wrapperButtons.classList.add('wrapper-buttons');

const buttonShuffleAndStart = document.createElement('button');
wrapperButtons.appendChild(buttonShuffleAndStart);
buttonShuffleAndStart.classList.add('shuffle-and-start');
buttonShuffleAndStart.textContent = 'Shuffle and Start';

const buttonSave = document.createElement('button');
wrapperButtons.appendChild(buttonSave);
buttonSave.classList.add('save');
buttonSave.textContent = 'Save';

const savedGames = document.createElement('button');
wrapperButtons.appendChild(savedGames);
savedGames.classList.add('saved-games');
savedGames.textContent = "Saved games"



const buttonResults = document.createElement('button');
wrapperButtons.appendChild(buttonResults);
buttonResults.classList.add('results');
buttonResults.textContent = 'Results';


const movesAndTime = document.createElement('div');
wrapper.appendChild(movesAndTime);
movesAndTime.classList.add('moves-and-time');

const moves = document.createElement('div');
movesAndTime.appendChild(moves);
moves.textContent = 'Moves: 0';

const time = document.createElement('div');
time.classList.add('timer')
movesAndTime.appendChild(time);
time.textContent = 'Time: 00:00';

const wrapperPage = document.createElement('div');
wrapper.appendChild(wrapperPage);
wrapperPage.classList.add('wrapper-page');

const pageSize = document.createElement('div');
wrapper.appendChild(pageSize);
pageSize.classList.add('page-size');

const threeByThree = document.createElement('button');
pageSize.appendChild(threeByThree);
threeByThree.classList.add('button-change-size');
threeByThree.setAttribute('id','9')
threeByThree.textContent = '3x3';

const fourByFour = document.createElement('button');
pageSize.appendChild(fourByFour);
fourByFour.classList.add('button-change-size', 'active');
fourByFour.setAttribute('id','16')
fourByFour.textContent = '4x4';

const fiveByFive = document.createElement('button');
pageSize.appendChild(fiveByFive);
fiveByFive.classList.add('button-change-size');
fiveByFive.setAttribute('id','25')
fiveByFive.textContent = '5x5';

const sixBySix = document.createElement('button');
pageSize.appendChild(sixBySix);
sixBySix.classList.add('button-change-size');
sixBySix.setAttribute('id','36')
sixBySix.textContent = '6x6';

const sevenBySeven = document.createElement('button');
pageSize.appendChild(sevenBySeven);
sevenBySeven.classList.add('button-change-size');
sevenBySeven.setAttribute('id','49')
sevenBySeven.textContent = '7x7';

const eightByEight = document.createElement('button');
pageSize.appendChild(eightByEight);
eightByEight.classList.add('button-change-size');
eightByEight.setAttribute('id','64')
eightByEight.textContent = '8x8';

let gameSize = 16;
let cachedGameSize;
let values = new Array(gameSize).fill(0).map((item, index) => index);
let countItems = gameSize;
let changedMatrix;

pageSize.addEventListener('click', (event) => {
    gameSize = parseFloat(event.target.closest('.button-change-size').getAttribute('id'))
    values = new Array(gameSize).fill(0).map((item, index) => index);
    countItems = gameSize;
    items = [];
    wrapperPage.innerHTML = ""
})

/**2. Creating a Matrix*/


let items = [];
let matrix
const size = 604;

function start(...args) {
    wrapperPage.innerHTML = ""
    const arr = args[0] ?? values

    arr.forEach(val => {
        const item = document.createElement('button');
        wrapperPage.appendChild(item);
        item.classList.add('item');
        items.push(item);
        item.dataset.matrixId=val;
        const itemValue = document.createElement('span');
        itemValue.innerHTML = val;
        item.appendChild(itemValue);
        itemValue.classList.add('item-value');
    })

    items[0].style.display = 'none';

    matrix = getMatrix(items.map((item) => Number(item.dataset.matrixId)));
    while(!checkGameArray(matrix)) {
        matrix = getMatrix(shuffleArray(matrix.flat()))
    }
    setPositionItems(matrix);
    cachedGameSize = gameSize;
    changedMatrix = [].concat(arr.map(el => el))
}

function getMatrix(arr) {
    const rows = Math.sqrt(arr.length);
    const matrix = [];
    for (let k=0; k < rows; k++) {
        matrix.push([])
    }

    let y = 0;
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (x >= rows) {
            y++;
            x = 0;
        }
        matrix[y][x] = arr[i];
        x++;
    }
    return matrix;
}

function setPositionItems(matrix) {
    for (let y =0; y < matrix.length; y++) {
        for (let x =0; x < matrix[y].length; x++) {
            const value = matrix[y][x];
            const node = items[value];
            setNodeStyle (node, x, y)
        }
    }
}

function setNodeStyle (node, x, y) {
    const shift = 100;
    const nodeSize = (size / Math.sqrt(gameSize)) * 100 / size + "%";
    node.style.width = nodeSize;
    node.style.height = nodeSize;
    node.style.transform = `translate3D(${x * shift}%, ${y * shift}%, 0)`
}

