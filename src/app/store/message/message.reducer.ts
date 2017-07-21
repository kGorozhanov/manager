import { REDUCER_HELPER } from '../../utils/store-helpers/reducer.helper';
import { ACTIONS_HELPER } from '../../utils/store-helpers/actions.helper';
import { CONSTANTS_HELPER } from '../../utils/store-helpers/constants.helper';
import { Action } from '@ngrx/store';
export interface MessageTriggers<T> {
    ADD: T;
    DELETE: T;
}

export interface Message {
    id: number;
    text: string;
}

export interface MessageState {
    list: Message[];
}

export const MODULE_NAME = 'MESSAGE';

export const reducedItems: MessageTriggers<Function> = {
    ADD: (state: MessageState, action: Action): MessageState => {
        const message: Message = {
            text: action.payload,
            id: Date.now()
        };
        return {
            ...state,
            list: [
                ...state.list,
                message
            ]
        }
    },
    DELETE: (state: MessageState, action: Action): MessageState => {
        return {
            ...state,
            list: state.list.filter(item => item.id !== action.payload)
        }
    }
}

export const initialState: MessageState = {
    list: []
}

export const MESSAGE_CONSTANTS = CONSTANTS_HELPER<MessageTriggers<string>>(MODULE_NAME, reducedItems);
export const MESSAGE_ACTIONS = ACTIONS_HELPER<MessageTriggers<Function>>(MESSAGE_CONSTANTS);
export const messageReducer = REDUCER_HELPER(MODULE_NAME, initialState, reducedItems);
