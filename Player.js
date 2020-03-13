//Player class which holds points scored and games won.

class Player {

    //initialize
    constructor(name){
        this.name = name;  //name = "Player1" or 2
        this.points = 0;
        this.winner = false;
    }

    //method when player earns a point
    addPoint(){
        this.points++;
    }
}

//Exports the module with error handling
try{
    module.exports = Player;
}catch(e) {}