import Route from '@ember/routing/route';
import Songs from '../songs';
import { A } from '@ember/array';

import type { Song } from '../songs';

export default class SongsRoute extends Route {
    model(): { songs: Song[]; user: string; info: string[] } {
        return {
            songs: A(Array.from(Songs.values())).sortBy('title'),
            ...(this.paramsFor('application') as { user: string; info: string[] })
        };
    }
}
