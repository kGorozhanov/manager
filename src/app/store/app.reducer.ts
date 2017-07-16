import { routerReducer, RouterState } from '@ngrx/router-store';
import { combineReducers } from "@ngrx/store";

import { AuthState, authReducer } from './auth/auth.reducer';
import { MessageState, messageReducer } from "./message/message.reducer";
import { DashboardState, dashboardReducer } from "./dashboard/dashboard.reducer";

export interface AppState {
    router: RouterState;
    auth: AuthState;
    message: MessageState;
    dasboard: DashboardState;
}

export const appReducers = combineReducers({
    router: routerReducer,
    auth: authReducer,
    message: messageReducer,
    dashboard: dashboardReducer
});

export function appReducer (state, action) {
    return appReducers(state, action);
}