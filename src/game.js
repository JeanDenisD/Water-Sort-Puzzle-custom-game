class Game{
    constructor(create, draw){
        this.set = [];
        this.tube = null;
        this.numberOfTube = 4;
        this.tubeSlot = 4;
        this.colors = ["blue","red"];
        this.draw = draw;
        this.create = create;
        this.position1 = 0;
        this.position2 = 0;
    }


    start(){
        console.log('Water Sort Puzzle')

        this.fullTubes();
        this.emptyTubes();
        this.drawTube();

        this.grabcontent();
        this.checkTube(this.set[2]);

        console.log(this.position1);
        console.log(this.set[this.position1]);

    }

    
    fullTubes(){
        for (let i = 0 ; i <  this.numberOfTube ; i++){
            let tube = []
            for (let s = 0 ; s < this.tubeSlot; s++){
                tube[s] = this.colors[Math.floor(Math.random()*this.colors.length)];
            }
            this.set.push(tube)
        }
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

            this.tube.domELement = this.create (`tube ${index}`);
            this.selectTube();
            
            element.forEach((elm)=>{
                let item = document.createElement("li");
                item.innerHTML = elm;
                this.tube.domELement.appendChild(item)
            })

        });
    }

    
    
    selectTube(){
        this.tube.domELement.addEventListener("click", function(){
            this.position1 = parseInt(this.classList[1],10);
            console.log(this.position1);
        })
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
        // this.domElement = null
    }
}








