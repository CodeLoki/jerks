export enum Instrument {
    drums = '🥁',
    rhythm = '🎸',
    lead = '🎸🔥',
    bass = '🎸🎵',
    keys = '🎹',
    vox = '🎤'
}

enum StartsWith {
    all = 'Drums count in',
    rhythmGuitar = 'Rhythm guitar',
    drums = 'Drums',
    drumsAndKeys = 'Drums and keys',
    leadGuitar = 'Lead guitar',
    leadAndVocals = 'Lead guitar and vocals',
    drumsAndBass = 'Drums and bass',
    drumsAndGuitar = 'Drums and guitar',
    bass = 'Bass',
    guitars = 'Guitars',
    vocals = 'Vocals'
}

enum DrumPad {
    cowbell = 'Cowbell (#641)',
    claps = 'Claps (#800)',
    tambourine = 'Tambourine (#727)',
    bellTree = 'Tree chime (#631)',
    china = 'China'
}

export interface Details {
    url?: string;
    notes?: string[];
}

export type SongDetails = {
    [key: string]: Details;
};

export type Song = {
    title: string;
    length: number;
    startsWith: StartsWith | string;
    details?: SongDetails;
};

export enum SongNames {
    AboutAGirl,
    Good,
    LearnToFly,
    Flagpole,
    Plush,
    Alive,
    BallAndChain,
    Banditos,
    Creep,
    Dancing,
    December,
    Sandman,
    Everlong,
    Godzilla,
    HardToHandle,
    HeyHey,
    HeyYa,
    HonkyTonk,
    IWillFollow,
    InsideOut,
    IntoYourArms,
    JealousAgain,
    Jenny,
    JustLikeHeaven,
    LonelyBoy,
    Malibu,
    MaryJane,
    WorstEnemy,
    Peaches,
    Possum,
    PettyInPink,
    RadioFree,
    Sanctuary,
    Shine,
    ShouldIStay,
    Song2,
    StacysMom,
    Middle,
    Train,
    Vertigo,
    Wanted,
    Werewolves,
    WhatILike,
    ShookMe,
    AmericanGirl,
    BackDown,
    RunningDown,
    YouDontKnow,
    YouWreckMe,
    HashPipe,
    IslandInSun,
    SayItAintSo,
    Galway,
    SnowDay,
    SaveIt,
    ThreeAM,
    BadLuck,
    Birthday,
    Boulevard,
    ClosingTime,
    Rockville,
    FloatOn,
    GetOffThis,
    Holiday,
    IGotYou,
    IWillSurvive,
    JessiesGirl,
    JustWhatINeeded,
    KeepYourHands,
    Laid,
    LearningToFly,
    LongWayToTheTop,
    NeverLetYouGo,
    PumpItUp,
    RaspberryBeret,
    RockInFreeWorld,
    ShortSkirt,
    SteadyAsSheGoes,
    StuckInMiddle,
    TalkDirty,
    TeenAngst,
    OldApartment,
    ThereSheGoes,
    Whiskey,
    WhatchaWant,
    WhatsUp,
    Lips,
    Jealousy
}

const AllSongs = new Map<SongNames, Song>();
export default AllSongs;

const fn = (id: SongNames, song: Song) => AllSongs.set(id, song);

fn(SongNames.AboutAGirl, {
    title: 'About a Girl',
    startsWith: StartsWith.rhythmGuitar,
    length: 168,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=About%20a%20Girl&Author=Nirvana&Tempo=139&Measures=6&H=|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O---------O-|----O-------O---|----O---------O-|&K=|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o---o-----|o-----o-o-------|o-o---o---o-----|'
        }
    }
});

fn(SongNames.Good, {
    title: 'Good',
    startsWith: StartsWith.all,
    length: 184,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Good&Author=Better%20Than%20Ezra&Tempo=110&Measures=6&H=|r-r-r-r-r-r-r-r-|r-r-r-r-r-c-r-c-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-c-r-c-|&S=|----O-------O---|----O-----O---O-|----O-------O---|----O-------O---|----O-------O---|----O-----O---O-|&K=|o-----o-o-------|o-----o-o---o---|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o---o---|'
        }
    }
});

fn(SongNames.LearnToFly, {
    title: 'Learn to Fly',
    startsWith: 'Drums and rhythm flam',
    length: 245,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Learn%20to%20Fly&Author=Foo%20Fighters&Tempo=149&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-o-s-x-|x-x-x-x-x-o-s-x-|&S=|----O-------O---|----O-------O---|----O-----O-----|----O-----O-----|&K=|o-----o---o---o-|o-----o---o---o-|o-----o-o-----o-|o-----o-o-----o-|',
            notes: [DrumPad.tambourine]
        },
        [Instrument.vox]: {
            url: 'https://lyrics.lyricfind.com/lyrics/foo-fighters-learn-to-fly-1',
            notes: ['#3']
        }
    }
});

fn(SongNames.Flagpole, {
    title: 'Flagpole Sitter',
    startsWith: StartsWith.all,
    length: 218,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=12&Title=Flagpole%20Sitta&Author=Harvey%20Danger&Tempo=145&Measures=6&H=|------------|------------|o--o--o--o--|o--o--o--o--|------------|------------|&S=|------------|OOOOOOOOOOOO|---O-----O--|---O-----O-O|---O-O---O-O|---O-O---O-O|&K=|------------|------------|o-----o-o---|o-----o-o---|o--o--o--o--|o--o--o--o--|&T1=|------------|------------|------------|------------|------------|------------|&T4=|------------|------------|------------|------------|o-o---o-o---|o-o---o-o---|'
        }
    }
});

fn(SongNames.Plush, {
    title: 'Plush',
    startsWith: StartsWith.all,
    length: 314,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Plush&Author=Stone%20Temple%20Pilots&Comments=2x%2C%201x%2C%202x%20(silent)%2C%202x&Tempo=72&Measures=8&H=|c-o-o-o-o-o-o-o-|o-o-o-o-oss-o---|c-x-o-x-x-x-x-x-|x-x-o-x-x-x-o---|c-rrrrrcrrrrrrrr|c-rrrrrcrrrr----|c-x-o-x-x-x-o-x-|x-x-o-x-x-x-o---|&S=|----O-------O---|----O-------O-OO|----O-------O---|----O-------O-OO|----O-------O--O|----O-------O-OO|----O-------O---|----O-------O-OO|&K=|o-o---o--oo-----|o-o---o--oo-----|o-o---o---o-----|o-o---o--oo-----|o-o----o--o--o--|o-o----o--o--o--|o-oo--o-o-oo----|o-oo--o-o-oo----|&T1=|----------------|----------------|----------------|----------------|----------------|------------o-o-|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
            notes: [DrumPad.china, '2x, 1x, 2x (silent), 2x']
        }
    }
});

fn(SongNames.Alive, {
    title: 'Alive',
    startsWith: StartsWith.leadGuitar,
    length: 341,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Alive&Author=Pearl%20Jam&Tempo=76&Measures=8&H=|c-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|c-x-x-o-x-x-x-x-|x-x-x-o-x-x-x-x-|crrrrrrrrrrrrrrr|rrrrrrrrrrrrrrrr|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|O--O--O--O----O-|O--O--O--O----O-|&K=|o--o--o---oo---o|o--o--o---oo---o|o--o--o---oo---o|o--o--o---oo---o|o-o----oo-o----o|o-o----oo-o----o|-oo----oo---o--o|-oo----oo---o--o|'
        },
        [Instrument.vox]: {
            notes: ['Rock #5']
        }
    }
});

fn(SongNames.BallAndChain, {
    title: 'Ball & Chain',
    startsWith: StartsWith.rhythmGuitar,
    length: 344,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=12&Title=Ball%20and%20Chain&Author=Social%20Distortion&Tempo=134&Measures=6&H=|------------|r-rr-rr-rr-r|r-rr-rr-rr-r|r-rr-rr-rr-r|c-rr-rr-rr-r|r-rr-rr-rr-r|&S=|---------f--|---O-----O--|---O-----O--|---O-----O-O|---O-----O--|---O-----O--|&K=|--------o---|o----o--o--o|o----o--o--o|o----o--o---|o----o--o--o|o----o--o--o|'
        }
    }
});

fn(SongNames.Banditos, {
    title: 'Banditos',
    startsWith: StartsWith.leadAndVocals,
    length: 258,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Banditos&Author=The%20Refreshments&Tempo=147&Measures=6&H=|r-r-r-r-r-r-r-r-|x-x-x-x-x-x-x-x-|o---o---o---o---|o---o---o---o---|----------------|----------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o---------o---o-|----------o---o-|o---o---o---o---|o---o---o---o---|&T1=|----------------|----------------|----------------|----------------|----------------|--------------oo|&T4=|----------------|----------------|----------------|----------------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o---|'
        }
    }
});

fn(SongNames.Creep, {
    title: 'Creep',
    startsWith: StartsWith.all,
    length: 239,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Creep&Author=Radiohead&Tempo=92&Measures=10&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-c-|----------------|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|--O-O-----O-O---|O---O---OOOO----|----------------|----------------|----x-------x---|----x-------x---|&K=|o------oo-o---o-|o------oo-o-----|o------oo-o---o-|o------oo-o---o-|o-----o-o-------|----------------|o-------------o-|o-------------o-|o------oo-o---o-|o------oo-o---o-|&T1=|----------------|----------------|----------------|----------------|----------------|-o----o-----oooo|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.Dancing, {
    title: 'Dancing With Myself',
    startsWith: StartsWith.drums,
    length: 291,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Dancing%20with%20Myself&Author=Generation%20X&Tempo=176&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-c-x-x-x-x-x-|x-x-c-x-x-x-x-x-|----------------|----------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|f---------------|------------f---|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|----------------|----------------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.December, {
    title: 'December',
    startsWith: StartsWith.rhythmGuitar,
    length: 247,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=December&Author=Collective%20Soul&Tempo=122&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|----------------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----------------|----------------|----------------|------------O---|----O-------O---|----O-------O---|&K=|o-------o-------|o-------o-----o-|----------------|----------------|o-------------o-|o---------------|o-------------o-|o-------------o-|&T1=|----------------|----------------|----o-----o-o---|----o-----o-o---|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|------o-o-------|------o-o-----o-|----------------|----------------|----------------|----------------|'
        },
        [Instrument.vox]: {
            url: 'https://www.google.com/search?q=collective+soul+december+lyrics&oq=collective+soul+december+lyrics&sourceid=chrome&ie=UTF-8'
        }
    }
});

fn(SongNames.Sandman, {
    title: 'Enter Sandman',
    startsWith: StartsWith.rhythmGuitar,
    length: 332,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Enter%20Sandman%20&Author=Metallica&Comments=1x,%202x,%203x,%201x,%200x&Tempo=123&Measures=10&H=|----------------|----------------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-c-|o-o-o-o-o-o-o-c-|o-o-o-o-o-o-o-c-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-c-|x-x-x-x-x-x-x-c-|&S=|----------------|----------------|----O-------O---|----O-------O---|--------O-------|--------O-------|----O-------O---|----O-------O---|----O---------O-|----O-------O---|&K=|o---o---o---o---|o---o---o---o---|o-------o-------|o-------o-----o-|--------------o-|--------------o-|--------o-------|o-------o-o-----|o-------o---o---|o-------o-o---o-|&T1=|----o-------o-o-|----o-------o-o-|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
            notes: ['1x, 2x, 3x, 1x, 0x']
        },
        [Instrument.vox]: {
            notes: ['#13']
        }
    }
});

fn(SongNames.Everlong, {
    title: 'Everlong',
    startsWith: StartsWith.rhythmGuitar,
    length: 251,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Everlong&Author=Foo%20Fighters&Tempo=158&Measures=6&H=|xxxxXxxxxxxxXxxx|xxxxXxxxxxxxXxxx|xxxx-xxxxxxx-xxx|xxxx-xxxxxxx-xxx|xxxx-xxxxxxx-xxx|xxxx-xxxxxxx-xxx|&S=|----------------|----------------|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|----------------|----o-------o---|o---o---o---o---|o---o---o-o-o---|o-------o-o---o-|--o-----o-o---o-|'
        },
        [Instrument.vox]: {
            url: 'https://lyrics.lyricfind.com/lyrics/foo-fighters-everlong'
        }
    }
});

fn(SongNames.Godzilla, {
    title: 'Godzilla',
    startsWith: StartsWith.drums,
    length: 222,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Godzilla&Author=Blue%20Oyster%20Cult&Tempo=92&Measures=8&H=|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------------|----------OOOOOO|----O-------O---|----O--g-g--O---|----O-------O---|----O-------O---|----O----g--O---|----O----g--O---|&K=|o---o---o---o---|o---o---o---o---|o-------o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o---------o-----|o-o-------o-----|'
        },
        [Instrument.vox]: {
            notes: ['Arena']
        }
    }
});

fn(SongNames.HeyHey, {
    title: 'Hey, Hey, What Can I Do?',
    startsWith: StartsWith.leadGuitar,
    length: 237,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Hey%2C%20Hey%2C%20What%20Can%20I%20Do&Author=Led%20Zeppelin&Tempo=78&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-c---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O-O-|----O-------O---|----O-------O---|----O-------O-O-|----O-------O---|----O----O--O-O-|&K=|o--o---oo--o----|o--o---o-o-o----|o--o---o--o----o|o-o----o-o-o----|o--o---o--o----o|o-o----o---o----|'
        },
        [Instrument.vox]: {
            url: 'https://lyrics.lyricfind.com/lyrics/led-zeppelin-hey-hey-what-can-i-do',
            notes: ['Oldies']
        }
    }
});

fn(SongNames.HeyYa, {
    title: 'Hey Ya!',
    startsWith: StartsWith.vocals,
    length: 247,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Hey%20Ya!&Author=OutKast&Tempo=160&Measures=4&H=|x---x---x---x---|x---x---x---x---|----------------|----------------|&S=|----O-------O---|----O-------O---|----f-------f---|----f-------f---|&K=|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---o-----|'
        }
    }
});

fn(SongNames.HonkyTonk, {
    title: 'Honky Tonk',
    startsWith: StartsWith.drums,
    length: 180,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Honky%20Tonk%20Woman&Author=The%20Rolling%20Stones&Tempo=115&Measures=6&H=|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------O-----|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|----------------|o---------o---o-|o---------o---o-|o---------o---o-|o-----o-o-----o-|o-----o-o-o---o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|--------------o-|----------------|----------------|----------------|----------------|----------------|',
            notes: [DrumPad.cowbell]
        },
        [Instrument.vox]: {
            url: 'https://lyrics.lyricfind.com/lyrics/the-rolling-stones-honky-tonk-women'
        }
    }
});

fn(SongNames.IWillFollow, {
    title: 'I Will Follow',
    startsWith: StartsWith.leadGuitar,
    length: 218,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=I%20Will%20Follow&Author=U2&Tempo=155&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x---------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x---------|&S=|----O-------O---|----O-----O---O-|----O-------O---|----O---OOO-OOO-|O---O-------O---|O---O-------O---|O---O-------O---|----O---OOO-OOO-|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|'
        }
    }
});

fn(SongNames.InsideOut, {
    title: 'Inside Out',
    startsWith: StartsWith.leadAndVocals,
    length: 220,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Inside%20Out&Author=Eve%206&Tempo=88&Measures=10&H=|----------------|--------o---o---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-o-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|----------------|----------------|&S=|----------------|----------------|----O-------O---|----O-------OO--|----O-------O---|----O-------OO-O|----O--O-O--O--O|----O--O-O--O--O|----O-------O---|----O-------O---|&K=|----------------|----------------|o-o----oo-o-----|o-o----oo-o-----|o-o----oo-o-----|o------o--o-----|o-oo----o-oo----|o-oo----o-oo----|----------------|----------------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--o-o-----o-o---|--o-o-----o-o---|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|oo-o-ooooo-o-ooo|oo-o-ooooo-o-ooo|'
        }
    }
});

fn(SongNames.IntoYourArms, {
    title: 'Into Your Arms',
    startsWith: StartsWith.rhythmGuitar,
    length: 165,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Into%20Your%20Arms&Author=The%20Lemonheads&Tempo=124&Measures=4&H=|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|--------------oo|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o---|----------------|----------------|'
        }
    }
});

fn(SongNames.JealousAgain, {
    title: 'Jealous Again',
    startsWith: StartsWith.leadGuitar,
    length: 276,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Jealous%20Again&Author=Black%20Crowes&Tempo=114&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-c-x-x-x-c-|x-x-x-c-x-x-x-c-|x-x-x-x-x-x-x-x-|x---x---x---x---|x---x---x---x---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------f---|----------------|----O-----------|----O-------O---|----O-------O---|&K=|o-----o-o-------|o-----o-o-------|o-------o-o-----|o-o---o---o---o-|--o---o---o---o-|--o-----o-o---o-|o-------------o-|o-------------o-|o-------o-------|o-------o-------|'
        },
        [Instrument.vox]: {
            url: 'https://lyrics.lyricfind.com/lyrics/the-black-crowes-jealous-again'
        }
    }
});

fn(SongNames.Jenny, {
    title: 'Jenny (867-5309)',
    startsWith: StartsWith.leadGuitar,
    length: 227,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=867-5309%20%2F%20Jenny&Author=Tommy%20Tutone&Tempo=138&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-c-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-c-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-c-r-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-----o-o-------|o-----o-o-------|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.JustLikeHeaven, {
    title: 'Just Like Heaven',
    startsWith: StartsWith.drumsAndBass,
    length: 242,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Just%20Like%20Heaven&Author=The%20Cure&Tempo=151&Measures=10&H=|----------------|----c-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-c-x-x-c-c-x-|x-x-c-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-x-x-x-x-x-|&S=|----------------|----O-------O---|----O-------O---|----O-------O---|----O-----O-O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|----------------|--o-----o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-----o-----o-|o-o-----o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-----o-o-----|--o-----o-o---o-|&T1=|--------------oo|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--------------oo|----------------|&T4=|----------------|o---------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|o---------------|'
        }
    }
});

fn(SongNames.LonelyBoy, {
    title: 'Lonely Boy',
    startsWith: StartsWith.leadGuitar,
    length: 194,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=8&Title=Lonely%20Boy&Author=The%20Black%20Keys&Tempo=166&Measures=4&H=|--------|--------|xxxxxxxx|xxxxxxxx|&S=|--OO--O-|--OO--O-|--OO--O-|--OO--O-|&K=|o---o---|o---o---|o---o---|o---o---|&T1=|--------|--------|--------|--------|&T4=|oooooooo|oooooooo|--------|--------|'
        },
        [Instrument.vox]: {
            url: 'https://lyrics.lyricfind.com/lyrics/the-black-keys-lonely-boy'
        }
    }
});

fn(SongNames.Malibu, {
    title: 'Malibu',
    startsWith: StartsWith.all,
    length: 231,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Malibu&Author=Hole&Tempo=122&Measures=10&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----c-r-r-r-r-c-|r-r-r-r-r-r-r-r-|c-r-r-r-r-r-r-c-|r-r-r-r-r-r-r-r-|x-x-x-x-x-x---x-|x-x-x-x-x-x---x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O--OO---O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-----------|----O-----------|&K=|o-------o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-------------|o-o-----o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-----o-o---o-|o-------o-o---o-|o-------o-o---o-|&T1=|----------------|----------------|----------------|----------o-----|----------------|----------------|----------------|----------------|------------o---|------------o---|&T4=|----------------|----------------|----------------|--------------o-|----------------|----------------|----------------|----------------|------------o---|------------o---|'
        }
    }
});

fn(SongNames.MaryJane, {
    title: 'Mary Janes Last Dance',
    startsWith: StartsWith.leadGuitar,
    length: 274,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Mary%20Jane%27s%20Last%20Dance&Author=Tom%20Petty&Tempo=85&Measures=2&H=|o-x-x-x-x-o-x-x-|o-x-x-x-x-o-x-x-|&S=|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-------o-o-----|'
        }
    }
});

fn(SongNames.WorstEnemy, {
    title: 'My Own Worst Enemy',
    startsWith: StartsWith.leadGuitar,
    length: 170,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=My%20Own%20Worst%20Enemy&Author=Lit&Tempo=103&Measures=8&H=|o---o---o---o---|o---o---o---o---|x---x---x---x---|x---x---x-c-c---|x---x---x---x---|x---x---x---x---|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O--O----O--O|----O--O--f---f-|----O--O----O--O|----O--O--------|----O--O----O--O|----O--O--f---f-|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o---o---|o-o-----o-o-----|o-o-----o-o-o---|o-o-----o-o-----|o-o-----o---o---|o-------o-o-----|o-------o-o-----|'
        }
    }
});

fn(SongNames.Peaches, {
    title: 'Peaches',
    startsWith: StartsWith.leadGuitar,
    length: 172,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Peaches&Author=Presidents%20of%20the%20United%20States&Tempo=94&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O--O----O--O|----O--O----O--O|----O-------O---|----O-------O---|----O-------O-b-|----O-------O-b-|&K=|o-oo----o-oo----|o-oo----o-oo----|o-o----o--o-----|o-o----o--o-----|o-o---o-o-o-----|o-o---o-o-o-----|'
        }
    }
});

fn(SongNames.Possum, {
    title: 'Possum Kingdom',
    startsWith: StartsWith.rhythmGuitar,
    length: 309,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Possum%20Kingdom&Author=Toadies&Tempo=101&Measures=9&H=|x-x-x-x-x-x-x-x-|x-x-x-x-c-x-----|x-x-x-x-x-x-x-x-|x-x-x-x-c-x-c-x-|x-x-c-x-x-x-c-x-|x-x-c-x-x-x-c-x-|x-x-x-x-x-x-x-x-|x-x-x-x-o-x-----|c---c---c---c---|&S=|----O-------O---|----O-----O-----|----O-------O---|----O-----O---O-|----O--O----O--O|----O--O----O--O|-O--O----O--O---|-O--O-----O-----|O---O---O---O---|&K=|o-o-----o-o-----|o-o-----o-------|o-o-----o-o-----|o-o-----o---o---|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|o-oo----o-oo----|o-oo----o-------|--o---o---o---o-|'
        },
        [Instrument.vox]: {
            notes: ['Ballad #3']
        }
    }
});

fn(SongNames.PettyInPink, {
    title: 'Pretty In Pink',
    startsWith: StartsWith.drums,
    length: 239,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Pretty%20in%20Pink&Author=The%20Psychedelic%20Furs&Tempo=136&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|----------------|----------------|c---------------|&S=|----O-------O---|----O-------O---|----f-----------|----f-----------|f---f---f-------|----------------|&K=|o-------o-o-----|o-------o-o-----|o-----o-o-------|o-----o-o-------|--o---o---o-----|----------------|&T1=|----------------|----------------|------------o---|------------o---|------------o---|----------------|&T4=|----------------|----------------|------------o---|------------o---|------------o---|----------------|'
        }
    }
});

fn(SongNames.RadioFree, {
    title: 'Radio Free Europe',
    startsWith: StartsWith.drums,
    length: 246,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Radio%20Free%20Europe&Author=REM&Tempo=155&Measures=10&H=|x---x---x---c---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-o-x-o-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-b-x-x-|x-x-x-x-x-b-x-x-|&S=|O---O---O---O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|--O-O---O---O-O-|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o---o---o---o---|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-o-----|o-------o-o-----|o-----o---o-----|o-----o---o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.Sanctuary, {
    title: 'She Sells Sanctuary',
    startsWith: StartsWith.leadGuitar,
    length: 253,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=She%20Sells%20Sanctuary&Author=The%20Cult&Tempo=139&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-----|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|&S=|----O-------O---|----O-----OO--OO|----------------|----------------|----------------|f-----f-----f---|&K=|o-------o-------|o-------o-------|o---o---o---o---|o---o---o---o---|o---o---o---o---|--o-o---o-o-----|'
        },
        [Instrument.vox]: {
            notes: ['Arena']
        }
    }
});

fn(SongNames.Shine, {
    title: 'Shine',
    startsWith: StartsWith.rhythmGuitar,
    length: 307,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Shine&Author=Collective%20Soul&Tempo=150&Measures=10&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x-------|x---x---x---x---|x---x---x---c---|c---r---r---r---|r---r---r---r---|&S=|--------O-------|--------O-------|--------O-------|--------O---O---|--------O-------|----O---O-------|--------O-------|----O---O-------|--------O-------|--------O-------|&K=|o-------------o-|--o-------------|o-------------o-|--o-------------|o-------------o-|----------------|o-------------o-|------------o---|o-------------o-|--------------o-|'
        }
    }
});

fn(SongNames.ShouldIStay, {
    title: 'Should I Stay, or Should I Go?',
    startsWith: StartsWith.leadGuitar,
    length: 189,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Should%20I%20Stay%20or%20Should%20I%20Go&Author=The%20Clash&Tempo=113&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|----------------|&S=|----O-------O---|----O-------O---|--O---O---O---O-|--O---O---O---O-|--O---f---O---f-|--O---f---O---f-|&K=|o-----o-o-------|o-----o-o-----o-|o----o--o----o--|o----o--o----o--|o----o--o----o--|o----o--o----o--|&T1=|----------------|----------------|----------------|----------------|oo-o----oo-o----|oo-o----oo-o----|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.Song2, {
    title: 'Song 2',
    startsWith: StartsWith.drums,
    length: 122,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Song%202&Author=Blur&Tempo=130&Measures=6&H=|x-x-x-x-x-x-x---|x-x-x-x-x-x-x---|c-o-o-o-o-o-o-o-|o-o-o-o-o-o-c---|c---o-o-o-o-o-o-|o-o-o-o-o-o-c---|&S=|----O-------O---|----O-------O-O-|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-o---o---o-----|o-------o-o-----|o-o---o---o-----|o-------o-o-----|o-o---o---o-----|&T1=|--------------o-|--------------o-|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.StacysMom, {
    title: "Stacy's Mom",
    startsWith: StartsWith.leadGuitar,
    length: 198,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Stacy%27s%20Mom&Author=Fountains%20of%20Wayne&Tempo=118&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-x-|x-x-x-x-x-------|c-o-o-o-o-o-o-o-|c-c-c-c-c---X---|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O-------O---|----O-------O-O-|----O-------O---|----O--O----f---|----O-------O---|----------------|----O-------O---|----O-------O---|&K=|o-------o-------|o-------o-------|o-o-----o-o-----|o-o-----o-o---o-|o-------o-o-----|o-o-o-o-o-------|o-o---o---o---o-|--o-----o-o-----|',
            notes: [DrumPad.claps]
        }
    }
});

fn(SongNames.Middle, {
    title: 'The Middle',
    startsWith: StartsWith.leadGuitar,
    length: 226,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=The%20Middle&Author=Jimmy%20Eat%20World&Tempo=162&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-------c---|----c-----------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-----O-O-O-|&K=|o-------o-------|o-------o-----o-|o-------o-------|o-------o-------|o-------o-----o-|--o-----o-o-----|o-o-----o-----o-|--o-----o-o-----|o-o-----o-o-----|o-o-----o-------|&T1=|----------------|----------------|----------------|--------------oo|----------------|--------------oo|----------------|--------------oo|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.Train, {
    title: 'Train in Vain',
    startsWith: StartsWith.drums,
    length: 195,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Train%20in%20Vain&Author=The%20Clash&Tempo=123&Measures=6&H=|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-o-|c-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|c---------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|------------f---|&K=|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|o---------o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.Vertigo, {
    title: 'Vertigo',
    startsWith: StartsWith.drums,
    length: 194,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Vertigo&Author=U2&Tempo=140&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|----------------|----------------|c-x-x-x-x-x-x-c-|x-x-x-x-x-x-x-x-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O-O-|----O-------O---|----O-------O---|O-----O-----O---|--O-----O---O---|&K=|o-------o-o-----|o-------o-o-----|o-----o-o-------|o-----o-o-------|o-------o-o---o-|--o-----o-o---o-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.Wanted, {
    title: 'Wanted, Dead or Alive',
    startsWith: StartsWith.rhythmGuitar,
    length: 309,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Wanted%20Dead%20or%20Alive&Author=Bon%20Jovi&Tempo=150&Measures=6&H=|----------r-r---|----------r-r---|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|c-x-x-c-x-x-x-x-|x-x-x-c-x-x-x-x-|&S=|----------------|----------------|----x-------x---|----x-------x---|----O-------O---|----O-------O---|&K=|o-----o-o-------|o-----o-o-------|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---o---oo|',
            notes: [DrumPad.bellTree]
        },
        [Instrument.vox]: {
            notes: ['#5']
        }
    }
});

fn(SongNames.Werewolves, {
    title: 'Werewolves of London',
    startsWith: StartsWith.drums,
    length: 219,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Werewolves%20of%20London&Author=Warren%20Zevon&Tempo=104&Measures=4&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-----o-|o-----o---o---o-|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.WhatILike, {
    title: 'What I Like About You',
    startsWith: StartsWith.leadGuitar,
    length: 176,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=What%20I%20Like%20About%20You&Author=The%20Romantis&Tempo=160&Measures=4&H=|x---x---x---x---|x---x---x---x---|c---r---r---r---|r---r---r---r---|&S=|----O-------O---|----O-------O---|----O-O-----O---|----O-O-----O---|&K=|o-----o-o-----o-|o-----o-o-----o-|o-------o-------|o-------o-------|',
            notes: [DrumPad.claps]
        }
    }
});

fn(SongNames.ShookMe, {
    title: 'You Shook Me All Night Long',
    startsWith: StartsWith.leadGuitar,
    length: 211,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=You%20Shook%20Me%20All%20Night%20Long&Author=AC%2FDC&Tempo=127&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c---c-x-x-x-x-x-|x-x-c---x-------|x-x-x-x-x---x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-c-|x-o-x-c-x-o-x-c-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-----f-----|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O---O-------|----O-------O---|&K=|o---------o-----|o---------o-----|o-------o-------|o-------o-------|o-------o-o-----|------o-------o-|--o-----o-----o-|------o-------o-|--o-------o---o-|--o---o---o---o-|&T1=|----------------|----------------|----------------|------------o---|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|--------------o-|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.AmericanGirl, {
    title: 'American Girl',
    startsWith: StartsWith.leadGuitar,
    length: 215,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=American%20Girl&Author=Tom%20Petty&Tempo=114&Measures=4&H=|x-x-x-x-x-x-o-x-|x-x-x-x-x-x-o-x-|x-x-x-x-x-o-x-x-|x-x-x-x-x-o-x-x-|&S=|--O---O---O---O-|--O---O---O---O-|------------O---|------------O---|&K=|o--o-o------o---|o--o-o------o---|o--o--o---------|o--o--o---------|'
        },
        [Instrument.vox]: {
            notes: ['Ballad #3']
        }
    }
});

fn(SongNames.BackDown, {
    title: "I Won't Back Down",
    startsWith: StartsWith.all,
    length: 179,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=I%20Won%27t%20Back%20Down&Author=Tom%20Petty&Tempo=114&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-c-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|O-O-O-O-----O---|&K=|o-------o-------|o-------o-------|o-------o-------|o-o-o-o-o-------|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.RunningDown, {
    title: 'Running Down a Dream',
    startsWith: StartsWith.leadGuitar,
    length: 292,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Running%20Down%20a%20Dream&Author=Tom%20Petty&Tempo=168&Measures=4&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|----O-------O---|----O-------O---|O-----O-----O---|--O-----O---O-O-|&K=|o-------o-------|o-------o-------|----o-----o-----|o-----o---------|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.YouDontKnow, {
    title: "You Don't Know How it Feels",
    startsWith: StartsWith.all,
    length: 290,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=You%20Don%27t%20Know%20How%20it%20Feels&Author=Tom%20Petty&Tempo=80&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-------o-------|o-------o-------|o-------o-o-----|o-------o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.YouWreckMe, {
    title: 'You Wreck Me',
    startsWith: StartsWith.leadGuitar,
    length: 203,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=You%20Wreck%20Me&Author=Tom%20Petty&Tempo=164&Measures=4&H=|x---x---x---x---|x---x---x---x---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------------|------------f---|----O-------O---|----O-------O---|&K=|----------------|----------------|o-------o-------|o-------o-------|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.HashPipe, {
    title: 'Hash Pipe',
    startsWith: StartsWith.all,
    length: 187,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Hash%20Pipe&Author=Weezer&Tempo=126&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|c---c---c---c---|c---c---c---c---|c---c---c---c---|c---c---c---c---|c---c---x---x---|x---x---x---x---|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r---|&S=|----O-------O---|----O-------O---|----O---O-O-----|--O-----O---O---|----O--O----O--O|----O--O----O--O|----O---O---O---|O---O---O---O---|----O--o-o--O---|----O--O-O--O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o---------o-o-|----o-o---------|o-o-----o-o-----|o-o-----o-o-----|o-o---o---o---o-|--o---o---o---o-|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--------------oo|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.IslandInSun, {
    title: 'Island in the Sun',
    startsWith: StartsWith.bass,
    length: 201,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Island%20in%20the%20Sun&Author=Weezer&Tempo=115&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-c-x-|c---c---c---c---|c---c---c---c---|c---c---c---c---|c---c---c---c---|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-------|o-------o-o---o-|o-------o-------|o-------o-o---o-|o-------o-------|o-------o-o-----|o-------o-------|o-------o-o-----|'
        }
    }
});

fn(SongNames.SayItAintSo, {
    title: "Say it Ain't So",
    startsWith: StartsWith.leadGuitar,
    length: 259,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Say%20It%20Ain%27t%20So&Author=Weezer&Tempo=77&Measures=10&H=|r---r---r---r---|r---r---r---r---|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-c---------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------------|----------------|----O-------O---|----O-------O---|----O-------O---|----O-----------|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|----------------|----------------|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---------|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.Galway, {
    title: 'Galway Girl',
    startsWith: 'Guitars',
    length: 305
});

fn(SongNames.SnowDay, {
    title: 'Snow Day',
    startsWith: StartsWith.leadGuitar,
    length: 240
});

fn(SongNames.SaveIt, {
    title: 'Save it for Later',
    startsWith: StartsWith.leadGuitar,
    length: 214
});

fn(SongNames.ThreeAM, {
    title: '3AM',
    startsWith: StartsWith.rhythmGuitar,
    length: 226,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=3AM&Author=Matchbox%2020&Tempo=108&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----x---x---x---|x---x---x---x---|----O-------O---|----O-------O---|------------O---|------------O---|----O-------O---|----O-------O---|&K=|o--o--o---o---o-|o--o--o---o---o-|o-------------o-|o---------------|o--o--o---o---o-|o--o--o---o---o-|o-----o---------|o-----o---------|o-------o-o---o-|--------o-o---o-|'
        }
    }
});

fn(SongNames.BadLuck, {
    title: 'Bad Luck',
    startsWith: StartsWith.rhythmGuitar,
    length: 265,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Bad%20Luck&Author=Social%20Distortion&Tempo=125&Measures=8&H=|----------------|----------------|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|c-x-x-x-x-x-x-x-|x-x-c-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x---------|&S=|----------------|----O-------f---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O---f---f---|&K=|----------------|o-o-o-o-o-o---o-|o-----o-o-----o-|o-----o-o-o---o-|o-----o-o-----o-|o-----o-o-o---o-|o-----o-o-----o-|o-----o---o---o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.Birthday, {
    title: 'Birthday',
    startsWith: StartsWith.drums,
    length: 164,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Birthday&Author=The%20Beatles&Tempo=139&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|O---O---O---O---|O---O---O---O---|O-O-O-O-O-O-O-O-|&K=|o-------o-o-----|o---o---o---o---|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|'
        }
    }
});

fn(SongNames.Boulevard, {
    title: 'Boulevard of Broken Dreams',
    startsWith: StartsWith.drums,
    length: 164,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Boulevard%20of%20Broken%20Dreams&Author=Green%20Day&Tempo=84&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----------------|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-------o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o---o-o-o---o-|o-o---o-o-o---o-|o-o---o-o-o---o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|o-o-----o-o-----|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.ClosingTime, {
    title: 'Closing Time',
    startsWith: StartsWith.rhythmGuitar,
    length: 274,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Closing%20Time&Author=Semisonic&Tempo=92&Measures=6&H=|c-x-x-x-x-o-x-x-|c-x-x-x-x-o-x-x-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|&S=|----O--g-g--O---|----O--g-g--O---|----O--g-g--O---|----O--g-g--O---|----x-------x---|----x-------x---|&K=|o---------o-----|o---------o-----|o---------o-----|o---------o-----|o--o--o--oo---o-|o--o--o--oo---o-|'
        }
    }
});

fn(SongNames.Rockville, {
    title: "Don't go back to Rockville",
    startsWith: StartsWith.drums,
    length: 274,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Don%27t%20Go%20Back%20to%20Rockville&Author=REM&Tempo=152&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-o-x-o-|c---r---r-r---r-|r---r---r-r---c-|c---------------|--------------o-|x-x-o-x-x-x-o-x-|x-x-o-x-x-x-o-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----------------|----------------|----------------|----O---O-O-O-O-|&K=|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|'
        }
    }
});

fn(SongNames.FloatOn, {
    title: 'Float On',
    startsWith: StartsWith.drumsAndKeys,
    length: 209,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Float%20On&Author=Modest%20Mouse&Tempo=101&Measures=10&H=|x-x-o-x-x-x-o-x-|x-x-o-x-x-x-o-x-|xxxxxxxxxxxxxxxx|xxxxxxxxxxox-xxx|xxxxxxxxxxxxxxxx|xxxxxxxxxxox-xox|xxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxxx|xxxxxxxx-xx-xx--|&S=|----O-------O---|----O-------O---|----------------|------------O---|----------------|------------O---|----------------|----------------|----------------|--------O--O--OO|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|'
        }
    }
});

fn(SongNames.GetOffThis, {
    title: 'Get Off This',
    startsWith: StartsWith.all,
    length: 266,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Get%20Off%20This&Author=Cracker&Tempo=108&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|----O-------O---|&K=|o-o----o-o------|'
        }
    }
});

fn(SongNames.Holiday, {
    title: 'Holiday',
    startsWith: StartsWith.leadGuitar,
    length: 240,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=12&Title=Holiday&Author=Green%20Day&Tempo=147&Measures=8&H=|------------|------------|------------|c--c--------|c--x--x--x--|x--x--x--x--|x--x--x--x--|x--x--x--x--|&S=|---O-----O--|---O-----O--|---O-----O--|O--O--OOOOOO|---O-----O--|---O-----O-O|---O-----O--|---O----O--O|&K=|o-----o-----|o-----o-----|o-----o-----|o--o--------|o-----o-----|o-----o-o---|o-----o-----|o-----o--o--|&T1=|------------|------------|------------|------------|------------|------------|------------|------------|&T4=|o--o-oo--o-o|o--o-oooo-oo|o--o-oo--o-o|------------|------------|------------|------------|------------|'
        }
    }
});

fn(SongNames.IGotYou, {
    title: 'I Got You',
    startsWith: StartsWith.rhythmGuitar,
    length: 210,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=I%20Got%20You&Author=Split%20Enz&Tempo=126&Measures=6&H=|----------------|--------------o-|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|&S=|----------------|O-O-O-O-O-O-O-O-|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o---o---o---o---|o---o---o---o---|o-------o-------|o-------o-------|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|'
        }
    }
});

fn(SongNames.IWillSurvive, {
    title: 'I Will Survive',
    startsWith: StartsWith.leadGuitar,
    length: 310,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=I%20Will%20Survive&Author=Cake&Tempo=96&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|'
        }
    }
});

fn(SongNames.JessiesGirl, {
    title: "Jessie's Girl",
    startsWith: StartsWith.leadGuitar,
    length: 195,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Jessies%20Girl&Author=Rick%20Springfield&Tempo=132&Measures=10&MetronomeFreq=4&H=|----------------|----------------|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-------x-------|x-------x-------|&S=|----------------|----------------|----------------|----------------|----O-------O---|----O---O-------|----O-------O---|----O-----O-O---|----------------|----------------|&K=|----------------|o-------o-------|o-------o-------|o-o-o-o-o-o-o-o-|o-------o-o-----|o-------o-------|o-------o-------|o-------o-------|----------------|----------------|&T1=|----------o-o---|----o-------o-o-|----o-----o-o---|----------------|----o-------o---|----o---o-------|----------------|----------------|----o-------o-o-|----o-------o-o-|&T4=|--------------o-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|----------------|----------------|----o-------o-o-|----o-------o-o-|'
        }
    }
});

fn(SongNames.JustWhatINeeded, {
    title: 'Just What I Needed',
    startsWith: StartsWith.leadGuitar,
    length: 226,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Just%20What%20I%20Needed&Author=The%20Cars&Tempo=127&Measures=8&H=|----------------|----------------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-c-x-x-x-x-|c-x-x-c-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----f-------f---|----f-------f---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|O-------O-------|O-------O---O---|&K=|----------------|----------------|o-o-----o-o-----|o-o-----o-o-----|o-o---o-------o-|o-----o-------o-|--o-o-o---o-o-o-|--o-o-o---o-o-o-|'
        }
    }
});

fn(SongNames.KeepYourHands, {
    title: 'Keep Your Hands to Yourself',
    startsWith: StartsWith.leadGuitar,
    length: 205,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=8&Title=Keep%20Your%20Hands%20to%20Yourself&Author=The%20Georgia%20Satellites&Tempo=115&Measures=4&H=|xxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|&S=|--O---O-|--O---O-|--O---O-|--O---O-|&K=|o---oo--|o---oo-o|o---oo--|o---oo-o|'
        }
    }
});

fn(SongNames.Laid, {
    title: 'Laid',
    startsWith: StartsWith.guitars,
    length: 157,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Laid&Author=James&Tempo=116&Measures=6&H=|----------------|----------------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|x-x-x-x-x-x-x-x-|x-o-x-o-x-o-x-o-|&S=|OOOOOOOOOOOOOOOO|OOOOOOOOOOOOOOOO|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|&T1=|----------------|----------------|----------------|--------------o-|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.LearningToFly, {
    title: 'Learning to Fly',
    startsWith: StartsWith.leadGuitar,
    length: 183,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Learning%20to%20Fly&Author=Tom%20Petty&Tempo=117&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-------|x-x-x-x---------|----------------|xxxxx-----------|--xxxx----------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-----O-O-O-|----O-------O---|----O-------O---|------OO--OO--OO|O---------O-O-O-|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|--------o---o---|----------------|&T4=|----------------|----------------|----------------|----------------|--------o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|'
        }
    }
});

fn(SongNames.LongWayToTheTop, {
    title: 'Long Way to the Top',
    startsWith: StartsWith.leadGuitar,
    length: 302,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Long%20Way%20to%20the%20Top&Author=AC%2FDC&Tempo=136&Measures=7&H=|----------------|----------------|c-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|----x-------x---|----------------|x-x-x-x-x-x-x-x-|&S=|----------------|-----------OO---|----O-------O---|----O-------O---|----------------|----f-------f---|----O-------O---|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|----------------|----------------|o---o---o---o---|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.NeverLetYouGo, {
    title: 'Never Let You Go',
    startsWith: StartsWith.rhythmGuitar,
    length: 238,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Never%20Let%20You%20Go&Author=Third%20Eye%20Blind&Tempo=113&Measures=10&H=|----------------|--------c-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-------|&S=|--------------O-|O---O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----------------|----------O-O-O-|&K=|----------------|--------o-o-----|o-------o-o-----|o------oo-o-----|o-------o-o-----|o------oo-o-----|o-------o-o---o-|o------oo-o-----|o---o---o---o---|o---o---o---o---|&T1=|----------------|--o-------------|----------------|----------------|--------------o-|----------------|----------------|----------------|----------------|----------o-o-o-|&T4=|----------------|------o---------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.PumpItUp, {
    title: 'Pump it Up',
    startsWith: StartsWith.all,
    length: 197,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Pump%20It%20Up&Author=Elvis%20Costello&Tempo=139&Measures=4&H=|----------------|----------------|c-c-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|O---O---O---O---|O---O---O---O---|&K=|o-------o-o-----|o-------o-o-----|--o---o---o---o-|--o---o---o---o-|&T1=|----------------|----------------|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|'
        }
    }
});

fn(SongNames.RaspberryBeret, {
    title: 'Raspberry Beret',
    startsWith: StartsWith.drums,
    length: 235,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Raspberry%20Beret&Author=Hindu%20Love%20Gods&Tempo=125&Measures=10&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-c-x-c-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|O---O---O---O---|O---O---O---O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-------o-o-----|o---------o---o-|o---------o---o-|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-----o-o-------|o-----o-o-------|'
        }
    }
});

fn(SongNames.RockInFreeWorld, {
    title: "Keep on Rockin' in the Free World",
    startsWith: StartsWith.all,
    length: 282,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Rockin%27%20in%20the%20Free%20World&Author=Neil%20Young&Tempo=132&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-c-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r---|----------------|----------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-----O-O---|----------------|----------------|&K=|o-------o-o-----|o-------o-o-----|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|----------------|----------------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.ShortSkirt, {
    title: 'Short Skirt / Long Jacket',
    startsWith: 'Trumpet',
    length: 205,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Short%20Skirt%20%2F%20Long%20Jacket&Author=Cake&Tempo=120&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|m---m---m---m---|m---m---m---m---|m---------------|----------------|&S=|----O-------O---|----O-----------|----O-------O---|----O-------O---|----O-------O---|----O-------O---|O---------------|----------------|&K=|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o---------------|----------------|&T1=|----------------|----------ooo-o-|----------------|----------------|----------------|----------------|----------------|----------ooo-o-|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.SteadyAsSheGoes, {
    title: 'Steady as She Goes',
    startsWith: StartsWith.drums,
    length: 206,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Steady%20as%20She%20Goes&Author=The%20Raconteurs&Tempo=124&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-o-x-|x-x-x-x-x-x-o-x-|c---c---c---c---|c---c---c---c---|&S=|----O-------O---|----O-------O---|----------------|----------------|----O-------O---|----O-------O---|----O-----O-----|----O-----O-----|----O--g----O---|----O--g----O---|&K=|----------------|----------------|o-----o-o-----o-|o-----o-o---o---|o-----o-o-----o-|o-----o-o---o---|o-----o-o-----o-|o-----o-o-----o-|o-------o-o---o-|o-------o-o-----|'
        }
    }
});

fn(SongNames.StuckInMiddle, {
    title: 'Stuck in the Middle With You',
    startsWith: StartsWith.rhythmGuitar,
    length: 209,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Stuck%20in%20the%20Middle%20with%20You&Author=Stealers%20Wheel&Tempo=124&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|xxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxxx|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----b-------b---|----b-------b---|&S=|----O-------O-O-|----O-------O-O-|----O-------O-O-|----O-------O-O-|----O-------O-O-|----O-------O-O-|----------------|----------------|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|----------------|----------------|',
            notes: [DrumPad.cowbell]
        }
    }
});

fn(SongNames.TalkDirty, {
    title: 'Talk Dirty to Me',
    startsWith: StartsWith.leadGuitar,
    length: 224,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=24&Title=Talk%20Dirty%20To%20Me&Author=Poison&Tempo=158&Measures=10&H=|------------------------|c-----x-----x-----x-----|x-----x-----x-----x-----|x-----x-----x-----x-----|x-----x-----x-----x-----|x-----c-----x-----x-----|x-----x-----x-----x-----|x-----x-----x-----x-----|x-----x-----x-----c-----|c-----------------------|&S=|f--------f--------f-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------f-----------f-----|&K=|---o--o-----o--o--------|o--------o-----o--------|o--------o-----o--------|o--o--------o--o--------|o--o-----o-----o--------|o--------------o--------|o--------------o--------|o--o-----------o-----o--|o--------------o--------|o-----------------------|&T1=|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|&T4=|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|'
        }
    }
});

fn(SongNames.TeenAngst, {
    title: 'Teen Angst',
    startsWith: StartsWith.drumsAndGuitar,
    length: 224,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Teen%20Angst&Author=Cracker&Tempo=157&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-----O-O-O-|&K=|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-------|'
        }
    }
});

fn(SongNames.OldApartment, {
    title: 'The Old Apartment',
    startsWith: StartsWith.all,
    length: 210,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=The%20Old%20Apartment&Author=Barenaked%20Ladies&Tempo=80&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|x-x-x-x-x-o-x-x-|x-x-x-x-x-o-x-x-|x-x-x-x-x-x-x-x-|x-x-----x-x-----|&S=|----O-------O---|----O-------O---|----O--O----O--O|----O--O----O--O|----O----O--O---|----O----O--O---|----O-------O---|----OOOO----f---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o------oo-----|o-o------oo-----|o-oo----o-o-----|o-oo----o-o-----|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|-------------oo-|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|---------------o|'
        }
    }
});

fn(SongNames.ThereSheGoes, {
    title: 'There She Goes',
    startsWith: StartsWith.rhythmGuitar,
    length: 163,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=There%20She%20Goes&Author=The%20La%27s&Tempo=123&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-o-|&S=|----O-O-----O---|----O-O-----O---|----O-O-----O---|--O-O-O-O-O-O-O-|----O-------O---|----O-------O---|&K=|o-------o-----o-|o-------o-----o-|o-------o-----o-|--o-o-o-o-o-o-o-|o-----o-o-------|o-----o-o-------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
        }
    }
});

fn(SongNames.Whiskey, {
    title: 'Whiskey in the Jar',
    startsWith: StartsWith.rhythmGuitar,
    length: 305,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Whiskey%20in%20the%20Jar&Author=Metallica&Tempo=133&Measures=7&H=|c-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|c---o-o-o-o-o-o-|--o---o---o-----|o-o-o-o-o-o-c---|o-o-o-o-o-o-c---|--------c---c---|&S=|----O-------O---|----O-------O---|----O-O-----O---|----------------|------------O---|------------O---|O---O-----------|&K=|o-------o-------|o-------o-----o-|o-------o-----o-|--o---o---o---o-|o-o-----o-o-----|o-o-----o-o-----|--o---o-o---o---|&T1=|----------------|----------------|----------------|----------------|----o-o---------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----o-o---------|----------------|'
        }
    }
});

fn(SongNames.WhatchaWant, {
    title: "So What'cha Want",
    startsWith: StartsWith.rhythmGuitar,
    length: 212,
    details: {
        [Instrument.drums]: {
            url: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=24&Title=So%20What%27cha%20Want&Author=The%20Record%20Company&Tempo=85&Measures=2&H=|------------------------|------c-----------------|&S=|------O-----------O-----|------O-----------O-----|&K=|o--o--------o--o--------|o--o--------o--o--------|&T1=|--o--o--------o--o------|--o--o--------o--o------|&T4=|o--o--o--o--o--o--o--o--|o--o-----o--o--o--o--o--|'
        }
    }
});

fn(SongNames.WhatsUp, {
    title: "What's Up?",
    startsWith: StartsWith.rhythmGuitar,
    length: 296,
    details: {
        [Instrument.drums]: {
            url: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=What's%20Up&Author=4%20Non%20Blondes&Tempo=67&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-rrrrrrrrrrrrrr|rrrrrrrrrrrrrrrr|&S=|----x-------x---|----x-------x---|----O-------O---|----O-------O---|&K=|o--o---oo--o---o|o--o---oo--o---o|o-o----oo-oo---o|o-o----oo-oo---o|`
        }
    }
});

fn(SongNames.Lips, {
    title: 'Lips Like Sugar',
    startsWith: StartsWith.drumsAndGuitar,
    length: 292,
    details: {
        [Instrument.drums]: {
            url: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Lips%20Like%20Sugar&Author=Echo%20and%20the%20Bunnymen&Comments=bell%20tree&Tempo=130&Measures=6&H=|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-------|&S=|----------------|----------O-O-O-|----O-------O---|----O-------O---|----O-------O---|----O-----OOOOOO|&K=|o---o---o---o---|o---o---o---o---|o-------o-------|o-------o-o---o-|o-------o-o-----|o-------o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|----------------|----------------|`,
            notes: [DrumPad.bellTree]
        }
    }
});

fn(SongNames.Jealousy, {
    title: 'Hey Jealousy',
    startsWith: StartsWith.bass,
    length: 237,
    details: {
        [Instrument.drums]: {
            url: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Hey%20Jealousy&Author=Gin%20Blossoms&Tempo=153&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o---------o---o-|--o-------o---o-|o---------o---o-|----------o---o-|`
        }
    }
});
