const main = document.getElementById("main");

dispCharCreate();

function dispCharCreate() {
    main.innerHTML = `
        <h1>Character Creation</h1>
        <div id="raceSelect">
            <p>Select race</p>
            <button onclick="createCharacter(3)">Elf</button>
            <button onclick="createCharacter(4)">Orc</button>
            <button onclick="createCharacter(5)">Goblin</button>
            <button onclick="createCharacter(6)">Troll</button>
            <button onclick="createCharacter(7)">Dwarf</button>
            <button onclick="createCharacter(8)">Gnome</button>
            <button onclick="createCharacter(9)">Human</button>
        </div> <br> <br>
        <div id="sexSelect">
            <h1>Select character sex</h1>
            <button onclick="createCharacter(1)">Male</button>
            <button onclick="createCharacter(2)">Female</button>
        </div> <br> <br>
        <div id="nameSelect">
            <h1>Select a character name</h1>
            <input id="namein" type="text" placeholder="Insert character name">
        </div> <br> <br>
        <div>
            <button onclick="saveChar()">Create character</button>
        </div>
`;
}

function createCharacter(select) {
    switch (select) {
        case 1:
            sex.male = "Male";
            Character.sex = sex.Male;
            console.log(Character);
            break;
        case 2:
            sex.female = "Female";
            Character.Sex = sex.Female;
            console.log(Character);
            break;
        case 3:
            Character.Race = Elf.Race;
            Character.Hp = Elf.Hp;
            console.log(Character);
            break;
        case 4:
            Character.Race = Orc.Race;
            Character.Hp = Orc.Hp;
            console.log(Character);
            break;
        case 5:
            Character.Race = Goblin.Race;
            Character.Hp = Goblin.Hp;
            console.log(Character);
            break;
        case 6:
            Character.Race = Troll.Race;
            Character.Hp = Troll.Hp;
            console.log(Character);
            break;
        case 7:
            Character.Race = Dwarf.Race;
            Character.Hp = Dwarf.Hp;
            console.log(Character);
            break;
        case 8:
            Character.Race = Gnome.Race;
            Character.Hp = Gnome.Hp;
            console.log(Character);
            break;
        case 9:
            Character.Race = Human.Race;
            Character.Hp = Human.Hp;
            console.log(Character);
            break;
        default:
            console.log("Something went wrong");
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function saveChar() {
    const namein = document.getElementById("namein").value;
    Character.Name = namein;

    console.log(Character);

    localStorage.setItem("charData", JSON.stringify(Character));

    await sleep(300);

    window.location.href = "game.html";
}
