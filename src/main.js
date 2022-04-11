function createDomElement(className){
    const board = document.getElementById("board");
    const newElm = document.createElement("div");
    newElm.className = className;

    board.appendChild(newElm);

    return newElm;
}

// function drawDomElement(instance){
//     instance.domElement.style. ...
// }

const game = new Game(); //createDomElement, drawDomElement
game.start();

function drawDomElement(instance){
    instance.domElement.style.backgroundColor = "black";
}