import Component from '@glimmer/component';

import type { Song } from '../songs';

export interface SongSignature {
    Element: HTMLDListElement;
    Args: {
        song: Song;
    };
}

export default class SongComponent extends Component<SongSignature> {
    get url(): string {
        const { url } = this.args.song;
        return (url && `https://www.mikeslessons.com/groove/?Mode=view&${url}`) ?? '';
    }
}
