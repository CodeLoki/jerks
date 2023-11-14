import Route from '@ember/routing/route';
import Gigs from '../gigs';

import type { Gig } from '../gigs';

export default class GigRoute extends Route {
    model({ id }: { id: string }): { gig: Gig; user: string; info: string[] } {
        const gig = Gigs.get(id);
        if (!gig) {
            throw `Gig not found for "${id}"`;
        }

        return {
            gig,
            ...(this.paramsFor('application') as { user: string; info: string[] })
        };
    }
}
