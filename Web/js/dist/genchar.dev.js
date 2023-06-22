"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(genRdn);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var races = ["Humano", "Anão", "Elfo", "Meio-Elfo", "Tiefling", "Halfling", "Draconato", "Meio-Orc", "Gnomo"];
var objRace = {
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
var objconvRace = {
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
var classes = ["Bárbaro", "Bardo", "Bruxo", "Clérigo", "Druida", "Feiticeiro", "Guerreiro", "Ladino", "Mago", "Monge", "Paladino", "Ranger"];

var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "setName",
    value: function setName(newName) {
      newName = newName.trim();

      if (newName === '') {
        throw 'Novo nome não pode estar vazio!';
      }

      this.name = newName;
    }
  }, {
    key: "getClass",
    value: function getClass() {
      return this.classN;
    }
  }, {
    key: "setClass",
    value: function setClass(classN) {
      this.classN = classN;
    }
  }, {
    key: "getRace",
    value: function getRace() {
      return this.race;
    }
  }, {
    key: "setRace",
    value: function setRace(race) {
      this.race = objRace[race];
    }
  }], [{
    key: "createAnonymous",
    value: function createAnonymous(race, gender) {
      var name = genName(race, gender);
      var anonymous = new Person(name);
      anonymous.setRace(race);
      anonymous.setClass(genClass());
      return anonymous;
    }
  }]);

  return Person;
}();

function getRdm(obj) {
  var result = obj[Math.floor(Math.random() * obj.length)];
  return result;
}

function genName(race, gender) {
  var nomeAnaoM = ["Adrik", "Alberich", "Baern", "Bruenor", "Eberk", "Flint", "Harbek", "Morgran", "Rangrim", "Thoradin", "Thorin", "Travok", "Ulfgar"];
  var nomeAnaoF = ["Amber", "Artin", "Bardryn", "Eldeth", "Gurdis", "Helja", "Kathra", "Ilde", "Riswynn", "Torbera", "Torgga", "Vistra"];
  var sobrenomeAnao = ["Balderk", "Battlehammer", "Dankil", "Fireforge", "Frostbeard", "Ironfist", "Leutgehr", "Rummaheim", "Ungart"];
  var nomeElfoM = ["Adran", "Aramil", "Berrian", "Enialis", "Erevan", "Immeral", "Ivelios", "Laucian", "Paelias", "Peren", "Quarion", "Soveliss", "Varis"];
  var nomeElfoF = ["Adrie", "Antinus", "Birel", "Caelyn", "Enna", "Ielenia", "Leshanna", "Meriele", "Mialee", "Sariel", "Thia", "Vadania", "Valanthe"];
  var sobrenomeElfo = ["Amakir", "Amastacia", "Galanodel", "Holimion", "Liadon", "Nailo", "Siannodel"];
  var nomeHumanoM = ["Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Igan", "Ivor", "Kosef", "Malark", "Morn", "Randal", "Stedd"];
  var nomeHumanoF = ["Arveene", "Esvele", "Jhessail", "Katernin", "Kerri", "Lureene", "Miri", "Mara", "Natali", "Rowan", "Shandri", "Tessele"];
  var sobrenomeHumano = ["Amblecrown", "Bersk", "Buckman", "Chernin", "Chernin", "Dundragon", "Evenwood", "Greycastle", "Kulenov", "Tallstag"];
  var nomeMeioElfoM = ['Aelar', 'Bastian', 'Caelen', 'Dorian', 'Erevan', 'Faelar', 'Galen', 'Haelen', 'Ilian', 'Jareth', 'Kaelan', 'Lorian', 'Maelis'];
  var nomeMeioElfoF = ['Elara', 'Aria', 'Lirael', 'Faela', 'Thalia', 'Elysia', 'Mira', 'Lyra', 'Seraphina', 'Evelina', 'Althea', 'Nerissa', 'Elowen'];
  var sobrenomeMeioElfo = ["Moonshadow", "Silverbrook", "Duskrunner", "Starfrost", "Stormdancer", "Gloomweaver", "Sunsong", "Evebane"];
  var raceP = objconvRace[race];
  var paramP = gender == "male" ? "nome".concat(raceP, "M") : "nome".concat(raceP, "F");
  var nameP = getRdm(eval(paramP));
  var surname = getRdm(eval("sobrenome".concat(raceP)));
  return nameP + " " + surname;
}

function genClass() {
  var className = getRdm(classes);
  return className;
}

function rdmColor() {
  options = 'ABCDEF0123456789';
  max = options.length;

  function draw() {
    opt = max;
    var v = Math.floor(opt * Math.random());
    return v;
  }

  var result = '';
  var opacity = '';

  for (i = 1; i < 7; i++) {
    idx = draw();
    result += options[idx];
  }

  for (a = 1; a < 3; a++) {
    ix = draw();
    opacity += options[ix];
  }

  return "#" + result + opacity;
}

function genRdn() {
  var keys, keyChain, index;
  return regeneratorRuntime.wrap(function genRdn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          keyChain = function _ref2(s1, s2, s3, s4, s5) {
            str1 = keys(s1);
            str2 = keys(s2);
            str3 = keys(s3);
            str4 = keys(s4);
            str5 = keys(s5);
            keyBlock = str1 + '-' + str2 + '-' + str3 + '-' + str4 + '-' + str5;
            return keyBlock;
          };

          keys = function _ref(size) {
            // options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            // options = 'abcdefghijklmnopqrstuvwxyz0123456789';
            options = 'abcdef0123456789';
            max = options.length;

            function draw() {
              opt = max;
              var v = Math.floor(opt * Math.random());
              return v;
            }

            var result = '';

            for (i = 1; i < parseInt(size) + 1; i++) {
              idx = draw();
              result += options[idx];
            }

            return result;
          };

          index = 0;

        case 3:
          if (!true) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", keyChain(8, 4, 4, 4, 12));

        case 7:
          _context.next = 3;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function rollDice(qtd, size) {
  function roll() {
    var v = Math.ceil(size * Math.random());
    return v;
  }

  res = [];

  for (i = 1; i <= qtd; i++) {
    val = roll(); // console.log('dado '+i+' =', val);

    res.push(val);
  }

  res.sort().shift();
  return res.reduce(function (a, b) {
    return a + b;
  });
}

function generateAttr() {
  arrVals = [];
  val1 = rollDice(4, 6);
  val2 = rollDice(4, 6);
  val3 = rollDice(4, 6);
  val4 = rollDice(4, 6);
  val5 = rollDice(4, 6);
  val6 = rollDice(4, 6);
  arrVals.push(val1, val2, val3, val4, val5, val6);
  return arrVals.sort();
}

function raceAdjust(raceN, values) {
  if (raceN == 'human') {
    newVals = values.map(function (x) {
      return x + 1;
    });
    return newVals;
  }
}