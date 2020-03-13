const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Import match class
const Match = require('./Match.js');

//Creating match instance 
let match = new Match("Player1", "Player2");


//Init the app
const app = express();

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Load body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



//Home route
app.get('/', function(req,res){
    res.render('index', {
        score1: match.getP1Score(),
        score2: match.getP2Score()
    });
});

app.post('/', function(req, res) {
    const currentPlayer = req.body.player;
    const resetBoard = req.body.reset;

    if(resetBoard){
        match.resetGame();
    }
    else{
        //update player points
        match.pointMade(currentPlayer)
    }
  
    res.send({
        score1: match.getP1Score(),
        score2: match.getP2Score(),
        winner: match.winningPlayer
    })
})

//Exposing the public directory
app.use(express.static(path.join(__dirname, 'public')));


//Start server
app.listen(3000, function(){
    console.log('Started on port 3000...');
});