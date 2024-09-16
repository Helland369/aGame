const main = document.getElementById("main");

dispCharCreate();

function dispCharCreate() {
    main.innerHTML = `
        <h1>Character Creation</h1>
        <div id="raceSelect">
            <p>Select race</p>
            <button onclick="selectRace(1)">Elf</button>
            <button onclick="selectRace(2)">Orc</button>
            <button onclick="selectRace(3)">Goblin</button>
            <button onclick="selectRace(4)">Troll</button>
            <button onclick="selectRace(5)">Dwarf</button>
            <button onclick="selectRace(6)">Gnome</button>
            <button onclick="selectRace(7)">Human</button>
        </div> <br> <br>
        <div id="sexSelect">
            <h1>Select character sex</h1>
            <button onclick="selectSex(1)">Male</button>
            <button onclick="selectSex(2)">Female</button>
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

function selectSex(select) {
    switch (select) {
        case 1:
            //sex.male = "Male";
            //Character.sex(sex.Male);
            Character.Sex = sex.Male;
            console.log(Character);
            break;
        case 2:
            //sex.female = "Female";
            //Character.Sex(sex.Female);
            Character.Sex = sex.Female;
            console.log(Character);
            break;
        default:
            console.log("Could not select sex");
    }
}

function selectRace(select) {
    switch (select) {
        case 1:
            Character.Race = Elf.Race;
            Character.Hp = Elf.Hp;
            //Character.setRace(Elf);
            console.log(Character);
            break;
        case 2:
            Character.Race = Orc.Race;
            Character.Hp = Orc.Hp;
            //Character.setRace(Orc);
            console.log(Character);
            break;
        case 3:
            Character.Race = Goblin.Race;
            Character.Hp = Goblin.Hp;
            //Character.setRace(Goblin);
            console.log(Character);
            break;
        case 4:
            Character.Race = Troll.Race;
            Character.Hp = Troll.Hp;
            //Character.setRace(Troll);
            console.log(Character);
            break;
        case 5:
            Character.Race = Dwarf.Race;
            Character.Hp = Dwarf.Hp;
            //Character.setRace(Dwarf);
            console.log(Character);
            break;
        case 6:
            Character.Race = Gnome.Race;
            Character.Hp = Gnome.Hp;
            //Character.setRace(Gnome);
            console.log(Character);
            break;
        case 7:
            Character.Race = Human.Race;
            Character.Hp = Human.Hp;
            //Character.setRace(Human);
            console.log(Character);
            break;
        default:
            console.log("Could not select race");
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
