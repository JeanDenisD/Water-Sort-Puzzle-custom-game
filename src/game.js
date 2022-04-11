class Game{
    constructor(create, draw){
        this.set = [];
        this.numberOfTube = 2;
        this.tubeSlot = 4;
        this.colors = ["blue","red"];
    }


    start(){
        console.log('Water Sort Puzzle')
        this.fullTubes();
        this.emptyTubes();
        this.grabcontent();
        this.checkTube(this.set[2]);
    }
    
    fullTubes(){
        for (let i = 0 ; i <  this.numberOfTube ; i++){
            let tube = []
            for (let s = 0 ; s < this.tubeSlot; s++){
                tube[s] = this.colors[Math.floor(Math.random()*this.colors.length)]
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



