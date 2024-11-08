type Verb = {
  infinitiv: string;
  presens: string;
  preteritum: string;
  perfektum: string;
  meaning: string;
};

const A: Verb[] = [
  {
    infinitiv: "å adlyde",
    presens: "adlyder",
    preteritum: "adlød",
    perfektum: "har adlydt",
    meaning: "Obey",
  },
  {
    infinitiv: "å anbefale",
    presens: "anbefaler",
    preteritum: "anbefalte",
    perfektum: "har anbefalt",
    meaning: "Recommend",
  },
  {
    infinitiv: "å ansette",
    presens: "ansetter",
    preteritum: "ansatte",
    perfektum: "har ansatt",
    meaning: "Employ",
  },
  {
    infinitiv: "å arbeide",
    presens: "arbeider",
    preteritum: "arbeidet",
    perfektum: "har arbeidet",
    meaning: "Work",
  },
  {
    infinitiv: "å avslå",
    presens: "avslår",
    preteritum: "avslo",
    perfektum: "har avslått",
    meaning: "Repulse",
  },
  {
    infinitiv: "å avstå",
    presens: "avstår",
    preteritum: "avstod",
    perfektum: "har avstatt",

    meaning: "Cede",
  },
];

const B: Verb[] = [
  {
    infinitiv: "å bade",
    presens: "bader",
    preteritum: "badet",
    perfektum: "har badet",
    meaning: "Bath",
  },
  {
    infinitiv: "å banke",
    presens: "banker",
    preteritum: "banket",
    perfektum: "har banket",

    meaning: "Beat, Hit",
  },
  {
    infinitiv: "å barbere",
    presens: "barberer",
    preteritum: "barberte",
    perfektum: "har barbert",

    meaning: "Shave",
  },
  {
    infinitiv: "å be",
    presens: "ber",
    preteritum: "ba(d)",
    perfektum: "har bedt",
    meaning: "Ask",
  },
  {
    infinitiv: "å bearbeide",
    presens: "bearbeider",
    preteritum: "bearbeidet",
    perfektum: "har bearbeidet",

    meaning: "Adapt",
  },
  {
    infinitiv: "å bedra",
    presens: "bedrar",
    preteritum: "bedro",
    perfektum: "har bedratt",

    meaning: "Cheat",
  },
  {
    infinitiv: "å bedøve",
    presens: "bedøver",
    preteritum: "bedøvet",
    perfektum: "har bedøvet",

    meaning: "Drug",
  },
  {
    infinitiv: "å bedøve",
    presens: "bedøver",
    preteritum: "bedøvde",
    perfektum: "har bedøvd",

    meaning: "Anaesthetise",
  },
  {
    infinitiv: "å begynne",
    presens: "begynner",
    preteritum: "begynte",
    perfektum: "har begynt",

    meaning: "Begin",
  },
  {
    infinitiv: "å behandle",
    presens: "behandler",
    preteritum: "behandlet",
    perfektum: "har behandlet",

    meaning: "Handle",
  },
  {
    infinitiv: "å beite",
    presens: "beiter",
    preteritum: "beitet",
    perfektum: "har beitet",

    meaning: "Graze",
  },
  {
    infinitiv: "å beskrive",
    presens: "beskriver",
    preteritum: "beskrev",
    perfektum: "har beskrevet",
    meaning: "Describe",
  },
  {
    infinitiv: "å bestemme",
    presens: "bestemmer",
    preteritum: "bestemte",
    perfektum: "har bestemt",

    meaning: "Decide",
  },
  {
    infinitiv: "å beslå",
    presens: "beslår",
    preteritum: "beslo",
    perfektum: "har beslått",

    meaning: "Mount",
  },
  {
    infinitiv: "å bestille",
    presens: "bestiller",
    preteritum: "bestilte",
    perfektum: "har bestilt",

    meaning: "Do, Order",
  },
  {
    infinitiv: "å bestå",
    presens: "består",
    preteritum: "besto(d)",
    perfektum: "har bestått",

    meaning: "Pass (as in exam)",
  },
  {
    infinitiv: "å besøke",
    presens: "besøker",
    preteritum: "besøkte",
    perfektum: "har besøkt",

    meaning: "Visit",
  },
  {
    infinitiv: "å betale",
    presens: "betaler",
    preteritum: "betalte",
    perfektum: "har betalt",

    meaning: "Pay",
  },
  {
    infinitiv: "å bety",
    presens: "betyr",
    preteritum: "betydde",
    perfektum: "har betydd",

    meaning: "Mean, Signify",
  },
  {
    infinitiv: "å binde",
    presens: "binder",
    preteritum: "bandt",
    perfektum: "har bundet",

    meaning: "Bind",
  },
  {
    infinitiv: "å bite",
    presens: "biter",
    preteritum: "betalte",
    perfektum: "har bit",

    meaning: "Bite",
  },
  {
    infinitiv: "å bjeffe",
    presens: "bjeffer",
    preteritum: "bjeffet",
    perfektum: "har bjeffet",

    meaning: "Bark, Yap",
  },
  {
    infinitiv: "å blande",
    presens: "blander",
    preteritum: "blandet",
    perfektum: "har blandet",

    meaning: "Blend, Mix",
  },
  {
    infinitiv: "å bli",
    presens: "blir",
    preteritum: "ble",
    perfektum: "har blitt",
    meaning: "Be",
  },
  {
    infinitiv: "å blø",
    presens: "blør",
    preteritum: "blødde",
    perfektum: "har blødd",
    meaning: "Bleed",
  },
  {
    infinitiv: "å blåse",
    presens: "blåser",
    preteritum: "blåste",
    perfektum: "har blåst",

    meaning: "Blow",
  },
  {
    infinitiv: "å bo",
    presens: "bor",
    preteritum: "bordde",
    perfektum: "har bordd",
    meaning: "Live, Reside",
  },
  {
    infinitiv: "å brekke",
    presens: "brekker",
    preteritum: "brakk",
    perfektum: "har brukket",

    meaning: "Break",
  },
  {
    infinitiv: "å brenne",
    presens: "brenner",
    preteritum: "brente",
    perfektum: "har brent",

    meaning: "Burn",
  },
  {
    infinitiv: "å bringe",
    presens: "bringer",
    preteritum: "brakte",
    perfektum: "har brakt",

    meaning: "Bring",
  },
  {
    infinitiv: "å briste",
    presens: "brister",
    preteritum: "brast",
    perfektum: "har bristet",

    meaning: "Burst",
  },
  {
    infinitiv: "å bruke",
    presens: "bruker",
    preteritum: "brukte",
    perfektum: "har brukt",
    meaning: "Use",
  },
  {
    infinitiv: "å bry",
    presens: "bryr",
    preteritum: "brydde",
    perfektum: "har brydd",

    meaning: "Bother",
  },
  {
    infinitiv: "å bryte",
    presens: "bryter",
    preteritum: "brøt",
    perfektum: "har brutt",

    meaning: "Violate, Break",
  },
  {
    infinitiv: "å burde",
    presens: "bør",
    preteritum: "burde",
    perfektum: "har burdet",

    meaning: "Ought to",
  },
  {
    infinitiv: "å by",
    presens: "byr",
    preteritum: "bød",
    perfektum: "har budt",

    meaning: "Offer, Bid",
  },
  {
    infinitiv: "å bygge",
    presens: "bygger",
    preteritum: "bygde",
    perfektum: "har bygd",

    meaning: "Build",
  },
  {
    infinitiv: "å bytte",
    presens: "bytter",
    preteritum: "byttet",
    perfektum: "har byttet",

    meaning: "Change, Exchange",
  },
  {
    infinitiv: "å bære",
    presens: "bærer",
    preteritum: "bar",
    perfektum: "har båret",

    meaning: "Bear, Endure",
  },
];

const C: Verb[] = [
  {
    infinitiv: "",
    presens: "",
    preteritum: "",
    perfektum: "",

    meaning: "",
  },
];

const D: Verb[] = [
  {
    infinitiv: "å danse",
    presens: "danser",
    preteritum: "danset",
    perfektum: "har danset",
    meaning: "Dance",
  },
  {
    infinitiv: "å dele",
    presens: "deler",
    preteritum: "delte",
    perfektum: "har delt",

    meaning: "Divide",
  },
  {
    infinitiv: "å demokratisere",
    presens: "demokratiserer",
    preteritum: "demokratiserte",
    perfektum: "har demokratisert",

    meaning: "Democratize",
  },
  {
    infinitiv: "å diskutere",
    presens: "diskuterer",
    preteritum: "diskuterte",
    perfektum: "har diskutert",

    meaning: "Discuss",
  },
  {
    infinitiv: "å dra",
    presens: "drar",
    preteritum: "drog",
    perfektum: "har dradd/dratt",

    meaning: "Go / Drag",
  },
  {
    infinitiv: "å drikke",
    presens: "drikker",
    preteritum: "drakk",
    perfektum: "har drukket",
    meaning: "Drink",
  },
  {
    infinitiv: "å drive",
    presens: "driver",
    preteritum: "drev",
    perfektum: "har drevet",

    meaning: "Drive, Operate",
  },
  {
    infinitiv: "å drømme",
    presens: "drømmer",
    preteritum: "drømte",
    perfektum: "har drømt",

    meaning: "Dream",
  },
  {
    infinitiv: "å dusje",
    presens: "dusjer",
    preteritum: "dusjet",
    perfektum: "har dusjet",

    meaning: "Shower",
  },
  {
    infinitiv: "å dyrke",
    presens: "dyrker",
    preteritum: "dyrket",
    perfektum: "har dyrket",

    meaning: "Cultivate",
  },
  {
    infinitiv: "å dytte",
    presens: "dytter",
    preteritum: "dyttet",
    perfektum: "har dyttet",
    meaning: "Push",
  },
];

const E: Verb[] = [
  {
    infinitiv: "å eie",
    presens: "eier",
    preteritum: "eide",
    perfektum: "har eid",

    meaning: "Possess",
  },
  {
    infinitiv: "å ese",
    presens: "eser",
    preteritum: "este",
    perfektum: "har est",

    meaning: "Rise",
  },
  {
    infinitiv: "å ete",
    presens: "eter",
    preteritum: "åt",
    perfektum: "har ett",

    meaning: "Eat Greedily",
  },
  {
    infinitiv: "å evangelisere",
    presens: "evangeliserer",
    preteritum: "evangeliserte",
    perfektum: "har evangelisert",

    meaning: "Evangelize",
  },
];

const F: Verb[] = [
  {
    infinitiv: "å falle",
    presens: "faller",
    preteritum: "falt",
    perfektum: "har falt",

    meaning: "Fall",
  },
  {
    infinitiv: "å feire",
    presens: "feirer",
    preteritum: "feiret",
    perfektum: "har feiret",

    meaning: "Celebrate",
  },
  {
    infinitiv: "å finne",
    presens: "finner",
    preteritum: "fant",
    perfektum: "har funnet",
    meaning: "Find",
  },
  {
    infinitiv: "å fiske",
    presens: "fisker",
    preteritum: "fisket",
    perfektum: "har fisket",

    meaning: "Fish",
  },
  {
    infinitiv: "å fleipe",
    presens: "fleiper",
    preteritum: "fleipte",
    perfektum: "har fleipt",

    meaning: "Joke",
  },
  {
    infinitiv: "å fly",
    presens: "flyr",
    preteritum: "fløy",
    perfektum: "har fløyet",

    meaning: "Fly",
  },
  {
    infinitiv: "å flykte",
    presens: "flykter",
    preteritum: "flyktet",
    perfektum: "har flyktet",

    meaning: "Flee",
  },
  {
    infinitiv: "å flyte",
    presens: "flyter",
    preteritum: "fløt",
    perfektum: "har flytt",

    meaning: "Float",
  },
  {
    infinitiv: "flytte",
    presens: "flytter",
    preteritum: "flyttet",
    perfektum: "har flyttet",

    meaning: "Move",
  },
  {
    infinitiv: "å forene",
    presens: "forener",
    preteritum: "forente",
    perfektum: "har forent",

    meaning: "Unite",
  },
  {
    infinitiv: "å foreslå",
    presens: "foreslår",
    preteritum: "foreslo",
    perfektum: "har foreslått",

    meaning: "Suggest",
  },
  {
    infinitiv: "å foreta",
    presens: "foretar",
    preteritum: "foretok",
    perfektum: "har foretatt",

    meaning: "Undertake",
  },
  {
    infinitiv: "å forkjøle seg",
    presens: "forkjøler seg",
    preteritum: "forkjølet seg",
    perfektum: "har forkjølt seg",

    meaning: "Catch a Cold",
  },
  {
    infinitiv: "å forklare",
    presens: "forklarer",
    preteritum: "forklarte",
    perfektum: "har forklart",

    meaning: "Explain",
  },
  {
    infinitiv: "å forlate",
    presens: "forlater",
    preteritum: "forlot",
    perfektum: "har forlatt",

    meaning: "Forgive",
  },
  {
    infinitiv: "å fornye",
    presens: "fornyer",
    preteritum: "fornyet",
    perfektum: "har fornyet",

    meaning: "Renew",
  },
  {
    infinitiv: "å forstå",
    presens: "forstår",
    preteritum: "forstod",
    perfektum: "har forstått",

    meaning: "Understand",
  },
  {
    infinitiv: "å forsvinne",
    presens: "forsvinner",
    preteritum: "forsvant",
    perfektum: "har forsvunnet",

    meaning: "Disappear",
  },
  {
    infinitiv: "å fortelle",
    presens: "forteller",
    preteritum: "fortalte",
    perfektum: "har fortalt",

    meaning: "Tell",
  },
  {
    infinitiv: "å fortsette",
    presens: "fortsetter",
    preteritum: "fortsatte",
    perfektum: "har fortsatt",

    meaning: "Continue",
  },
  {
    infinitiv: "å fosse",
    presens: "fosser",
    preteritum: "fosset",
    perfektum: "har fosset",

    meaning: "Gush",
  },
  {
    infinitiv: "å fotografere",
    presens: "fotograferer",
    preteritum: "fotograferte",
    perfektum: "har fotografert",

    meaning: "Photograph",
  },
  {
    infinitiv: "å fryse",
    presens: "fryser",
    preteritum: "frøs",
    perfektum: "har frosset",

    meaning: "Freeze",
  },
  {
    infinitiv: "å fylle",
    presens: "fyller",
    preteritum: "fylte",
    perfektum: "har fylt",

    meaning: "Fill",
  },
  {
    infinitiv: "å føde",
    presens: "føder",
    preteritum: "fødte",
    perfektum: "har født",

    meaning: "Bear, Give birth to",
  },
  {
    infinitiv: "å føle seg",
    presens: "føler seg",
    preteritum: "følte seg",
    perfektum: "har følt seg",

    meaning: "Be, Feel",
  },
  {
    infinitiv: "å følge",
    presens: "følger",
    preteritum: "fulgte",
    perfektum: "har fulgt",
    meaning: "Follow",
  },
  {
    infinitiv: "å føne",
    presens: "føner",
    preteritum: "fønte",
    perfektum: "har fønt",

    meaning: "Blow Dry",
  },
  {
    infinitiv: "å få",
    presens: "får",
    preteritum: "fikk",
    perfektum: "har fått",
    meaning: "Get",
  },
];

const G: Verb[] = [
  {
    infinitiv: "å gale",
    presens: "galer",
    preteritum: "gol",
    perfektum: "har galt",

    meaning: "Crow",
  },
  {
    infinitiv: "å gape",
    presens: "gaper",
    preteritum: "gapte",
    perfektum: "har gapt",

    meaning: "Gape",
  },
  {
    infinitiv: "å gi",
    presens: "gir",
    preteritum: "gav",
    perfektum: "har gitt",
    meaning: "Give",
  },
  {
    infinitiv: "å gidde",
    presens: "gidder",
    preteritum: "gadd",
    perfektum: "har giddet",

    meaning: "Take the trouble",
  },
  {
    infinitiv: "å gifte",
    presens: "gifter",
    preteritum: "giftet",
    perfektum: "har giftet",

    meaning: "Marry",
  },
  {
    infinitiv: "å gjelde",
    presens: "gjelder",
    preteritum: "gjaldt",
    perfektum: "har gjeldt",

    meaning: "To be worth",
  },
  {
    infinitiv: "å gjenta",
    presens: "gjentar",
    preteritum: "gjentok",
    perfektum: "har gjentatt",

    meaning: "Repeat",
  },
  {
    infinitiv: "å gjette",
    presens: "gjetter",
    preteritum: "gjettet",
    perfektum: "har gjettet",

    meaning: "Guess",
  },
  {
    infinitiv: "å gjøre",
    presens: "gjør",
    preteritum: "gjorde",
    perfektum: "har gjort",
    meaning: "Do",
  },
  {
    infinitiv: "å glede seg",
    presens: "gleder seg",
    preteritum: "gledet seg",
    perfektum: "har gledet seg",

    meaning: "Look forward",
  },
  {
    infinitiv: "å glemme",
    presens: "glemmer",
    preteritum: "glemte",
    perfektum: "har glemt",
    meaning: "Forget",
  },
  {
    infinitiv: "å gli",
    presens: "glir",
    preteritum: "glei/gled",
    perfektum: "har glidd",

    meaning: "Slide, Glide",
  },
  {
    infinitiv: "å gnage",
    presens: "gnager",
    preteritum: "gnog",
    perfektum: "har gnaget",

    meaning: "Gnaw",
  },
  {
    infinitiv: "å gni",
    presens: "gnir",
    preteritum: "gned",
    perfektum: "har gnidd",

    meaning: "Rub",
  },
  {
    infinitiv: "å gratulere",
    presens: "gratulerer",
    preteritum: "gratulerte",
    perfektum: "har gratulert",

    meaning: "Congratulate",
  },
  {
    infinitiv: "å grave",
    presens: "graver",
    preteritum: "grov",
    perfektum: "har gravd",

    meaning: "Dig",
  },
  {
    infinitiv: "å gre",
    presens: "grer",
    preteritum: "gredde",
    perfektum: "har gredd",
    meaning: "Comb",
  },
  {
    infinitiv: "å greie",
    presens: "greier",
    preteritum: "greide",
    perfektum: "har greid",

    meaning: "Manage, Cope with",
  },
  {
    infinitiv: "å grense",
    presens: "grenser",
    preteritum: "grenset",
    perfektum: "har grenset",

    meaning: "Border",
  },
  {
    infinitiv: "å grille",
    presens: "griller",
    preteritum: "grillet",
    perfektum: "har grillet",

    meaning: "Grill",
  },
  {
    infinitiv: "å grine",
    presens: "griner",
    preteritum: "grein",
    perfektum: "har grint",

    meaning: "Fret",
  },
  {
    infinitiv: "å gripe",
    presens: "griper",
    preteritum: "grep",
    perfektum: "har grepet",

    meaning: "Grip",
  },
  {
    infinitiv: "å grue seg",
    presens: "gruer seg",
    preteritum: "grudde seg",
    perfektum: "har gruet",

    meaning: "Dread",
  },
  {
    infinitiv: "å gråte",
    presens: "gråter",
    preteritum: "gråt",
    perfektum: "har grått",

    meaning: "Cry",
  },
  {
    infinitiv: "å gyse",
    presens: "gyser",
    preteritum: "gjøs",
    perfektum: "har gyst",

    meaning: "Shudder",
  },
  {
    infinitiv: "å gyte",
    presens: "gyter",
    preteritum: "gjøt",
    perfektum: "har gytt",

    meaning: "Spawn",
  },
  {
    infinitiv: "å gyve",
    presens: "gyver",
    preteritum: "gjøv",
    perfektum: "har gjøvet",

    meaning: "Fly",
  },
  {
    infinitiv: "å gå",
    presens: "går",
    preteritum: "gikk",
    perfektum: "har gått",
    meaning: "Go, Walk",
  },
];

const H: Verb[] = [
  {
    infinitiv: "å ha",
    presens: "har",
    preteritum: "hadde",
    perfektum: "har hatt",
    meaning: "Have",
  },
  {
    infinitiv: "å handle",
    presens: "handler",
    preteritum: "handlet",
    perfektum: "har handlet",

    meaning: "Deal, Act",
  },
  {
    infinitiv: "å hende",
    presens: "hender",
    preteritum: "hendte",
    perfektum: "har hendt",

    meaning: "Occur",
  },
  {
    infinitiv: "å henge",
    presens: "henger",
    preteritum: "hang/hengte",
    perfektum: "har hengt",

    meaning: "Hang",
  },
  {
    infinitiv: "å hente",
    presens: "henter",
    preteritum: "hentet",
    perfektum: "har hentet",
    meaning: "Get",
  },
  {
    infinitiv: "å hete",
    presens: "heter",
    preteritum: "het",
    perfektum: "har hett",

    meaning: "Name",
  },
  {
    infinitiv: "å hilse",
    presens: "hilser",
    preteritum: "hilste",
    perfektum: "har hilst",

    meaning: "Greet",
  },
  {
    infinitiv: "å hindre",
    presens: "hindrer",
    preteritum: "hindret",
    perfektum: "har hindret",

    meaning: "Prevent",
  },
  {
    infinitiv: "å hive",
    presens: "hiver",
    preteritum: "hev",
    perfektum: "har hevet",

    meaning: "Heave",
  },
  {
    infinitiv: "å hjelpe",
    presens: "hjelper",
    preteritum: "hjalp",
    perfektum: "har hjulpet",
    meaning: "Help",
  },
  {
    infinitiv: "å holde",
    presens: "holder",
    preteritum: "holdt",
    perfektum: "har holdt",

    meaning: "Hold",
  },
  {
    infinitiv: "å hogge",
    presens: "hogger",
    preteritum: "hogg",
    perfektum: "har hogd",

    meaning: "Cut, Chop",
  },
  {
    infinitiv: "å hoppe",
    presens: "hopper",
    preteritum: "hoppet",
    perfektum: "har hoppet",

    meaning: "Jump",
  },
  {
    infinitiv: "å hoste",
    presens: "hoster",
    preteritum: "hostet",
    perfektum: "har hostet",

    meaning: "Cough",
  },
  {
    infinitiv: "å huske",
    presens: "husker",
    preteritum: "husket",
    perfektum: "har husket",

    meaning: "Remember",
  },
  {
    infinitiv: "å hvile",
    presens: "hviler",
    preteritum: "hvilte",
    perfektum: "har hvilt",

    meaning: "Rest",
  },
  {
    infinitiv: "å hygge",
    presens: "hygger",
    preteritum: "hygget",
    perfektum: "har hygget",

    meaning: "Comfort",
  },
  {
    infinitiv: "å høre",
    presens: "hører",
    preteritum: "hørte",
    perfektum: "har hørt",
    meaning: "Hear",
  },
  {
    infinitiv: "å høste",
    presens: "høster",
    preteritum: "høstet",
    perfektum: "har høstet",

    meaning: "Harvest",
  },
  {
    infinitiv: "å håpe",
    presens: "håper",
    preteritum: "håpet",
    perfektum: "har håpet",

    meaning: "Hope",
  },
];

const I: Verb[] = [
  {
    infinitiv: "å invitere",
    presens: "inviterer",
    preteritum: "inviterte",
    perfektum: "har invitert",

    meaning: "Invite",
  },
];

const J: Verb[] = [
  {
    infinitiv: "å jobbe",
    presens: "jobber",
    preteritum: "jobbet",
    perfektum: "har jobbet",

    meaning: "Work",
  },
];

const K: Verb[] = [
  {
    infinitiv: "å kalkulere",
    presens: "kalkulerer",
    preteritum: "kalkulerte",
    perfektum: "har kalkulert",

    meaning: "Calculate",
  },
  {
    infinitiv: "å kaste",
    presens: "kaster",
    preteritum: "kastet",
    perfektum: "har kastet",

    meaning: "Cast",
  },
  {
    infinitiv: "å kjenne",
    presens: "kjenner",
    preteritum: "kjente",
    perfektum: "har kjent",

    meaning: "Feel",
  },
  {
    infinitiv: "å kjøpe",
    presens: "kjøper",
    preteritum: "kjøpte",
    perfektum: "har kjøpt",
    meaning: "Buy",
  },
  {
    infinitiv: "å kjøre",
    presens: "kjører",
    preteritum: "kjørte",
    perfektum: "har kjørt",
    meaning: "Drive",
  },
  {
    infinitiv: "å klappe",
    presens: "klapper",
    preteritum: "klappet",
    perfektum: "har klappet",

    meaning: "Clap",
  },
  {
    infinitiv: "å klare",
    presens: "klarer",
    preteritum: "klarte",
    perfektum: "har klart",
    meaning: "Manage",
  },
  {
    infinitiv: "å kle",
    presens: "kler",
    preteritum: "kledde",
    perfektum: "har kledd",
    meaning: "Dress, Clothe",
  },
  {
    infinitiv: "å klinge",
    presens: "klinger",
    preteritum: "klingte",
    perfektum: "har klingt",

    meaning: "Sound",
  },
  {
    infinitiv: "å klippe",
    presens: "klipper",
    preteritum: "klipte",
    perfektum: "har klipt",
    meaning: "Cut, Clip",
  },
  {
    infinitiv: "å klype",
    presens: "klyper",
    preteritum: "kløp",
    perfektum: "har kløpet",

    meaning: "Pinch",
  },
  {
    infinitiv: "å klyve",
    presens: "klyver",
    preteritum: "kløv",
    perfektum: "har kløvet",

    meaning: "Climb",
  },
  {
    infinitiv: "å knekke",
    presens: "knekker",
    preteritum: "knakk",
    perfektum: "har knekt",

    meaning: "Crack",
  },
  {
    infinitiv: "å knipe",
    presens: "kniper",
    preteritum: "knep",
    perfektum: "har knepet",

    meaning: "Pinch",
  },
  {
    infinitiv: "å knyte",
    presens: "knyter",
    preteritum: "knytet/knøt",
    perfektum: "har knytet/knytt",

    meaning: "Tie",
  },
  {
    infinitiv: "å koke",
    presens: "koker",
    preteritum: "kokte",
    perfektum: "har kokt",
    meaning: "Cook",
  },
  {
    infinitiv: "å komme",
    presens: "kommer",
    preteritum: "kom",
    perfektum: "har kommet",
    meaning: "Come",
  },
  {
    infinitiv: "å kontakte",
    presens: "kontakter",
    preteritum: "kontakterte",
    perfektum: "har kontaktert",

    meaning: "Contact",
  },
  {
    infinitiv: "å kontrollere",
    presens: "kontrollerer",
    preteritum: "kontrollerte",
    perfektum: "har kontrollert",

    meaning: "Control",
  },
  {
    infinitiv: "å kopiere",
    presens: "kopierer",
    preteritum: "kopierte",
    perfektum: "har kopiert",

    meaning: "Copy",
  },
  {
    infinitiv: "å korrigere",
    presens: "korrigerer",
    preteritum: "korrigerte",
    perfektum: "har korrigert",

    meaning: "Correct",
  },
  {
    infinitiv: "å kose seg",
    presens: "koser seg",
    preteritum: "koste seg",
    perfektum: "har kost seg",

    meaning: "Enjoy yourself",
  },
  {
    infinitiv: "å koste",
    presens: "koster",
    preteritum: "kostet",
    perfektum: "har kostet",

    meaning: "Cost",
  },
  {
    infinitiv: "å kunne",
    presens: "kan",
    preteritum: "kunne",
    perfektum: "har kunnet",

    meaning: "Could",
  },
  {
    infinitiv: "å krype",
    presens: "kryper",
    preteritum: "krøp",
    perfektum: "har krøpet",

    meaning: "Creep",
  },
  {
    infinitiv: "å kvele",
    presens: "kveler",
    preteritum: "kvalte",
    perfektum: "har kvalt",

    meaning: "Choke, Strangle",
  },
];

const L: Verb[] = [
  {
    infinitiv: "å la",
    presens: "lar",
    preteritum: "lot",
    perfektum: "har latt",

    meaning: "Let, Allow",
  },
  {
    infinitiv: "å lage",
    presens: "lager",
    preteritum: "laget",
    perfektum: "har laget",

    meaning: "Prepare",
  },
  {
    infinitiv: "å le",
    presens: "ler",
    preteritum: "lot",
    perfektum: "har ledd",
    meaning: "Laugh",
  },
  {
    infinitiv: "å legge",
    presens: "legger",
    preteritum: "la",
    perfektum: "har lagt",

    meaning: "Lay",
  },
  {
    infinitiv: "å leie",
    presens: "leier",
    preteritum: "leide",
    perfektum: "har leid",

    meaning: "Hire",
  },
  {
    infinitiv: "å leke",
    presens: "leker",
    preteritum: "lekte",
    perfektum: "har lekt",
    meaning: "Play",
  },
  {
    infinitiv: "å lese",
    presens: "leser",
    preteritum: "leste",
    perfektum: "har lest",

    meaning: "Read",
  },
  {
    infinitiv: "å lete",
    presens: "leter",
    preteritum: "lette",
    perfektum: "har lett",
    meaning: "Search",
  },
  {
    infinitiv: "å leve",
    presens: "lever",
    preteritum: "levde",
    perfektum: "har levd",

    meaning: "Live, Be alive",
  },
  {
    infinitiv: "å levere",
    presens: "leverer",
    preteritum: "leverte",
    perfektum: "har levert",

    meaning: "Give up",
  },
  {
    infinitiv: "å lide",
    presens: "lider",
    preteritum: "led",
    perfektum: "har lidd",

    meaning: "Suffer",
  },
  {
    infinitiv: "å ligge",
    presens: "ligger",
    preteritum: "lå",
    perfektum: "har ligget",

    meaning: "Lie",
  },
  {
    infinitiv: "å like",
    presens: "liker",
    preteritum: "likte",
    perfektum: "har likt",

    meaning: "Like",
  },
  {
    infinitiv: "å love",
    presens: "lover",
    preteritum: "lovet",
    perfektum: "har lovet",

    meaning: "Promise",
  },
  {
    infinitiv: "å lufte",
    presens: "lufter",
    preteritum: "luftet",
    perfektum: "har luftet",

    meaning: "Air",
  },
  {
    infinitiv: "å lukte",
    presens: "lukter",
    preteritum: "luktet",
    perfektum: "har luktet",

    meaning: "Smell",
  },
  {
    infinitiv: "å lyde",
    presens: "lyder",
    preteritum: "lød",
    perfektum: "har lydt",

    meaning: "Sound",
  },
  {
    infinitiv: "å lyge",
    presens: "lyger",
    preteritum: "løy",
    perfektum: "har løyet",

    meaning: "Tell a lie",
  },
  {
    infinitiv: "å lytte",
    presens: "lytter",
    preteritum: "lyttet",
    perfektum: "har lyttet",

    meaning: "Listen",
  },
  {
    infinitiv: "å lyve",
    presens: "lyver",
    preteritum: "løy",
    perfektum: "har løyet",

    meaning: "Tell a lie",
  },
  {
    infinitiv: "å lære",
    presens: "lærer",
    preteritum: "lærte",
    perfektum: "har lært",

    meaning: "Teach, Learn",
  },
  {
    infinitiv: "å løfte",
    presens: "løfter",
    preteritum: "løftet",
    perfektum: "har løftet",

    meaning: "Lift",
  },
  {
    infinitiv: "å løpe",
    presens: "løper",
    preteritum: "løp",
    perfektum: "har løpt",

    meaning: "Run",
  },

  {
    infinitiv: "å løse",
    presens: "løser",
    preteritum: "løste",
    perfektum: "har løst",
    meaning: "Loosen",
  },
  {
    infinitiv: "å låne",
    presens: "låner",
    preteritum: "lånte",
    perfektum: "har lånt",

    meaning: "Loan",
  },
  {
    infinitiv: "å låse",
    presens: "låser",
    preteritum: "låste",
    perfektum: "har låst",

    meaning: "Lock",
  },
];

const M: Verb[] = [
  {
    infinitiv: "å mase",
    presens: "maser",
    preteritum: "maste",
    perfektum: "har mast",
    meaning: "Bother",
  },
  {
    infinitiv: "å merke",
    presens: "merker",
    preteritum: "merket",
    perfektum: "har merket",

    meaning: "Mark",
  },
  {
    infinitiv: "å minke",
    presens: "minker",
    preteritum: "minket",
    perfektum: "har minket",

    meaning: "Decrease",
  },
  {
    infinitiv: "å miste",
    presens: "mister",
    preteritum: "mistet",
    perfektum: "har mistet",

    meaning: "Lose",
  },
  {
    infinitiv: "å møte",
    presens: "møter",
    preteritum: "møtte",
    perfektum: "har møtt",

    meaning: "Meet",
  },
  {
    infinitiv: "å måle",
    presens: "måler",
    preteritum: "målte",
    perfektum: "har målt",

    meaning: "Measure",
  },
];
const N: Verb[] = [
  {
    infinitiv: "å neke",
    presens: "neker",
    preteritum: "nekte",
    perfektum: "har nekt",

    meaning: "",
  },
  {
    infinitiv: "å nekte",
    presens: "nekter",
    preteritum: "nektet",
    perfektum: "har nektet",

    meaning: "Deny",
  },
  {
    infinitiv: "å nyse",
    presens: "nyser",
    preteritum: "nøs",
    perfektum: "har nyst",

    meaning: "Sneeze",
  },
  {
    infinitiv: "å nyte",
    presens: "nyter",
    preteritum: "nøt",
    perfektum: "har nytt",

    meaning: "",
  },
];
const O: Verb[] = [
  {
    infinitiv: "å omarbeide",
    presens: "omarbeider",
    preteritum: "omarbeidet",
    perfektum: "har omarbeidet",

    meaning: "Revise",
  },
  {
    infinitiv: "å oppsøke",
    presens: "oppsøker",
    preteritum: "oppsøkte",
    perfektum: "har oppsøkt",

    meaning: "Look up",
  },
  {
    infinitiv: "å overdrive",
    presens: "overdriver",
    preteritum: "overdrev",
    perfektum: "har overdrevet",

    meaning: "Exaggerate",
  },
  {
    infinitiv: "å overnatte",
    presens: "overnatter",
    preteritum: "overnattet",
    perfektum: "har overnattet",

    meaning: "Spend the night",
  },
  {
    infinitiv: "å overskrive",
    presens: "overskriver",
    preteritum: "overskrev",
    perfektum: "har overskrevet",

    meaning: "Sign",
  },
  {
    infinitiv: "å overta",
    presens: "overtar",
    preteritum: "overtok",
    perfektum: "har overtatt",

    meaning: "Take over",
  },
  {
    infinitiv: "å overtale",
    presens: "overtaler",
    preteritum: "overtalte",
    perfektum: "har overtalt",

    meaning: "Persuade",
  },
];

const P: Verb[] = [
  {
    infinitiv: "å pakke",
    presens: "pakker",
    preteritum: "pakket",
    perfektum: "har pakket",

    meaning: "Pack",
  },
  {
    infinitiv: "å parkere",
    presens: "parkerer",
    preteritum: "parkerte",
    perfektum: "har parkert",
    meaning: "Park",
  },
  {
    infinitiv: "å passe",
    presens: "passer",
    preteritum: "passert",
    perfektum: "har passert",

    meaning: "Fit",
  },
  {
    infinitiv: "å peke",
    presens: "peker",
    preteritum: "pekte",
    perfektum: "har pekt",

    meaning: "Point",
  },
  {
    infinitiv: "å pipe",
    presens: "piper",
    preteritum: "pe(i)p",
    perfektum: "har pepet",

    meaning: "Wheeze",
  },
  {
    infinitiv: "å pleie",
    presens: "pleier",
    preteritum: "pleide",
    perfektum: "har pleid",

    meaning: "Look after",
  },
  {
    infinitiv: "å plombere",
    presens: "plomberer",
    preteritum: "plomberte",
    perfektum: "har plombert",

    meaning: "Stop, Seal",
  },
  {
    infinitiv: "å plystre",
    presens: "plystrer",
    preteritum: "plystret",
    perfektum: "har plystret",

    meaning: "Whistle",
  },
  {
    infinitiv: "å preke",
    presens: "preker",
    preteritum: "prekte",
    perfektum: "har prekt",

    meaning: "Preach",
  },
  {
    infinitiv: "å prøve",
    presens: "prøver",
    preteritum: "prøvde",
    perfektum: "har prøvd",

    meaning: "Try, Test",
  },
  {
    infinitiv: "å pusse",
    presens: "pusser",
    preteritum: "pusset",
    perfektum: "har pusset",

    meaning: "Clean, Polish",
  },
  {
    infinitiv: "å putte",
    presens: "putter",
    preteritum: "puttet",
    perfektum: "har puttet",

    meaning: "Put",
  },
  {
    infinitiv: "å pynte",
    presens: "pynter",
    preteritum: "pyntet",
    perfektum: "har pyntet",

    meaning: "Decorate, Trim",
  },
  {
    infinitiv: "å pågripe",
    presens: "pågriper",
    preteritum: "pågripet",
    perfektum: "har pågripet",

    meaning: "Arrest",
  },
];

const Q: Verb[] = [
  {
    infinitiv: "",
    presens: "",
    preteritum: "",
    perfektum: "",

    meaning: "",
  },
];

const R: Verb[] = [
  {
    infinitiv: "å regne",
    presens: "regner",
    preteritum: "regnet",
    perfektum: "har renget",

    meaning: "Rain",
  },
  {
    infinitiv: "å reise",
    presens: "reiser",
    preteritum: "reiste",
    perfektum: "har reist",

    meaning: "Travel",
  },
  {
    infinitiv: "å rekke",
    presens: "rekker",
    preteritum: "rakk",
    perfektum: "har rukket",

    meaning: "Reach",
  },
  {
    infinitiv: "å rekommandere",
    presens: "rekommanderer",
    preteritum: "rekommanderte",
    perfektum: "har rekommandert",

    meaning: "Register",
  },
  {
    infinitiv: "å rense",
    presens: "renser",
    preteritum: "renset",
    perfektum: "har renset",

    meaning: "Clean",
  },
  {
    infinitiv: "å reparere",
    presens: "reparerer",
    preteritum: "reparerte",
    perfektum: "har reparert",

    meaning: "Repair",
  },
  {
    infinitiv: "å repetere",
    presens: "repeterer",
    preteritum: "repeterte",
    perfektum: "har repetert",

    meaning: "Repeat, Revise",
  },
  {
    infinitiv: "å representere",
    presens: "representerer",
    preteritum: "representerte",
    perfektum: "har representert",

    meaning: "Represent",
  },
  {
    infinitiv: "å rette",
    presens: "retter",
    preteritum: "rettet",
    perfektum: "har rettet",

    meaning: "Straighten, Align",
  },
  {
    infinitiv: "å ri",
    presens: "rir",
    preteritum: "red",
    perfektum: "har ridd",

    meaning: "Ride",
  },
  {
    infinitiv: "å ringe",
    presens: "ringer",
    preteritum: "ringte",
    perfektum: "har ringt",
    meaning: "Ring",
  },
  {
    infinitiv: "å rive",
    presens: "river",
    preteritum: "rev",
    perfektum: "har revet",

    meaning: "Grate",
  },
  {
    infinitiv: "å ro",
    presens: "ror",
    preteritum: "rodde",
    perfektum: "har rodd",
    meaning: "Row",
  },
  {
    infinitiv: "å rope",
    presens: "roper",
    preteritum: "ropte",
    perfektum: "har ropt",
    meaning: "Call, Shout",
  },
  {
    infinitiv: "å ruske",
    presens: "rusker",
    preteritum: "rusket",
    perfektum: "har rusket",

    meaning: "Pull",
  },
  {
    infinitiv: "å rydde",
    presens: "rydder",
    preteritum: "ryddet",
    perfektum: "har ryddet",

    meaning: "Tidy",
  },
  {
    infinitiv: "å rydde av",
    presens: "rydder av",
    preteritum: "ryddet av",
    perfektum: "har ryddet av",

    meaning: "Clear away, Remove",
  },
  {
    infinitiv: "å ryke",
    presens: "ryker",
    preteritum: "røk",
    perfektum: "har røket",

    meaning: "Smoke",
  },
  {
    infinitiv: "å røre",
    presens: "rører",
    preteritum: "rørte",
    perfektum: "har rørt",
    meaning: "Stir",
  },
  {
    infinitiv: "å røyke",
    presens: "røyker",
    preteritum: "røykte",
    perfektum: "har røykt",

    meaning: "Smoke",
  },
  {
    infinitiv: "å råde",
    presens: "råder",
    preteritum: "rådet",
    perfektum: "har rådet",

    meaning: "Recommend",
  },
];

const S: Verb[] = [
  {
    infinitiv: "å sage",
    presens: "sager",
    preteritum: "saget",
    perfektum: "har saget",
    meaning: "Saw",
  },
  {
    infinitiv: "å samarbeide",
    presens: "samarbeider",
    preteritum: "samarbeidet",
    perfektum: "har samarbeidet",

    meaning: "Work together",
  },
  {
    infinitiv: "å sammenlikne",
    presens: "sammenlikner",
    preteritum: "sammenliknet",
    perfektum: "har sammenliknet",

    meaning: "Compare",
  },
  {
    infinitiv: "å savne",
    presens: "savner",
    preteritum: "savnet",
    perfektum: "har savnet",

    meaning: "Lack",
  },
  {
    infinitiv: "å se",
    presens: "ser",
    preteritum: "så",
    perfektum: "har sett",
    meaning: "See, Look",
  },
  {
    infinitiv: "å selge",
    presens: "selger",
    preteritum: "solgte",
    perfektum: "har solgt",

    meaning: "Sell",
  },
  {
    infinitiv: "å sende",
    presens: "sender",
    preteritum: "sendte",
    perfektum: "har sendt",

    meaning: "Send",
  },
  {
    infinitiv: "å servere",
    presens: "serverer",
    preteritum: "serverte",
    perfektum: "har servert",

    meaning: "Serve",
  },
  {
    infinitiv: "å sette",
    presens: "setter",
    preteritum: "satte",
    perfektum: "har satt",
    meaning: "Set",
  },
  {
    infinitiv: "å si",
    presens: "sier",
    preteritum: "sa",
    perfektum: "har sagt",

    meaning: "Say",
  },
  {
    infinitiv: "å sige",
    presens: "siger",
    preteritum: "seg",
    perfektum: "har seget",

    meaning: "Ooze, Seep",
  },
  {
    infinitiv: "å sikte",
    presens: "sikter",
    preteritum: "siktet",
    perfektum: "har siktet",
    meaning: "Aim",
  },
  {
    infinitiv: "å sitte",
    presens: "sitter",
    preteritum: "satt",
    perfektum: "har sittet",

    meaning: "Sit",
  },
  {
    infinitiv: "å skifte",
    presens: "skifter",
    preteritum: "skiftet",
    perfektum: "har skiftet",

    meaning: "Change, Switch",
  },
  {
    infinitiv: "å skje",
    presens: "skjer",
    preteritum: "skjedde",
    perfektum: "har skjedd",

    meaning: "Happen",
  },
  {
    infinitiv: "å skjelve",
    presens: "skjelver",
    preteritum: "skalv",
    perfektum: "har skjelvet",

    meaning: "Tremble",
  },
  {
    infinitiv: "å skjære",
    presens: "skjærer",
    preteritum: "skar",
    perfektum: "har skåret",

    meaning: "Cut",
  },
  {
    infinitiv: "å skjønne",
    presens: "skjønner",
    preteritum: "skjønte",
    perfektum: "har skjønt",

    meaning: "Understand",
  },
  {
    infinitiv: "å skride",
    presens: "skrider",
    preteritum: "skred",
    perfektum: "har skredet",

    meaning: "Proceed",
  },
  {
    infinitiv: "å skrive",
    presens: "skriver",
    preteritum: "skrev",
    perfektum: "har skrevet",
    meaning: "Write",
  },
  {
    infinitiv: "å skru",
    presens: "skrur",
    preteritum: "skrudde",
    perfektum: "har skrudd",
    meaning: "Screw",
  },
  {
    infinitiv: "å skryte",
    presens: "skryter",
    preteritum: "skrøt",
    perfektum: "har skrytt",

    meaning: "Boast",
  },
  {
    infinitiv: "å skulle",
    presens: "skal",
    preteritum: "skulle",
    perfektum: "har skullet",

    meaning: "Shall, Have to",
  },
  {
    infinitiv: "å skvette",
    presens: "skvetter",
    preteritum: "skvettet",
    perfektum: "har skvettet",

    meaning: "Splash",
  },
  {
    infinitiv: "å skylle",
    presens: "skyller",
    preteritum: "skylte",
    perfektum: "har skylt",

    meaning: "Wash",
  },
  {
    infinitiv: "å skynde",
    presens: "skynder",
    preteritum: "skyndte",
    perfektum: "har skyndet",

    meaning: "Hasten",
  },
  {
    infinitiv: "å skyte",
    presens: "skyter",
    preteritum: "skjøt",
    perfektum: "har skutt",

    meaning: "Shoot",
  },
  {
    infinitiv: "å skyve",
    presens: "skyver",
    preteritum: "skøv",
    perfektum: "har skutt",

    meaning: "Push, Shove",
  },
  {
    infinitiv: "å slenge",
    presens: "slenger",
    preteritum: "slengte",
    perfektum: "har slengt",

    meaning: "Throw",
  },
  {
    infinitiv: "å slippe",
    presens: "slipper",
    preteritum: "slapp",
    perfektum: "har sluppet",

    meaning: "Drop",
  },
  {
    infinitiv: "å slite",
    presens: "sliter",
    preteritum: "slet",
    perfektum: "har slitt",

    meaning: "Toil",
  },
  {
    infinitiv: "å slutte",
    presens: "slutter",
    preteritum: "sluttet",
    perfektum: "har sluttet",

    meaning: "End, Close",
  },
  {
    infinitiv: "å slå",
    presens: "slår",
    preteritum: "slo",
    perfektum: "har slått",

    meaning: "Hit",
  },
  {
    infinitiv: "å slåss",
    presens: "slåss",
    preteritum: "sloss",
    perfektum: "har slåss",

    meaning: "Fight",
  },
  {
    infinitiv: "å smake",
    presens: "smaker",
    preteritum: "smaket",
    perfektum: "har smaket",
    meaning: "Taste",
  },
  {
    infinitiv: "å smelle",
    presens: "smeller",
    preteritum: "smelte",
    perfektum: "har smelt",

    meaning: "Bang, Smack",
  },
  {
    infinitiv: "å smile",
    presens: "smiler",
    preteritum: "smilte",
    perfektum: "har smilt",

    meaning: "Smile",
  },
  {
    infinitiv: "å smitte",
    presens: "smitter",
    preteritum: "smittet",
    perfektum: "har smittet",

    meaning: "Infect",
  },
  {
    infinitiv: "å sminke",
    presens: "sminker",
    preteritum: "sminket",
    perfektum: "har sminket",

    meaning: "Apply make up",
  },
  {
    infinitiv: "å smøre",
    presens: "smører",
    preteritum: "smurte",
    perfektum: "har smurt",

    meaning: "Oil, Lubricate",
  },
  {
    infinitiv: "å snakke",
    presens: "snakker",
    preteritum: "snakket",
    perfektum: "har snakket",
    meaning: "Speak, Talk",
  },
  {
    infinitiv: "å snegle",
    presens: "snegler",
    preteritum: "sneglet",
    perfektum: "har sneglet",

    meaning: "Move slowly",
  },
  {
    infinitiv: "å snike",
    presens: "sniker",
    preteritum: "snek",
    perfektum: "har sneket",

    meaning: "Sneak",
  },
  {
    infinitiv: "å snyte",
    presens: "snyter",
    preteritum: "snøt",
    perfektum: "har snytt",

    meaning: "Cheat",
  },
  {
    infinitiv: "å snø",
    presens: "snør",
    preteritum: "snødde",
    perfektum: "har snødd",

    meaning: "Snow",
  },
  {
    infinitiv: "å sove",
    presens: "sover",
    preteritum: "sov",
    perfektum: "har sovet",

    meaning: "Sleep",
  },
  {
    infinitiv: "å sovne",
    presens: "sovner",
    preteritum: "sovnet",
    perfektum: "har sovnet",

    meaning: "Fall asleep",
  },
  {
    infinitiv: "å spandere",
    presens: "spanderer",
    preteritum: "spanderte",
    perfektum: "har spandert",
    meaning: "Spend",
  },
  {
    infinitiv: "å spare",
    presens: "sparer",
    preteritum: "sparte",
    perfektum: "har spart",
    meaning: "Save, Be economical",
  },
  {
    infinitiv: "å sparke",
    presens: "sparker",
    preteritum: "sparket",
    perfektum: "har sparket",
    meaning: "Kick",
  },
  {
    infinitiv: "å spikre",
    presens: "spikrer",
    preteritum: "spikret",
    perfektum: "har spikret",
    meaning: "Nail",
  },
  {
    infinitiv: "å spille",
    presens: "spiller",
    preteritum: "spilte",
    perfektum: "har spilt",

    meaning: "Play",
  },
  {
    infinitiv: "å spinne",
    presens: "spinner",
    preteritum: "spant",
    perfektum: "har spunnet",

    meaning: "Spin",
  },
  {
    infinitiv: "å spise",
    presens: "spiser",
    preteritum: "spiste",
    perfektum: "har spist",

    meaning: "Eat",
  },
  {
    infinitiv: "å sprekke",
    presens: "sprekker",
    preteritum: "sprakk",
    perfektum: "har sprukket",

    meaning: "Crack, Burst",
  },
  {
    infinitiv: "å sprette",
    presens: "spretter",
    preteritum: "spratt",
    perfektum: "har sprettet",

    meaning: "Bounce",
  },
  {
    infinitiv: "å springe",
    presens: "springer",
    preteritum: "sprang",
    perfektum: "har sprunget",

    meaning: "Spring, Leap",
  },
  {
    infinitiv: "å spørre",
    presens: "spør",
    preteritum: "spurte",
    perfektum: "har spurt",

    meaning: "Ask",
  },
  {
    infinitiv: "å starte",
    presens: "starter",
    preteritum: "startet",
    perfektum: "har startet",

    meaning: "Start",
  },
  {
    infinitiv: "å steke",
    presens: "steker",
    preteritum: "stekte",
    perfektum: "har stekt",

    meaning: "Roast, Fry, Bake",
  },
  {
    infinitiv: "å stelle",
    presens: "steller",
    preteritum: "stelte",
    perfektum: "har stelt",

    meaning: "Manage",
  },
  {
    infinitiv: "å stemme",
    presens: "stemmer",
    preteritum: "stemte",
    perfektum: "har stemt",

    meaning: "Vote, Agree",
  },
  {
    infinitiv: "å stevne",
    presens: "stevner",
    preteritum: "stevnet",
    perfektum: "har stevnet",

    meaning: "Summon",
  },
  {
    infinitiv: "å stige",
    presens: "stiger",
    preteritum: "steg",
    perfektum: "har steget",

    meaning: "Climb",
  },
  {
    infinitiv: "å stikke",
    presens: "stikker",
    preteritum: "stakk",
    perfektum: "har stukket",

    meaning: "Stick",
  },
  {
    infinitiv: "å stille",
    presens: "stiller",
    preteritum: "stilte",
    perfektum: "har stilt",

    meaning: "Put, Place",
  },
  {
    infinitiv: "å stjele",
    presens: "stjeler",
    preteritum: "stjal",
    perfektum: "har stjålet",

    meaning: "Steal",
  },
  {
    infinitiv: "å stoppe",
    presens: "stopper",
    preteritum: "stoppet",
    perfektum: "har stoppet",
    meaning: "Stop",
  },
  {
    infinitiv: "å strekke",
    presens: "strekker",
    preteritum: "strakk",
    perfektum: "har strukket",

    meaning: "Stretch",
  },
  {
    infinitiv: "å stri",
    presens: "strir",
    preteritum: "stred",
    perfektum: "har stridd",

    meaning: "Struggle",
  },
  {
    infinitiv: "å strikke",
    presens: "strikker",
    preteritum: "strikket",
    perfektum: "har strikket",

    meaning: "Knit",
  },
  {
    infinitiv: "å stryke",
    presens: "stryker",
    preteritum: "strøk",
    perfektum: "har strøket",

    meaning: "Stroke",
  },
  {
    infinitiv: "å studere",
    presens: "studerer",
    preteritum: "studerte",
    perfektum: "har studert",

    meaning: "Study",
  },
  {
    infinitiv: "å stå",
    presens: "står",
    preteritum: "stod",
    perfektum: "har stått",
    meaning: "Stand",
  },
  {
    infinitiv: "å svare",
    presens: "svarer",
    preteritum: "svarte",
    perfektum: "har svart",

    meaning: "Answer, Reply",
  },
  {
    infinitiv: "å sverge",
    presens: "sverger",
    preteritum: "sverget",
    perfektum: "har sverget",

    meaning: "Swear",
  },
  {
    infinitiv: "å svi",
    presens: "svir",
    preteritum: "sved",
    perfektum: "har svidd",

    meaning: "Burn",
  },
  {
    infinitiv: "å svike",
    presens: "sviker",
    preteritum: "svek",
    perfektum: "har sveket",

    meaning: "Defraud, Deceive",
  },
  {
    infinitiv: "å svinge",
    presens: "svinger",
    preteritum: "svingte",
    perfektum: "har svingt",

    meaning: "Swing, Brandish",
  },
  {
    infinitiv: "å svømme",
    presens: "svømmer",
    preteritum: "svømte",
    perfektum: "har svømt",

    meaning: "Swim",
  },
  {
    infinitiv: "å sy",
    presens: "syr",
    preteritum: "sydde",
    perfektum: "har sydd",

    meaning: "Sew, Make",
  },
  {
    infinitiv: "å sykle",
    presens: "sykler",
    preteritum: "syklet",
    perfektum: "har syklet",
    meaning: "Cycle",
  },
  {
    infinitiv: "å synes",
    presens: "syn(e)s",
    preteritum: "syntes",
    perfektum: "har syn(e)s",

    meaning: "Think",
  },
  {
    infinitiv: "å synge",
    presens: "synger",
    preteritum: "sang",
    perfektum: "har sunget",

    meaning: "Sing",
  },
  {
    infinitiv: "å synke",
    presens: "synker",
    preteritum: "sank",
    perfektum: "har sunket",

    meaning: "Sink",
  },
  {
    infinitiv: "å søke",
    presens: "søker",
    preteritum: "søkte",
    perfektum: "har søkt",

    meaning: "Apply, Seek",
  },
];

const T: Verb[] = [
  {
    infinitiv: "å ta",
    presens: "tar",
    preteritum: "tok",
    perfektum: "har tatt",
    meaning: "Take",
  },
  {
    infinitiv: "å takke",
    presens: "takker",
    preteritum: "takket",
    perfektum: "har takket",

    meaning: "Thank",
  },
  {
    infinitiv: "å tape",
    presens: "taper",
    preteritum: "tapte",
    perfektum: "har tapt",

    meaning: "Lose",
  },
  {
    infinitiv: "å tappe",
    presens: "tapper",
    preteritum: "tappet",
    perfektum: "har tappet",

    meaning: "Tap, Draw",
  },
  {
    infinitiv: "å telle",
    presens: "teller",
    preteritum: "talte",
    perfektum: "har talt",

    meaning: "Count",
  },
  {
    infinitiv: "å tenke",
    presens: "tenker",
    preteritum: "tenkte",
    perfektum: "har tenkt",

    meaning: "Think",
  },
  {
    infinitiv: "å tenne",
    presens: "tenner",
    preteritum: "tente",
    perfektum: "har tent",

    meaning: "Light, Ignite",
  },
  {
    infinitiv: "å tigge",
    presens: "tigger",
    preteritum: "tagg",
    perfektum: "har tigget",

    meaning: "Beg",
  },
  {
    infinitiv: "å tilby",
    presens: "tilbyr",
    preteritum: "tilbød",
    perfektum: "har tilbudt",

    meaning: "Offer",
  },
  {
    infinitiv: "å tjene",
    presens: "tjener",
    preteritum: "tjente",
    perfektum: "har tjent",

    meaning: "Earn",
  },
  {
    infinitiv: "å tore",
    presens: "tør",
    preteritum: "tord",
    perfektum: "har tort",

    meaning: "Dare",
  },
  {
    infinitiv: "å torturere",
    presens: "torturerer",
    preteritum: "torturerte",
    perfektum: "har torturert",

    meaning: "Torture",
  },
  {
    infinitiv: "å tre",
    presens: "trer",
    preteritum: "trådte",
    perfektum: "har trådt",

    meaning: "Tread, Step",
  },
  {
    infinitiv: "å treffe",
    presens: "treffer",
    preteritum: "traff",
    perfektum: "har truffet",

    meaning: "Meet",
  },
  {
    infinitiv: "å trene",
    presens: "trener",
    preteritum: "trente",
    perfektum: "har trent",

    meaning: "Train, Work out",
  },
  {
    infinitiv: "å trenge",
    presens: "trenger",
    preteritum: "trengte",
    perfektum: "har trengt",

    meaning: "Need",
  },
  {
    infinitiv: "å trive",
    presens: "triver",
    preteritum: "treiv",
    perfektum: "har trevet",

    meaning: "Catch up, Grab",
  },
  {
    infinitiv: "å trives",
    presens: "triv(e)s",
    preteritum: "trivdes",
    perfektum: "har triv(e)s",

    meaning: "Thrive, Happy",
  },
  {
    infinitiv: "å tro",
    presens: "tror",
    preteritum: "trodde",
    perfektum: "har trodd",

    meaning: "Think",
  },
  {
    infinitiv: "å tvinge",
    presens: "tvinger",
    preteritum: "tvang",
    perfektum: "har tvunget",

    meaning: "Force, Compel",
  },
  {
    infinitiv: "å tørke",
    presens: "tørker",
    preteritum: "tørket",
    perfektum: "har tørket",

    meaning: "Dry",
  },
];

const U: Verb[] = [
  {
    infinitiv: "å underskrive",
    presens: "underskriver",
    preteritum: "underskrev",
    perfektum: "har underskrevet",

    meaning: "Sign",
  },
  {
    infinitiv: "å undersøke",
    presens: "undersøker",
    preteritum: "undersøkte",
    perfektum: "har undersøkt",

    meaning: "Examine",
  },
  {
    infinitiv: "å unnskylde",
    presens: "unnskylder",
    preteritum: "unnskyldte",
    perfektum: "har unnskyldt",

    meaning: "Excuse",
  },
  {
    infinitiv: "å utarbeide",
    presens: "utarbeider",
    preteritum: "utarbeidet",
    perfektum: "har utarbeidet",

    meaning: "Prepare, Work out",
  },
  {
    infinitiv: "å utføre",
    presens: "utfører",
    preteritum: "utførte",
    perfektum: "har utført",

    meaning: "Export, Perform",
  },
  {
    infinitiv: "å utslå",
    presens: "utslår",
    preteritum: "utslo",
    perfektum: "har utslått",

    meaning: "Hanging down, Down",
  },
];

const V: Verb[] = [
  {
    infinitiv: "å varme",
    presens: "varmer",
    preteritum: "varmet",
    perfektum: "har varmet",

    meaning: "Warm",
  },
  {
    infinitiv: "å vaske",
    presens: "vasker",
    preteritum: "vasket",
    perfektum: "har vasket",
    meaning: "Wash",
  },
  {
    infinitiv: "å veie",
    presens: "veier",
    preteritum: "veide",
    perfektum: "har veid",

    meaning: "Weigh",
  },
  {
    infinitiv: "å vekke",
    presens: "vekker",
    preteritum: "vekket",
    perfektum: "har vekket",

    meaning: "Wake",
  },
  {
    infinitiv: "å velge",
    presens: "velger",
    preteritum: "valgte",
    perfektum: "har valgt",

    meaning: "Select",
  },
  {
    infinitiv: "å vente",
    presens: "venter",
    preteritum: "ventet",
    perfektum: "har ventet",
    meaning: "Wait",
  },
  {
    infinitiv: "å verne",
    presens: "verner",
    preteritum: "vernet",
    perfektum: "har vernet",

    meaning: "Preserve, Defend",
  },
  {
    infinitiv: "å vike",
    presens: "viker",
    preteritum: "vekket",
    perfektum: "har veket",

    meaning: "Yield",
  },
  {
    infinitiv: "å ville",
    presens: "vil",
    preteritum: "ville",
    perfektum: "har villet",

    meaning: "Want to, Will",
  },
  {
    infinitiv: "å vinke",
    presens: "vinker",
    preteritum: "vinket",
    perfektum: "har vinket",

    meaning: "Wave",
  },
  {
    infinitiv: "å vinne",
    presens: "vinner",
    preteritum: "vant",
    perfektum: "har vunnet",

    meaning: "Win",
  },
  {
    infinitiv: "å vise",
    presens: "viser",
    preteritum: "viste",
    perfektum: "har vist",
    meaning: "Indicate, Point out",
  },
  {
    infinitiv: "å vite",
    presens: "vet",
    preteritum: "visste",
    perfektum: "har visst",
    meaning: "Know",
  },
  {
    infinitiv: "å vokse",
    presens: "vokser",
    preteritum: "vokste",
    perfektum: "har vokst",
    meaning: "Grow, Increase",
  },
  {
    infinitiv: "å voldta",
    presens: "voldtar",
    preteritum: "voldtok",
    perfektum: "har voldtatt",
    meaning: "Rape",
  },
  {
    infinitiv: "å vri",
    presens: "vrir",
    preteritum: "vred",
    perfektum: "har vridd",
    meaning: "Twist",
  },
  {
    infinitiv: "å være",
    presens: "er",
    preteritum: "varmet",
    perfektum: "har vært",
    meaning: "Be, Exist",
  },
  {
    infinitiv: "å våkne",
    presens: "våkner",
    preteritum: "våknet",
    perfektum: "har våknet",
    meaning: "Wake, Awaken",
  },
];

const W: Verb[] = [
  {
    infinitiv: "",
    presens: "",
    preteritum: "",
    perfektum: "",
    meaning: "",
  },
];

const X: Verb[] = [
  {
    infinitiv: "",
    presens: "",
    preteritum: "",
    perfektum: "",
    meaning: "",
  },
];

const Y: Verb[] = [
  {
    infinitiv: "",
    presens: "",
    preteritum: "",
    perfektum: "",
    meaning: "",
  },
];

const Z: Verb[] = [
  {
    infinitiv: "",
    presens: "",
    preteritum: "",
    perfektum: "",
    meaning: "",
  },
];

const Ø: Verb[] = [
  {
    infinitiv: "å øke",
    presens: "øker",
    preteritum: "økte",
    perfektum: "har økt",
    meaning: "Increase",
  },
  {
    infinitiv: "å ønske",
    presens: "ønsker",
    preteritum: "ønsket",
    perfektum: "har ønsket",
    meaning: "Wish",
  },
  {
    infinitiv: "å øve",
    presens: "øver",
    preteritum: "øvde",
    perfektum: "har øvd",
    meaning: "Practice",
  },
];

export { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, Ø };
export const no_verbs = [
  ...A,
  ...B,
  ...C,
  ...D,
  ...E,
  ...F,
  ...G,
  ...H,
  ...I,
  ...J,
  ...K,
  ...L,
  ...M,
  ...N,
  ...O,
  ...P,
  ...Q,
  ...R,
  ...S,
  ...T,
  ...U,
  ...V,
  ...W,
  ...X,
  ...Y,
  ...Z,
  ...Ø,
];
