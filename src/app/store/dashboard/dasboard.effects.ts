import { RestourantEffects } from './resourant/restourant.effects';
import { EffectsModule } from '@ngrx/effects';

export const dashboardEffects = [
    EffectsModule.run(RestourantEffects)
];
