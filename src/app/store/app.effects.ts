import { AuthEffects } from './auth/auth.effects';
import { EffectsModule } from "@ngrx/effects";
import { dashboardEffects } from "./dashboard/dasboard.effects";

export const appEffects = [
    EffectsModule.run(AuthEffects),
    ...dashboardEffects
];