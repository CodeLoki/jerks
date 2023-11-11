import AllSongs, { SongNames } from './songs';
import { A } from '@ember/array';

import type { Song } from './songs';

enum SetName {
    one = 'Set One',
    two = 'Set Two',
    pocket = 'Pocket'
}

enum Venue {
    solace = 'Solace',
    cd = 'Clare & Dons'
}

export class Setlist {
    title: SetName;
    songs: Song[];

    constructor(title: SetName, names: SongNames[]) {
        this.title = title;
        this.songs = A(names.map((n) => AllSongs.get(n))).compact();
    }

    get length(): number {
        return Math.round(
            A(this.songs)
                .mapBy('length')
                .reduce((sum, length) => sum + length) / 60
        );
    }
}

export class Gig {
    venue: Venue;
    date: Date;
    sets: Setlist[];

    constructor(venue: Venue, date: Date, sets: Setlist[]) {
        this.venue = venue;
        this.date = date;
        this.sets = sets;
    }

    get title(): string {
        return `${this.venue} ${new Intl.DateTimeFormat('en-US').format(this.date)}`;
    }
}

const gigs = new Map<string, Gig>();
export default gigs;

gigs.set(
    '20230819',
    new Gig(Venue.solace, new Date('2023-08-19T12:00:00.000Z'), [
        new Setlist(SetName.one, [
            SongNames.AboutAGirl,
            SongNames.RadioFree,
            SongNames.HeyHey,
            SongNames.Plush,
            SongNames.Everlong,
            SongNames.Possum,
            SongNames.IWillFollow,
            SongNames.LonelyBoy,
            SongNames.IslandInSun,
            SongNames.PettyInPink,
            SongNames.JealousAgain,
            SongNames.WorstEnemy,
            SongNames.Wanted
        ]),
        new Setlist(SetName.two, [
            SongNames.Alive,
            SongNames.LearnToFly,
            SongNames.Shine,
            SongNames.Peaches,
            SongNames.Vertigo,
            SongNames.JustLikeHeaven,
            SongNames.Sandman,
            SongNames.Galway,
            SongNames.Middle,
            SongNames.MaryJane,
            SongNames.Good,
            SongNames.Song2,
            SongNames.Banditos,
            SongNames.Jenny,
            SongNames.AmericanGirl,
            SongNames.WhatILike
        ]),
        new Setlist(SetName.pocket, [SongNames.December, SongNames.YouWreckMe, SongNames.SaveIt, SongNames.RunningDown])
    ])
);

gigs.set(
    '20231027',
    new Gig(Venue.cd, new Date('2023-10-27T12:00:00.000Z'), [
        new Setlist(SetName.one, [
            SongNames.AboutAGirl,
            SongNames.Good,
            SongNames.LearnToFly,
            SongNames.Flagpole,
            SongNames.Plush,
            SongNames.IslandInSun,
            SongNames.Galway,
            SongNames.RunningDown,
            SongNames.RadioFree,
            SongNames.Vertigo,
            SongNames.JealousAgain,
            SongNames.MaryJane,
            SongNames.WorstEnemy
        ]),
        new Setlist(SetName.two, [
            SongNames.HeyHey,
            SongNames.BallAndChain,
            SongNames.Alive,
            SongNames.JustLikeHeaven,
            SongNames.Middle,
            SongNames.Banditos,
            SongNames.HeyYa,
            SongNames.Godzilla,
            SongNames.Sanctuary,
            SongNames.Dancing,
            SongNames.WhatILike,
            SongNames.Werewolves,
            SongNames.ShouldIStay,
            SongNames.AmericanGirl,
            SongNames.ShookMe
        ]),
        new Setlist(SetName.pocket, [SongNames.SnowDay, SongNames.Malibu, SongNames.IWillFollow, SongNames.YouWreckMe])
    ])
);

gigs.set(
    '20231209',
    new Gig(Venue.solace, new Date('2023-12-09T12:00:00.000Z'), [
        new Setlist(SetName.one, [
            SongNames.AmericanGirl,
            SongNames.Alive,
            SongNames.Sandman,
            SongNames.Everlong,
            SongNames.HeyHey,
            SongNames.IWillFollow,
            SongNames.JealousAgain,
            SongNames.Jenny,
            SongNames.JustLikeHeaven,
            SongNames.LearnToFly,
            SongNames.LonelyBoy,
            SongNames.Possum,
            SongNames.ShouldIStay
        ]),
        new Setlist(SetName.two, [
            SongNames.StacysMom,
            SongNames.StuckInMiddle,
            SongNames.Galway,
            SongNames.Middle,
            SongNames.Vertigo,
            SongNames.Wanted,
            SongNames.Werewolves,
            SongNames.Godzilla,
            SongNames.PumpItUp,
            SongNames.Shine,
            SongNames.Song2,
            SongNames.WhatILike,
            SongNames.ShookMe
        ])
    ])
);
