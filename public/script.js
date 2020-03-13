function addScore1() {
    const player = document.getElementById('playerName1').innerHTML;
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ player })
    })
    .then((response) => response.json())
    .then((result) => {

        //changes element to response from server
        document.getElementById('p1score').innerHTML = result.score1;
        document.getElementById('winner').innerHTML = result.winner;
      
    })
}

function addScore2() {
    const player = document.getElementById('playerName2').innerHTML;
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ player })
    })
    .then((response) => response.json())
    .then((result) => {

        //changes element to response from server
        document.getElementById('p2score').innerHTML = result.score2;
        document.getElementById('winner').innerHTML = result.winner;
    })
}

function resetScores() {
    const reset = document.getElementById('reset').innerHTML;
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ reset })
    })
    .then((response) => response.json())
    .then((result) => {
        
        document.getElementById('p1score').innerHTML = result.score1;
        document.getElementById('p2score').innerHTML = result.score2;
        document.getElementById('winner').innerHTML = result.winner;
      
    })
}