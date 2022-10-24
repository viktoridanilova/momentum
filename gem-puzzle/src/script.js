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

/**3. Add music for click */

wrapperPage.addEventListener('click', playMusic);

function playMusic() {
    const audio = new Audio();
    audio.src = '../music/a59750391ae05cb.mp3';
    audio.autoplay = true; 
}

/**4. Random shuffle and start*/

buttonShuffleAndStart.addEventListener('click', () => {
    if (!items.length && cachedGameSize !== gameSize) start();
    const mixArray = shuffleArray(matrix.flat());
    matrix = getMatrix(mixArray);
    while(!checkGameArray(matrix)) {
        matrix = getMatrix(shuffleArray(matrix.flat()))
    }

    setPositionItems(matrix);
    movesCount = 0;
    moves.innerHTML = `Moves: ${movesCount}`
    savedTime = 0
    timer()
})

function shuffleArray(arr) {
    return arr
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

/**5. Change position by click */
const emptyСell = 0
wrapperPage.addEventListener('click', (e) => {
    const buttonNode = e.target.closest('.item');
    if (!buttonNode) {
        return;
    }

    const buttonNumber = Number(buttonNode.dataset.matrixId);
    const buttonCoordinates = findCoordinatesByNumber(buttonNumber, matrix);
    const emptyСellCoordinates = findCoordinatesByNumber(emptyСell, matrix);
    const isValid = isValidForChange(buttonCoordinates, emptyСellCoordinates);

    if (isValid) {
        change(emptyСellCoordinates, buttonCoordinates, matrix);
        setPositionItems(matrix);
        moved()
        
        if(changedMatrix[0] === 0) {
            const firstEl = changedMatrix[0];
            changedMatrix.push(firstEl);
            changedMatrix.shift()
        }
        
        if (JSON.stringify(values) === JSON.stringify(matrix.flat()) || JSON.stringify(changedMatrix) === JSON.stringify(matrix.flat())) {
            win()
        }
    }


});

function findCoordinatesByNumber(number, matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x =0; x < matrix[y].length; x++) {
            if(matrix[y][x] === number) {
                return {x, y};
            }
        }
    }
    return null;
}

function isValidForChange(coordsA, coordsB) {
    const differenceX = Math.abs(coordsA.x - coordsB.x);
    const differenceY = Math.abs(coordsA.y - coordsB.y);
    return (differenceX === 1 || differenceY === 1) && (coordsA.x === coordsB.x || coordsA.y === coordsB.y);
}

function change(coordsA, coordsB, matrix) {
    const coordsANumber = matrix[coordsA.y][coordsA.x];
    matrix[coordsA.y][coordsA.x] = matrix[coordsB.y][coordsB.x];
    matrix[coordsB.y][coordsB.x] = coordsANumber;
}

/**6. Change position by dragging the mouse */



/**7. Size selection*/

pageSize.addEventListener('click', (e) => {
    const sizeButtons = document.querySelectorAll(".button-change-size")
    const currentSize = e.target.closest('.button-change-size');
    sizeButtons.forEach(button => {
        if (currentSize === button ) button.classList.add('active');
        else button.classList.remove("active");
    })
})

/**8. Timer */
const dateTimeFormat = new Intl.DateTimeFormat('default', { 
    minute: 'numeric',
    second: 'numeric',
    fractionalSecondDigits: 1});

let startDate;
let diff;
let savedTime = 0;
let interval;

function timer() {
    interval = null;
    
    if (interval === null){
        startDate = Date.now();
        displayStopWatch();
        time.innerHTML= "Time:";
        interval = setInterval(displayStopWatch, 10);
    } else {
        clearInterval(interval);
        interval = null;
    }
}

function displayStopWatch() {
    diff = Date.now() + savedTime - startDate;
    time.innerHTML= `Time: ${dateTimeFormat.format(new Date(diff))}`;
}


/**9. Moves */
let movesCount = 0;
function moved() {
    ++movesCount
    moves.innerHTML = `Moves: ${movesCount}`
}

/**10. Save */
buttonSave.addEventListener('click', save)
const savedGamesList = JSON.parse(localStorage.getItem('Saved games')) ? JSON.parse(localStorage.getItem('Saved games')) : []
function save() {
    if (matrix?.length) {
        const savedData = {
            moves: `Moves: ${movesCount}`,
            time: time.textContent,
            size: matrix.length,
            diff,
            matrix,
        };
        savedGamesList.push(savedData)
        localStorage.setItem(`Saved games`, JSON.stringify(savedGamesList))
        clearInterval(interval)
        timer()
    }  
}

/**11. Create saved games popup */
function createSavedGamesPopup() {
    const savedGamesPopUp = document.createElement('div');
    savedGamesPopUp.classList.add('saved-games__pop-up')
    body.appendChild(savedGamesPopUp);

    const savedGamesTable = document.createElement('div');
    savedGamesTable.classList.add('saved-games_results')
    savedGamesPopUp.appendChild(savedGamesTable)
}

function displaySavedResults() {
    const savedGames = JSON.parse(localStorage.getItem('Saved games'))
    const savedGamesTable = document.querySelector('.saved-games_results')
    const popUp = document.querySelector('.saved-games__pop-up');
    const resultWrappers = document.querySelectorAll('.saved-game__wrapper')
    
    if (resultWrappers.length) resultWrappers.forEach(el => savedGamesTable.removeChild(el))
    popUp.style.display = "block";

    if (savedGames && savedGames.length + 1 > savedGamesTable.childElementCount) {
        savedGames.forEach((game, i) => {
            
            const gameWrapper = document.createElement('div');
            gameWrapper.classList.add('saved-game__wrapper')
            savedGamesTable.appendChild(gameWrapper)

            const gameNumber = document.createElement('div');
            gameNumber.innerHTML = `Save #${i+1}`
            const gameMoves = document.createElement('div');
            gameMoves.innerHTML = game.moves;
            const gameTime = document.createElement('div')
            gameTime.innerHTML = game.time;
            const loadGameButton = document.createElement('button');

            loadGameButton.innerHTML = "Load game"
            loadGameButton.setAttribute("onclick", `loadSavedGame(${i})`)

            gameWrapper.append(gameNumber, gameMoves, gameTime, loadGameButton)
        })
    } else {
        const noGame = document.createElement('div')
        noGame.style.textAlign = "center";
        noGame.style.fontSize = "20px";
        noGame.classList.add('saved-games_no-game')
        noGame.innerHTML = "No saved games"
        if (!savedGamesTable.querySelector('.saved-games_no-game') && savedGamesTable.childElementCount === 1)  savedGamesTable.appendChild(noGame)
        else if (savedGamesTable.querySelector('.saved-games_no-game')) savedGamesTable.removeChild(noGame)
    }

    popUp.addEventListener('click', (event) => {
        if (event.target === popUp) popUp.style.display = "none"
    })
}


createSavedGamesPopup();

savedGames.addEventListener('click', () => {
    displaySavedResults()
})


function loadSavedGame(index) {
    const savedGames = JSON.parse(localStorage.getItem('Saved games'))
    const sizeButtons = document.querySelectorAll(".button-change-size")

    if (wrapperPage.childElementCount)  {
        wrapperPage.innerHTML = ""
        matrix = null
        items = []
        movesCount = 0;
    }
    gameSize = parseFloat(savedGames[index].size)**2;
    start(savedGames[index].matrix.flat())
    savedTime = savedGames[index].diff
    clearInterval(interval)
    timer()
    moves.textContent = savedGames[index].moves;
    
    sizeButtons.forEach(el => {
        console.log(parseFloat(el.getAttribute("id")))
        if (parseFloat(el.getAttribute("id")) === gameSize) el.classList.add('active');
        else el.classList.remove('active')
    })
    closePopUp()
}

/**12. Checker  */
function checkGameArray(arr) {
    let number = arr.flat().map((it, i, a) => {
        let sum = 0
        for(let j = i; j < a.length; j++) {
            if(it > a[j] && a[j] != 0) sum++
        }
        return sum
    }).reduce((w, c) => w + c, 0)
    let number2
    arr.forEach((a, i) => {
        a.forEach((el, j) => {
            if(el === 0) number2 = i + 1
        })
    })
    number += number2
    return number % 2 === arr.length % 2
}

/**13. Win */

function win() {
    const congratsBlock = document.createElement('div')
    congratsBlock.classList.add("congrats-block")
    congratsBlock.innerHTML = "<p class='blocktext'>You won! Congratulations!</p>"
    body.appendChild(congratsBlock)
    congratsBlock.style.display = "block"
    setTimeout(() => {
        congratsBlock.style.display = "none"
    }, 5000)

    setToResults()
}

/**14. Results */
const results = []
function setToResults() {
    const savedData = {
        moves: `Moves: ${movesCount}`,
        time: time.textContent,
    };
    results.push(savedData)
    localStorage.setItem(`Results`, JSON.stringify(results))
    clearInterval(interval)
    timer()
}

function displayResults() {
    const resultPopUp = document.createElement('div');
    resultPopUp.classList.add("result__pop-up")

    const resultWrapper = document.createElement('div');
    resultWrapper.classList.add('result__wrapper');
    
    const data = JSON.parse(localStorage.getItem("Results"))
    
    if (data) {
        data.forEach((el, i) => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');

            const gameIdx = document.createElement('div');
            gameIdx.innerText = `#${i+1}`
            
            const moves = document.createElement('div');
            moves.innerText = el.moves;

            const time = document.createElement('div');
            time.innerText = el.time;


            resultItem.append(gameIdx, moves, time)
            resultWrapper.appendChild(resultItem)
            resultPopUp.appendChild(resultWrapper)
            body.appendChild(resultPopUp)
        })
    } else {
        alert("Need to win at least one game to show results");
    }

    resultPopUp.addEventListener('click', (event) => {
        if(event.target === resultPopUp) resultPopUp.style.display = "none"
    })
}

buttonResults.addEventListener('click', () => displayResults())