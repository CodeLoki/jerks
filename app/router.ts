import EmberRouter from '@ember/routing/router';
import config from 'jerks/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('all-songs');

    this.route('gigs', function () {
        this.route('2023-10-27-cd');
        this.route('2023-08-19-solace');
    });
    this.route('gig', {
        path: 'gig/:id'
    });
});
