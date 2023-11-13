import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { Instrument } from 'jerks/songs';

import type RouterService from '@ember/routing/router-service';

export default class ApplicationController extends Controller {
    @service declare router: RouterService;

    queryParams = ['user', 'info'];

    @tracked user: string = Instrument.drums;
    @tracked info: string[] = [];

    get users(): { v: string; isSelected: boolean }[] {
        const { user } = this;

        return Object.values(Instrument).map((v) => ({
            v,
            isSelected: v === user
        }));
    }

    get buttons(): { v: string; isSelected: boolean }[] {
        const { info, user } = this;

        return Object.values(Instrument)
            .filter((v) => v !== user)
            .map((v) => ({
                v,
                isSelected: info.includes(v)
            }));
    }

    @action updateUser(evt: Event & { target: HTMLSelectElement }): void {
        this.router.transitionTo({
            queryParams: {
                user: evt.target.value
            }
        });
    }

    @action updateIncluded(instrument: string): void {
        const { info } = this;
        this.router.transitionTo({
            queryParams: {
                info: info.includes(instrument) ? info.filter((i) => i !== instrument) : [...info, instrument]
            }
        });
    }
}
