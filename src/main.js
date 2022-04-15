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

function levelChoice(){
    let e = document.getElementById("selector");
    let value = e.options[e.selectedIndex].value;

    return value
}


let game = new Game(createDomElement,levelChoice);

const launch = document.querySelector('.new-game');
launch.addEventListener('click', ()=> {
    game.start();
});

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




// const btn2 = document.querySelector('.undo-move');
// btn2.addEventListener('click', ()=> { game.undoMove()});