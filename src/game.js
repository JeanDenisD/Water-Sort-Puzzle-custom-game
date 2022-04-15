class Game {
    constructor(create,number) {
        this.tube = null;
        this.level = number;
        this.numberOfTube = 2;
        this.tubeSlot = 4;
        this.colors = ["red", "blue", "yellow", "green", "purple", "lightgreen", "lightblue", "orange", "sienna", "grey","darkred","deeppink"];
        this.create = create;
        this.selectedClass = [];
        this.parentTubes = [];
        this.testTube = null;
        this.collection = [];
        this.completeTube = 0
        this.undoCollection = []
    }


    start() {
        console.log('Water Sort Puzzle')

        this.numberOfTube = parseInt(this.level())
        this.collectionSet(this.colorShuffle(this.colorSet()), this.tubeSlot)
        this.createTubes();
        this.updateTubes();
        this.win();
    }

    colorSet(){
        let bigList =[]
        for (let i = 0; i < this.numberOfTube; i++){
            const colorChoice = this.colors[Math.floor(Math.random() * this.colors.length)]
            let testTube = []
            for (let c =0; c < this.tubeSlot; c++){
                testTube[c] = colorChoice
                bigList.push(testTube[c])
            }
            this.collection.push(testTube)

            this.colors.splice(this.colors.indexOf(colorChoice),1)
        }
        return bigList
    }

    colorShuffle(a){
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    collectionSet(array, increment){
        let result = [];
        let emptyTube1 = ['air','air','air','air']
        let emptyTube2 = ['air','air','air','air'];
        while(array.length) {
            result.push(array.splice(0, increment));
        }    

        if (this.numberOfTube <= 4){
            result.push(emptyTube1)
        } else {
            result.push(emptyTube1,emptyTube2)
        }
        this.collection = result
    }

    createTubes() { // createTube
        this.collection.forEach((tubeArr, index) => {
            this.tube = new Tube();
            this.tube.domELement = this.create(`tube ${index}`)
            for (let i = 0; i < this.tubeSlot; i++){
                let item = document.createElement("li");
                this.tube.domELement.appendChild(item)
            }
        });
    }

    updateTubes() {
        const tubeElmArr = [...document.body.querySelectorAll(".tube")];

        tubeElmArr.forEach((element,index) => {

            for (let i = 0; i < this.tubeSlot; i++){
                let item = element.childNodes[i]
                if (item && typeof this.collection[index][i] !== 'undefined'){
                    item.innerHTML = this.collection[index][i];
                    item.className = this.collection[index][i];
                } else if(item && this.collection[index].length < i){
                    item.innerHTML = '';
                    item.className = 'air';
                } 
            }
        })
    }

    moveContent() {
        let tube1 = this.collection[this.selectedClass[0]];
        let tube2 = this.collection[this.selectedClass[1]];

        if (this.selectedClass[0] === this.selectedClass[1]){
            console.log(this.selectedClass);
            this.selectedClass =[]
            console.log(this.selectedClass);
        } else if (tube1.includes('air') === false && tube2[3] === 'air'){
            tube2[tube2.lastIndexOf('air')] = tube1[0]
            tube1[0] = 'air'
            if (tube1.includes('air') === true && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
                tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
                tube1[tube1.lastIndexOf('air')+1] = 'air'}
                if (tube1.includes('air') === true && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
                    tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
                    tube1[tube1.lastIndexOf('air')+1] = 'air'}
        } 
        
        else if (tube1.includes('air') === false && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
            tube2[tube2.lastIndexOf('air')] = tube1[0]
            tube1[0] = 'air'
            if (tube1.includes('air') === true && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
                tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
                tube1[tube1.lastIndexOf('air')+1] = 'air'}
                if (tube1.includes('air') === true && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
                    tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
                    tube1[tube1.lastIndexOf('air')+1] = 'air'}
        }
        else if (tube1.includes('air') === true && tube2[3] === 'air'){
            tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
            tube1[tube1.lastIndexOf('air')+1] = 'air'
            if (tube1.includes('air') === true && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
                tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
                tube1[tube1.lastIndexOf('air')+1] = 'air'}
                if (tube1.includes('air') === true && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
                    tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
                    tube1[tube1.lastIndexOf('air')+1] = 'air'}
        }
        else if (tube1.includes('air') === true && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
            tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
            tube1[tube1.lastIndexOf('air')+1] = 'air'
            if (tube1.includes('air') === true && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
                tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
                tube1[tube1.lastIndexOf('air')+1] = 'air'}
                if (tube1.includes('air') === true && tube2.lastIndexOf('air') < 3 && tube1[tube1.lastIndexOf('air') + 1] === tube2[tube2.lastIndexOf('air') + 1]){
                    tube2[tube2.lastIndexOf('air')] = tube1[tube1.lastIndexOf('air')+1]
                    tube1[tube1.lastIndexOf('air')+1] = 'air'}
        } else if (tube1.lastIndexOf('air') === 3){
            console.log('move not possible');
        } else {
            console.log('move not possible')
        }
        // this.selectedClass.splice(0, game.selectedClass.length)
        this.selectedClass =[]
    }

    win(){
        this.completeTube = 0
        this.collection.forEach((tube)=>{
            const complete = arr => arr.every( s => s === arr[0])
            if (complete(tube) === true && tube[0] !== 'air'){
                this.completeTube++
            }
        })

        if (this.completeTube === this.numberOfTube){
            console.log("You win")
            location.href = 'confetti.html'
        }
    }

    saveLastMoves(){
        this.undoCollection.push(this.collection)
        if (this.undoCollection.length === 6){
            this.undoCollection.shift()
        }
    }

    undoMove(){
        this.collection = this.undoCollection[4];
        this.updateTubes();
        this.selectedClass = [];
       
    }
}

class Tube {
    constructor() {
        this.width = 30
        this.heigth = 30;
        this.domELement = null;
    }
}


/*
To do

win method
put event listener out side the draw || update html on clicks

css format
*/


// const winner = document.getElementById("win-page")
// winner.style.display = "none"





