function createDomElement(className){
    const board = document.getElementById("board");
    const newElm = document.createElement("ul");
    newElm.className = className;

    board.appendChild(newElm);

    return newElm;
}


const game = new Game(createDomElement, drawDomElement);
game.start();

function drawDomElement(instance){
    instance.domElement.style.width = instance + "%"
    instance.domElement.style.heigth = instance + "%"
    instance.document.style.backgroundColor = "black"
}

