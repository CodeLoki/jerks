import { module, test } from 'qunit';
import { setupRenderingTest } from 'jerks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { Instrument } from 'jerks/songs';

import type { TestContext } from '@ember/test-helpers';
import type { Song } from 'jerks/songs';

interface Context extends TestContext {
    song: Song;
    user: Instrument;
}

module('Integration | Component | song', function (this: Context, hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (this: Context, assert) {
        Object.assign(this, {
            song: {
                title: 'Song title',
                length: 10,
                startsWith: 'All',
                details: {
                    [Instrument.drums]: {
                        url: 'https://www.mikeslessons.com/groove/?Mode=view&test',
                        notes: ['tambourine', 'note 1']
                    }
                }
            },
            user: Instrument.drums
        });

        await render(hbs`<Song @song={{this.song}} @user={{this.user}} />`);

        assert.dom('dl').exists();
        assert
            .dom('dt a')
            .hasAttribute('href', 'https://www.mikeslessons.com/groove/?Mode=view&test')
            .hasText('Song title');
        assert.dom('dd:nth-child(3)').hasText('🥁 tambourine');
        assert.dom('dd:last-child').hasText('🥁 note 1');
    });
});
