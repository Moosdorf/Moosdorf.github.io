gameBoard = [];

function startGame() {

    num = 1;
    for (let j = 0; j < 10; j++) {
    pieces = [];
        for (let i = 0; i < 10; i++) {
            id = "button" + num++;
            document.getElementById(id).style.border = "none";
            if (document.getElementById(id).style.background == "black") {
                pieces[i] = 1;
            } else {
                pieces[i] = 0;
            }
        }

        gameBoard[j] = pieces;
    }


    displayBoard();
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
    Any live cell with two or three live neighbours survives.
    Any dead cell with three live neighbours becomes a live cell.
    All other live cells die in the next generation. Similarly, all other dead cells stay dead.
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