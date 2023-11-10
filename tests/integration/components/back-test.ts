import { module, test } from 'qunit';
import { setupRenderingTest } from 'jerks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | back', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`<Back />`);

        assert.dom('a').hasAttribute('href', '/').hasText('Back');
    });
});
