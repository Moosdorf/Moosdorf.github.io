gameBoard = [];

function startGame() {
    gameBoard = findBoardState();
    nextStep(gameBoard);
}

function findBoardState() {
    tempGameBoard = [];

    num = 1;
    for (let j = 0; j < 10; j++) {
    pieces = [];
        for (let i = 0; i < 10; i++) {
            id = "button" + num++;
            if (document.getElementById(id).style.background == "black") {
                pieces[i] = 1;
            } else {
                pieces[i] = 0;
            }
        }

        tempGameBoard[j] = pieces;
    }

    return tempGameBoard;
}

function nextStep(gameBoard) {

    row = 0;
    col = 0;
    newGameBoard = [];
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[0].length; j++) { 
            let amountOfNeighbours = findNeighbours(gameBoard, i, j);

            alive = (gameBoard[i][j] == 1) ? true: false;
            id = "button"+ (i * 10 + (j+1));

            //console.log("cellid: " + (i * 10 + (j+1)));
            //document.getElementById(id).innerText = amountOfNeighbours.toString();

    
            if (alive && amountOfNeighbours != 2 && amountOfNeighbours != 3) { //Any live cell with 2 or 3 live neighbors survives to the next generation.
                // kill cell
                changeState(document.getElementById(id));
            } 
            if (!alive && amountOfNeighbours == 3) { //Any dead cell with exactly 3 live neighbors becomes a live cell in the next generation.
                changeState(document.getElementById(id));
                // ressurrect
            }
        }
    
    }

}

function changeState(button) {
    if (button.style.background == "black") {
        button.style.background = "white";
        button.style.color = "black";
    } else {
        button.style.background = "black";
        button.style.color = "white";
    }
}

function findNeighbours(gameBoard, row, col) {
    neighbours = 0;
    aliveNeighbours = 0;
    deadNeighbours = 0;

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {

            if (row+i >= 0 && row+i < gameBoard.length && 
                col + j >= 0 && col+j < gameBoard[row+i].length) {
                    if (i == 0 && j == 0) {
                        continue;
                    }
                    neighbours++;
                    if (gameBoard[row+i][col+j] == 1) {
                        aliveNeighbours++;
                    } else {
                        deadNeighbours++;
                    }
                  //  console.log((row+i) + ":" + (col+j));

            }
        
        }

    }
    return aliveNeighbours;

}

function displayBoard() {
    for (let i = 0; i < 10; i++) {
        row = "";
        for (let j = 0; j < 10; j++) {
            row += gameBoard[i][j];
        }
        console.log(row);
    }
}

/*
REGLER:
    Alt sker på samme tid i samme iteration.

    Any live cell with 2 or 3 live neighbors survives to the next generation.
    Any dead cell with exactly 3 live neighbors becomes a live cell in the next generation.
    All other live cells die in the next generation due to underpopulation (fewer than 2 live neighbors) or overpopulation (more than 3 live neighbors).
*/


function color(id) {
  if (document.getElementById(id).style.background == "black") {
    document.getElementById(id).style.background = "white";
    document.getElementById(id).style.color = "black";
  } else {
    document.getElementById(id).style.background = "black";
    document.getElementById(id).style.color = "white";
  }
}