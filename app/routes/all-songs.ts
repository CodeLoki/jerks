import Route from '@ember/routing/route';
import Songs from '../songs';
import { A } from '@ember/array';

import type { Song } from '../songs';

export default class SongsRoute extends Route {
    model(): Song[] {
        return A(Array.from(Songs.values())).sortBy('title');
    }
}
