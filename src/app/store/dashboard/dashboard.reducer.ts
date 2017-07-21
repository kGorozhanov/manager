import { combineReducers } from '@ngrx/store';
import { RestourantState, restourantReducer } from './resourant/restourant.reducer';

export interface DashboardState {
    restourant: RestourantState
}

export const dashboardReducer = combineReducers({
    restourant: restourantReducer
});
