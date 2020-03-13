const Player = require('../Player');
const assert = require('chai').assert;


//Checking if function properly creates Player object with correct name
describe("Player", function() {

    let player = new Player("Player1");

    describe("create", () =>{

        it("should create player with right name", () => {
            assert.equal(player.name, "Player1", "Player's name is incorrect");
        })

        it("player should be created with 0 points", () => {
            assert.equal(player.points, 0, "player points does not start at 0");
        })

    });

    describe("points added", () => {

        this.beforeEach(function() {
            player.points = 0;
        });

        it("should add points correctly", () => {
            const playerPoints = player.points;
            player.addPoint();
            assert.equal(player.points, playerPoints + 1, "did not add points correctly");
        });
    });
});