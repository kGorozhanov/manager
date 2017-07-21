import { REDUCER_HELPER } from '../../utils/store-helpers/reducer.helper';
import { ACTIONS_HELPER } from '../../utils/store-helpers/actions.helper';
import { CONSTANTS_HELPER } from '../../utils/store-helpers/constants.helper';
import { Action } from '@ngrx/store';
declare const localStorage: any;

export interface AuthTriggers<T> {
    LOGIN: T;
    LOGIN_SUCCESS: T;
    LOGIN_ERROR: T;
    LOGOUT: T;
    ACCOUNT: T;
    ACCOUNT_SUCCESS: T;
    ACCOUNT_ERROR: T;
}

export interface User {
    id: number;
    email: string;
    name: string;
    role: string;
    password?: string;
}

export interface AuthState {
    token: string;
    isLoggedIn: boolean;
    user: User;
    loginState?: string;
    accountState?: string;
}

export const MODULE_NAME = 'AUTH';

export const reducedItems: AuthTriggers<Function> = {
    LOGIN: (state: AuthState, action: Action): AuthState => {
        return {
            ...state,
            loginState: 'sending'
        }
    },
    LOGIN_SUCCESS: (state: AuthState, action: Action): AuthState => {
        localStorage.setItem('savedToken', action.payload);
        return {
            ...state,
            token: action.payload,
            isLoggedIn: true,
            loginState: 'success'
        }
    },
    LOGIN_ERROR: (state: AuthState, action: Action): AuthState => {
        return {
            ...state,
            loginState: 'error'
        }
    },
    LOGOUT: (state: AuthState, action: Action): AuthState => {
        localStorage.removeItem('savedToken');
        return {
            ...state,
            token: null,
            isLoggedIn: false,
            user: null
        }
    },
    ACCOUNT: (state: AuthState, action: Action): AuthState => {
        return {
            ...state,
            accountState: 'sending'
        }
    },
    ACCOUNT_SUCCESS: (state: AuthState, action: Action): AuthState => {
        localStorage.setItem('savedUser', JSON.stringify(action.payload));
        return {
            ...state,
            user: action.payload,
            accountState: 'success'
        }
    },
    ACCOUNT_ERROR: (state: AuthState, action: Action): AuthState => {
        return {
            ...state,
            accountState: 'error'
        }
    }
};

const savedToken = localStorage.getItem('savedToken');
const savedUser: User = JSON.parse(localStorage.getItem('savedUser'));

export const initialState: AuthState = {
    token: savedToken,
    isLoggedIn: !!savedToken,
    user: savedUser
};

export const AUTH_CONSTANTS = CONSTANTS_HELPER<AuthTriggers<string>>(MODULE_NAME, reducedItems);
export const AUTH_ACTIONS = ACTIONS_HELPER<AuthTriggers<Function>>(AUTH_CONSTANTS);
export const authReducer = REDUCER_HELPER(MODULE_NAME, initialState, reducedItems);
