class Game{
    constructor(create, draw){
        this.set = [];
        this.tube = null;
        this.numberOfTube = 4;
        this.tubeSlot = 4;
        this.colors = ["blue","red"];
        this.draw = draw;
        this.create = create;

        this.selectedClass = [];
        this.position1 = 0;
        this.position2 = 0;
    }


    start(){
        console.log('Water Sort Puzzle')

        this.fullTubes();
        this.emptyTubes();
        this.drawTube();

        this.grabcontent();
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
            this.selectTube(this.selectedClass);
            
            element.forEach((elm)=>{
                let item = document.createElement("li");
                item.innerHTML = elm;
                this.tube.domELement.appendChild(item)
            })

        });
    }

    
    
    selectTube(selectedClass){
        let selected;
        this.tube.domELement.addEventListener("click", function(){
            selected = parseInt(this.classList[1],10);

            if(selectedClass.length < 2 && selected != selectedClass[0]) {
                selectedClass.push(selected)
            } else {
                selectedClass.splice(0, selectedClass.length);
            }
            
            if (selectedClass.length ===2 && selectedClass[0] != selectedClass[1]){
                game.checkTube()
            }
        })
    }




    grabcontent(selection1){

    }

    checkTube(){
        console.log(this.set[this.selectedClass[0]]);
        console.log(this.set[this.selectedClass[1]]);

        if (this.set[this.selectedClass[0]].indexOf('air') != -1){
            console.log(true)
        } else if (this.set[this.selectedClass[1]].indexOf('air') != -1){
            console.log(true)
        } else {
            this.selectedClass.splice(0,this.selectedClass.length)
            console.log(false);
        }

 

        // if (selection2[-1] === 'air'){
        //     console.log('true');
        //     return true
        // } else {
        //     console.log('false');
        //     return false
        // }
    }
}

class Tube{
    constructor(){
        this.width = 30
        this.heigth = 30
    }
}








