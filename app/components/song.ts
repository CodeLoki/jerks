import Component from '@glimmer/component';
import { A } from '@ember/array';

import type { Song, Details } from '../songs';

export interface SongSignature {
    Element: HTMLDListElement;
    Args: {
        song: Song;
        user: string;
        info?: string[];
    };
}

export default class SongComponent extends Component<SongSignature> {
    get userDetails(): Details | undefined {
        return this.args.song.details?.[this.args.user];
    }

    get details(): [string, Details][] {
        const { userDetails } = this,
            details = Object.entries(this.args.song.details ?? {}),
            { info = [] } = this.args;

        return this.args.user
            ? A([
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  details.find(([_, d]) => d === userDetails)!,
                  ...details.filter(([k, d]) => d !== userDetails && info.includes(k))
              ]).compact()
            : [];
    }
}
