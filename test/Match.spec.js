const Match = require("../Match");
const assert = require("chai").assert;

describe("Match", function() {

    let match = new Match("Player1", "Player2");

    describe("initialize", () => {

        it("should create instance with 2 players with respective names", () => {
            assert.isDefined(match.players, "players not created");
            assert.equal(match.player1.name, "Player1", "Player 1 was created with the wrong name");
            assert.equal(match.player2.name, "Player2", "Player 2 was created with the wrong name");
        })

        it("should create an empty winner", () => {
            assert.equal(match.winningPlayer, "", "Winning player was not initialized properly");
        })
    });

    describe("scoring", () => {

        this.beforeEach(function() {
            match.player1.points = 1;
            match.player2.points = 3;
        });

        it("should add point by passing player name", () => {
           const p1Score = match.player1.points;
           match.pointMade("Player1");
           assert.equal(match.player1.points, p1Score + 1, "did not add a point to the respective player");
        })

    });

    describe("game reset", () => {
        this.beforeEach(function() {
            match.player1.points = 1;
            match.player2.points = 2;
        });

        it("should have both player points to zero", () => {
            match.resetGame();
            assert.equal(match.player1.points, 0, "player 1 score did not reset to 0");
            assert.equal(match.player2.points, 0, "player 2 score did not reset to 0");

        })
    })
});