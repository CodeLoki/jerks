import Route from '@ember/routing/route';
import Songs from '../songs';

import type { Song } from '../songs';

export default class SongsRoute extends Route {
    model(): Song[] {
        return Array.from(Songs.values()).sortBy('title');
    }
}
