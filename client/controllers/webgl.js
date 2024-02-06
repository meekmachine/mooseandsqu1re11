var character;
var mainframe;

const AUDIT = [
    {
        "id": "480OIkUfRe",
        "survey": "audit",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "NTEyjG7JaV",
        "survey": "audit",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "3b8HApHIsW",
        "survey": "audit",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "9PV3mDHsYj",
        "survey": "audit",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "o3Vvd9PuV4",
        "survey": "audit",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "7hrQrRkroo",
        "survey": "audit",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "fcrMyhewqP",
        "survey": "audit",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "XnBeaqJpLP",
        "survey": "audit",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "EoNDjbREoC",
        "survey": "audit",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "TRbkGxXZij",
        "survey": "audit",
        "isFirst": false,
        "isLast": true
    }
];
const GTNSGT = [
    {
        "id": "PBuf3sVCCj",
        "survey": "GTNSGT",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "UY59yLDhwG",
        "survey": "GTNSGT",
        "isFirst": false,
        "isLast": true
    }
];
const HOWMUCHHOWOFTEN = [
    {
        "id": "pleBxUHgyt",
        "survey": "familyHistory",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "mR3X2pZszK",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "rvYjxAukwA",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "YHmKYTz5Y5",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "0OcF0WWPsl",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "uwT5nhssr2",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "qPjT3Q1sXr",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "lfaPYb8211",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "VOKthC7rpT",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "b3OOreWXJ5",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Ud8heugqCQ",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "r6ZkJCdBEz",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "wPFh7S9lhn",
        "survey": "myDrinking",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "f8B0ihkAKr",
        "survey": "myDrinking",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "VLutfNbPnB",
        "survey": "myDrinking",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "nrFKqQekln",
        "survey": "otherDrugs",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "BmqCFA3LpF",
        "survey": "otherDrugs",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "XTxMZ7TJ4h",
        "survey": "otherDrugs",
        "isFirst": false,
        "isLast": true
    }
];
const FAMILYHISTORY = [
    {
        "id": "pleBxUHgyt",
        "survey": "familyHistory",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "mR3X2pZszK",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "rvYjxAukwA",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "YHmKYTz5Y5",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "0OcF0WWPsl",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "uwT5nhssr2",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "qPjT3Q1sXr",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "lfaPYb8211",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "VOKthC7rpT",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "b3OOreWXJ5",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Ud8heugqCQ",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "r6ZkJCdBEz",
        "survey": "familyHistory",
        "isFirst": false,
        "isLast": true
    }
];
/*const MYDRINKING = [
    {
        "id": "wPFh7S9lhn",
        "survey": "myDrinking",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "f8B0ihkAKr",
        "survey": "myDrinking",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "VLutfNbPnB",
        "survey": "myDrinking",
        "isFirst": false,
        "isLast": true
    }
];*/
const MYDRINKING = [
    {
        "id": "2ryq9FqhYi",
        "survey": "myDrinking",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "F94yWz8Ail",
        "survey": "myDrinking",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "VLutfNbPnB",
        "survey": "myDrinking",
        "isFirst": false,
        "isLast": true
    }
];
const OTHERDRUGS = [
    {
        "id": "nrFKqQekln",
        "survey": "otherDrugs",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "BmqCFA3LpF",
        "survey": "otherDrugs",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "XTxMZ7TJ4h",
        "survey": "otherDrugs",
        "isFirst": false,
        "isLast": true
    }
];
const A_R_P = [
    {
        "id": "is6vw6wRnG",
        "survey": "ARP",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "tBryo4ALxF",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "GuFCbEhXOV",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "dSQV6eGkSu",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "PzQplrhIWi",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "CSKw4wbij4",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "GggkBmfJ7o",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "XLn7eaEH96",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "AJycKpEegc",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "1wjSdhf2eM",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "9WHQFfzF4J",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Rf7rQvJfOt",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "udBLvwkRax",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "KQlF0k42wm",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "t5Vll6TJyu",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "jLu5TZtwYU",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "8Qz0T7pwMZ",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "UqgD7PlgW3",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "83FfJ9Zq3M",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "oMop003d7A",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "YHvVH5MqP1",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "jUnJEgy9dm",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "igQMYRzHJa",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "XD5NKWQKhc",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "S9UOlj8XAS",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "QqcaH4ZiJM",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "OmbUxx1Jha",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Et0gmveEIz",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "rqnLEOB52H",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "2oKhO7mWbO",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "v9frAvBSJq",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "a4QamiGCA3",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "bGlMCixyKA",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "wMWqoTE1gA",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "k2ip8q0K2L",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "xdA8C0leeD",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Wv4wzrJp0T",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "WPjoWWTdGW",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "7uAQj46Kc9",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Rvg0whSSHr",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "ySxADohMIJ",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "gCf1E8xcBt",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "VlJABvnKDr",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "6HjTndVKpf",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Gzv94vSMlK",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "WDYFKBp4Ra",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "o0gfHVKiZo",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "8kksZw0b1i",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "tPbHqZDc4F",
        "survey": "ARP",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "xX6fmHzV8a",
        "survey": "ARP",
        "isFirst": false,
        "isLast": true
    }
];
const DEPRESSION = [
    {
        "id": "wEl6CRXHap",
        "survey": "depression",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "7C7lYsNVrG",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "yQhfDjY1Hv",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "ESzTFSxNqP",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "VNpgWGgR4M",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "skEnfaheGA",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "u0M8THtHeu",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "DO85GeUxhE",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "3z52fzxiYn",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "ZEBeQFKqD6",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "HsJFBrsREs",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "AvCFAxuxUF",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "vRMntIjuE2",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "bYjn7kpxgy",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "NB7AzeSBRH",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "rSlFWovcfk",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "cKiSS5MKkf",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Muxcv4Ua10",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "6cBmIYiTKC",
        "survey": "depression",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "tWHgD3sg4A",
        "survey": "depression",
        "isFirst": false,
        "isLast": true
    }
];
const MAST = [
    {
        "id": "P8ZORJCP2t",
        "survey": "MAST",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "anKnOz2zw9",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "NebDyUe5qg",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "EbJlYYgmON",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "wnj3m1I4fr",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "da57qkCJJx",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "lTBnnPVswQ",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "XPNbG5yWKK",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "FSxb56512e",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "tZqTfnFqFk",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "G4RdTw8AlV",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "lkq0iDzd7Z",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Ww5xSMi2CC",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "wsCQRHjYkg",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "LW2xfnSTxl",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "3GuR72PJfe",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "P3h1vN21qh",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "2M78gEZsmt",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "sFMai1HlQC",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "DffMpv7KJi",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "yQyMx17bXy",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "GivFm6vAUY",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "AAtW0GCLKn",
        "survey": "MAST",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "e1yYpKX6jG",
        "survey": "MAST",
        "isFirst": false,
        "isLast": true
    }
];
const DEPENDENCE = [
    {
        "id": "IJcTOH7fGb",
        "survey": "dependence",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "JrWYjpNoTq",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "entTOZcC7x",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "jSbe0y9yo8",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "UwhNedrfDF",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "brRbraVeTe",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "tpEo1xFKXk",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "pKnT4rw0q0",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "f5poCM6Gwq",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "WfgNctUyc9",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "uLqHs3Cdon",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "VtxPtGv9Vv",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "RnNNlOBTQd",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "ZBV1DmYjhP",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "EvAGJWHkWQ",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "DRMwnfMBq2",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "Z6SYhFUMv7",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "10oWTuZIat",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "APluU5Dc6l",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "IISlXLUAzC",
        "survey": "dependence",
        "isFirst": false,
        "isLast": false
    },
    {
        "id": "wNj7vCeMXz",
        "survey": "dependence",
        "isFirst": false,
        "isLast": true
    }
];
const TOTAL_NUM_QUESTIONS = {
    audit: 10,
    GTNSGT: 2,
    howMuchHowOften: 0,
    familyHistory: 10,
    myDrinking: 3,
    otherDrugs: 3,
    ARP: 50,
    depression: 20,
    MAST: 24,
    dependence: 21
};
const NEW_USER_PROGRESS = {
    user: {},
    GTNSGT: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    audit: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    howMuchHowOften: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    familyHistory: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    myDrinking: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    otherDrugs: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    ARP: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    depression: [{
        "formId": "",
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    MAST: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    dependence: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }],
    likeDontLike: [{
        "timestamp": "",
        "responsesPtr": [],
        "percentageComplete": "0",
        "currentElement": ""
    }]
};
const LIKE_DONT_LIKE = [
    {
        "id": "jRiKWdVuIw",
        "survey": "GTNSGT",
        "isFirst": true,
        "isLast": false
    },
    {
        "id": "OXRtsBdAK3",
        "survey": "GTNSGT",
        "isFirst": false,
        "isLast": true
    }];
const MENU_ELEMENTS = [
    "4lHNsBzB0x",
    "RLJpGOTkue"
];
const MENU_ELEMENTS_CHECK = [
    "aO6qCMcRvH",
    "BxbtJXn8f6"
];





const ABBREV_ELEMENT_OBJECTS = {
    audit: AUDIT,
    GTNSGT: LIKE_DONT_LIKE,
    howMuchHowOften: HOWMUCHHOWOFTEN,
    familyHistory: FAMILYHISTORY,
    myDrinking: MYDRINKING,
    otherDrugs: OTHERDRUGS,
    ARP: A_R_P,
    depression: DEPRESSION,
    MAST: MAST,
    dependence: DEPENDENCE
};


angular.module('app').controller('webglController', webglController);

webglController.$inject = ['$scope', '$window', '$state', '$rootScope', '$timeout', '$http', '$ocLazyLoad', '$uibModal', 'AuthService', 'widgetService', 'characterService', 'localStorageService', 'ProgressService', 'UserService'];

function webglController($scope, $window, $state, $rootScope, $timeout, $http, $ocLazyLoad, $uibModal, AuthService, widgetService, characterService, localStorageService, ProgressService, UserService){
    $scope.progressSrv = ProgressService;
    $scope.usrSrvc = UserService;
    $scope.currentElement_abbreviated = {};
    $scope.widget = widgetService;
    $scope.currentUser = Parse.User.current();
    $scope.isLoggedIn = AuthService.isLoggedIn;
    $scope.showLogin = false;
    $scope.tmpRes = [];
    $scope.auditIds = [
        "480OIkUfRe",
        "NTEyjG7JaV",
        "3b8HApHIsW",
        "9PV3mDHsYj",
        "o3Vvd9PuV4",
        "7hrQrRkroo",
        "fcrMyhewqP",
        "XnBeaqJpLP",
        "EoNDjbREoC",
        "TRbkGxXZij"
    ];
    $scope.lastElementInFormIds = [
        {
            "name": "audit",
            "elementID": "TRbkGxXZij"
        },
        {
            "name": "GTNSGT",
            "elementID": "UY59yLDhwG"
        },
        {
            "name": "howMuchHowOften",
            "elementID": "XTxMZ7TJ4h"
        },
        {
            "name": "ARP",
            "elementID": "xX6fmHzV8a"
        },
        {
            "name": "depression",
            "elementID": "tWHgD3sg4A"
        },
        {
            "name": "MAST",
            "elementID": "e1yYpKX6jG"
        },
        {
            "name": "dependence",
            "elementID": "wNj7vCeMXz"
        }
    ];
    $scope.$root.usrCmd = {
        "goBack": false
    };
    $scope.newUserProgress = NEW_USER_PROGRESS;
    $scope.currentUserProgress = {};
    $scope.currentQuestionNumber = 0;
    $scope.currentPercentComplete = 0;
    $scope.mode = {
        "loggingIn": false,
        "register": false,
        "loggingOut": false,
        "isLoggedIn": false,
        "forgotPW": false,
        // "forgotUN": false,
        "loginActivated": false,
        "optionsActivated": false,
        "updatePW": false,
        "isTempUser": false
    };
    $scope.tempUser = {};
    $scope.tempUserProgress = {};
    $scope.rangeLabel = 'Not Ready';
    $scope.readinessLabels = [
        "I have no interest at all in changing my drinking and I'm not interested in considering any changes in the " +
        "future even if my situation changes",
        "I'm not interested in changing my drinking right now but am willing to consider experimenting with different " +
        "patterns in the future.",
        "I'm considering how I might want to change my drinking.",
        "I'm consdiering cutting back on my drinking or not drinking at all."
    ];
    $scope.credentials = {
        firstname: "",
        //lastname: "",
        username: "",
        password: "",
        email: "",
        education: "",
        gender: "",
        dateOfBirth: "",
        age: "",
        weight: "",
        height: {
            total: 0,
            feet: "",
            inches: ""
        },
        ethnicity: "",
        race: [],
        maritalstatus: "",
        confirmpassword: "",
        confirmemail:"",
        fp_email: "",
        fp_DOB: ""
    };

    //following handles the Success and Error messages
    $scope.Success = message => {
        $scope.alert = {
            alertClass: "alert-success",
            alertType: "Success!",
            alertText: message
        };
    };
    $scope.Error = message => {
        $scope.alert = {
            alertClass: "alert-danger",
            alertType: "Error!",
            alertText: message
        };
    };
    let forcePreviousQuestion = true;
    let Response = Parse.Object.extend('Response');
    let Element = Parse.Object.extend('Element');
    let User = Parse.Object.extend('User');


    function loadUnity(char) {
        character = char;
        return $ocLazyLoad.load({
            serie: true,
            files: [
                // load initial setup
                'unity/facs/engine3d.js',
                'unity/facs/facslib.js',
                'unity/facs/engineWebGL_u3d.js',
                char.path + 'UnityLoader.js',
                'unity/UnitySettings.js'
            ]
        });
    }

    $scope.unityLoaded = function() {
        $ocLazyLoad.load({
            serie: true,
            files: [
                '/mainframe/js/common/three.min.js',
                '/mainframe/js/common/prototype.js',
                '/mainframe/js/mainframe.settings.js',
                '/mainframe/js/mainframe.classes.js'
            ]
        }).then(function() {
            mainframe = new Mainframe($state.current.data.mainframeConfig); // initialize mainframe
            mainframe.run(); // starts Mihai's mainframe
        });
    };

    //function used to determine if the QA should be treated as a Menu
    $scope.isMenu = function (elemID) {
        //console.log("in is menu function with for element: " + elemID);
        if(MENU_ELEMENTS.includes(elemID)){
            //console.log("isMenu returning true");
            return true;
        }else{
            //console.log("isMenu returning false");
            return false;
        }


    };
    $scope.isMenuCheck = function (elemID) {
        //console.log("in is menu function with for element: " + elemID);
        if(MENU_ELEMENTS_CHECK.includes(elemID)){
            //console.log("isMenuCheck returning true");
            return true;
        }else{
            //console.log("isMenuCheck returning false");
            return false;
        }


    };
    $scope.isQA = function (elemID, type) {
        //console.log("in is menu function with for element: " + elemID);
        if(!MENU_ELEMENTS_CHECK.includes(elemID) && !MENU_ELEMENTS.includes(elemID) && (type == "QuestionAnswer")){
            //console.log("isQA returning true");
            return true;
        }else{
            //console.log("isQA returning false");
            return false;
        }


    };


    // -----------------------------------------------------------------------------------------------------------------
    // init function. called when the counseling controller is loaded
    // -----------------------------------------------------------------------------------------------------------------
    var init = function() {

        $scope.currentUser = AuthService.currentUser();
        $scope.currentQuestionNumber = 0;

        $scope.widget.fetchAll(); // now we can load all injects
        loadUnity($state.current.data.character || characterService.getUsersCounselor());
        $scope.$root.selectedCounselorVoiceIndex = characterService.getUsersCounselor().voiceIndex;
        $scope.$root.selectedCounselor = characterService.getUsersCounselor();

        if($scope.currentUser){
            $scope.userGivenName = $scope.currentUser.object.attributes.firstName;
            $scope.mode.isTempUser = $scope.currentUser.object.attributes.tempUser;
            /*console.log("temp user");
             console.log($scope.currentUser);*/
            getUserProgress($scope.currentUser.object, false, false);
        }

    };



    // -----------------------------------------------------------------------------------------------------------------
    //  delegates clicking on an HTML inject to it's particular function
    // -----------------------------------------------------------------------------------------------------------------

    $scope.htmlClick = function(html) { html.click(); };

    // -----------------------------------------------------------------------------------------------------------------
    //  Determines ng-class of div wrapping counseling view for sliding menu. andy
    // -----------------------------------------------------------------------------------------------------------------
    $scope.checked = false;
    $scope.isMenuOpen = true;


    $scope.myCounselor=function () {
        $scope.checked = !$scope.checked;
        if ($scope.isMenuOpen) {
            dynamic();
            $scope.isMenuOpen = false;
        }
    };

    // -----------------------------------------------------------------------------------------------------------------
    // handles the modification of the progress bar in the view (for the audio progress)
    // -----------------------------------------------------------------------------------------------------------------

    //For the progress circle.
    //Everytime a new questionnaire is loaded, change current Questionnaire value
    $scope.progressValue = 0;
    $scope.currentQuestionnaire =  "Audit";

    $scope.auditAnswer = -1;
    $scope.myProgress = function() {
        var progress = $scope.widget.myProgress;
        var userProgress = {};
        var indicies=[];

        var index = 0;
        progress.hidden = !progress.hidden;

        if(!progress.hidden){
            //if current UserProgress is not null use it for percentages, else use newUserProgress to fill progress object
            /* console.log($scope.currentUserProgress.attributes);*/

            if($scope.currentUserProgress == null){
                // console.log("**************newUserProgress************");
                // console.log( $scope.currentUserProgress);
                userProgress = $scope.newUserProgress;
            }else{
                // console.log("**********currentUserProgress*********");
                userProgress = $scope.currentUserProgress.attributes;
            }

            //get index of each of last complete survey
            indicies.push(userProgress.audit.length-1);
            indicies.push(userProgress.howMuchHowOften.length-1);
            indicies.push(userProgress.GTNSGT.length-1);
            indicies.push(userProgress.ARP.length-1);
            indicies.push(userProgress.depression.length-1);
            indicies.push(userProgress.MAST.length-1);
            indicies.push(userProgress.dependence.length-1);

            index = Math.min(...indicies);
            /*console.log("min length is: " + index);
            console.log(indicies);*/

            if (index > 0){
                index -= 1;
            }

            $scope.progressBarValue = [
                {
                    "progressBar": userProgress.audit[index].percentageComplete + "%",
                    "questionnaire": "Audit"
                },
                {
                    "progressBar": userProgress.howMuchHowOften[index].percentageComplete + "%",
                    "questionnaire": "How Much and How Often"
                },
                {
                    "progressBar": userProgress.GTNSGT[index].percentageComplete + "%",
                    "questionnaire": "The Good Things and Not So Good Things"
                },
                {
                    "progressBar": userProgress.ARP[index].percentageComplete + "%",
                    "questionnaire": "Alcohol Related Problems"
                },
                {
                    "progressBar": userProgress.depression[index].percentageComplete + "%",
                    "questionnaire": "Depression Survey"
                },
                {
                    "progressBar": userProgress.MAST[index].percentageComplete + "%",
                    "questionnaire": "MAST"
                },
                {
                    "progressBar": userProgress.dependence[index].percentageComplete + "%",
                    "questionnaire": "Dependence"
                }
            ];
        }



        /* if (progress.hidden == false) {
         console.log("For AuditScore : ");
         console.log("Questions: " + 10);
         console.log("Answered: " + $scope.auditAnswer);

         if ($scope.auditAnswer >= 0) {
         auditProgress = ($scope.auditAnswer / 10) * 100;
         auditProgress = auditProgress + "%";
         $scope.progressBarValue[0].progressBar = auditProgress;

         }

         $http.get('/api/dcu/getDrincScore/577fd4747337e7856c9afe65')
         .then(
         function (res) {
         console.log("For DrincScore : ");
         console.log(res.numOfQuestions);
         console.log(res.answered);
         drincProgress = (res.answered / res.numOfQuestions) * 100;
         drincProgress = drincProgress + "%";
         $scope.progressBarValue[2].progressBar = drincProgress;
         console.log(drincProgress);
         return res;
         },
         function (err) {
         return err;
         }
         );

         $http.get('/api/dcu/getSADQScore/577feebd7337e7856c9afead/577fef827337e7856c9afeb3/577ff1aa7337e7856c9afec4')
         .then(
         function (res) {
         console.log("For SADQScore : ");
         console.log(res.numOfQuestions);
         console.log(res.answered);
         SADQCProgress = (res.answered / res.numOfQuestions) * 100;
         SADQCProgress = SADQCProgress + "%";
         $scope.progressBarValue[3].progressBar = SADQCProgress;
         console.log(SADQCProgress);
         return res;
         },
         function (err) {
         return err;
         }
         );

         $http.get('/api/dcu/getSOCRATESScore/577ff2227337e7856c9afec9')
         .then(
         function (res) {
         console.log("For Socrates : ");
         console.log(res.numOfQuestions);
         console.log(res.answered);
         socratesProgress = (res.answered / res.numOfQuestions) * 100;

         if (socratesProgress != "0") socratesProgress = parseInt(socratesProgress) + "%";
         else socratesProgress = socratesProgress + "%";

         $scope.progressBarValue[4].progressBar = socratesProgress;
         console.log(socratesProgress);
         return res;
         },
         function (err) {
         return err;
         }
         );
         }*/
    };

    $scope.fullscreen = true;
    // changes eEva to minimized or maximized depending on the bool provided
    $scope.toggleFullscreen = function(bool) {
        $scope.fullscreen = bool;
        $scope.widget['virtualys'].classes['ue-full'] = bool;
        $scope.widget['virtualys'].classes['ue-half'] = !bool;
    };

    // -----------------------------------------------------------------------------------------------------------------
    // used by the mainframe to know when the user has clicked on an answer
    // -----------------------------------------------------------------------------------------------------------------

    $scope.$root.directInputTimestamp = 0;

    $scope.next = function() {
        $scope.$root.directInputTimestamp = Date.now();

        var nod = Math.floor(Math.random() * (3 - 1)) + 1;
        //console.log(nod);

        switch(nod) {
            case 1:
                //SendMessage('FACcontroler', 'SetAnimation', 'nod1');

                break;
            case 2:
                //SendMessage('FACcontroler', 'SetAnimation', 'nod2');

                break;
            case 3:
                //SendMessage('FACcontroler', 'SetAnimation', 'nod3');

                break;
        }
    };

    $scope.goBackButton = function() {
        $scope.$root.usrCmd.goBack = true;
        $scope.$root.userResponse = -99;
        $scope.next();
    };

    //helper function for getting the abbreviated element object. This is not the same object as in the newSurvey controller,
    //this object only contains the element id (string), the name of the survey in which in belongs (string), and lastly a (bool)
    //to indicate if that element is the last element of the survey
    function getAbbrevElementObj(elemId) {
        //console.log(elemId);

        //check if element belongs to audit ABBREV_ELEMENT_OBJECTS.audit
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.audit.length; i++) {
            //console.log("audit " + i);
            if (elemId == ABBREV_ELEMENT_OBJECTS.audit[i].id) {
                return ABBREV_ELEMENT_OBJECTS.audit[i];
            }
        }

        //check if element belongs to GTNSGT
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.GTNSGT.length; i++) {
            if (elemId == ABBREV_ELEMENT_OBJECTS.GTNSGT[i].id) {
                //console.log("gtnsgt " + i);
                return ABBREV_ELEMENT_OBJECTS.GTNSGT[i];
            }
        }

        /*//check if element belongs to howMuchHowOften
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.howMuchHowOften.length; i++) {
            if (elemId == ABBREV_ELEMENT_OBJECTS.howMuchHowOften[i].id) {
                console.log("howMuchHowOften " + i);
                return ABBREV_ELEMENT_OBJECTS.howMuchHowOften[i];
            }
        }*/

        //check if element belongs to familyHistory
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.familyHistory.length; i++) {
            if (elemId == ABBREV_ELEMENT_OBJECTS.familyHistory[i].id) {
                //console.log("familyHistory " + i);
                return ABBREV_ELEMENT_OBJECTS.familyHistory[i];
            }
        }

        //check if element belongs to myDrinking
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.myDrinking.length; i++) {
            if (elemId == ABBREV_ELEMENT_OBJECTS.myDrinking[i].id) {
                //console.log("myDrinking " + i);
                return ABBREV_ELEMENT_OBJECTS.myDrinking[i];
            }
        }

        //check if element belongs to otherDrugs
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.otherDrugs.length; i++) {
            if (elemId == ABBREV_ELEMENT_OBJECTS.otherDrugs[i].id) {
                //console.log("otherDrugs " + i);
                return ABBREV_ELEMENT_OBJECTS.otherDrugs[i];
            }
        }

        //check if element belongs to ARP
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.ARP.length; i++) {
            if (elemId == ABBREV_ELEMENT_OBJECTS.ARP[i].id) {
                //console.log("ARP " + i);
                return ABBREV_ELEMENT_OBJECTS.ARP[i];
            }
        }

        //check if element belongs to depression
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.depression.length; i++) {
            if (elemId == ABBREV_ELEMENT_OBJECTS.depression[i].id) {
                //console.log("ARP " + i);
                return ABBREV_ELEMENT_OBJECTS.depression[i];
            }
        }

        //check if element belongs to MAST
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.MAST.length; i++) {
            if (elemId == ABBREV_ELEMENT_OBJECTS.MAST[i].id) {
                //console.log("MAST " + i);
                return ABBREV_ELEMENT_OBJECTS.MAST[i];
            }
        }

        //check if element belongs to dependence
        for (var i = 0; i < ABBREV_ELEMENT_OBJECTS.dependence.length; i++) {
            if (elemId == ABBREV_ELEMENT_OBJECTS.dependence[i].id) {
                //console.log("dependence " + i);
                return ABBREV_ELEMENT_OBJECTS.dependence[i];
            }
        }

        return false;
    };

    //following helper function is used to update the howMuchHowOften survey since it is dependent on 3 sections to be complete

    function updateHowMuchHowOften (progressIndx){
        //check if need to mark howMuchHowOften complete by checking if both myDrinking and otherDrugs is complete
        //by seeing if that have timestamps within this same index
       /* console.log("in updateHowMuchHowOften");
        console.log(progressIndx);
        console.log($scope.currentUserProgress.attributes);*/
        let lenFH = $scope.currentUserProgress.attributes.familyHistory.length;
        let lenOD = $scope.currentUserProgress.attributes.otherDrugs.length;
        let lenMY = $scope.currentUserProgress.attributes.myDrinking.length;

        if((progressIndx < lenFH) && (progressIndx < lenOD) && (progressIndx < lenMY) ){
            if($scope.currentUserProgress.attributes.howMuchHowOften[progressIndx].percentageComplete == "66"){
                //mark the howMuchHowOften survey complete
                //console.log("marking howMuchHowOften complete!!!");
                markHowMuchSurveyComplete();
            }else {
                if($scope.currentUserProgress.attributes.howMuchHowOften[progressIndx].percentageComplete == "33"){
                    //console.log("updating howMuchHowOften 66!!!");
                    $scope.currentUserProgress.attributes.howMuchHowOften[progressIndx].percentageComplete = "66";
                }else{
                    //console.log("updating howMuchHowOften 33!!!");
                    $scope.currentUserProgress.attributes.howMuchHowOften[progressIndx].percentageComplete = "33";
                }
            }

        }

        /*if(($scope.currentUserProgress.attributes.familyHistory[progressIndx].timeStamp) || ($scope.currentUserProgress.attributes.otherDrugs[progressIndx].timeStamp)){
            //set howMuchHowOften to 66%
            $scope.currentUserProgress.attributes.howMuchHowOften[progressIndx].percentageComplete = "66";
        }else{
            //set howMuchHowOften to 33%
            $scope.currentUserProgress.attributes.howMuchHowOften[progressIndx].percentageComplete = "33";
        }*/
    }

    function markHowMuchSurveyComplete(){
        let defaultValue = {
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        };
        let timeCompleted = Date.now();

        //get the last entry index in the howMuchHowOften array
        let index = $scope.currentUserProgress.attributes.howMuchHowOften.length-1;

        //update the howMuchHowOften by updating the percentageComplete and the timestamp and pushing last response
        $scope.currentUserProgress.attributes.howMuchHowOften[index].percentageComplete = "100";
        $scope.currentUserProgress.attributes.howMuchHowOften[index].timestamp = timeCompleted;

        //add new howMuchHowOften entry
        $scope.currentUserProgress.attributes.howMuchHowOften[index+1] = defaultValue;

        //save users progress
        $scope.currentUserProgress.save().then(
            progress => console.log("User's progress updated successfully.  The howMuchHowOften was marked complete on:  " + timeCompleted),
            error => console.log("There was an error updating the user's progress.  Error: " + error)
        );
    }

    //the following function is responsible for marking a survey complete whenever a user has finished the last question
    //of that survey
    function markSurveyComplete (surveyName, responseObject){
        let defaultValue = {
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        };
        let timeCompleted = Date.now();

        //if currentUserHasProgress, if not then need to update the audit in the newUserProgress object
        if($scope.currentUserProgress){
            if(surveyName == "audit")
            {

                //get the last entry index in the audit array
                let index = $scope.currentUserProgress.attributes.audit.length-1;

                //check if the audits current percent complete if is zero if so then the audit cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.audit[index].percentageComplete != "0"){
                    //update the audit by updating the percentageComplete and the timestamp and pushing last response object
                    $scope.currentUserProgress.attributes.audit[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.audit[index].timestamp = timeCompleted;
                    //console.log($scope.currentUserProgress.attributes.audit );
                    $scope.currentUserProgress.attributes.audit[index].responsesPtr.push(responseObject);

                    //add new audit entry
                    $scope.currentUserProgress.attributes.audit[index+1] = defaultValue;

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The Audit was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }


            }else if(surveyName == "GTNSGT")
            {
                //get the last entry index in the GTNSGT array
                let index = $scope.currentUserProgress.attributes.GTNSGT.length-1;

                //check if the GTNSGT current percent complete if is zero if so then the GTNSGT cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.GTNSGT[index].percentageComplete != "0") {
                    //update the GTNSGT by updating the percentageComplete and the timestamp and pushing last response
                    $scope.currentUserProgress.attributes.GTNSGT[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.GTNSGT[index].timestamp = timeCompleted;
                    $scope.currentUserProgress.attributes.GTNSGT[index].responsesPtr.push(responseObject);

                    //add new GTNSGT entry
                    $scope.currentUserProgress.attributes.GTNSGT[index+1] = defaultValue;

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The GTNSGT was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }


            }else if(surveyName == "howMuchHowOften")
            {
                //get the last entry index in the howMuchHowOften array
                let index = $scope.currentUserProgress.attributes.howMuchHowOften.length-1;

                //check if the howMuchHowOften current percent complete if is zero if so then the howMuchHowOften cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.howMuchHowOften[index].percentageComplete != "0") {
                    //update the howMuchHowOften by updating the percentageComplete and the timestamp and pushing last response
                    $scope.currentUserProgress.attributes.howMuchHowOften[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.howMuchHowOften[index].timestamp = timeCompleted;
                    $scope.currentUserProgress.attributes.howMuchHowOften[index].responsesPtr.push(responseObject);

                    //add new howMuchHowOften entry
                    $scope.currentUserProgress.attributes.howMuchHowOften[index+1] = defaultValue;

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The howMuchHowOften was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }

            }else if(surveyName == "familyHistory")
            {
                //get the last entry index in the familyHistory array
                let index = $scope.currentUserProgress.attributes.familyHistory.length-1;

                //check if the familyHistory current percent complete if is zero if so then the familyHistory cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.familyHistory[index].percentageComplete != "0") {

                    //update the familyHistory by updating the percentageComplete and the timestamp and pushing last response
                    $scope.currentUserProgress.attributes.familyHistory[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.familyHistory[index].timestamp = timeCompleted;
                    $scope.currentUserProgress.attributes.familyHistory[index].responsesPtr.push(responseObject);


                    //add new familyHistory entry
                    $scope.currentUserProgress.attributes.familyHistory[index+1] = defaultValue;

                    //update howMuchHowOften
                    //console.log("index sent to howMuchHowOften " + index);
                    updateHowMuchHowOften(index);

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The familyHistory was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }

            }else if(surveyName == "myDrinking")
            {
                //get the last entry index in the myDrinking array
                let index = $scope.currentUserProgress.attributes.myDrinking.length-1;

                //check if the myDrinking current percent complete if is zero if so then the myDrinking cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.myDrinking[index].percentageComplete != "0") {

                    //update the myDrinking by updating the percentageComplete and the timestamp and pushing last response
                    $scope.currentUserProgress.attributes.myDrinking[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.myDrinking[index].timestamp = timeCompleted;
                    $scope.currentUserProgress.attributes.myDrinking[index].responsesPtr.push(responseObject);

                    //add new myDrinking entry
                    $scope.currentUserProgress.attributes.myDrinking[index+1] = defaultValue;;

                    //update howMuchHowOften
                    updateHowMuchHowOften(index);

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The myDrinking was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }
            }else if(surveyName == "otherDrugs")
            {
                //get the last entry index in the otherDrugs array
                let index = $scope.currentUserProgress.attributes.otherDrugs.length-1;

                //check if the otherDrugs current percent complete if is zero if so then the otherDrugs cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.otherDrugs[index].percentageComplete != "0") {

                    //update the otherDrugs by updating the percentageComplete and the timestamp and pushing last response
                    $scope.currentUserProgress.attributes.otherDrugs[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.otherDrugs[index].timestamp = timeCompleted;
                    $scope.currentUserProgress.attributes.otherDrugs[index].responsesPtr.push(responseObject);

                    //add new otherDrugs entry
                    $scope.currentUserProgress.attributes.otherDrugs[index+1] = defaultValue;

                    //update howMuchHowOften
                    updateHowMuchHowOften(index);

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The otherDrugs was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }
            }else if(surveyName == "ARP")
            {
                //get the last entry index in the ARP array
                let index = $scope.currentUserProgress.attributes.ARP.length-1;

                //check if the ARP current percent complete if is zero if so then the ARP cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.ARP[index].percentageComplete != "0") {

                    //update the ARP by updating the percentageComplete and the timestamp and pushing last response
                    $scope.currentUserProgress.attributes.ARP[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.ARP[index].timestamp = timeCompleted;
                    $scope.currentUserProgress.attributes.ARP[index].responsesPtr.push(responseObject);

                    //add new ARP entry
                    $scope.currentUserProgress.attributes.ARP[index+1] = defaultValue;

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The ARP was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }
            }else if(surveyName == "depression")
            {
                //get the last entry index in the depression array
                let index = $scope.currentUserProgress.attributes.depression.length-1;

                //check if the depression current percent complete if is zero if so then the depression cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.depression[index].percentageComplete != "0") {

                    //update the depression by updating the percentageComplete and the timestamp and pushing last response
                    $scope.currentUserProgress.attributes.depression[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.depression[index].timestamp = timeCompleted;
                    $scope.currentUserProgress.attributes.depression[index].responsesPtr.push(responseObject);

                    //add new depression entry
                    $scope.currentUserProgress.attributes.depression[index+1] = defaultValue;

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The depression was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }
            }else if(surveyName == "MAST")
            {
                //get the last entry index in the MAST array
                let index = $scope.currentUserProgress.attributes.MAST.length-1;

                //check if the MAST current percent complete if is zero if so then the MAST cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.MAST[index].percentageComplete != "0") {
                    //update the MAST by updating the percentageComplete and the timestamp and pushing last response
                    $scope.currentUserProgress.attributes.MAST[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.MAST[index].timestamp = timeCompleted;
                    $scope.currentUserProgress.attributes.MAST[index].responsesPtr.push(responseObject);

                    //add new MAST entry
                    $scope.currentUserProgress.attributes.MAST[index+1] = defaultValue;

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The MAST was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }
            }else if(surveyName == "dependence")
            {
                //get the last entry index in the dependence array
                let index = $scope.currentUserProgress.attributes.dependence.length-1;

                //check if the dependence current percent complete if is zero if so then the dependence cannot be complete, it can be completed
                if($scope.currentUserProgress.attributes.dependence[index].percentageComplete != "0") {
                    //update the dependence by updating the percentageComplete and the timestamp and pushing last response
                    $scope.currentUserProgress.attributes.dependence[index].percentageComplete = "100";
                    $scope.currentUserProgress.attributes.dependence[index].timestamp = timeCompleted;
                    $scope.currentUserProgress.attributes.dependence[index].responsesPtr.push(responseObject);

                    //add new dependence entry
                    $scope.currentUserProgress.attributes.dependence.push(defaultValue);

                    //save users progress
                    $scope.currentUserProgress.save().then(
                        progress => console.log("User's progress updated successfully.  The dependence was marked complete on:  " + timeCompleted),
                        error => console.log("There was an error updating the user's progress.  Error: " + error)
                    );
                }

            }else{
                //console.log("Could not mark "+ surveyName + " complete!  Please try again!");
            }

        }
        else{
            //the users progress needs to be saved to the newUsersProgress object
            if(surveyName == "audit")
            {

                //get the last entry index in the audit array
                let index = $scope.newUserProgress.audit.length-1;

                //update the audit by updating the percentageComplete and the timestamp and pushing last response
                $scope.newUserProgress.audit.percentageComplete = "100";
                $scope.newUserProgress.audit.timestamp = timeCompleted;
                $scope.newUserProgress.audit.responsesPtr.push(responseObject);

            }
        }


        $scope.currentQuestionNumber = 0;
        $scope.currentPercentComplete = 0;
    };

    //utility function to check if objects are empty
    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };

    function updateSurveyPercentComplete (surveyName, elemId, responseObject){
        let percentageComplete = 0;

        //if currentUserHasProgress update the currentUserProgress, if not then need to update the audit in the newUserProgress object
        if($scope.currentUserProgress != null){
            //console.log($scope.currentUserProgress);
            if(surveyName == "audit"){

                //get the last entry index in the audit array
                let index = $scope.currentUserProgress.attributes.audit.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.audit[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                    /*console.log("index..............." + index);
                    console.log("current User progress in the audit");
                    console.log($scope.currentUserProgress);*/

                    $scope.currentUserProgress.attributes.audit[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.audit) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the audit by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.audit[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.audit[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The Audit's percentage complete was updated with the value:  " + percentageComplete +
                        " The Audit's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );

            }else if(surveyName == "GTNSGT")
            {
                //get the last entry index in the GTNSGT array
                let index = $scope.currentUserProgress.attributes.GTNSGT.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.GTNSGT[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                    /*console.log("index..............." + index);
                    console.log("current User progress in the audit");
                    console.log($scope.currentUserProgress);*/

                    $scope.currentUserProgress.attributes.GTNSGT[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.GTNSGT) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the audit by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.GTNSGT[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.GTNSGT[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The GTNSGT's percentage complete was updated with the value:  " + percentageComplete +
                        " The GTNSGT's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );

            }else if(surveyName == "howMuchHowOften")
            {
                //get the last entry index in the howMuchHowOften array
                let index = $scope.currentUserProgress.attributes.howMuchHowOften.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.howMuchHowOften[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                   /* console.log("index..............." + index);
                    console.log("current User progress in the howMuchHowOften");
                    console.log($scope.currentUserProgress);*/

                    $scope.currentUserProgress.attributes.howMuchHowOften[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.howMuchHowOften) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the howMuchHowOften by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.howMuchHowOften[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.howMuchHowOften[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The howMuchHowOften's percentage complete was updated with the value:  " + percentageComplete +
                        " The howMuchHowOften's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );

            }else if(surveyName == "familyHistory")
            {
                //get the last entry index in the familyHistory array
                let index = $scope.currentUserProgress.attributes.familyHistory.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.familyHistory[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                    /*console.log("index..............." + index);
                    console.log("current User progress in the familyHistory");
                    console.log($scope.currentUserProgress);*/

                    $scope.currentUserProgress.attributes.familyHistory[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.familyHistory) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the familyHistory by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.familyHistory[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.familyHistory[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The familyHistory's percentage complete was updated with the value:  " + percentageComplete +
                        " The familyHistory's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );
            }else if(surveyName == "myDrinking")
            {
                //get the last entry index in the myDrinking array
                let index = $scope.currentUserProgress.attributes.myDrinking.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.myDrinking[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                    /*console.log("index..............." + index);
                    console.log("current User progress in the myDrinking");
                    console.log($scope.currentUserProgress);*/

                    $scope.currentUserProgress.attributes.myDrinking[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.myDrinking) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the myDrinking by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.myDrinking[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.myDrinking[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The myDrinking's percentage complete was updated with the value:  " + percentageComplete +
                        " The myDrinking's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );
            }else if(surveyName == "otherDrugs")
            {
                //get the last entry index in the otherDrugs array
                let index = $scope.currentUserProgress.attributes.otherDrugs.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.otherDrugs[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                    /*console.log("index..............." + index);
                    console.log("current User progress in the otherDrugs");
                    console.log($scope.currentUserProgress);*/

                    $scope.currentUserProgress.attributes.otherDrugs[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.otherDrugs) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the otherDrugs by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.otherDrugs[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.otherDrugs[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The otherDrugs's percentage complete was updated with the value:  " + percentageComplete +
                        " The otherDrugs's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );
            }else if(surveyName == "ARP")
            {
                //get the last entry index in the ARP array
                let index = $scope.currentUserProgress.attributes.ARP.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.ARP[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                   /* console.log("index..............." + index);
                    console.log("current User progress in the ARP");
                    console.log($scope.currentUserProgress);*/

                    $scope.currentUserProgress.attributes.ARP[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.ARP) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the ARP by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.ARP[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.ARP[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The ARP's percentage complete was updated with the value:  " + percentageComplete +
                        " The ARP's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );
            }else if(surveyName == "depression")
            {
                //get the last entry index in the depression array
                let index = $scope.currentUserProgress.attributes.depression.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.depression[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                  /*  console.log("index..............." + index);
                    console.log("current User progress in the depression");
                    console.log($scope.currentUserProgress);
*/
                    $scope.currentUserProgress.attributes.depression[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.depression) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the depression by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.depression[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.depression[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The depression's percentage complete was updated with the value:  " + percentageComplete +
                        " The depression's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );
            }else if(surveyName == "MAST")
            {
                //get the last entry index in the MAST array
                let index = $scope.currentUserProgress.attributes.MAST.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.MAST[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                    /*console.log("index..............." + index);
                    console.log("current User progress in the MAST");
                    console.log($scope.currentUserProgress);*/

                    $scope.currentUserProgress.attributes.MAST[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.MAST) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the depression by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.MAST[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.MAST[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The MAST's percentage complete was updated with the value:  " + percentageComplete +
                        " The MAST's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );
            }else if(surveyName == "dependence")
            {
                console.log("Attempting to update the dependence survey.");
                //get the last entry index in the dependence array
                let index = $scope.currentUserProgress.attributes.dependence.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                //as well as push the current question response into the responsesPtr array of the Progress Object
                if(!($scope.currentUserProgress.attributes.dependence[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;

                    /*console.log("index..............." + index);
                    console.log("current User progress in the dependence");
                    console.log($scope.currentUserProgress);*/

                    $scope.currentUserProgress.attributes.dependence[index].responsesPtr.push(responseObject);
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.dependence) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the dependence by updating the percentageComplete and current element id and pushing responseObject in array
                $scope.currentUserProgress.attributes.dependence[index].percentageComplete = percentageComplete;
                $scope.currentUserProgress.attributes.dependence[index].currentElement = elemId;


                //save users progress
                $scope.currentUserProgress.save().then(
                    progress => console.log("User's progress updated successfully. The dependence's percentage complete was updated with the value:  " + percentageComplete +
                        " The dependence's current element was updated with the value: " + elemId),
                    error => console.log("There was an error updating the user's progress.  Error: " + error)
                );
            }else{
                console.log("Could not update "+ surveyName + "! Please try again!");
            }
        }
        else{
            if(surveyName == "audit"){

                //get the last entry index in the audit array
                let index = $scope.newUserProgress.audit.length-1;

                //check if the user clicks same answer twice by comparing elmId with last processed element, if not its okay to update current question number
                if(!($scope.newUserProgress.audit[index].currentElement == elemId)){
                    $scope.currentQuestionNumber+=1;
                }

                //calculate percentage complete
                percentageComplete = Math.round(($scope.currentQuestionNumber/TOTAL_NUM_QUESTIONS.audit) * 100);

                //let scope know the current percentage complete to communicate to the user
                $scope.currentPercentComplete = percentageComplete;

                //update the audit by updating the percentageComplete and current element id and pushing last response
                $scope.newUserProgress.audit[index].percentageComplete = percentageComplete;
                $scope.newUserProgress.audit[index].currentElement = elemId;
                $scope.newUserProgress.audit[index].responsesPtr.push(responseObject);

            }
        }



    };

    //following function is responsible for saving the users progress object in the database, once after completion of
    //each survey - ehenl001
    $scope.updateUserProgress = function(elmId, responseObject) {

        //get abbreviated element object from elements const
        $scope.currentElement_abbreviated = getAbbrevElementObj(elmId);

        //if getAbbrevElementObj returns a valid object continue updating user progress
        //if not do nothing
        if($scope.currentElement_abbreviated){

            //check if element is last in current survey
            if($scope.currentElement_abbreviated.isLast){
                markSurveyComplete($scope.currentElement_abbreviated.survey,responseObject);
            }else{
                //if element is not last update percentage completed in the current survey
                updateSurveyPercentComplete($scope.currentElement_abbreviated.survey, elmId, responseObject);
            }
        }

    };


    //following function gets the users progress object from the database
    function getUserProgress(usrObject, updateProgressFromNew, updateProgressFromTemp){

        $scope.progressSrv.getUserProgress(usrObject).then(
            progress => {
                $scope.currentUserProgress = progress;
                /*console.log("retrieving users progress..............");
                console.log($scope.currentUserProgress);*/
                if(updateProgressFromNew){
                    transferUserProgress(true);
                }else if(updateProgressFromTemp){
                    transferUserProgress(false);
                }

            },
            error => console.log(error)
        );
    }

    // -----------------------------------------------------------------------------------------------------------------
    // function called when a user answers a question answer element
    // -----------------------------------------------------------------------------------------------------------------

    $scope.handleQuestionAnswer = function(elemID, answer, numItems){
        $scope.next();

        let resObj = { elemID: elemID, answer: [answer] };

        if($scope.isMenu(elemID) || ($scope.isMenuCheck(elemID))){
            //ensure the menuChoice is a numeric value and store to be used later
            var choiceIndex = Number(answer);

            //if the menu has been encountered for the first time
            if(!$scope.menuIdsVisited.includes(elemID)){

                //add the current menu to the list of menus visited
                $scope.menuIdsVisited.push(elemID);

                //prepare the tempArr, used for initializing the menu's flags
                var tempArr = [];

                //build the initial menuFlag list for the corresponding menu with id: elemID
                for(var i = 0; i < numItems; i++){
                    if(i == choiceIndex){
                        tempArr[i] = true;
                    }else {
                        tempArr[i] = false;
                    }
                }

                //add the newly encountered menu to available menus array
                $scope.availableMenus.push({
                    "menuId": elemID,
                    "menuFlags": tempArr
                });

                //set the current menu to the current menu
                $scope.currentMenu = {
                    "menuId": elemID,
                    "menuFlags": tempArr
                };
            }
            else{
                //the menu has already been encountered
                //look for the correct element id and set the flag of that corresponding flag menu to true
                for(var i = 0; i < $scope.availableMenus.length; i++){
                    //set the flag
                    if($scope.availableMenus[i].menuId === elemID){
                        $scope.availableMenus[i].menuFlags[choiceIndex] = true;
                    }

                    //if current menu is different from incoming menu set current menu to incoming menu
                    $scope.currentMenu = $scope.availableMenus[i];
                }
            }

        }else{
            $scope.updateUserProgress(elemID, resObj);
        }


        //if there is a currentUser save answer
        if($scope.currentUser){
            /*console.log("currentUser*****************************************************");
             console.log($scope.currentUser);*/
            Parse.Cloud.run('addResponse', { elemID: elemID, answer: [answer] });
            if($scope.tempUser){
                //console.log("temp user pushing new answer in tempRes");
                if($scope.tmpRes.length > 0){
                    for(var i = 0; i > $scope.tmpRes.length; i++ ){
                        if(!$scope.tmpRes[i].elemID == elemID){
                            $scope.tmpRes.push({
                                elemID: elemID,
                                answer: answer
                            });
                        }else{
                            $scope.tmpRes[i] = {
                                elemID: elemID,
                                answer: [answer]
                            }
                        }
                    }
                }else{
                    $scope.tmpRes.push({
                        elemID: elemID,
                        answer: answer
                    });
                }

            }
        }else{
            //if there is not currentUser store answer in a temporary array
            $scope.tmpRes.push({
                elemID: elemID,
                answer: answer
            })
        }

        //todo: add responses upon successful login
        //todo: add responses upon successful registration
        //todo: create a parse cloud function addMultipleResponses
        // var ansElem = $scope.responses.find(function(elem){
        //     return elem.question == elemId;
        // });

        // if (ansElem === undefined) {
        //     $scope.responses.push({"question": elemId, "answer": answer});
        // } else {
        //     ansElem.answer = answer;
        //     if($scope.auditAnswer < 10) {
        //         $scope.auditAnswer++;
        //         console.log("Audit Answered: "+ $scope.auditAnswer);
        //     }
        // }

        // $scope.progressValue = Math.max(($scope.auditAnswer / 10) * 100, 0);
        // console.log($scope.currentQuestionnaire + " progress : " + $scope.progressValue);

        $scope.$root.userResponse = "";
    };
    $scope.handleLRE = function(){
        $scope.next();
        $scope.$root.userResponse = "";
    };



    $scope.getRangeLabel = function (num){
        $scope.rangeLabel = $scope.readinessLabels[num];
    };
    $scope.handleRangeSliderElement = function(elemID){
        let res = $scope.$root.userResponse;
        $scope.next();

        Parse.cloud.run("addResponse", {elemID: elemID, answer: res});

        $scope.$root.userResponse = "";

    };


    $scope.menuIdsVisited = [];
    $scope.availableMenus = [];
    $scope.currentMenu = {};

    $scope.handleMenuItemSelection = function(numItems, elemID, menuChoice){

        //progress to next element in the DCU
        //$scope.next();

        //ensure the menuChoice is a numeric value and store to be used later
        var choiceIndex = Number(menuChoice);

        //Parse.Cloud.run('addResponse', { elemID: elemID, answer: [menuChoice] });


        //if the menu has been encountered for the first time
        if(!$scope.menuIdsVisited.includes(elemID)){

            //add the current menu to the list of menus visited
            $scope.menuIdsVisited.push(elemID);

            //prepare the tempArr, used for initializing the menu's flags
            var tempArr = [];

            //build the initial menuFlag list for the corresponding menu with id: elemID
            for(var i = 0; i < numItems; i++){
                if(i == choiceIndex){
                    tempArr[i] = true;
                }else {
                    tempArr[i] = false;
                }
            }

            //add the newly encountered menu to available menus array
            $scope.availableMenus.push({
                "menuId": elemID,
                "menuFlags": tempArr
            });

            //set the current menu to the current menu
            $scope.currentMenu = {
                "menuId": elemID,
                "menuFlags": tempArr
            };
        }
        else{
            //the menu has already been encountered
            //look for the correct element id and set the flag of that corresponding flag menu to true
            for(var i = 0; i < $scope.availableMenus.length; i++){
                //set the flag
                if($scope.availableMenus[i].menuId === elemID){
                    $scope.availableMenus[i].menuFlags[choiceIndex] = true;
                }

                //if current menu is different from incoming menu set current menu to incoming menu
                $scope.currentMenu = $scope.availableMenus[i];
            }
        }

       /* console.log("******************************************************************************************");
        console.log($scope.availableMenus);*/

        //clear the user's response (the menu item selected)
        //$scope.$root.userResponse = "";


    };


    $scope.checkVisited = function (elemID, menuChoice) {

        var cssClass = '';

        //check to see if we have encountered this menu if not then the items all should have the default class
        if($scope.menuIdsVisited.includes(elemID)){
            //traverse the available menus and find the appropriate menu flag, assign the class based on the flag
            for(var i = 0; i < $scope.availableMenus.length; i++){
                if($scope.availableMenus[i].menuId === elemID){
                    cssClass = $scope.availableMenus[i].menuFlags[menuChoice] ? 'visitedMenuItem': 'defaultMenuItem';
                }
            }
        }
        else{
            cssClass = 'defaultMenuItem';
        }

        return cssClass;
    };

    $scope.getProgressValue = function () {
        return "p"+$scope.progressValue;
    };

    // -----------------------------------------------------------------------------------------------------------------
    // function called when a user answers a checkbox element
    // -----------------------------------------------------------------------------------------------------------------

    $scope.checkboxExists = function(item) {
        if($scope.$root.userResponse) return $scope.$root.userResponse.indexOf(item) > -1;
        else return false;
    };
    $scope.handleCheckbox = function(elemId, item){
        if($scope.$root.userResponse == null) $scope.$root.userResponse = [];

        var idx = $scope.$root.userResponse.indexOf(item);
        if (idx > -1) $scope.$root.userResponse.splice(idx, 1);
        else $scope.$root.userResponse.push(item);

        var ansElem = $scope.responses.find(function(elem){
            return elem.question == elemId;
        });

        if (ansElem === undefined) $scope.responses.push({"question": elemId, "answer": $scope.$root.userResponse});
        else ansElem.answer = $scope.$root.userResponse;

        //console.log($scope.$root.userResponse);
    };
    /*$scope.handleTabularInput = function(elemID){

     $scope.next();

     let response = $scope.$root.userResponse;
     let answer = new Array();
     let size = 0, keyA, keyB, i=0;

     for (keyA in response) {
     if (response.hasOwnProperty(keyA)){
     let content = new Array();
     for (keyB in response[keyA]){
     if (response[keyA].hasOwnProperty(keyB)){
     content.push(response[keyA][keyB]);
     }
     }


     answer[i] = content;
     i++;
     }
     }

     /!* Parse.Cloud.run('addResponse', { elemID: elemID, answer: answer });*!/
     };*/
    // -----------------------------------------------------------------------------------------------------------------
    // 'defaults' a response when visiting a question already answered
    // -----------------------------------------------------------------------------------------------------------------

    $scope.$root.updateUserResponseFromLocal = function(elemId) {
        var ansElem = $scope.responses.find(function(elem) {
            return elem.question == elemId;
        });

        if (ansElem === undefined) $scope.$root.userResponse = null;
        else $scope.$root.userResponse = ansElem.answer;
    };

    // -----------------------------------------------------------------------------------------------------------------
    // stores error messages and displays them when added
    // -----------------------------------------------------------------------------------------------------------------

    $scope.alerts = [];
    $scope.addAlert = function(alert) {
        $scope.alerts.push(alert);
        $timeout(function(){ $scope.alerts.splice($scope.alerts.indexOf(alert), 1); }, 2500);
    };

    // -----------------------------------------------------------------------------------------------------------------
    // simple helper function that removes from 'arr' element at 'index'
    // -----------------------------------------------------------------------------------------------------------------

    $scope.removeElement = function(arr, index) {
        arr.splice(index, 1);
    };

    // -----------------------------------------------------------------------------------------------------------------
    // called when the user clicks login
    // -----------------------------------------------------------------------------------------------------------------

    // $scope.loginButton = function () {
    //     var panel = $scope.widget.userMenu;
    //     var cameraMenu = $scope.widget.cameraMenu;
    //     var cameraButton = $scope.widget.cameraButton;
    //     var pauseButton = $scope.widget.pauseButton;
    //
    //     panel.classes['userMenu-hidden'] = !panel.classes['userMenu-hidden'];
    //     cameraMenu.classes['cameraMenu-hidden'] = true;
    //
    //     if(panel.classes['userMenu-hidden']) {
    //         if (cameraButton.classes['cameraButton-hidden'])
    //             cameraMenu.classes['cameraMenu-hidden'] = false;
    //     }
    // };

    // -----------------------------------------------------------------------------------------------------------------
    // user related models, profile with answers, credentials, etc.
    // -----------------------------------------------------------------------------------------------------------------

    $scope.responses = [];
    $scope.$root.userResponse = "hello";
    //$scope.credentials = { firstname: "", username: "", password: "", email: "", education: "", gender: "", dateOfBirth:"", age: "", weight: "", height: "", ethnicity: "", race: "", maritalstatus: "", fp_email: "", fp_DOB: "" };

    // -----------------------------------------------------------------------------------------------------------------
    // called when the user clicks the register button. registers the user into the server
    // -----------------------------------------------------------------------------------------------------------------


    //A function that will transfer the newUsersProgress to currentUserProgress upon login
    function transferUserProgress(xfrFromNewUser){

        let tmpIndex = 0;

        //get last entry in audit array in current UserProgress
        let auditIndx = $scope.currentUserProgress.attributes.audit.length - 1;
        //console.log("last audit index:  " + auditIndx);

        //check if we need to transfer from new user progress if not then check if we need to transfer from tempUser Progress
        if(xfrFromNewUser){
            //update the current user Progress from new user progress object
            $scope.currentUserProgress.attributes.audit[auditIndx] = $scope.newUserProgress.audit;
            /*console.log("pushing via new user progress:  ");
            console.log(typeof $scope.newUserProgress.audit.percentageComplete);*/
        }else {

            if($scope.tempUserProgress.attributes.audit.length > 1){
                let x = $scope.tempUserProgress.attributes.audit.length - 1;
                let audit = $scope.tempUserProgress.attributes.audit[x];
                if( audit.timestamp ==="" && audit.percentageComplete ==="0"){
                    tmpIndex = x - 1;
                }else{
                    tmpIndex = x;
                }
            }


            /*console.log("currentUserProgress: ");
             console.log($scope.currentUserProgress.attributes.audit[auditIndx]);
             console.log("audit index: ");
             console.log(auditIndx);

             console.log("tempUserProgress: ");
             console.log($scope.tempUserProgress.attributes.audit);
             console.log("tmp index: ");
             console.log(tmpIndex);
             */

            //update the current user Progress from new temp user progress object
            $scope.currentUserProgress.attributes.audit[auditIndx] = $scope.tempUserProgress.attributes.audit;

            //save the current user progress
            //save users progress
            //console.log( $scope.currentUserProgress);
            $scope.currentUserProgress.save().then(
                progress => console.log("Current users progress updated from temp user complete!"),
                error => console.log("There was an error updating the user's progress from temp user.  Error: " + error)
            );

            /*console.log("pushing via temp user progress:  ");
            console.log(typeof $scope.newUserProgress.audit.percentageComplete);*/

            //clear temp scope variables
            $scope.tempUser = {};
            $scope.tempUserProgress = {};
        }





    };

    //helper function to transfer temp users responses to current user in DB
    function transferResFromTemp(){
        for(var i = 0; i < $scope.tmpRes.length; i++){
            Parse.Cloud.run('addResponse', { elemID: $scope.tmpRes[i].elemID, answer: [$scope.tmpRes[i].answer] });
        }

        $scope.tmpRes = [];
    }

    $scope.register = () => {
        //$scope.credentials.responses = $scope.responses;

        $scope.credentials.tempUser = false;

        AuthService.register($scope.credentials).then(
            success => {
                $scope.currentUser = AuthService.currentUser();
                $scope.addAlert({
                    style: "alert-success",
                    type: "Success!",
                    message: "Your account has been created!"
                });

                $scope.mode.loggingIn = false;
                $scope.mode.register = false;
                $scope.mode.loggingOut = false;
                $scope.mode.forgotPW = false;
                // $scope.mode.forgotUN = false;
                $scope.mode.loginActivated = false;
                $scope.mode.updatePW = false;
                $scope.mode.isLoggedIn = true;
                $scope.mode.isTempUser =  $scope.currentUser.object.attributes.tempUser;

                $scope.userGivenName = success.attributes.firstName;

                if($scope.tmpRes.length > 0){
                    transferResFromTemp();
                }

                //create new progress object for the new user and set it to the currentUserProgress
                $scope.progressSrv.createProgress($scope.currentUser.object, $scope.currentUserProgress.attributes).then(
                    progress => {

                        $scope.currentUserProgress = {};
                        $scope.currentUserProgress = progress;
                       /* console.log("User Progress Created Successfully");
                        console.log($scope.currentUserProgress);*/
                    },
                    error => {
                        console.log("unsuccessful adding new progress");
                    }
                );
            },
            error => {
                $scope.currentUser = AuthService.currentUser();
                $scope.addAlert({
                    style: "alert-danger",
                    type: "Error:",
                    message: error
                });
            });
    };




    // -----------------------------------------------------------------------------------------------------------------
    // called when the user clicks the login button. logins the user into the site and creates a JWT
    // -----------------------------------------------------------------------------------------------------------------

    $scope.login = () => AuthService.login($scope.credentials).then(
        success => {
            //get previous User Object for Progress Obj transfer prep
            $scope.tempUser = $scope.currentUser;
            $scope.tempUserProgress = $scope.currentUserProgress;
            $scope.currentUser = AuthService.currentUser();
            $scope.mode.loggingIn = false;
            $scope.mode.register = false;
            $scope.mode.loggingOut = false;
            $scope.mode.forgotPW = false;
            // $scope.mode.forgotUN = false;
            $scope.updatePW = false;
            $scope.mode.loginActivated = false;
            $scope.mode.isLoggedIn = true;


            //todo: replace with addMultipleResponse when completed
            if($scope.tmpRes.length > 0){
                transferResFromTemp();
            }

            $scope.userGivenName =  $scope.currentUser.object.attributes.firstName;
            $scope.mode.isTempUser = $scope.currentUser.object.attributes.tempUser;

            //if the current user is not temp and temp user is temp then set
            //func sign:  getUserProgress(usrObject, updateProgressFromNew - bool, updateProgressFromTemp - bool)

            if (!$scope.currentUser.object.attributes.tempUser && $scope.tempUser.object.attributes.tempUser){
                //get the users progress when logged in successfully
                getUserProgress($scope.currentUser.object, false, true);
            }else{
                //get the users progress when logged in successfully
                getUserProgress($scope.currentUser.object, true, false);
            }

            //Parse.Cloud.run("transferResFromTemp", {tempUserID: $scope.tempUser.object.id});



            $scope.addAlert({
                style: "alert-success",
                type: "Success!",
                message: "You have successfully logged in!"
            });

        },
        error => {
            $scope.currentUser = AuthService.currentUser();
            $scope.addAlert({
                style: "alert-danger",
                type: "Error:",
                message: error
            });
        }
    );


    // -----------------------------------------------------------------------------------------------------------------
    // function called when the user clicks logout. removes JWT from the browser
    // -----------------------------------------------------------------------------------------------------------------

    $scope.logout = () => AuthService.logout().then(
        success => {
            $scope.currentUser = AuthService.currentUser();

            $scope.mode.loggingIn = false;
            $scope.mode.register = false;
            $scope.mode.loggingOut = false;
            $scope.mode.forgotPW = false;
            $scope.mode.forgotUN = false;
            $scope.mode.loginActivated = false;
            $scope.mode.isLoggedIn = false;
            $scope.userGivenName = "";


            $scope.addAlert({
                style: "alert-success",
                type: "Success!",
                message: "You have successfully logged out."
            });
            $state.go('home');
        },
        error => {
            $scope.currentUser = AuthService.currentUser();
            $scope.addAlert({
                style: "alert-danger",
                type: "Error:",
                message: error
            });
            $scope.isLoggedIn = true;
        }
    );

    // -----------------------------------------------------------------------------------------------------------------
    // function called whenever the answers of the user need to be saved onto the server
    // -----------------------------------------------------------------------------------------------------------------

    $scope.save = function() {
        if(!$scope.currentUser) return;

        $scope.currentUser.responses = $scope.responses;
        $scope.currentUser.save();
    };
    //new approach to survey list interaction
    // var selection;
    // $scope.setSelection = function(string_value) {
    //     // document.getElementsById(string_value);
    //     selection = string_value;
    // }
    // $scope.getSelection = function() {
    //     return selection;
    // }


    //Solution to print pages by url. (requires a url of the html file to be printed.
    function closePrint () {
        document.body.removeChild(this.__container__);
    }

    function setPrint () {
        this.contentWindow.__container__ = this;
        this.contentWindow.onbeforeunload = closePrint;
        this.contentWindow.onafterprint = closePrint;
        this.contentWindow.focus(); // Required for IE
        this.contentWindow.print();
    }

    $scope.printPage = function(sURL) {
        var oHiddFrame = document.createElement("iframe");
        oHiddFrame.onload = setPrint;
        oHiddFrame.style.visibility = "hidden";
        oHiddFrame.style.position = "fixed";
        oHiddFrame.style.right = "0";
        oHiddFrame.style.bottom = "0";
        oHiddFrame.src = sURL;
        document.body.appendChild(oHiddFrame);
    };
    // -----------------------------------------------------------------------------------------------------------------
    // function called to print properly the pages behind the virtual character
    // -----------------------------------------------------------------------------------------------------------------

    $scope.printContent = function()
    {
        var printWindow = window.open("", "_blank", "");
        printWindow.document.open();
        printWindow.document.write($rootScope.contentData.html);
        printWindow.document.close();
        printWindow.focus();
        //The Timeout is ONLY to make Safari work, but it still works with FF, IE & Chrome.
        setTimeout(function() {
            printWindow.print();
            printWindow.close();
        }, 100);
    };

    // -----------------------------------------------------------------------------------------------------------------
    // model containing the bar graph information to be displayed on the content view of the counseling site
    // -----------------------------------------------------------------------------------------------------------------

    $scope.redirect = function(location) {
        // store in browser cache the location
        localStorageService.set("redirect-page", location);
        $window.location.reload();
    };


    $scope.redirectNewTab = function (newTabUrl) {
        $window.open(newTabUrl, '_blank');
    };

    $scope.privacyOpen = function () {
        //console.log('opening privacy pop up');
        var modalInstance = $uibModal.open({
            templateUrl: 'views/partials/popup/privacy.popup.view.html',
            windowClass: 'center-privacy-popup',
            controller: 'privacyPopUpController',
            scope: $scope
        });
    };

    $scope.aboutUsOpen = function () {
        //console.log('opening aboutUs pop up');
        var modalInstance = $uibModal.open({
            templateUrl: 'views/partials/popup/aboutUs.popup.view.html',
            windowClass: 'center-aboutUs-popup',
            controller: 'aboutUsPopUpController',
            scope: $scope
        });
    };

    $scope.adPolicyOpen = function () {
        //console.log('opening adPolicy pop up');
        var modalInstance = $uibModal.open({
            templateUrl: 'views/partials/popup/adPolicy.popup.view.html',
            windowClass: 'center-adPolicy-popup',
            controller: 'adPolicyPopUpController',
            scope: $scope
        });
    };

    $scope.copyrightOpen = function () {
        //console.log('opening copyright pop up');
        var modalInstance = $uibModal.open({
            templateUrl: 'views/partials/popup/copyright.popup.view.html',
            windowClass: 'center-copyright-popup',
            controller: 'copyrightPopUpController',
            scope: $scope
        });
    };

    $scope.limitationsOpen = function () {
        //console.log('opening limitations pop up');
        var modalInstance = $uibModal.open({
            templateUrl: 'views/partials/popup/limitations.popup.view.html',
            windowClass: 'center-limitations-popup',
            controller: 'limitationsPopUpController',
            scope: $scope
        });
    };

    $scope.close = function () {
        $uibModal.close({});
    };

    $scope.hideLogin = function (){
        if($scope.showLogin){
            $scope.showLogin = false;
        }
        else{
            $scope.showLogin = true;
        }
    };

    $scope.labels = [['2006', '2007', '2008', '2009', '2010', '2011', '2012'], [], []];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.bacTableResponse = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
    $scope.handlePersonalBACTable = function(){


        $scope.next();

       /* console.log('handlePersonalBACTable');
        console.log(elemID);

        console.log($scope.bacTableResponse);*/


        Parse.Cloud.run('addResponse', { elemID: elemID, answer: bacTableResponse });
    };

    $scope.surveyCompleted = function (formName) {
        switch(formName) {
            case "The screening questionnaire you took before registering":
                if($scope.currentUserProgress.attributes.audit[0].timestamp){return true;}
                else return false;
                break;
            case "How much and how often you drink":
                if($scope.currentUserProgress.attributes.howMuchHowOften[0].timestamp){return true;}
                else return false;
                break;
            case "What you like and don't like about drinking":
                if($scope.currentUserProgress.attributes.GTNSGT[0].timestamp){return true;}
                else return false;
                break;
            case "Age you started drinking and family history of problems":
                if($scope.currentUserProgress.attributes.familyHistory[0].timestamp){return true;}
                else return false;
                break;
            case "How much you drink":
                if($scope.currentUserProgress.attributes.myDrinking[0].timestamp){return true;}
                else return false;
                break;
            case "Other drug use":
                if($scope.currentUserProgress.attributes.otherDrugs[0].timestamp){return true;}
                else return false;
                break;
            case "Alcohol-related problems":
                if($scope.currentUserProgress.attributes.ARP[0].timestamp){return true;}
                else return false;
                break;
            case "A screening for depressed mood":
                if($scope.currentUserProgress.attributes.depression[0].timestamp){return true;}
                else return false;
                break;
            case "Chances of success with moderate drinking":
                if($scope.currentUserProgress.attributes.MAST[0].timestamp){return true;}
                else return false;
                break;
            case "How much you've come to depend on drinking":
                if($scope.currentUserProgress.attributes.dependence[0].timestamp){return true;}
                else return false;
                break;
            default:
                return false;
        }
    };

    $scope.myDrinks = {
        beer: [],
        wine: [],
        liquor: [],
        hours: []
    };

    $scope.saveMDRes = function(){
        let ans = [];
        ans[0] = $scope.myDrinks;
        Parse.Cloud.run('addResponse', {elemID: "wPFh7S9lhn", answer: ans}).then(
            success => {$scope.Success("Your responses have been saved successfully")},
            error => {$scope.Error("Your responses were not saved. Error: " + error)}
        );
    };

    $scope.peakDrink = {
        beer: [],
        wine: [],
        liquor: [],
        hours: []
    };

    $scope.savePeakRes = function () {
        let ans = [];
        ans[0] = $scope.peakDrink;
        Parse.Cloud.run('addResponse', {elemID: "f8B0ihkAKr", answer: ans}).then(
            success => {$scope.Success("Your responses have been saved successfully")},
            error => {$scope.Error("Your responses were not saved. Error: " + error)}
        );
    };
    
    $scope.testRegistration = function (){

        for(var i = 0; i < $scope.raceType.length; i++){
            if($scope.raceType[i].checked){
                $scope.credentials.race.push($scope.raceType[i].name);
            }
        }

        $scope.credentials.maritalstatus = $scope.selectedMaritalStatus;
        $scope.credentials.education = $scope.selectedEducation;

        //console.log(typeof $scope.selectedEthnicity);
        $scope.credentials.ethnicity = $scope.selectedEthnicity;
        //console.log(typeof $scope.credentials.dateOfBirth);
        //console.log($scope.credentials.dateOfBirth);
        $scope.credentials.gender = $scope.selectedGender;

        var userAge= parseInt($scope.getAge());
        var userHeight= Number($scope.getHeight());
        $scope.credentials.age = userAge;
        $scope.register();

    };

    init();

    // $scope.registerOpen = function () {
    //     console.log('opening register pop up');
    //     var modalInstance = $uibModal.open({
    //         templateUrl: 'views/partials/popup/register.popup.view.html',
    //         controller: 'registerPopUpController',
    //         windowClass: 'center-register-popup',
    //         scope: $scope
    //     });
    // };

    /*$scope.goBackButton = function(){
     $scope.$root.userResponse = -99;
     $scope.next();
     };*/

    /*$scope.loginActivation = function(){
     var modalInstance = $uibModal.open({
     templateUrl: 'views/parti als/popup/loginNEW.popup.view.html',
     windowClass: 'center-loginNEW-popup',
     scope: $scope
     });
     };*/

    $scope.deactivateLoginPopup = function(){
        $scope.mode.loggingIn = false;
        $scope.mode.register = false;
        $scope.mode.loggingOut = false;
        $scope.mode.forgotPW = false;
        // $scope.mode.forgotUN = false;
        $scope.mode.loginActivated = false;
        $scope.mode.updatePW =false;

    };

    $scope.loginActivation = function(){
        $scope.mode.loggingIn = false;
        $scope.mode.register = false;
        $scope.mode.loggingOut = false;
        $scope.mode.forgotPW = false;
        // $scope.mode.forgotUN = false;
        $scope.mode.loginActivated = true;
        $scope.mode.optionsActivated = true;
        $scope.mode.updatePW =false;
    };

    $scope.loginLoad = function(){
        $scope.mode.loggingIn = true;
        $scope.mode.register = false;
        $scope.mode.loggingOut = false;
        $scope.mode.forgotPW = false;
        // $scope.mode.forgotUN = false;
        $scope.mode.optionsActivated = false;
        $scope.mode.updatePW =false;
    };

    $scope.registrationLoad = function(){
        $scope.mode.loggingIn = false;
        $scope.mode.register = true;
        $scope.mode.loggingOut = false;
        $scope.mode.forgotPW = false;
        // $scope.mode.forgotUN = false;
        $scope.mode.optionsActivated = false;
        $scope.mode.updatePW =false;
    };

    $scope.forgotPWLoad = function(){
        $scope.mode.loggingIn = false;
        $scope.mode.register = false;
        $scope.mode.loggingOut = false;
        $scope.mode.forgotPW = true;
        // $scope.mode.forgotUN = false;
        $scope.mode.updatePW =false;
    };

    $scope.updatePWLoad = function(){
        $scope.mode.loggingIn = false;
        $scope.mode.register = false;
        $scope.mode.loggingOut = false;
        $scope.mode.forgotPW = false;
        // $scope.mode.forgotUN = false;
        $scope.mode.updatePW =true;
    };

    // $scope.forgotUNLoad = function(){
    //     $scope.mode.loggingIn = false;
    //     $scope.mode.register = false;
    //     $scope.mode.loggingOut = false;
    //     $scope.mode.forgotPW = false;
    //     $scope.mode.forgotUN = true;
    // };

    $scope.fpUser = {};

    //function that helps validate email
    function checkEmail(email)
    {
        //find user by email
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");

        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
        {
            window.alert("Failed in the forgot pw before email");
            return false;
        }
            return true;

    }

    //new function reset user's password
    $scope.forgotPassword = () => {
        console.log("going to see if email in db");
        var emailIsValid = checkEmail($scope.credentials.fp_email);

        if (!emailIsValid)
        {
            window.alert("Not a valid e-mail address");
            return false;
        }

        $scope.usrSrvc.validateUserbyEmail($scope.credentials.fp_email).then(
            success => {
                Parse.User.requestPasswordReset($scope.credentials.fp_email, {
                    success:function() {
                        $scope.mode = {
                            "loggingIn": false,
                            "register": false,
                            "loggingOut": false,
                            "isLoggedIn": false,
                            "forgotPW": false,
                            // "forgotUN": false,
                            "loginActivated": false,
                            "optionsActivated": false,
                            "updatePW": false,
                            "isTempUser": true
                        };
                        window.alert("Password reset link has been sent to "+ $scope.credentials.fp_email);
                        return true;
                    },
                    error:function(error) {
                        window.alert(error.message);
                        return false;
                    }
                });
            },
            error => {return false;}
        );


    };


    //function to reset user's PW
    $scope.resetPW = function(){
        //console.log("Going into reset PW function");
        var userEmail = $scope.credentials.fp_email;
        var userDOB = $scope.credentials.fp_DOB;
/*        // if ((userEmail==$scope.credentials.email) && (userDOB==$scope.credentials.dateOfBirth))
        // {
        //     $scope.addAlert({
        //         style: "alert-success",
        //         type: "Success!",
        //         message: "Email and Date of Birth match"
        //     });
        //     console.log("Credentials match!!!");
        //     $scope.mode.loggingIn = false;
        //     $scope.mode.register = false;
        //     $scope.mode.loggingOut = false;
        //     $scope.mode.forgotPW = false;
        //     // $scope.mode.forgotUN = false;
        //     $scope.updatePW = true;
        //     $scope.mode.loginActivated = false;
        //     $scope.mode.isLoggedIn = false;
        //
        // }
        // else
        // {
        //     $scope.addAlert({
        //         style: "alert-danger",
        //         type: "Error:",
        //         message: error
        //     });
        //     console.log("Sorry, credentials do NOT match!");
        // }*/
        /*$scope.usrSrvc.updatePW(userEmail, userDOB).then(
            foundUser =>{
                $scope.fpUser = foundUser;
                /!*console.log("User was found in usrSrv.updatePW");
                console.log(foundUser);*!/
                $scope.updatePWLoad();
            },
            error => console.log("User not found.  Error: " + error)
        );*/
    };

    $scope.changePW = function(){
        if($scope.credentials.password === $scope.credentials.confirmpassword)
        {
           /* console.log("in Change PW webgl................");
            console.log($scope.fpUser);*/
            Parse.Cloud.run('updatePW', {updateUsr: $scope.fpUser.id, newPW: $scope.credentials.password}).then(
                success => console.log(success),
                error => console.log(error)
            );

            /*$scope.usrSrvc.changePW($scope.credentials.password, $scope.fpUser).then(
                success => {
                    console.log("Success in changePW");
                    $scope.loginLoad();
                },
                error =>  {
                    console.log({
                        style: "alert-danger",
                        type: "Error:",
                        message: "Problem: " + error
                    });
                }
            );*/

        }
        else
        {
            $scope.addAlert({
                style: "alert-danger",
                type: "Error:",
                message: "Sorry! Passwords do not match! Please try again."
            });
        }
    };


    $scope.educationType = [
        'Some high school',
        'High school graduate or equivalent',
        'Trade or Vocational degree',
        'Some college',
        'Associate degree',
        'Bachelor\'s degree',
        'Graduate or professional degree'
    ];


    $scope.selectedEducation = "";

    $scope.genderType = [
        'Male',
        'Female',
        'Other'
    ];
    $scope.selectedGender =  "";

    $scope.ethnicityType = [
        'Hispanic or Latino',
        'Not Hispanic or Latino'
    ];

    $scope.selectedEthnicity = "";

    /*$scope.raceType = [
     'American Indian or Alaska Native',
     'Asian',
     'Black or African Descent',
     'Native Hawaiian or Other Pacific Islander',
     'White'
     ];*/
    $scope.raceType = [
        {
            "name": "American Indian or Alaska Native",
            "checked": false
        },
        {
            "name": "Asian",
            "checked": false
        },
        {
            "name": "Black or African Descent",
            "checked": false
        },
        {
            "name": "Native Hawaiian or Other Pacific Islander",
            "checked": false
        },
        {
            "name": "White",
            "checked": false
        }
    ];



    $scope.selectedRace = [];

    $scope.maritalType = [
        'Single, Not Married',
        'Married',
        'Living with partner',
        'Separated',
        'Divorced',
        'Widowed',
        'Prefer not to answer'
    ];
    $scope.selectedMaritalStatus =   "";

    $scope.selectedAnwser = "";

    $scope.changeEthnicity = function(val){
        $scope.selectedEthnicity = val;
    };

    $scope.changeGender = function(val){
        $scope.selectedGender = val;
    };

    $scope.changeMaritalStatus = function(val){
        $scope.selectedMaritalStatus = val;
    };

    $scope.changeEducation = function(val){
        $scope.selectedEducation = val;
    };

    //function for generating age from birthday
    $scope.getAge = function(){
        var birthday = $scope.credentials.dateOfBirth;
        var today = new Date();
        var age = ((today - birthday) / (31557600000));
        age = Math.floor( age );
        return age;
    };

    //function for generating height from feet and inches entered
    $scope.getHeight = function(){
        var height_ft = $scope.credentials.height.feet;
        height_ft = Number(height_ft);
        var height_in = $scope.credentials.height.inches;
        height_in = Number(height_in);
        $scope.credentials.height.total = ((height_ft * 12) + height_in);
    };

}