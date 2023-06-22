const races = ["Humano", "Anão", "Elfo", "Meio-Elfo", "Tiefling", "Halfling", "Draconato", "Meio-Orc", "Gnomo"];

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
}

function getRdm(obj) {
    let result = obj[Math.floor(Math.random() * obj.length)];
    return result;
}

function genName(race, gender) {
    let nomeAnaoM = ["Adrik", "Alberich", "Baern", "Bruenor", "Eberk", "Flint", "Harbek", "Morgran", "Rangrim", "Thoradin", "Thorin", "Travok", "Ulfgar"];
    let nomeAnaoF = ["Amber", "Artin", "Bardryn", "Eldeth", "Gurdis", "Helja", "Kathra", "Ilde", "Riswynn", "Torbera", "Torgga", "Vistra"];
    let sobrenomeAnao = ["Balderk", "Battlehammer", "Dankil", "Fireforge", "Frostbeard", "Ironfist", "Leutgehr", "Rummaheim", "Ungart"];

    let nomeElfoM = ["Adran", "Aramil", "Berrian", "Enialis", "Erevan", "Immeral", "Ivelios", "Laucian", "Paelias", "Peren", "Quarion", "Soveliss", "Varis"];
    let nomeElfoF = ["Adrie", "Antinus", "Birel", "Caelyn", "Enna", "Ielenia", "Leshanna", "Meriele", "Mialee", "Sariel", "Thia", "Vadania", "Valanthe"];
    let sobrenomeElfo = ["Amakir", "Amastacia", "Galanodel", "Holimion", "Liadon", "Nailo", "Siannodel"];

    let nomeHumanoM = ["Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Igan", "Ivor", "Kosef", "Malark", "Morn", "Randal", "Stedd"];
    let nomeHumanoF = ["Arveene", "Esvele", "Jhessail", "Katernin", "Kerri", "Lureene", "Miri", "Mara", "Natali", "Rowan", "Shandri", "Tessele"];
    let sobrenomeHumano = ["Amblecrown", "Bersk", "Buckman", "Chernin", "Chernin","Dundragon", "Evenwood", "Greycastle", "Kulenov", "Tallstag"];

    let nomeMeioElfoM = ['Aelar', 'Bastian', 'Caelen', 'Dorian', 'Erevan', 'Faelar', 'Galen', 'Haelen', 'Ilian', 'Jareth', 'Kaelan', 'Lorian', 'Maelis'];
    let nomeMeioElfoF = ['Elara', 'Aria', 'Lirael', 'Faela', 'Thalia', 'Elysia', 'Mira', 'Lyra', 'Seraphina', 'Evelina', 'Althea', 'Nerissa', 'Elowen'];
    let sobrenomeMeioElfo = ["Moonshadow", "Silverbrook", "Duskrunner", "Starfrost", "Stormdancer", "Gloomweaver", "Sunsong", "Evebane"];

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

function rdmColor() {
    options = 'ABCDEF0123456789';
    max = options.length;
    function draw(){
        opt = max;
        let v = Math.floor(opt * Math.random());
        return v;
    }
    var result = '';
    var opacity = '';
    for(i=1; i<7; i++){
        idx = draw();
        result += options[idx];
    }
    for(a=1; a<3; a++){
        ix = draw();
        opacity += options[ix];
    }
    return "#"+result+opacity;
}

function* genRdn() {
    function keys(size) {
        // options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // options = 'abcdefghijklmnopqrstuvwxyz0123456789';
        options = 'abcdef0123456789';
        max = options.length;
        function draw(){
            opt = max;
            let v = Math.floor(opt * Math.random());
            return v;
        }
        var result = '';
        for(i = 1; i < parseInt(size) + 1; i++){
            idx = draw();
            result += options[idx];
        }
        return result;
    }

    function keyChain(s1,s2,s3,s4,s5) {

        str1 = keys(s1);
        str2 = keys(s2);
        str3 = keys(s3);
        str4 = keys(s4);
        str5 = keys(s5);

        keyBlock = str1 + '-' + str2 + '-' + str3 + '-' + str4 + '-' + str5;

        return keyBlock;
    }

    var index = 0;
    while(true) {
        return keyChain(8,4,4,4,12)
        yield index++
    }
}

function rollDice(qtd, size) {
    function roll(){
        let v = Math.ceil(size * Math.random());
        return v;
    }
    res = [];
    for(i=1;i<=qtd;i++){
        val = roll()
        // console.log('dado '+i+' =', val);
        res.push(val)
    }
    res.sort().shift();
    return res.reduce((a,b)=>a+b);
}

function generateAttr() {
    arrVals = [];
    val1 = rollDice(4,6);
    val2 = rollDice(4,6);
    val3 = rollDice(4,6);
    val4 = rollDice(4,6);
    val5 = rollDice(4,6);
    val6 = rollDice(4,6);

    arrVals.push(val1,val2,val3,val4,val5,val6);
    return arrVals.sort();
}

function raceAdjust(raceN, values) {
    if(raceN == 'human'){
        newVals = values.map(x=>x+1);
        return newVals;
    }
}

