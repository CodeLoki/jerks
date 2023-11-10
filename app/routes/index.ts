import Route from '@ember/routing/route';
import Gigs from '../gigs';
import { A } from '@ember/array';

import type { Gig } from '../gigs';

export default class IndexRoute extends Route {
    model(): [string, Gig][] {
        return A(Array.from(Gigs.entries())).sortBy('lastObject.date').reverse();
    }
}
