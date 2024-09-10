const Enemy = {
    Race: "",
    Hp: 13,
    Mana: 20,

    // getters
    get race() {
        return this.Race;
    },
    get hp() {
        return this.Hp;
    },
    get mana() {
        return this.Mana;
    },

    // setters
    set race(race) {
        this.Race = race;
    },
    set hp(hp) {
        this.Hp = hp;
    },
    set mana(mana) {
        this.mana = mana;
    },
};

const EnemyRace = {
    Race: [
        "Goblin",
        "Deamon",
        "Vampire",
        "Troll",
        "Orc",
        "Elf",
        "Dragon",
        "Dwarf",
        "Gnome",
        "Human",
    ],
};

//let randomEnemy = Math.floor(Math.random(EnemyRace.Race) * 10);
let randomEnemy =
    EnemyRace.Race[Math.floor(Math.random() * EnemyRace.Race.length)];

//enemySelect();
function enemySelect() {
    for (let i = 0; i < randomEnemy; i++) {
        if (i == 0) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else if (i == 1) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else if (i == 2) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else if (i == 3) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else if (i == 4) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else if (i == 5) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else if (i == 6) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else if (i == 7) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else if (i == 8) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else if (i == 9) {
            Enemy.Race = randomEnemy;
            console.log(randomEnemy);
        } else {
            console.log("No enemy...");
        }
    }
}
