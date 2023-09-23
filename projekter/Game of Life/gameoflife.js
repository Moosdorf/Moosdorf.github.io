gameBoard = [];
let worker = new Worker('gameworker.js');

function startGame() {
    if (document.getElementById("auto").innerText = "Go") {
        worker.postMessage('startGame');
    }
}


function autoGo() {
    if (document.getElementById("auto").innerText == "Stop") {
        document.getElementById("auto").innerText = "Go";
        
    } else { // go 
        document.getElementById("auto").innerText = "Stop";
        startGame();
    }

}
function toggleGrid() {
    let num = 1;
    for (let j = 0; j < 10; j++) {
        pieces = [];
        for (let i = 0; i < 10; i++) {
            id = "button" + num++;
            if (document.getElementById(id).style.border == "medium") {
                document.getElementById(id).style.borderStyle = "solid";
                document.getElementById(id).style.borderWidth = "1px";

                if (document.getElementById(id).style.background == "black") {
                    document.getElementById(id).style.color = "white";
                }  else {
                    document.getElementById(id).style.color = "black";

                }

            } else {
                document.getElementById(id).style.border = "none";
            }
            
        }

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