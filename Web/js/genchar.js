const races = ["Humano", "Anão", "Elfo", "Meio-Elfo", "Tiefling", "Halfling", "Draconato", "Meio-Orc", "Gnomo"];
const racesVal = ["human", "dwarf", "elf", "halfelf", "tiefling", "halfling", "dragonborn", "halforc", "gnome"];
const genders = ["male", "female"];

const objGender = {
    "male": "Masculino",
    "female": "Feminino"
};

const objRace = {
    "elf": "Elfo",
    "human": "Humano",
    "dwarf": "Anão",
    "dragonborn": "Draconato",
    "halfelf": "Meio-Elfo",
    "halfling": "Halfling",
    "halforc": "Meio-Orc",
    "tiefling": "Tiefling",
    "gnome": "Gnomo"
};

const objconvRace = {
    "elf": "Elfo",
    "human": "Humano",
    "dwarf": "Anao",
    "dragonborn": "Draconato",
    "halfelf": "MeioElfo",
    "halfling": "Halfling",
    "halforc": "MeioOrc",
    "tiefling": "Tiefling",
    "gnome": "Gnomo"
};

const classes = ["Bárbaro", "Bardo", "Bruxo", "Clérigo", "Druida", "Feiticeiro", "Guerreiro", "Ladino", "Mago", "Monge", "Paladino", "Ranger"];

class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    setName(newName) {
        newName = newName.trim()
        if (newName === ''){
            throw 'Novo nome não pode estar vazio!';
        }
        this.name = newName
    }
    static createAnonymous(race, gender) {
        let name = genName(race, gender)
        let anonymous = new Person(name)
        anonymous.setRace(race)
        anonymous.setClass(genClass())
        anonymous.setGender(gender)
        return anonymous
    }
    getClass() {
        return this.classN
    }
    setClass(classN) {
        this.classN = classN
    }
    getRace() {
        return this.race
    }
    setRace(race) {
        this.race = objRace[race]
    }
    getGender() {
        return this.gender
    }
    setGender(gender) {
        this.gender = objGender[gender]
    }
    getStr() {
        return this.str
    }
    setStr(str) {
        this.str = str
    }
    getDex() {
        return this.dex
    }
    setDex(dex) {
        this.dex = dex
    }
    getCon() {
        return this.con
    }
    setCon(con) {
        this.con = con
    }
    getWis() {
        return this.wis
    }
    setWis(wis) {
        this.wis = wis
    }
    getInt() {
        return this.int
    }
    setInt(int) {
        this.int = int
    }
    getChr() {
        return this.chr
    }
    setChr(chr) {
        this.chr = chr
    }
}

function getRdm(obj) {
    let result = obj[Math.floor(Math.random() * obj.length)];
    return result;
}

function genName(race, gender) {
    // Anao
    let nomeAnaoM = ["Adrik", "Alberich", "Baern", "Bruenor", "Eberk", "Flint", "Harbek", "Morgran", "Rangrim", "Thoradin", "Thorin", "Travok", "Ulfgar"];
    let nomeAnaoF = ["Amber", "Artin", "Bardryn", "Eldeth", "Gurdis", "Helja", "Kathra", "Ilde", "Riswynn", "Torbera", "Torgga", "Vistra"];
    let sobrenomeAnao = ["Balderk", "Battlehammer", "Dankil", "Fireforge", "Frostbeard", "Ironfist", "Leutgehr", "Rummaheim", "Ungart"];
    // Elfo
    let nomeElfoM = ["Adran", "Aramil", "Berrian", "Enialis", "Erevan", "Immeral", "Ivelios", "Laucian", "Paelias", "Peren", "Quarion", "Soveliss", "Varis"];
    let nomeElfoF = ["Adrie", "Antinus", "Birel", "Caelyn", "Enna", "Ielenia", "Leshanna", "Meriele", "Mialee", "Sariel", "Thia", "Vadania", "Valanthe"];
    let sobrenomeElfo = ["Amakir", "Amastacia", "Galanodel", "Holimion", "Liadon", "Nailo", "Siannodel"];
    // Humano
    let nomeHumanoM = ["Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Igan", "Ivor", "Kosef", "Malark", "Morn", "Randal", "Stedd"];
    let nomeHumanoF = ["Arveene", "Esvele", "Jhessail", "Katernin", "Kerri", "Lureene", "Miri", "Mara", "Natali", "Rowan", "Shandri", "Tessele"];
    let sobrenomeHumano = ["Amblecrown", "Bersk", "Buckman", "Chernin", "Chernin","Dundragon", "Evenwood", "Greycastle", "Kulenov", "Tallstag"];
    // Meio Elfo
    let nomeMeioElfoM = ["Aelar", "Bastian", "Caelen", "Dorian", "Erevan", "Faelar", "Galen", "Haelen", "Ilian", "Jareth", "Kaelan", "Lorian", "Maelis"];
    let nomeMeioElfoF = ["Elara", "Aria", "Lirael", "Faela", "Thalia", "Elysia", "Mira", "Lyra", "Seraphina", "Evelina", "Althea", "Nerissa", "Elowen"];
    let sobrenomeMeioElfo = ["Moonshadow", "Silverbrook", "Duskrunner", "Starfrost", "Stormdancer", "Gloomweaver", "Sunsong", "Evebane"];
    // Draconato
    let nomeDraconatoM = ["Adrex", "Arjhan", "Azzakh", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Nadarr"];
    let nomeDraconatoF = ["Vrakroth", "Zethra", "Sylvara", "Narixia", "Vixxa", "Zahara", "Myrth", "Syndra", "Lyranna", "Zephyr", "Veridia"];
    let sobrenomeDraconato = ["Stormscale", "Fireforge", "Frostbreath", "Ironclaw", "Shadowtail", "Thunderstrike", "Goldscales", "Silverwing"];
    // Tiefling
    let nomeTieflingM = ["Zephyrus", "Lucius", "Maelis", "Valerian", "Dante", "Sylus", "Asmodeus", "Raziel", "Cyrus", "Kazimir", "Xander", "Ignatius", "Malachi"];
    let nomeTieflingF = ["Akta", "Calista", "Damara", "Eshe", "Fiora", "Gizella", "Helene", "Isra", "Jezabel", "Kallista", "Lilith", "Mirella", "Nemeia"];
    let sobrenomeTiefling = ["Hellsbane", "Shadowhorn", "Duskwalker", "Blackthorn", "Infernoheart", "Grimmshadow", "Nightshade", "Voidspike"];
    // Halfling
    let nomeHalflingM = ["Alton", "Barley", "Cade", "Dannad", "Eldon", "Finnan", "Garret", "Hugo", "Igor", "Jasper", "Kip"];
    let nomeHalflingF = ["Daisy", "Piper", "Willow", "Hazel", "Molly", "Cora", "Wren", "Fiona", "Poppy", "Lola", "Gemma"];
    let sobrenomeHalfling = ["Greenbottle", "Underhill", "Proudbottom", "Goodbarrel", "Brushgather", "Hilltopple", "Smallburrow", "Burrfoot"];
    // Gnomo
    let nomeGnomoM = ["Alston", "Bilbron", "Cobb", "Dink", "Eldon", "Fonkin", "Gimble", "Haffen", "Juniper", "Kip", "Nebin"];
    let nomeFemaleF = ["Alvina", "Briar", "Cora", "Daphne", "Elara", "Fiona", "Gwendolyn", "Hazel", "Iris", "Juniper", "Kelda"];
    let sobrenomeGnomo = ["Glimmerdust", "Copperpot", "Mossbeard", "Fizzlebang", "Whistlewhisker", "Proudbuckle", "Merrybrook", "Windlebottom"];
    // Meio Orc
    let nomeMeioOrcM =["Grommash", "Gorak", "Throk", "Drak'Thar", "Mogor", "Hakkar", "Durotan", "Kargath", "Zul'jin", "Nazgrim", "Gul'dan"];
    let nomeMeioOrcF = ["Gruusha", "Zorana", "Ragga", "Lokara", "Urzula", "Ghazra", "Kragga", "Drakara", "Hrashka", "Kulga", "Gorga"];
    let sobrenomeMeioOrc = ["Grimjaw", "Bloodtusk", "Skullcrusher", "Ironhide", "Ravenshadow", "Stormfang", "Blackthorn", "Dreadblade"];

    let raceP = objconvRace[race];
    let paramP = gender == "male" ? `nome${raceP}M` : `nome${raceP}F`;
    let nameP = getRdm(eval(paramP));
    let surname = getRdm(eval(`sobrenome${raceP}`));

    return nameP + " " + surname;
}

function genClass() {
    let className = getRdm(classes);
    return className;
}

function rollDice(qtd, size) {
    function roll(){
        let v = Math.ceil(size * Math.random());
        return v;
    }
    res = [];
    for(i=1;i<=qtd;i++){
        val = roll()
        res.push(val)
    }
    return res;
}

function explodeDices(diceArray) {
    val = '';
    for(let i=0; i < diceArray.length; i++){
        val += `dado: ${(Number(i)+1)} -> ${diceArray[i]}` + '<br>';
    }
    return val;
}

function rollDiceAttr(qtd, size) {
    function roll(){
        let v = Math.ceil(size * Math.random());
        return v;
    }
    res = [];
    for(i=1;i<=qtd;i++){
        val = roll()
        res.push(val)
    }
    res.sort((a,b) => a - b).shift();
    return res.reduce((a,b)=>a+b);
}

function generateAttr() {
    arrVals = [];
    val1 = rollDiceAttr(4,6);
    val2 = rollDiceAttr(4,6);
    val3 = rollDiceAttr(4,6);
    val4 = rollDiceAttr(4,6);
    val5 = rollDiceAttr(4,6);
    val6 = rollDiceAttr(4,6);

    arrVals.push(val1,val2,val3,val4,val5,val6);
    // return arrVals.sort();
    return arrVals.sort((a,b) => a - b)
}

function raceAdjust(raceN, values) {
    if(raceN == 'human'){
        newVals = values.map(x=>x+1);
        return newVals;
    }
}

