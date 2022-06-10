const races = ["Humano", "Anão", "Elfo", "Meio-Elfo", "Tiefling", "Halfling", "Draconato", "Meio-Orc", "Gnomo"];
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
            throw 'New name cannot be empty'
        }
        this.name = newName
    }
    static createAnonymous(gender) {
        let name = gender == "male" ? genName("male") : genName("female")
        let anonymous = new Person(name)
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
        this.race = race
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

let nomeHumanoM;
let nomeHumanoF;
let sobrenomeHumano;

if(race == "Anão"){
    name = gender == "male" ? getRdm(nomeAnaoM) : getRdm(nomeAnaoF);
    surname = getRdm(sobrenomeAnao);
    return name + " " + surname;
}
if(race == "Elfo"){
    name = gender == "male" ? getRdm(nomeElfoM) : getRdm(nomeElfoF);
    surname = getRdm(sobrenomeElfo);
    return name + " " + surname;
}
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