import { module, test } from 'qunit';
import { setupRenderingTest } from 'jerks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import type { TestContext } from '@ember/test-helpers';
import type { Song } from 'jerks/songs';

interface Context extends TestContext {
    song: Song;
}

module('Integration | Component | song', function (this: Context, hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (this: Context, assert) {
        this.song = {
            title: 'Song title',
            url: 'test',
            notes: ['note 1'],
            pad: 'tambourine',
            length: 10
        };

        await render(hbs`<Song @song={{this.song}} />`);

        assert.dom('dl').exists();
        assert
            .dom('dt a')
            .hasAttribute('href', 'https://www.mikeslessons.com/groove/?Mode=view&test')
            .hasText('Song title');
        assert.dom('dd strong').hasText('🥁 tambourine');
        assert.dom('dd:last-child').hasText('note 1');
    });
});
