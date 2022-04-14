// -- Description 
// -- Brief description of the project 


// -- Instructions
// -- steps to follow if I want to install this project in my computer
// (eg. add environment variables, npm install, npm run dev....)


// -- Demo
// -- Link to the deployed version of your project:
//  https://jeandenisd.github.io/Water-Sort-Puzzle-custom-game


function createDomElement(className){
    const board = document.getElementById("board");
    const newElm = document.createElement("ul");
    newElm.className = className;

    board.appendChild(newElm);

    return newElm;
}

const game = new Game(createDomElement);
game.start();

document.body.addEventListener("click", (event) => {
    const parent = event.target.parentNode;

    if (parent.classList[0] === 'tube'){
        game.selectedClass.push(parseInt(parent.classList[1], 10))
    }

    if (game.selectedClass.length === 2){
        game.moveContent()
        game.updateTubes();
        game.win();
        game.saveLastMoves();
    }
})

const btn1 = document.querySelector('.new-game');
btn1.addEventListener('click', ()=> {location.reload()});

const btn2 = document.querySelector('.undo-move');
btn2.addEventListener('click', ()=> { game.undoMove()});

// function incrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 2 : value;
//     value++;
//     document.getElementById('number').value = value;
//     game.numberOfTube = value;
// }