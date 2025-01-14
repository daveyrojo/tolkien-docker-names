/**
 * @private
 * @summary "Randomly" picks an element from the left array and combines it with one form right.
 * @description
 *  This function is a copy paste implementation from docker_names in golang.
 *  Will never return "boring_wozniak".
 *  The left array should be an array of adjectives, where as the right array should be
 *  an individuals surname. This results in funny names like angry_bohr or prickly_murdock.
 * @param {Array} left - An array of strings to be used as the left  word in docker name.
 * @param {Array} right - An array of strings to be used as the right word in docker name.
 * @returns {string}
 */
function generateName(left, right) {
  var first = left[Math.floor(Math.random() * left.length)];
  var second = right[Math.floor(Math.random() * right.length)];
  var result = first + "_" + second;

  /* Steve Wozniak is not boring. This is part of the docker names spec. */
  if (result === "boring_wozniak") {
    return generateName(left, right);
  }
  return result;
}

function DockerNames() {
  this.left = [
    "Adalbert",
    "Adaldrida",
    "Adalgar",
    "Adalgrim",
    "Adamanta",
    "Adanel",
    "Adelard",
    "Adrahil",
    "Ar-Adûnakhôr",
    "Aegnor",
    "Aerandir",
    "Aerin",
    "Aghan",
    "Ailinel",
    "Alatar",
    "Tar-Alcarin",
    "Tar-Aldarion",
    "Aldor",
    "Alfrida",
    "Algund",
    "Almarian",
    "Almiel",
    "Amandil",
    "Tar-Amandil",
    "Amaranth",
    "Amarië",
    "Amdír",
    "Amethyst",
    "Amlach",
    "Amlaith",
    "Amras",
    "Amrod",
    "Amroth",
    "Anairë",
    "Anardil",
    "Anárion",
    "Tar-Anárion",
    "Anborn",
    "Ancalagon",
    "Tar-Ancalimë",
    "Tar-Ancalimon",
    "Andreth",
    "Andróg",
    "Andwise",
    "Angbor",
    "Angelica",
    "Angelimar",
    "Angelimir",
    "Angrim",
    "Angrod",
    "Annael",
    "Anson",
    "Arador",
    "Araglas",
    "Aragorn",
    "Aragost",
    "Arahad",
    "Arahael",
    "Aranarth",
    "Aranuir",
    "Aranwë",
    "Araphant",
    "Araphor",
    "Arassuil",
    "Aratan",
    "Arathorn",
    "Araval",
    "Aravir",
    "Aravorn",
    "Arciryas",
    "Tar-Ardamin",
    "Ardamir",
    "Aredhel",
    "Argeleb",
    "Argon",
    "Argonui",
    "Arien",
    "Arminas",
    "Arod",
    "Arroch",
    "Artamir",
    "Arthad",
    "Arvedui",
    "Arvegil",
    "Arveleg",
    "Arwen",
    "Asfaloth",
    "Asgon",
    "Asphodel",
    "Atanalcar",
    "Tar-Atanamir",
    "Atanatar",
    "Aulë",
    "Aulendil",
    "Axantur",
    "Azaghâl",
    "Azog",
    "Bain",
    "Balbo",
    "Baldor",
    "Balin",
    "Bandobras",
    "Barach",
    "Baragund",
    "Barahir",
    "Baran",
    "Baranor",
    "Bard",
    "Barliman",
    "Basso",
    "Beechbone",
    "Belba",
    "Beldir",
    "Beldis",
    "Belecthor",
    "Beleg",
    "Belegorn",
    "Belegund",
    "Belemir",
    "Belen",
    "Bell",
    "Belladonna",
    "Bëor",
    "Beorn",
    "Bereg",
    "Beregar",
    "Beregond",
    "Beren",
    "Bereth",
    "Bergil",
    "Beril",
    "Berilac",
    "Bert",
    "Berúthiel",
    "Berylla",
    "Bifur",
    "Bilbo",
    "Bill",
    "Bingo",
    "Blanco",
    "Bob",
    "Bodo",
    "Bofur",
    "Bolg",
    "Bombur",
    "Bór",
    "Borin",
    "Borlach",
    "Borlad",
    "Boromir",
    "Boron",
    "Borondir",
    "Borthand",
    "Bosco",
    "Bowman",
    "Brand",
    "Brandir",
    "Bregalad",
    "Brego",
    "Bregolas",
    "Briffo",
    "Brodda",
    "Bruno",
    "Brytta",
    "Bucca",
    "Buffo",
    "Bungo",
    "Calimehtar",
    "Caliondo",
    "Calmacil",
    "Tar-Calmacil",
    "Camellia",
    "Caranthir",
    "Carc",
    "Carcharoth",
    "Carl",
    "Castamir",
    "Celandine",
    "Celeborn",
    "Celebrían",
    "Celebrimbor",
    "Celebrindor",
    "Celegorm",
    "Celepharn",
    "Cemendur",
    "Ceorl",
    "Chica",
    "Círdan",
    "Cirion",
    "Ciryandil",
    "Tar-Ciryatan",
    "Ciryatur",
    "Ciryon",
    "Cora",
    "Cotman",
    "Cottar",
    "Curufin",
    "Daeron",
    "Dagnir",
    "Dáin",
    "Dairuin",
    "Daisy",
    "Damrod",
    "Déagol",
    "Denethor",
    "Déor",
    "Déorwine",
    "Derufin",
    "Dervorin",
    "Diamond",
    "Dina",
    "Dinodas",
    "Dior",
    "Dírhael",
    "Dírhavel",
    "Dís",
    "Doderic",
    "Dodinas",
    "Donnamira",
    "Dora",
    "Dori",
    "Dorlas",
    "Draugluin",
    "Drogo",
    "Druda",
    "Dudo",
    "Duilin",
    "Duinhir",
    "Dúnhere",
    "Durin",
    "Dwalin",
    "Eärendil",
    "Eärendur",
    "Eärnil",
    "Eärnur",
    "Eärwen",
    "Ecthelion",
    "Edrahil",
    "Egalmoth",
    "Eglantine",
    "Eilinel",
    "Elanor",
    "Elatan",
    "Elboron",
    "Eldacar",
    "Eldalótë",
    "Eldarion",
    "Elemmakil",
    "Elemmírë",
    "Elendil",
    "Tar-Elendil",
    "Elendur",
    "Elenwë",
    "Elfhelm",
    "Elfhild",
    "Elfstan",
    "Elfwine",
    "Elladan",
    "Elmo",
    "Elrohir",
    "Elrond",
    "Elros",
    "Eluréd",
    "Elurín",
    "Elwing",
    "Emeldir",
    "Enel",
    "Enerdhil",
    "Eofor",
    "Eöl",
    "Éomer",
    "Éomund",
    "Eönwë",
    "Eorl",
    "Éothain",
    "Éowyn",
    "Eradan",
    "Erchirion",
    "Erellont",
    "Erendis",
    "Erestor",
    "Erkenbrand",
    "Erling",
    "Esmeralda",
    "Estë",
    "Estella",
    "Estelmo",
    "Everard",
    "Falco",
    "Faramir",
    "Farin",
    "Fastolph",
    "Fastred",
    "Fatty",
    "Fëanor",
    "Felaróf",
    "Fengel",
    "Ferdinand",
    "Ferumbras",
    "Fíli",
    "Filibert",
    "Fimbrethil",
    "Finarfin",
    "Findegil",
    "Findis",
    "Finduilas",
    "Finglas",
    "Fingolfin",
    "Fingon",
    "Finrod",
    "Finwë",
    "Firefoot",
    "Fíriel",
    "Fladrif",
    "Flambard",
    "Flói",
    "Folca",
    "Folco",
    "Folcred",
    "Folcwine",
    "Forlong",
    "Forthwini",
    "Fortinbras",
    "Forweg",
    "Fosco",
    "Fram",
    "Frár",
    "Fréa",
    "Fréaláf",
    "Fréawine",
    "Freca",
    "Fredegar",
    "Frerin",
    "Frodo",
    "Frór",
    "Frumgar",
    "Fuinur",
    "Fundin",
    "Galadhon",
    "Galador",
    "Galadriel",
    "Galathil",
    "Galdor",
    "Galion",
    "Gálmód",
    "Gamil",
    "Gamling",
    "Gandalf",
    "Gárulf",
    "Gelmir",
    "Gerda",
    "Gerontius",
    "Gethron",
    "Ghân-buri-Ghân",
    "Gildis",
    "Gildor",
    "Gil-galad",
    "Gilly",
    "Gilmith",
    "Gilraen",
    "Gimilkhâd",
    "Gimilzagar",
    "Ar-Gimilzôr",
    "Gimli",
    "Girion",
    "Glaurung",
    "Gléowine",
    "Glirhuin",
    "Glóin",
    "Glóredhel",
    "Glorfindel",
    "Golasgil",
    "Goldberry",
    "Goldilocks",
    "Goldwine",
    "Golfimbul",
    "Gollum",
    "Gorbadoc",
    "Gorbag",
    "Gorbulas",
    "Gorhendad",
    "Gorlim",
    "Gormadoc",
    "Gothmog",
    "Gram",
    "Griffo",
    "Gríma",
    "Grimbeorn",
    "Grimbold",
    "Grishnákh",
    "Grithnir",
    "Gróin",
    "Grór",
    "Gruffo",
    "Guilin",
    "Gundabald",
    "Gundahad",
    "Gundahar",
    "Gundolpho",
    "Gundor",
    "Guthláf",
    "Gwaihir",
    "Gwindor",
    "Hador",
    "Halbarad",
    "Haldad",
    "Haldan",
    "Haldar",
    "Haldir",
    "Haleth",
    "Halfast",
    "Halfred",
    "Hallacar",
    "Hallas",
    "Hallatan",
    "Halmir",
    "Háma",
    "Hamfast",
    "Hamson",
    "Hanna",
    "Harding",
    "Hareth",
    "Harry",
    "Hasufel",
    "Hatholdir",
    "Helm",
    "Hending",
    "Herefara",
    "Heribald",
    "Herion",
    "Herubrand",
    "Herucalmo",
    "Herugar",
    "Herumor",
    "Hilda",
    "Hildibrand",
    "Hildifons",
    "Hildigard",
    "Hildigrim",
    "Hirgon",
    "Hiril",
    "Hirluin",
    "Hob",
    "Hobson",
    "Holfast",
    "Holman",
    "Horn",
    "Huan",
    "Hugo",
    "Hundar",
    "Hunthor",
    "Huor",
    "Húrin",
    "Hyarmendacil",
    "Îbal",
    "Ibûn",
    "Idril",
    "Ilberic",
    "Ilmarë",
    "Imin",
    "Imrahil",
    "Indis",
    "Ingwë",
    "Ingwion",
    "Inzilbêth",
    "Ioreth",
    "Iorlas",
    "Írildë",
    "Irimë",
    "Isembard",
    "Isembold",
    "Isengar",
    "Isengrim",
    "Isildur",
    "Isilmë",
    "Isilmo",
    "Isumbras",
    "Ivorwen",
    "Ivy",
    "Jago",
    "Jessamine",
    "Khamûl",
    "Khîm",
    "Kíli",
    "Lagduf",
    "Lalia",
    "Landroval",
    "Largo",
    "Laura",
    "Lavender",
    "Legolas",
    "Lenwë",
    "Léod",
    "Lily",
    "Linda",
    "Lindissë",
    "Lindórië",
    "Lobelia",
    "Longo",
    "Lóni",
    "Lorgan",
    "Lórien",
    "Lothíriel",
    "Lotho",
    "Lugdush",
    "Lúthien",
    "Mablung",
    "Madoc",
    "Maedhros",
    "Maeglin",
    "Farmer",
    "Maglor",
    "Mahtan",
    "Mairen",
    "Malach",
    "Malantur",
    "Mallor",
    "Malva",
    "Malvegil",
    "Mandos",
    "Manwë",
    "Manwendil",
    "Marach",
    "Marcho",
    "Mardil",
    "Marhari",
    "Marhwini",
    "Marigold",
    "Marmadas",
    "Marmadoc",
    "Marroc",
    "Mat",
    "Mauhúr",
    "May",
    "Melian",
    "Melilot",
    "Melkor",
    "Menegilda",
    "Meneldil",
    "Meneldor",
    "Tar-Meneldur",
    "Mentha",
    "Meriadoc",
    "Merimac",
    "Merimas",
    "Merry",
    "Milo",
    "Mîm",
    "Mimosa",
    "Minardil",
    "Minastan",
    "Tar-Minastir",
    "Minto",
    "Mirabella",
    "Míriel",
    "Tar-Míriel",
    "Mithrellas",
    "Moro",
    "Morwen",
    "Mosco",
    "Mungo",
    "Muzgash",
    "Myrtle",
    "Nahar",
    "Náin",
    "Náli",
    "Nár",
    "Narmacil",
    "Narvi",
    "Nellas",
    "Nerdanel",
    "Nessa",
    "Nessanië",
    "Nienna",
    "Niënor",
    "Nimloth",
    "Nina",
    "Nob",
    "Nolondil",
    "Nora",
    "Nori",
    "Númendil",
    "Núneth",
    "Odo",
    "Odovacar",
    "Óin",
    "Olo",
    "Olwë",
    "Ondoher",
    "Orchaldor",
    "Orgulas",
    "Ori",
    "Orodreth",
    "Oromë",
    "Oromendil",
    "Oropher",
    "Orophin",
    "Ossë",
    "Ostoher",
    "Otho",
    "Otto",
    "Paladin",
    "Tar-Palantir",
    "Pallando",
    "Pansy",
    "Pearl",
    "Pelendur",
    "Pengolodh",
    "Peony",
    "Peregrin",
    "Pervinca",
    "Ar-Pharazôn",
    "Pimpernel",
    "Pippin",
    "Polo",
    "Ponto",
    "Poppy",
    "Porto",
    "Posco",
    "Primrose",
    "Primula",
    "Prisca",
    "Radagast",
    "Radbug",
    "Reginard",
    "Rían",
    "Roäc",
    "Robin",
    "Rollo",
    "Rómendacil",
    "Rorimac",
    "Rosa",
    "Rosamunda",
    "Rose",
    "Rosie",
    "Rowan",
    "Rowlie",
    "Ruby",
    "Rudibert",
    "Rudigar",
    "Rudolph",
    "Rufus",
    "Rúmil",
    "Sadoc",
    "Sador",
    "Saeros",
    "Ar-Sakalthôr",
    "Salmar",
    "Salvia",
    "Samwise",
    "Sancho",
    "Sapphira",
    "Saradas",
    "Saradoc",
    "Saruman",
    "Sauron",
    "Seredic",
    "Shadowfax",
    "Shagrat",
    "Shelob",
    "Sigismond",
    "Silmariën",
    "Siriondil",
    "Smaug",
    "Snaga",
    "Soronto",
    "Strider",
    "Stybba",
    "Tar-Súrion",
    "Tanta",
    "Tarannon",
    "Tarcil",
    "Targon",
    "Tarondor",
    "Tata",
    "Ted",
    "Telchar",
    "Tar-Telemmaitë",
    "Telemnar",
    "Tar-Telperiën",
    "Telumehtar",
    "Thengel",
    "Theobald",
    "Théoden",
    "Théodred",
    "Thingol",
    "Thorin",
    "Thorondir",
    "Thorondor",
    "Thráin",
    "Thranduil",
    "Thrór",
    "Thuringwethil",
    "Tilion",
    "Tindómiel",
    "Tobold",
    "Togo",
    "Tolman",
    "Tom",
    "Tosto",
    "Treebeard",
    "Tulkas",
    "Tuor",
    "Turgon",
    "Túrin",
    "Uffo",
    "Ufthak",
    "Uglúk",
    "Uinen",
    "Ulbar",
    "Uldor",
    "Ulfang",
    "Ulfast",
    "Ulmo",
    "Ulrad",
    "Ulwarth",
    "Ungoliant",
    "Vairë",
    "Valacar",
    "Valandil",
    "Vána",
    "Tar-Vanimeldë",
    "Varda",
    "Vardamir",
    "Vardilmë",
    "Vëantur",
    "Vidugavia",
    "Vidumavi",
    "Vigo",
    "Vorondil",
    "Voronwë",
    "Walda",
    "Wilcome",
    "Wilibald",
    "Wilimar",
    "Will",
    "Willie",
    "Wiseman",
    "Wulf",
    "Yavanna",
    "Yávien",
    "Zamîn",
    "Zimrahin",
    "Ar-Zimrathôn",
  ];

  this.right = [
    "Bolger",
    "Took",
    "Chubb",
    "Brandybuck",
    "Hornblower",
    "Roper",
    "Baggins",
    "Elessar",
    "Butterbur",
    "Boffin",
    "Cúthalion",
    "Goodchild",
    "Erchamion",
    "Gardner",
    "Ferny",
    "Bracegirdle",
    "Proudfoot",
    "Cotton",
    "Sackville",
    "Goodbody",
    "Diggle",
    "Burrows",
    "Banks",
    "Fairbairn",
    "Greenhand",
    "Chubb-Baggins",
    "Lumpkin",
    "Took",
    "Hildeson",
    "Zirak",
    "Inglorion",
    "Brownlock",
    "Wormtongue",
    "Lórindol",
    "Gamgee",
    "Goldworthy",
    "Goatleaf",
    "Hammerhand",
    "Gammidge",
    "Hayward",
    "Goodenough",
    "Clayhanger",
    "Grubb",
    "Brown",
    "Sackville-Baggins",
    "Maggot",
    "Headstrong",
    "Voronwë",
    "Heathertoes",
    "Goold",
    "Bunce",
    "Therindë",
    "Steelsheen",
    "Lightfoot",
    "Baggins",
    "Baggins",
    "Smallburrow",
    "Appledore",
    "Brockhouse",
    "Sandyman",
    "Oakenshield",
    "Stonehelm",
    "Bombadil",
    "Turambar",
    "Whitfoot",
    "Gamwich",
  ];

  this.adjectives = this.left;
  this.surnames = this.right;
}

/**
 * @summary Generates a random docker style name.
 *
 * @param {boolean|number} [appendNumber] - Adds a random number to the resulting docker name.
 * @returns {string}
 */
DockerNames.prototype.getRandomName = function (appendNumber) {
  var rand =
    appendNumber === true || appendNumber > 0
      ? String(Math.floor(Math.random() * 9 + 1))
      : "";
  return generateName(this.left, this.right) + rand;
};

export default new DockerNames();
