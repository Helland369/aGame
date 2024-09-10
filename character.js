const Character = {
    Name: "",
    Sex: "",
    Race: "",
    Hp: 10,
    Mana: 35,
    Level: 2,
    Exp: 0,
    Damage: 5,

    // getters
    get name() {
        return this.Name;
    },
    get sex() {
        return this.Sex;
    },
    get race() {
        return this.Race;
    },
    get hp() {
        return this.HP;
    },
    get mana() {
        return this.Mana;
    },
    get level() {
        return this.Level;
    },
    get exp() {
        return this.Exp;
    },
    get damage() {
        return this.Damage;
    },

    // setters
    set name(name) {
        this.Name = name;
    },
    set sex(sex) {
        this.Sex = sex;
    },
    set race(race) {
        this.Race = race;
    },
    set hp(hp) {
        this.hp = hp;
    },
    set mana(mana) {
        this.Mana = mana;
    },
    set level(level) {
        this.Level = level;
    },
    set exp(exp) {
        this.Exp = exp;
    },
    set damage(damage) {
        this.Damage = damage;
    },
};

const sex = {
    Male: "Male",
    Female: "Female",

    // getters
    get male() {
        return this.Male;
    },
    get female() {
        return this.Female;
    },

    // setters
    set male(male) {
        this.Male = male;
    },
    set female(female) {
        this.Female = female;
    },
};
