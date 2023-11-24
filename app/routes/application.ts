import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    queryParams = {
        user: {
            refreshModel: true,
            replace: true
        },
        info: {
            refreshModel: true,
            replace: true
        }
    };
}
