const game = document.getElementById("mainGame");

gDisp();

function gDisp() {
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
            <div>Character Damage: ${cData.Damage}</div>
        `;
    } else {
        console.log("No game data found...");
    }
}

gameDisp();

function gameDisp() {
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

    move();
}

moveTxt();
function moveTxt() {
    gameLog.innerHTML = `
        <p>Move forwards (write 1 then press return)</p>
        <p>Move backwards (write 2 then press return)</p>
     `;
}

gameIn.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        move();
    }
});

function move() {
    if (gameIn.value === "1") {
        let rand = Math.floor(Math.random() * 100) + 1;
        gameLog.innerHTML = `<p>You begin movig forwards</p>`;
        if (rand > 50) {
            gameLog.innerHTML += "Hello";
            selectRandomEnemy();
            console.log(Enemy);
        }
    } else if (gameIn.value === "2") {
        let rand = Math.floor(Math.random() * 100) + 1;
        gameLog.innerHTML = `<p>You begin movig backwards</p>`;
        if (rand > 50) {
            gameLog.innerHTML += "hello";
            selectRandomEnemy();
            console.log(Enemy);
        }
    } //else {
    // gameLog.innerHTML = "Wrong input";
    //}
}

/* function combat() {
 *     enemySelect();
 * }
 *
 * function levelUp() {} */
