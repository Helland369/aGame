const Character = {
    Name: "",
    Sex: "",
    Race: "",
    Hp: 10,
    //Mana: 35,
    Level: 2,
    Exp: 0,
    Damage: 5,

    // this._foo means that its "private" and not "public" // only classes can make true private with the # symbol.
    // getters
    get Name() {
        return this._Name;
    },
    get Sex() {
        return this._Sex;
    },
    get Race() {
        return this._Race;
    },
    get Hp() {
        return this._HP;
    },
    get Mana() {
        return this._Mana;
    },
    get Level() {
        return this._Level;
    },
    get Exp() {
        return this._Exp;
    },
    get Damage() {
        return this._Damage;
    },

    // setters
    set Name(name) {
        this._Name = name;
    },
    set Sex(sex) {
        this._Sex = sex;
    },
    set Race(race) {
        this._Race = race;
    },
    set Hp(hp) {
        this._hp = hp;
    },
    set Mana(mana) {
        this._Mana = mana;
    },
    set Level(level) {
        this._Level = level;
    },
    set Exp(exp) {
        this._Exp = exp;
    },
    set Damage(damage) {
        this._Damage = damage;
    },

    setRace(raceObj) {
        this.Race = raceObj.Race;
        this.Hp = raceObj.Hp;
    },
};

const sex = {
    Male: "Male",
    Female: "Female",
};
// // getters
// get Male() {
//     return this._Male;
// },
// get Female() {
//     return this._Female;
// },

// // setters
// set Male(male) {
//     this.Male = male;
// },
// set Female(female) {
//     this.Female = female;
// },
