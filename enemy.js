const Enemy = {
    Race: "",
    Hp: 13,
    Mana: 20,
    Damage: 5,
    Level: 1,

    setEnemy(race) {
        this.Race = race;
        switch (race) {
            case "Goblin":
                this.Hp = 10;
                this.Damage = 3;
                break;
            case "Deamon":
                this.Hp = 10;
                this.Damage = 3;
                break;
            case "Vampire":
                this.Hp = 10;
                this.Damage = 3;
                break;
            case "Troll":
                this.Hp = 10;
                this.Damage = 3;
                break;
            case "Orc":
                this.Hp = 10;
                this.Damage = 3;
                break;
            case "Elf":
                this.Hp = 10;
                this.Damage = 3;
                break;
            case "Dragon":
                this.Hp = 10;
                this.Damage = 3;
                break;
            case "Dwarf":
                this.Hp = 10;
                this.Damage = 3;
                break;
            case "Gnome":
                this.Hp = 10;
                this.Damage = 3;
                break;
            case "Human":
                this.Hp = 10;
                this.Damage = 3;
                break;
            default:
                this.Hp = 11;
                this.Damage = 2;
        }
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

function selectRandomEnemy() {
    const randonIdex = Math.floor(Math.random() * EnemyRace.Race.length);
    const selectedIndex = EnemyRace.Race[randonIdex];
    Enemy.setEnemy(selectedIndex);
    console.log(Enemy);
}
