class Game{
    constructor(create, draw){
        this.set = [];
        this.tube = null;
        this.numberOfTube = 2;
        this.tubeSlot = 4;
        this.colors = ["blue","red"];
        this.draw = draw;
        this.create = create;
    }


    start(){
        console.log('Water Sort Puzzle')

        this.fullTubes();
        this.emptyTubes();
        this.drawTube();

        this.grabcontent();
        this.checkTube(this.set[2]);
    }

    
    fullTubes(){
        for (let i = 0 ; i <  this.numberOfTube ; i++){
            let tube = []
            for (let s = 0 ; s < this.tubeSlot; s++){
                tube[s] = this.colors[Math.floor(Math.random()*this.colors.length)];
            }
            this.set.push(tube)
        }
        console.log(this.set)
    }

    emptyTubes(){
        if (this.numberOfTube === 2){
            let airTube = ['air','air','air','air'];
            this.set.push(airTube);

        } else {
            let airTube1 = ['air','air','air','air'];
            let airTube2 = ['air','air','air','air']
            this.set.push(airTube1,airTube2)

        }
    }

    drawTube(){
        
        this.set.forEach((element,index) => {
            
            this.tube = new Tube();
            this.tube.domELement = this.create(`tube ${index}`);
            console.log(this.tube.domElement);
            element.forEach((elm)=>{
                let item = document.createElement("li");
                item.innerHTML = elm;
                this.tube.domELement.appendChild(item)
            })

        });
    }

    

    selectTube(){
        
    }
    grabcontent(selection1){

    }

    checkTube(selection2){
        if (selection2[-1] === 'air'){
            console.log('true');
            return true
        } else {
            console.log('false');
            return false
        }
    }
}

class Tube{
    constructor(){
        this.width = 30
        this.heigth = 30
        this.domElement = null
    }
}







