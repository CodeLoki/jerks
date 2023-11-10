import { module, test } from 'qunit';
import { setupTest } from 'jerks/tests/helpers';

module('Unit | Route | gig', function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
        const route = this.owner.lookup('route:gig');
        assert.ok(route);
    });
});
