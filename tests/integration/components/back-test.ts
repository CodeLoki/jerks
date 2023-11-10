import { module, test } from 'qunit';
import { setupRenderingTest } from 'jerks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | back', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<Back />`);

        assert.dom().hasText('');

        // Template block usage:
        await render(hbs`
      <Back>
        template block text
      </Back>
    `);

        assert.dom().hasText('template block text');
    });
});
