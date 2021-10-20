var moodStart, 
    genre,
    theme,

    properCharacter,
    aGeneralCharacter, 
    generalCharacter, 
    generalCharacters, 
    characterDescriptions, 
    groupNames,

    objectives,
    peopleObjectives,
    locationObjectives,

    aInSetting, 
    aOnSetting, 
    settingDescription, 
    setting,

    combination,
    doingTo;

doingTo = [
    "trying to",
    "attempting to"
];

combination = [
    "mixup",
    "mashup",
    "combination",
    "blend"
];

peopleObjectives = [
    "befriend",
    "destroy",
    "kill",
    "take down",
    "save",
    "talk to",
    "nutmeg",
    "roast",
    "cook",
    "alienate",
    "isolate"
];

locationObjectives = [
    "infiltrate",
    "enter",
    "find",
    "destroy",
    "get to",
    "clean up"
];

theme = [
    "survival",
    "cooking",
    "farming",
    "love",
    "death",
    "power",
    "prejudice",
    "hope",
    "war",
    "peace",
    "friendship",
    "revenge",
    "betrayal",
    "forgiveness",
    "crime",
    "punishment",
    "aliens",
    "isolation",
    "chaos",
    "the circle of life",
    "fate",
    "growing up",
    "immortality",
    "technology",
    "totalitarianism",
    "religion",
    "tradition",
    "mental illness",
    "space travel",
    "exploration",
    "greed",
    "justice",
    "patriotism",
    "corruption",
    "exploitation",
    "the end of the world",
    "unfairness",
    "hacking",
    "artificial intelligence",
    "the singularity",
    "robot rights",
    "extraterrestial life",
    "illness",
    "life after death",
    "dancing",
    "singing",
    "bee-keeping",
    "engineering",
    "sewing",
    "fashion",
    "baking",
    "stamp collecting",
    "art",
    "gardening",
    "happiness",
    "sadness",
    "the concept of fun",
    "chivalry",
    "stereotypes",
    "family",
    "relationships",
    "truth",
    "lies",
    "bravery",
    "cowardice",
    "mathematics"
];

settingDescription = [
    "tiny",
    "microscopic",
    "enormous",
    "spooky",
    "alien",
    "futuristic",
    "ancient",
    "forgotten",
    "mysterious",
    "forbidden",
    "dangerous",
    "holy",
    "bustling",
    "creepy",
    "abandoned",
    "popular",
    "strange-smelling",
    "hypnotic",
    "radioactive",
    "colourful",
    "never-ending",
    "strangely-decorated",
    "tastefully-decorated",
    "rat-infested",
    "lively",
    "vibrant",
    "uninhabited",
    "poorly-decorated",
    "astonishing",
    "critically-acclaimed",
    "beautiful",
    "boring",
    "deadly",
    "grubby",
    "exotic",
    "fabulous",
    "glamorous",
    "gloomy",
    "well-hidden",
    "undiscovered",
    "jolly",
    "luxurious",
    "quaint",
    "quirky",
    "old-fashioned",
    "unfashionable",
    "modern",
    "flying",
    "floating",
    "sinking",
    "burning",
    "mystical",
    "magical",
    "frozen",
    "royal"
];

aOnSetting = [
    "a planet", 
    "the moon",
    "a star",
    "a rainbow",
    "a island", 
    "a mountain", 
    "a bouncy castle"
]

aInSetting = [
    "Iraq",
    "Midland Gate",
    "a city",
    "a library",
    "a military facility",
    "a warehouse", 
    "a graveyard", 
    "a village", 
    "a kingdom", 
    "a sewer", 
    "a shopping centre", 
    "a nightclub", 
    "a cave", 
    "a labyrinth", 
    "a park", 
    "a parking lot", 
    "a kitchen",
    "a shipwreck", 
    "a casino", 
    "a library", 
    "a junkyard", 
    "a basement", 
    "a dungeon", 
    "a prison", 
    "a tavern", 
    "a resturant", 
    "a cinema", 
    "a valley", 
    "a mansion", 
    "a forest", 
    "a jungle", 
    "a office", 
    "a hotel",
    "an alternate reality", 
    "outer space", 
    "the ocean", 
    "the ground", 
    "summer", 
    "winter", 
    "spring", 
    "autumn",
    "your head", 
    "a computer", 
    "a submarine", 
    "a dream", 
    "a nightmare", 
    "a bunker", 
    "a dumpster"
];

aCharacterDescriptions = [
    "a tiny",
    "a gigantic",
    "a lonely",
    "a time-travelling",
    "an evil",
    "an easily-frightened",
    "an attractive",
    "a short",
    "a tall",
    "an intimidating",
    "a clumsy",
    "a good-looking",
    "a courageous",
    "an anxious",
    "a forgetful",
    "a famous",
    "a shy",
    "a scary-looking",
    "an one-eyed",
    "a bored",
    "an ambitious",
    "a power-hungry",
    "a two-headed",
    "a wise",
    "an elderly",
    "a greedy",
    "an invisible",
    "a magical",
    "a blind",
    "a peace-loving",
    "a polite",
    "a worried",
    "a rude",
    "a genetically modified",
    "a genetically enhanced",
    "a grumpy",
    "a charming",
    "an energetic",
    "an imaginary",
    "a unfriendly",
    "a friendly",
    "a nervous",
    "optimistic",
    "a pessimistic",
    "an undead",
    "a quirky",
    "a sarcastic",
    "a well-dressed",
    "a lazy",
    "a talkative",
    "a royal",
    "a cunning",
    "a playful",
    "a penniless",
    "a wealthy",
    "an impatient",
    "a wind-up",
    "a law-abiding",
    "a law-breaking",
    "an over-enthusiastic"
];

groupNames = [
    "group",
    "faction", 
    "gang", 
    "family", 
    "band", 
    "horde",
    "organization", 
    "league"
];

moodStart = [
    "A unique",
    "A frustrating",
    "A challenging",
    "A rage-inducing",
    "A stressful",
    "A relaxing",
    "A meditative",
    "A calming",
    "A thought-provoking",
    "An addictive",
    "A whimsical",
    "An innovative",
    "An inspiring",
    "A groovey",
    "An artsy",
    "An upbeat",
    "A violent",
    "A peaceful",
    "A dreamy",
    "A stylish",
    "A short-and-sweet",
    "A slow-paced",
    "An intense",
    "A nostalgic",
    "A satirical",
    "A cheerful",
    "A melancholy",
    "A compact"
];

genre = [
    "platformer",
    "puzzle",
    "maze",
    "questing",
    "apocalyptic",
    "beat'em up",
    "battle royale",
    "action rpg",
    "metroidvania",
    "endless runner",
    "shooter",
    "bullet hell",
    "sports",
    "strategy",
    "puzzle",
    "stealth",
    "role-playing",
    "roguelike",
    "survival",
    "horror",
    "card",
    "rhythm",
    "adventure",
    "tower-defense",
    "clicker",
    "hack-and-slash",
    "educational",
    "text-adventure",
    "typing",
    "sandbox",
    "programming",
    "racing",
    "simulation"
];

aGeneralCharacter = [
    "an alien",
    "a monster",
    "a wizard",
    "a witch",
    "an adventurer",
    "an assassin",
    "a sailor",
    "a chef",
    "a robot",
    "a ghost",
    "a human",
    "a skeleton",
    "a snowman",
    "a scientist",
    "a programmer",
    "a student",
    "a youtuber",
    "an influencer",
    "a celebrity",
    "a president",
    "a politician",
    "a businessman",
    "an emperor",
    "a ninja",
    "a technophobe",
    "a vampire",
    "a hacker",
    "a zombie",
    "action figure",
    "a geometric shape",
    "a thief",
    "a pirate",
    "a prince",
    "a princess",
    "a king",
    "a queen",
    "a grandfather",
    "a grandmother",
    "a troll",
    "a dwarf",
    "an orc",
    "a goblin",
    "a knight",
    "a farmer",
    "astronaut",
    "a pilot",
    "a chocolatier",
    "archeologist",
    "a doctor",
    "a police officer",
    "a detective",
    "a pyromaniac",
    "a gamer",
    "a tax collector",
    "a plumber",
    "an electrician",
    "a mechanic",
    "a citizen",
    "an english teacher"
    ];

generalCharacter = [
    "alien",
    "monster",
    "wizard",
    "witch",
    "adventurer",
    "assassin",
    "sailor",
    "chef",
    "robot",
    "ghost",
    "human",
    "skeleton",
    "snowman",
    "scientist",
    "programmer",
    "student",
    "youtuber",
    "influencer",
    "celebrity",
    "president",
    "politician",
    "businessman",
    "emperor",
    "ninja",
    "technophobe",
    "vampire",
    "hacker",
    "zombie",
    "action figure",
    "geometric shape",
    "thief",
    "pirate",
    "prince",
    "princess",
    "king",
    "queen",
    "grandfather",
    "grandmother",
    "troll",
    "dwarf",
    "orc",
    "goblin",
    "knight",
    "farmer",
    "astronaut",
    "pilot",
    "chocolatier",
    "archeologist",
    "doctor",
    "police officer",
    "detective",
    "pyromaniac",
    "gamer",
    "tax collector",
    "plumber",
    "electrician",
    "mechanic",
    "citizen",
    "english teacher"
    ];

generalCharacters = [
    "aliens",
    "monsters",
    "wizards",
    "witches",
    "adventurers",
    "assassins",
    "sailors",
    "chefs",
    "robots",
    "ghosts",
    "humans",
    "skeletons",
    "snowmen",
    "scientists",
    "programmers",
    "students",
    "youtubers",
    "influencers",
    "celebritys",
    "presidents",
    "politicians",
    "businessmen",
    "emperors",
    "ninjas",
    "technophobes",
    "vampires",
    "hackers",
    "zombies",
    "action figures",
    "geometric shapes",
    "thieves",
    "pirates",
    "princes",
    "grandfathers",
    "trolls",
    "dwarves",
    "goblins",
    "knights",
    "farmers",
    "astronauts",
    "pilots",
    "chocolatiers",
    "archeologists",
    "doctors",
    "police officers",
    "detectives",
    "pyromaniacs",
    "gamers",
    "tax collectors",
    "plumbers",
    "electricians",
    "mechanics",
    "citizens",
    "english teachers"
];

properCharacter = [
    "Donald Trump",
    "Barack Obama",
    "Elvis Presley",
    "John Cena",
    "Dwayne Johnson",
    "Cristiano Ronaldo",
    "Justin Bieber",
    "Abraham Lincoln",
    "John F. Kennedy",
    "Oscar Uetake",
    "Jonsie Jones (Cameron)",
    "Tom Cruise",
    "Johnny Depp",
    "Keanu Reeves",
    "Elon Musk",
    "Hugh Jackman",
    "Michael Jordan",
    "Mike Tyson",
    "Lara Croft",
    "Nathan Drake",
    "Mario",
    "Agent 47",
    "Link",
    "Ganon",
    "Donkey Kong",
    "Yoshi",
    "Fox McCloud",
    "Jonno"
];
