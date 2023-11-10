import Application from 'jerks/app';
import config from 'jerks/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
