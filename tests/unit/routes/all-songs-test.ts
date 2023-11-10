import { module, test } from 'qunit';
import { setupTest } from 'jerks/tests/helpers';

module('Unit | Route | all-songs', function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
        const route = this.owner.lookup('route:all-songs');
        assert.ok(route);
    });
});
