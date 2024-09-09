const game = document.getElementById("mainGame");

gameDisp();

function gameDisp() {
    game.innerHTML = `
        <div id="game">
        <h1>Character stats:</h1>
            <div id="gameHud"></div>
            <br> <br> <br>
            <div id="gameDisplay"></div>
        </div>
    `;
}

const hud = document.getElementById("gameHud");
const dispGame = document.getElementById("gameDisplay");

dispHud();

function dispHud() {
    let savedData = localStorage.getItem("charData");

    if (savedData) {
        let cData = JSON.parse(savedData);
        console.log(cData);

        hud.innerHTML = `
            <div>Character name: ${cData.Name}</div>
            <div>Character sex: ${cData.Sex}</div>
            <div>Character race: ${cData.Race}</div>
            <div>Character hp: ${cData.Hp}</div>
            <div>Character mana: ${cData.Mana}</div>
        `;
    } else {
        console.log("No game data found...");
    }
}

mainGame();

function mainGame() {
    dispGame.innerHTML = `
        <div id="logGame">
            <div id="gameLog"></div>
        </div>
        <form id="gameIn" action="javascript:">
            <input id="gameInPut" type="text" placeholder="Enter game command">
            <button onclick="gameAppendCmd()">Return</button>
        </form>
    `;
}

const gameLog = document.getElementById("gameLog");
const gameIn = document.getElementById("gameInPut");

function gameAppendCmd() {
    gameLog.innerHTML += gameIn.value + `<br>`;

    gameLog.scrollTop = gameLog.scrollHeight;

    gameIn.value = "";
}
