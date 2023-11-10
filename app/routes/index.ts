import Route from '@ember/routing/route';
import Gigs from '../gigs';

import type { Gig } from '../gigs';

export default class IndexRoute extends Route {
    model(): [string, Gig][] {
        return Array.from(Gigs.entries()).sortBy('lastObject.date').reverse();
    }
}
