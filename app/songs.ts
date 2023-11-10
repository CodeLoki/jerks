import { htmlSafe } from '@ember/template';

export type Song = {
    title: string | ReturnType<typeof htmlSafe>;
    url: string;
    notes?: string[];
    pad?: string;
    length: number;
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
    SaveIt
}

enum Starter {
    all = 'Drums count in',
    rhythmGuitar = 'Rhythm guitar',
    drums = 'Drums',
    leadGuitar = 'Lead guitar',
    leadAndVocals = 'Lead guitar and vocals',
    drumsAndBass = 'Drums and bass',
    bass = 'Bass'
}

const AllSongs = new Map<SongNames, Song>();
export default AllSongs;

const fn = (id: SongNames, song: Song) => AllSongs.set(id, song);

fn(SongNames.AboutAGirl, {
    title: 'About a Girl',
    url: 'TimeSig=4/4&Div=16&Title=About%20a%20Girl&Author=Nirvana&Tempo=139&Measures=6&H=%7Cr-r-r-r-r-r-r-r-%7Cr-r-r-r-r-r-r-r-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C&S=%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O---------O-%7C----O-------O---%7C----O---------O-%7C&K=%7Co-----o-o-----o-%7Co-----o-o-----o-%7Co-----o-o-----o-%7Co-----o---o-----%7Co-----o-o-------%7Co-o---o---o-----%7C',
    notes: [Starter.rhythmGuitar],
    length: 168
});

fn(SongNames.Good, {
    title: 'Good',
    url: 'TimeSig=4/4&Div=16&Title=Good&Author=Better%20Than%20Ezra&Tempo=110&Measures=6&H=%7Cr-r-r-r-r-r-r-r-%7Cr-r-r-r-r-c-r-c-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cr-r-r-r-r-r-r-r-%7Cr-r-r-r-r-c-r-c-%7C&S=%7C----O-------O---%7C----O-----O---O-%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-----O---O-%7C&K=%7Co-----o-o-------%7Co-----o-o---o---%7Co-o-----o-o-----%7Co-o-----o-o-----%7Co-o-----o-o-----%7Co-o-----o---o---%7C',
    notes: [Starter.all],
    length: 184
});

fn(SongNames.LearnToFly, {
    title: 'Learn to Fly',
    url: 'TimeSig=4/4&Div=16&Title=Learn%20to%20Fly&Author=Foo%20Fighters&Tempo=136&Measures=4&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-o-s-x-%7Cx-x-x-x-x-o-s-x-%7C&S=%7C----O-------O---%7C----O-------O---%7C----O-----O-----%7C----O-----O-----%7C&K=%7Co-----o---o---o-%7Co-----o---o---o-%7Co-----o-o-----o-%7Co-----o-o-----o-%7C',
    notes: ['Drums and rythm flam'],
    pad: 'Tambourine',
    length: 245
});

fn(SongNames.Flagpole, {
    title: 'Flagpole Sitter',
    url: 'TimeSig=4/4&Div=12&Title=Flagpole%20Sitta&Author=Harvey%20Danger&Tempo=145&Measures=6&H=|------------|------------|o--o--o--o--|o--o--o--o--|------------|------------|&S=|------------|OOOOOOOOOOOO|---O-----O--|---O-----O-O|---O-O---O-O|---O-O---O-O|&K=|------------|------------|o-----o-o---|o-----o-o---|o--o--o--o--|o--o--o--o--|&T1=|------------|------------|------------|------------|------------|------------|&T4=|------------|------------|------------|------------|o-o---o-o---|o-o---o-o---|',
    notes: [Starter.all],
    length: 183
});

fn(SongNames.Plush, {
    title: 'Plush',
    url: 'TimeSig=4/4&Div=16&Title=Plush&Author=Stone%20Temple%20Pilots&Comments=2x%2C%201x%2C%202x%20(silent)%2C%202x&Tempo=72&Measures=8&H=%7Cc-o-o-o-o-o-o-o-%7Co-o-o-o-oss-o---%7Cc-x-o-x-x-x-x-x-%7Cx-x-o-x-x-x-o---%7Cc-rrrrrcrrrrrrrr%7Cc-rrrrrcrrrr----%7Cc-x-o-x-x-x-o-x-%7Cx-x-o-x-x-x-o---%7C&S=%7C----O-------O---%7C----O-------O-OO%7C----O-------O---%7C----O-------O-OO%7C----O-------O--O%7C----O-------O-OO%7C----O-------O---%7C----O-------O-OO%7C&K=%7Co-o---o--oo-----%7Co-o---o--oo-----%7Co-o---o---o-----%7Co-o---o--oo-----%7Co-o----o--o--o--%7Co-o----o--o--o--%7Co-oo--o-o-oo----%7Co-oo--o-o-oo----%7C&T1=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C------------o-o-%7C----------------%7C----------------%7C&T4=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C',
    notes: [Starter.all, '2x, 1x, 2x (silent), 2x'],
    length: 183
});

fn(SongNames.Alive, {
    title: 'Alive',
    url: 'TimeSig=4/4&Div=16&Title=Alive&Author=Pearl%20Jam&Tempo=76&Measures=8&H=%7Cc-o-o-o-o-o-o-o-%7Co-o-o-o-o-o-o-o-%7Cc-x-x-o-x-x-x-x-%7Cx-x-x-o-x-x-x-x-%7Ccrrrrrrrrrrrrrrr%7Crrrrrrrrrrrrrrrr%7Co-o-o-o-o-o-o-o-%7Co-o-o-o-o-o-o-o-%7C&S=%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7CO--O--O--O----O-%7CO--O--O--O----O-%7C&K=%7Co--o--o---oo---o%7Co--o--o---oo---o%7Co--o--o---oo---o%7Co--o--o---oo---o%7Co-o----oo-o----o%7Co-o----oo-o----o%7C-oo----oo---o--o%7C-oo----oo---o--o%7C',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.BallAndChain, {
    title: htmlSafe('Ball &amp; Chain'),
    url: 'TimeSig=4/4&Div=12&Title=Ball%20and%20Chain&Author=Social%20Distortion&Tempo=134&Measures=6&H=|------------|r-rr-rr-rr-r|r-rr-rr-rr-r|r-rr-rr-rr-r|c-rr-rr-rr-r|r-rr-rr-rr-r|&S=|---------f--|---O-----O--|---O-----O--|---O-----O-O|---O-----O--|---O-----O--|&K=|--------o---|o----o--o--o|o----o--o--o|o----o--o---|o----o--o--o|o----o--o--o|',
    notes: [Starter.rhythmGuitar],
    length: 183
});

fn(SongNames.Banditos, {
    title: 'Banditos',
    url: 'TimeSig=4/4&Div=16&Title=Banditos&Author=The%20Refreshments&Tempo=147&Measures=6&H=|r-r-r-r-r-r-r-r-|x-x-x-x-x-x-x-x-|o---o---o---o---|o---o---o---o---|----------------|----------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o---------o---o-|----------o---o-|o---o---o---o---|o---o---o---o---|&T1=|----------------|----------------|----------------|----------------|----------------|--------------oo|&T4=|----------------|----------------|----------------|----------------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o---|',
    notes: [Starter.leadAndVocals],
    length: 183
});

fn(SongNames.Creep, {
    title: 'Creep',
    url: 'TimeSig=4/4&Div=16&Title=Creep&Author=Radiohead&Tempo=92&Measures=10&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-c-|----------------|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|--O-O-----O-O---|O---O---OOOO----|----------------|----------------|----x-------x---|----x-------x---|&K=|o------oo-o---o-|o------oo-o-----|o------oo-o---o-|o------oo-o---o-|o-----o-o-------|----------------|o-------------o-|o-------------o-|o------oo-o---o-|o------oo-o---o-|&T1=|----------------|----------------|----------------|----------------|----------------|-o----o-----oooo|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.all],
    length: 183
});

fn(SongNames.Dancing, {
    title: 'Dancing With Myself',
    url: 'TimeSig=4/4&Div=16&Title=Dancing%20with%20Myself&Author=Generation%20X&Tempo=176&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-c-x-x-x-x-x-|x-x-c-x-x-x-x-x-|----------------|----------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|f---------------|------------f---|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|----------------|----------------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.drums],
    length: 183
});

fn(SongNames.December, {
    title: 'December',
    url: 'TimeSig=4/4&Div=16&Title=December&Author=Collective%20Soul&Tempo=122&Measures=8&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C----------------%7C----------------%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C&S=%7C----O-------O---%7C----O-------O---%7C----------------%7C----------------%7C----------------%7C------------O---%7C----O-------O---%7C----O-------O---%7C&K=%7Co-------o-------%7Co-------o-----o-%7C----------------%7C----------------%7Co-------------o-%7Co---------------%7Co-------------o-%7Co-------------o-%7C&T1=%7C----------------%7C----------------%7C----o-----o-o---%7C----o-----o-o---%7C----------------%7C----------------%7C----------------%7C----------------%7C&T4=%7C----------------%7C----------------%7C------o-o-------%7C------o-o-----o-%7C----------------%7C----------------%7C----------------%7C----------------%7C',
    notes: [Starter.rhythmGuitar],
    length: 183
});

fn(SongNames.Sandman, {
    title: 'Enter Sandman',
    url: 'TimeSig=4/4&Div=16&Title=Enter%20Sandman%20&Author=Metallica&Tempo=123&Measures=10&H=|----------------|----------------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-c-|o-o-o-o-o-o-o-c-|o-o-o-o-o-o-o-c-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-c-|x-x-x-x-x-x-x-c-|&S=|----------------|----------------|----O-------O---|----O-------O---|--------O-------|--------O-------|----O-------O---|----O-------O---|----O---------O-|----O-------O---|&K=|o---o---o---o---|o---o---o---o---|o-------o-------|o-------o-----o-|--------------o-|--------------o-|--------o-------|o-------o-o-----|o-------o---o---|o-------o-o---o-|&T1=|----o-------o-o-|----o-------o-o-|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.rhythmGuitar],
    length: 183
});

fn(SongNames.Everlong, {
    title: 'Everlong',
    url: 'TimeSig=4/4&Div=16&Title=Everlong&Author=Foo%20Fighters&Tempo=158&Measures=6&H=%7CxxxxXxxxxxxxXxxx%7CxxxxXxxxxxxxXxxx%7Cxxxx-xxxxxxx-xxx%7Cxxxx-xxxxxxx-xxx%7Cxxxx-xxxxxxx-xxx%7Cxxxx-xxxxxxx-xxx%7C&S=%7C----------------%7C----------------%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C&K=%7C----------------%7C----o-------o---%7Co---o---o---o---%7Co---o---o-o-o---%7Co-------o-o---o-%7C--o-----o-o---o-%7C',
    notes: [Starter.rhythmGuitar],
    length: 183
});

fn(SongNames.Godzilla, {
    title: 'Godzilla',
    url: 'TimeSig=4/4&Div=16&Title=Godzilla&Author=Blue%20Oyster%20Cult&Tempo=92&Measures=8&H=%7C----------------%7C----------------%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cc-r-r-r-r-r-r-r-%7Cr-r-r-r-r-r-r-r-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C&S=%7C----------------%7C----------OOOOOO%7C----O-------O---%7C----O--g-g--O---%7C----O-------O---%7C----O-------O---%7C----O----g--O---%7C----O----g--O---%7C&K=%7Co---o---o---o---%7Co---o---o---o---%7Co-------o-o-----%7Co-o-----o-o-----%7Co-o-----o-o-----%7Co-o-----o-o-----%7Co---------o-----%7Co-o-------o-----%7C',
    notes: [Starter.drums],
    length: 183
});

fn(SongNames.HeyHey, {
    title: 'Hey, Hey, What Can I Do?',
    url: 'TimeSig=4/4&Div=16&Title=Hey%2C%20Hey%2C%20What%20Can%20I%20Do&Author=Led%20Zeppelin&Tempo=78&Measures=6&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-c---%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C&S=%7C----O-------O-O-%7C----O-------O---%7C----O-------O---%7C----O-------O-O-%7C----O-------O---%7C----O----O--O-O-%7C&K=%7Co--o---oo--o----%7Co--o---o-o-o----%7Co--o---o--o----o%7Co-o----o-o-o----%7Co--o---o--o----o%7Co-o----o---o----%7C',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.HeyYa, {
    title: 'Hey Ya!',
    url: 'TimeSig=4/4&Div=16&Title=Hey%2C%20Hey%2C%20What%20Can%20I%20Do&Author=Led%20Zeppelin&Tempo=78&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-c---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O-O-|----O-------O---|----O-------O---|----O-------O-O-|----O-------O---|----O----O--O-O-|&K=|o--o---oo--o----|o--o---o-o-o----|o--o---o--o----o|o-o----o-o-o----|o--o---o--o----o|o-o----o---o----|',
    notes: ['Singer'],
    length: 183
});

fn(SongNames.HonkyTonk, {
    title: 'Honky Tonk',
    url: 'TimeSig=4/4&Div=16&Title=Honky%20Tonk%20Woman&Author=The%20Rolling%20Stones&Tempo=115&Measures=6&H=%7C----------------%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C&S=%7C----------O-----%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C&K=%7C----------------%7Co---------o---o-%7Co---------o---o-%7Co---------o---o-%7Co-----o-o-----o-%7Co-----o-o-o---o-%7C&T1=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C&T4=%7C--------------o-%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C',
    notes: [Starter.drums],
    length: 183
});

fn(SongNames.IWillFollow, {
    title: 'I Will Follow',
    url: 'https://www.mikeslessons.com/groove//?Mode=view&TimeSig=4/4&Div=16&Title=I%20Will%20Follow&Author=U2&Tempo=155&Measures=8&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x---------%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x---------%7C&S=%7C----O-------O---%7C----O-----O---O-%7C----O-------O---%7C----O---OOO-OOO-%7CO---O-------O---%7CO---O-------O---%7CO---O-------O---%7C----O---OOO-OOO-%7C&K=%7Co---o---o---o---%7Co---o---o---o---%7Co---o---o---o---%7Co---o---o---o---%7Co---o---o---o---%7Co---o---o---o---%7Co---o---o---o---%7Co---o---o---o---%7C',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.InsideOut, {
    title: 'Inside Out',
    url: 'TimeSig=4/4&Div=16&Title=Inside%20Out&Author=Eve%206&Tempo=88&Measures=10&H=|----------------|--------o---o---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-o-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|----------------|----------------|&S=|----------------|----------------|----O-------O---|----O-------OO--|----O-------O---|----O-------OO-O|----O--O-O--O--O|----O--O-O--O--O|----O-------O---|----O-------O---|&K=|----------------|----------------|o-o----oo-o-----|o-o----oo-o-----|o-o----oo-o-----|o------o--o-----|o-oo----o-oo----|o-oo----o-oo----|----------------|----------------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--o-o-----o-o---|--o-o-----o-o---|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|oo-o-ooooo-o-ooo|oo-o-ooooo-o-ooo|',
    notes: [Starter.leadAndVocals],
    length: 183
});

fn(SongNames.IntoYourArms, {
    title: 'Into Your Arms',
    url: 'TimeSig=4/4&Div=16&Title=Into%20Your%20Arms&Author=The%20Lemonheads&Tempo=124&Measures=4&H=|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|--------------oo|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o---|----------------|----------------|',
    notes: [Starter.rhythmGuitar],
    length: 183
});

fn(SongNames.JealousAgain, {
    title: 'Jealous Again',
    url: 'TimeSig=4/4&Div=16&Title=Jealous%20Again&Author=Black%20Crowes&Tempo=114&Measures=10&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-c-x-x-x-c-%7Cx-x-x-c-x-x-x-c-%7Cx-x-x-x-x-x-x-x-%7Cx---x---x---x---%7Cx---x---x---x---%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C&S=%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------f---%7C----------------%7C----O-----------%7C----O-------O---%7C----O-------O---%7C&K=%7Co-----o-o-------%7Co-----o-o-------%7Co-------o-o-----%7Co-o---o---o---o-%7C--o---o---o---o-%7C--o-----o-o---o-%7Co-------------o-%7Co-------------o-%7Co-------o-------%7Co-------o-------%7C',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.Jenny, {
    title: '867-5309 (Jenny)',
    url: 'TimeSig=4/4&Div=16&Title=867-5309%20%2F%20Jenny&Author=Tommy%20Tutone&Tempo=138&Measures=6&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-c-x-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-c-x-%7Cr-r-r-r-r-r-r-r-%7Cr-r-r-r-r-r-c-r-%7C&S=%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C&K=%7Co-----o-o-------%7Co-----o-o-------%7Co-------o-o-----%7Co-------o-o-----%7Co-------o-o-----%7Co-------o-o-----%7C&T1=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C&T4=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.JustLikeHeaven, {
    title: 'Just Like Heaven',
    url: 'TimeSig=4/4&Div=16&Title=Just%20Like%20Heaven&Author=The%20Cure&Tempo=151&Measures=10&H=%7C----------------%7C----c-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-c-x-x-c-c-x-%7Cx-x-c-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x---%7C----c-x-x-x-x-x-%7C&S=%7C----------------%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-----O-O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C&K=%7C----------------%7C--o-----o-o---o-%7C--o-----o-o---o-%7Co-------o-o---o-%7C--o-----o-----o-%7Co-o-----o-o---o-%7C--o-----o-o---o-%7Co-------o-o---o-%7C--o-----o-o-----%7C--o-----o-o---o-%7C&T1=%7C--------------oo%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C--------------oo%7C----------------%7C&T4=%7C----------------%7Co---------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7Co---------------%7C',
    notes: [Starter.drumsAndBass],
    length: 183
});

fn(SongNames.LonelyBoy, {
    title: 'Lonely Boy',
    url: 'TimeSig=4/4&Div=8&Title=Lonely%20Boy&Author=The%20Black%20Keys&Tempo=166&Measures=4&H=|--------|--------|xxxxxxxx|xxxxxxxx|&S=|--OO--O-|--OO--O-|--OO--O-|--OO--O-|&K=|o---o---|o---o---|o---o---|o---o---|&T1=|--------|--------|--------|--------|&T4=|oooooooo|oooooooo|--------|--------|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.Malibu, {
    title: 'Malibu',
    url: 'TimeSig=4/4&Div=16&Title=Malibu&Author=Hole&Tempo=122&Measures=10&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----c-r-r-r-r-c-|r-r-r-r-r-r-r-r-|c-r-r-r-r-r-r-c-|r-r-r-r-r-r-r-r-|x-x-x-x-x-x---x-|x-x-x-x-x-x---x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O--OO---O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-----------|----O-----------|&K=|o-------o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-------------|o-o-----o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-----o-o---o-|o-------o-o---o-|o-------o-o---o-|&T1=|----------------|----------------|----------------|----------o-----|----------------|----------------|----------------|----------------|------------o---|------------o---|&T4=|----------------|----------------|----------------|--------------o-|----------------|----------------|----------------|----------------|------------o---|------------o---|',
    notes: [Starter.all],
    length: 183
});

fn(SongNames.MaryJane, {
    title: 'Mary Janes Last Dance',
    url: 'TimeSig=4/4&Div=16&Title=Mary%20Jane%27s%20Last%20Dance&Author=Tom%20Petty&Tempo=85&Measures=2&H=|o-x-x-x-x-o-x-x-|o-x-x-x-x-o-x-x-|&S=|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-------o-o-----|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.WorstEnemy, {
    title: 'My Own Worst Enemy',
    url: 'TimeSig=4/4&Div=16&Title=My%20Own%20Worst%20Enemy&Author=Lit&Tempo=103&Measures=8&H=|o---o---o---o---|o---o---o---o---|x---x---x---x---|x---x---x-c-c---|x---x---x---x---|x---x---x---x---|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O--O----O--O|----O--O--f---f-|----O--O----O--O|----O--O--------|----O--O----O--O|----O--O--f---f-|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o---o---|o-o-----o-o-----|o-o-----o-o-o---|o-o-----o-o-----|o-o-----o---o---|o-------o-o-----|o-------o-o-----|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.Peaches, {
    title: 'Peaches',
    url: 'TimeSig=4/4&Div=16&Title=Peaches&Author=Presidents%20of%20the%20United%20States&Tempo=94&Measures=6&H=%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C&S=%7C----O--O----O--O%7C----O--O----O--O%7C----O-------O---%7C----O-------O---%7C----O-------O-b-%7C----O-------O-b-%7C&K=%7Co-oo----o-oo----%7Co-oo----o-oo----%7Co-o----o--o-----%7Co-o----o--o-----%7Co-o---o-o-o-----%7Co-o---o-o-o-----%7C',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.Possum, {
    title: 'Possum Kingdom',
    url: 'TimeSig=4/4&Div=16&Title=Possum%20Kingdom&Author=Toadies&Tempo=101&Measures=9&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-c-x-----%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-c-x-c-x-%7Cx-x-c-x-x-x-c-x-%7Cx-x-c-x-x-x-c-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-o-x-----%7Cc---c---c---c---%7C&S=%7C----O-------O---%7C----O-----O-----%7C----O-------O---%7C----O-----O---O-%7C----O--O----O--O%7C----O--O----O--O%7C-O--O----O--O---%7C-O--O-----O-----%7CO---O---O---O---%7C&K=%7Co-o-----o-o-----%7Co-o-----o-------%7Co-o-----o-o-----%7Co-o-----o---o---%7Co-o-o-o-o-o-o-o-%7Co-o-o-o-o-o-o-o-%7Co-oo----o-oo----%7Co-oo----o-------%7C--o---o---o---o-%7C',
    notes: [Starter.rhythmGuitar],
    length: 183
});

fn(SongNames.PettyInPink, {
    title: 'Pretty In Pink',
    url: 'TimeSig=4/4&Div=16&Title=Pretty%20in%20Pink&Author=The%20Psychedelic%20Furs&Tempo=136&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|----------------|----------------|c---------------|&S=|----O-------O---|----O-------O---|----f-----------|----f-----------|f---f---f-------|----------------|&K=|o-------o-o-----|o-------o-o-----|o-----o-o-------|o-----o-o-------|--o---o---o-----|----------------|&T1=|----------------|----------------|------------o---|------------o---|------------o---|----------------|&T4=|----------------|----------------|------------o---|------------o---|------------o---|----------------|',
    notes: [Starter.drums],
    length: 183
});

fn(SongNames.RadioFree, {
    title: 'Radio Free Europe',
    url: 'TimeSig=4/4&Div=16&Title=Radio%20Free%20Europe&Author=REM&Tempo=155&Measures=10&H=|x---x---x---c---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-o-x-o-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-b-x-x-|x-x-x-x-x-b-x-x-|&S=|O---O---O---O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|--O-O---O---O-O-|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o---o---o---o---|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-o-----|o-------o-o-----|o-----o---o-----|o-----o---o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.drums],
    length: 183
});

fn(SongNames.Sanctuary, {
    title: 'She Sells Sanctuary',
    url: 'TimeSig=4/4&Div=16&Title=She%20Sells%20Sanctuary&Author=The%20Cult&Tempo=139&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-----|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|&S=|----O-------O---|----O-----OO--OO|----------------|----------------|----------------|f-----f-----f---|&K=|o-------o-------|o-------o-------|o---o---o---o---|o---o---o---o---|o---o---o---o---|--o-o---o-o-----|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.Shine, {
    title: 'Shine',
    url: 'TimeSig=4/4&Div=16&Title=Shine&Author=Collective%20Soul&Tempo=150&Measures=10&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x-------|x---x---x---x---|x---x---x---c---|c---r---r---r---|r---r---r---r---|&S=|--------O-------|--------O-------|--------O-------|--------O---O---|--------O-------|----O---O-------|--------O-------|----O---O-------|--------O-------|--------O-------|&K=|o-------------o-|--o-------------|o-------------o-|--o-------------|o-------------o-|----------------|o-------------o-|------------o---|o-------------o-|--------------o-|',
    notes: [Starter.rhythmGuitar],
    length: 183
});

fn(SongNames.ShouldIStay, {
    title: 'Should I Stay, or Should I Go?',
    url: 'TimeSig=4/4&Div=16&Title=Should%20I%20Stay%20or%20Should%20I%20Go&Author=The%20Clash&Tempo=113&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|----------------|&S=|----O-------O---|----O-------O---|--O---O---O---O-|--O---O---O---O-|--O---f---O---f-|--O---f---O---f-|&K=|o-----o-o-------|o-----o-o-----o-|o----o--o----o--|o----o--o----o--|o----o--o----o--|o----o--o----o--|&T1=|----------------|----------------|----------------|----------------|oo-o----oo-o----|oo-o----oo-o----|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.Song2, {
    title: 'Song 2',
    url: 'TimeSig=4/4&Div=16&Title=Song%202&Author=Blur&Tempo=130&Measures=6&H=|x-x-x-x-x-x-x---|x-x-x-x-x-x-x---|c-o-o-o-o-o-o-o-|o-o-o-o-o-o-c---|c---o-o-o-o-o-o-|o-o-o-o-o-o-c---|&S=|----O-------O---|----O-------O-O-|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-o---o---o-----|o-------o-o-----|o-o---o---o-----|o-------o-o-----|o-o---o---o-----|&T1=|--------------o-|--------------o-|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.drums],
    length: 183
});

fn(SongNames.StacysMom, {
    title: "Stacy's Mom",
    url: 'TimeSig=4/4&Div=16&Title=Stacy%27s%20Mom&Author=Fountains%20of%20Wayne&Tempo=118&Measures=8&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-o-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-------%7Cc-o-o-o-o-o-o-o-%7Cc-c-c-c-c---X---%7Cr-r-r-r-r-r-r-r-%7Cr-r-r-r-r-r-r-r-%7C&S=%7C----O-------O---%7C----O-------O-O-%7C----O-------O---%7C----O--O----f---%7C----O-------O---%7C----------------%7C----O-------O---%7C----O-------O---%7C&K=%7Co-------o-------%7Co-------o-------%7Co-o-----o-o-----%7Co-o-----o-o---o-%7Co-------o-o-----%7Co-o-o-o-o-------%7Co-o---o---o---o-%7C--o-----o-o-----%7C',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.Middle, {
    title: 'The Middle',
    url: 'TimeSig=4/4&Div=16&Title=The%20Middle&Author=Jimmy%20Eat%20World&Tempo=162&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-------c---|----c-----------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-----O-O-O-|&K=|o-------o-------|o-------o-----o-|o-------o-------|o-------o-------|o-------o-----o-|--o-----o-o-----|o-o-----o-----o-|--o-----o-o-----|o-o-----o-o-----|o-o-----o-------|&T1=|----------------|----------------|----------------|--------------oo|----------------|--------------oo|----------------|--------------oo|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.Train, {
    title: 'Train in Vain',
    url: 'TimeSig=4/4&Div=16&Title=Train%20in%20Vain&Author=The%20Clash&Tempo=123&Measures=6&H=|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-o-|c-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|c---------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|------------f---|&K=|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|o---------o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.drums],
    length: 183
});

fn(SongNames.Vertigo, {
    title: 'Vertigo',
    url: 'TimeSig=4/4&Div=16&Title=Vertigo&Author=U2&Tempo=140&Measures=8&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-o-%7C----------------%7C----------------%7Cc-x-x-x-x-x-x-c-%7Cx-x-x-x-x-x-x-x-%7Co-o-o-o-o-o-o-o-%7Co-o-o-o-o-o-o-o-%7C&S=%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O-O-%7C----O-------O---%7C----O-------O---%7CO-----O-----O---%7C--O-----O---O---%7C&K=%7Co-------o-o-----%7Co-------o-o-----%7Co-----o-o-------%7Co-----o-o-------%7Co-------o-o---o-%7C--o-----o-o---o-%7Co-o-o-o-o-o-o-o-%7Co-o-o-o-o-o-o-o-%7C&T1=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C&T4=%7C----------------%7C----------------%7Co-o-o-o-o-o-o-o-%7Co-o-o-o-o-o-o-o-%7C----------------%7C----------------%7C----------------%7C----------------%7C',
    notes: [Starter.drums],
    length: 183
});

fn(SongNames.Wanted, {
    title: 'Wanted, Dead or Alive',
    url: 'TimeSig=4/4&Div=16&Title=Wanted%20Dead%20or%20Alive&Author=Bon%20Jovi&Tempo=150&Measures=6&H=%7C----------r-r---%7C----------r-r---%7Cc-r-r-r-r-r-r-r-%7Cr-r-r-r-r-r-r-r-%7Cc-x-x-c-x-x-x-x-%7Cx-x-x-c-x-x-x-x-%7C&S=%7C----------------%7C----------------%7C----x-------x---%7C----x-------x---%7C----O-------O---%7C----O-------O---%7C&K=%7Co-----o-o-------%7Co-----o-o-------%7Co-----o---o-----%7Co-----o---o-----%7Co-----o---o-----%7Co-----o---o---oo%7C',
    notes: [Starter.rhythmGuitar],
    pad: 'Bell Tree',
    length: 183
});

fn(SongNames.Werewolves, {
    title: 'Werewolves of London',
    url: 'TimeSig=4/4&Div=16&Title=Werewolves%20of%20London&Author=Warren%20Zevon&Tempo=104&Measures=4&H=%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C&S=%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C&K=%7Co-------o-----o-%7Co-----o---o---o-%7Co-o-----o-o-----%7Co-o-----o-o-----%7C&T1=%7C----------------%7C----------------%7C----------------%7C----------------%7C&T4=%7C----------------%7C----------------%7C----------------%7C----------------%7C',
    notes: [Starter.drums],
    length: 183
});

fn(SongNames.WhatILike, {
    title: 'What I Like About You',
    url: 'TimeSig=4/4&Div=16&Title=What%20I%20Like%20About%20You&Author=The%20Romantis&Tempo=160&Measures=4&H=|x---x---x---x---|x---x---x---x---|c---r---r---r---|r---r---r---r---|&S=|----O-------O---|----O-------O---|----O-O-----O---|----O-O-----O---|&K=|o-----o-o-----o-|o-----o-o-----o-|o-------o-------|o-------o-------|',
    notes: [Starter.leadGuitar],
    pad: 'Claps',
    length: 183
});

fn(SongNames.ShookMe, {
    title: 'You Shook Me All Night Long',
    url: 'TimeSig=4/4&Div=16&Title=You%20Shook%20Me%20All%20Night%20Long&Author=AC%2FDC&Tempo=127&Measures=10&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-c-x-x-x-x-x-|x-x-c-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-c-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O---O-------|----O-------O---|&K=|o---------o-----|o---------o-----|o---o---o---o---|o---o---o---o---|o-------o-o---o-|------o-------o-|--o-----o-----o-|------o-------o-|--o-------o-----|--o-------o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.AmericanGirl, {
    title: 'American Girl',
    url: 'TimeSig=4/4&Div=16&Title=American%20Girl&Author=Tom%20Petty&Tempo=114&Measures=4&H=|x-x-x-x-x-x-o-x-|x-x-x-x-x-x-o-x-|x-x-x-x-x-o-x-x-|x-x-x-x-x-o-x-x-|&S=|--O---O---O---O-|--O---O---O---O-|------------O---|------------O---|&K=|o--o-o------o---|o--o-o------o---|o--o--o---------|o--o--o---------|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.BackDown, {
    title: 'I Won\t Back Down',
    url: 'TimeSig=4/4&Div=16&Title=I%20Won%27t%20Back%20Down&Author=Tom%20Petty&Tempo=114&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-c-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|O-O-O-O-----O---|&K=|o-------o-------|o-------o-------|o-------o-------|o-o-o-o-o-------|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|',
    notes: [Starter.all],
    length: 183
});

fn(SongNames.RunningDown, {
    title: 'Running Down a Dream',
    url: 'TimeSig=4/4&Div=16&Title=Running%20Down%20a%20Dream&Author=Tom%20Petty&Tempo=168&Measures=4&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|----O-------O---|----O-------O---|O-----O-----O---|--O-----O---O-O-|&K=|o-------o-------|o-------o-------|----o-----o-----|o-----o---------|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.YouDontKnow, {
    title: 'You Don\t Know How it Feels',
    url: 'TimeSig=4/4&Div=16&Title=You%20Don%27t%20Know%20How%20it%20Feels&Author=Tom%20Petty&Tempo=80&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-------o-------|o-------o-------|o-------o-o-----|o-------o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.all],
    length: 183
});

fn(SongNames.YouWreckMe, {
    title: 'You Wreck Me',
    url: 'TimeSig=4/4&Div=16&Title=You%20Wreck%20Me&Author=Tom%20Petty&Tempo=164&Measures=4&H=|x---x---x---x---|x---x---x---x---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------------|------------f---|----O-------O---|----O-------O---|&K=|----------------|----------------|o-------o-------|o-------o-------|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.HashPipe, {
    title: 'Hash Pipe',
    url: 'TimeSig=4/4&Div=16&Title=Hash%20Pipe&Author=Weezer&Tempo=126&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|c---c---c---c---|c---c---c---c---|c---c---c---c---|c---c---c---c---|c---c---x---x---|x---x---x---x---|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r---|&S=|----O-------O---|----O-------O---|----O---O-O-----|--O-----O---O---|----O--O----O--O|----O--O----O--O|----O---O---O---|O---O---O---O---|----O--o-o--O---|----O--O-O--O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o---------o-o-|----o-o---------|o-o-----o-o-----|o-o-----o-o-----|o-o---o---o---o-|--o---o---o---o-|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--------------oo|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.all],
    length: 183
});

fn(SongNames.IslandInSun, {
    title: 'Island in the Sun',
    url: 'TimeSig=4/4&Div=16&Title=Island%20in%20the%20Sun&Author=Weezer&Tempo=115&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-c-x-|c---c---c---c---|c---c---c---c---|c---c---c---c---|c---c---c---c---|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-------|o-------o-o---o-|o-------o-------|o-------o-o---o-|o-------o-------|o-------o-o-----|o-------o-------|o-------o-o-----|',
    notes: [Starter.bass],
    length: 183
});

fn(SongNames.SayItAintSo, {
    title: "Say it Ain't So",
    url: 'TimeSig=4/4&Div=16&Title=Say%20It%20Ain%27t%20So&Author=Weezer&Tempo=77&Measures=10&H=|r---r---r---r---|r---r---r---r---|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-c---------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------------|----------------|----O-------O---|----O-------O---|----O-------O---|----O-----------|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|----------------|----------------|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---------|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.Galway, {
    title: 'Galway Girl',
    url: '',
    notes: ['Guitars'],
    length: 183
});

fn(SongNames.SnowDay, {
    title: 'Snow Day',
    url: '',
    notes: [Starter.leadGuitar],
    length: 183
});

fn(SongNames.SaveIt, {
    title: 'Save it for Later',
    url: '',
    notes: [Starter.leadGuitar],
    length: 183
});
