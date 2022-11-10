export type HeroDetailedRole =
  | "DPS"
  | "Flanker"
  | "Hitscan"
  | "Defense"
  | "Off-tank"
  | "Main Tank"
  | "Main Healer"
  | "Off-healer";

export type HeroRole = "Damage" | "Tank" | "Support";

export const HeroRoles: HeroRole[] = ["Damage", "Tank", "Support"];

type HeroDetailedRoleToHeroes = {
  [role in HeroDetailedRole]: Hero[];
};

type HeroRoleToHeroes = {
  [role in HeroRole]: Hero[];
};

type HeroToNumber = {
  [hero in Hero]?: number;
};

export type Hero =
  | "Ana"
  | "Ashe"
  | "Baptiste"
  | "Bastion"
  | "Brigitte"
  | "Cassidy"
  | "D.Va"
  | "Doomfist"
  | "Echo"
  | "Genji"
  | "Hanzo"
  | "Junker Queen"
  | "Junkrat"
  | "Kiriko"
  | "Lúcio"
  | "Mei"
  | "Mercy"
  | "Moira"
  | "Orisa"
  | "Pharah"
  | "Reaper"
  | "Reinhardt"
  | "Roadhog"
  | "Sigma"
  | "Sojourn"
  | "Soldier: 76"
  | "Sombra"
  | "Symmetra"
  | "Torbjörn"
  | "Tracer"
  | "Widowmaker"
  | "Winston"
  | "Wrecking Ball"
  | "Zarya"
  | "Zenyatta";

export const HeroDetailedRoles: HeroDetailedRole[] = [
  "DPS",
  "Flanker",
  "Hitscan",
  "Defense",
  "Off-tank",
  "Main Tank",
  "Main Healer",
  "Off-healer"
];

export const Heroes: Hero[] = [
  "Ana",
  "Ashe",
  "Baptiste",
  "Bastion",
  "Brigitte",
  "Cassidy",
  "D.Va",
  "Doomfist",
  "Echo",
  "Genji",
  "Hanzo",
  "Junker Queen",
  "Junkrat",
  "Kiriko",
  "Lúcio",
  "Mei",
  "Mercy",
  "Moira",
  "Orisa",
  "Pharah",
  "Reaper",
  "Reinhardt",
  "Roadhog",
  "Sigma",
  "Sojourn",
  "Soldier: 76",
  "Sombra",
  "Symmetra",
  "Torbjörn",
  "Tracer",
  "Widowmaker",
  "Winston",
  "Wrecking Ball",
  "Zarya",
  "Zenyatta"
];

export const HeroesByType: HeroDetailedRoleToHeroes = {
  DPS: ["Echo", "Junkrat", "Pharah", "Reaper"],
  Flanker: ["Genji", "Sombra", "Tracer"],
  Hitscan: ["Ashe", "Cassidy", "Soldier: 76", "Widowmaker", "Sojourn"],
  "Main Tank": ["Doomfist", "Orisa", "Reinhardt", "Sigma", "Winston","Junker Queen","D.Va", "Roadhog", "Wrecking Ball", "Zarya"],
  "Off-tank": [],
  Defense: ["Bastion", "Hanzo", "Mei", "Symmetra", "Torbjörn"],
  "Main Healer": ["Ana", "Baptiste", "Mercy", "Moira", "Kiriko"],
  "Off-healer": ["Brigitte", "Lúcio", "Zenyatta"]
};

export const HeroesByRole: HeroRoleToHeroes = {
  Tank: [
    "D.Va",
    "Doomfist",
    "Junker Queen",
    "Orisa",
    "Reinhardt",
    "Roadhog",
    "Sigma",
    "Winston",
    "Wrecking Ball",
    "Zarya"
  ],
  Damage: [
    "Ashe",
    "Bastion",
    "Cassidy",
    "Echo",
    "Genji",
    "Hanzo",
    "Junkrat",
    "Mei",
    "Pharah",
    "Reaper",
    "Sojourn",
    "Soldier: 76",
    "Sombra",
    "Symmetra",
    "Torbjörn",
    "Tracer",
    "Widowmaker"
  ],
  Support: [
    "Ana",
    "Baptiste",
    "Brigitte",
    "Kiriko",
    "Lúcio",
    "Mercy",
    "Moira",
    "Zenyatta"
  ]
};

export const HeroFirstSeasons: HeroToNumber = {
  Moira: 7,
  Brigitte: 10,
  Orisa: 4,
  Doomfist: 5,
  Sombra: 2,
  "Wrecking Ball": 11,
  Ashe: 13,
  Baptiste: 15,
  Sigma: 18,
  Echo: 21
};
