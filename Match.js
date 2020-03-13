const Player = require('./Player.js');


//Match class
class Match {

    //initializes the game
    constructor(player1, player2){

        //creates 2 players
        //creates 2 players
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);
        this.players = [this.player1, this.player2];
        this.winningPlayer = "";

        //using dict to set point structure
        this.scoreScale = {
            0: "0",
            1: "15",
            2: "30",
            3: "40",
            4: "Won!",
            5: ""
        }
    }
    //Adds point if player scored point
    pointMade(winner){

        //identify what player to add point to
        let winnerIdx = this.players.findIndex(player => player.name === winner);
        let winnerPlyr = this.players[winnerIdx];
        

        //if not a game ending point, add point to winner
        if(winnerPlyr.points <= 3){
            //winning player adds a point
            winnerPlyr.addPoint();
        }

        //if player is over 3, game is won by player
        if(winnerPlyr.points > 3){

            //Show player is winner on screen
            this.winningPlayer = winner + " is the winner!";
        }
    }

    // Resets the game by setting all players points to zero
    resetGame(){
        this.player1.points = 0;
        this.player2.points = 0;
        this.winningPlayer = "";
    }

    //Get Player 1's points (helper method to make things easier)
    getP1Score(){
        return this.scoreScale[this.player1.points];  
    }

    //Get Player 2's points (helper method to make things easier)
    getP2Score(){
        return this.scoreScale[this.player2.points];  
    }

}

//Exports the module with error handling
try{
    module.exports = Match;
}catch(e) {}