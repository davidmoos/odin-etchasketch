
let gridSize = 12

function addElement(gridSize) {
    const container = document.querySelector(".container");
    container.innerHTML = '';
    const containerSize = 750;
    const squareSize = containerSize / gridSize;


    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        const currentCont = document.querySelector(".container");
        currentCont.appendChild(row);

        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

        
            // Add the newly created element and its content into the DOM
            row.appendChild(square);
        }
    }
    hover();
}

function newGrid()
{
let gridSize = prompt("Enter Gridsize (max. 64):")
if (gridSize <= 64) {
    addElement(gridSize)
    }
    else {    
    alert("Please Enter a Gridsize of max. 64 grids")
    }
}


//function that changes div color uponed being hovered
function hover(){
  let newColor = document.querySelectorAll(".square");
          for (const color of newColor) {
            let opacity = 0.1;
            color.addEventListener("mouseover", () => {
              color.style.backgroundColor = "green";
              color.style.opacity = opacity
              opacity += 0.1;
            });
          }
        }


// function to refresh the screen

function refresh() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square=>{
        square.style.backgroundColor = "white";
    });
}



addElement(gridSize);
