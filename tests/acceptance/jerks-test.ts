import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'jerks/tests/helpers';

import Gigs from 'jerks/gigs';
import Songs from 'jerks/songs';

module('Acceptance | jerks', function (hooks) {
    setupApplicationTest(hooks);

    test('visiting /jerks', async function (assert) {
        await visit('/');

        assert.strictEqual(currentURL(), '/');

        const cssAll = '[data-test-all-songs]',
            cssBackLink = '.back-link';

        assert.dom('h1').hasText('Convertible Jerk');
        assert.dom(cssAll).hasText('All Songs');
        assert.dom('h4').hasText('Gigs');
        assert.dom('li').exists({ count: Gigs.size });

        await click(cssAll);
        assert.strictEqual(currentURL(), '/all-songs');
        assert.dom('h2').hasText('All Songs');
        assert.dom('dl').exists({ count: Songs.size });

        await click(cssBackLink);
        assert.strictEqual(currentURL(), '/');

        const [id, gig] = Array.from(Gigs.entries())[0]!;
        await click(`[data-test-gig="${id}"`);
        assert.strictEqual(currentURL(), `/gig/${id}`);
        assert.dom(cssBackLink).exists();
        assert.dom('h2').hasText(gig.title);

        gig.sets.forEach((set) => {
            const css = `[data-test-set="${set.title}"]`;
            assert.dom(`${css} h3`).hasText(`${set.title} (${set.length} minutes)`);
            assert.dom(`${css} dl`).exists({ count: set.songs.length });
        });
    });
});
