import {REDUCER_HELPER} from '../../../utils/store-helpers/reducer.helper';
import {ACTIONS_HELPER} from '../../../utils/store-helpers/actions.helper';
import {CONSTANTS_HELPER} from '../../../utils/store-helpers/constants.helper';
import {Action} from '@ngrx/store';

export interface RestourantTriggers<T> {
  LOAD: T;
  LOAD_SUCCESS: T;
  LOAD_ERROR: T;
  RESET: T;
  ADD: T;
  ADD_SUCCESS: T;
  ADD_ERROR: T;
  LOAD_SELECTED: T;
  LOAD_SELECTED_SUCCESS: T;
  LOAD_SELECTED_ERROR: T;
  RESET_SELECTED: T;
}

export interface Restourant {
  id?: number;
  name: string;
  userId?: number;
}

export interface RestourantState {
  list: Restourant[];
  loadStatus?: string;
  addStatus?: string;
  selected: Restourant;
  selectedStatus?: string;
}

export const MODULE_NAME = 'RESTOURANT';

export const initialState: RestourantState = {
  list: [],
  selected: null
};

export const reducedItems: RestourantTriggers<Function> = {
  LOAD: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      loadStatus: 'sending'
    }
  },
  LOAD_SUCCESS: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      loadStatus: 'success',
      list: action.payload
    }
  },
  LOAD_ERROR: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      loadStatus: 'error'
    }
  },
  RESET: (state: RestourantState, action: Action): RestourantState => {
    return {
      list: [],
      selected: null
    }
  },
  ADD: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      addStatus: 'sending'
    }
  },
  ADD_SUCCESS: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      addStatus: 'success',
      list: [
        ...state.list,
        action.payload
      ]
    }
  },
  ADD_ERROR: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      addStatus: 'error'
    }
  },
  LOAD_SELECTED: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      selected: null,
      selectedStatus: 'sending'
    }
  },
  LOAD_SELECTED_SUCCESS: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      selected: action.payload,
      selectedStatus: 'success'
    }
  },
  LOAD_SELECTED_ERROR: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      selected: null,
      selectedStatus: 'error'
    }
  },
  RESET_SELECTED: (state: RestourantState, action: Action): RestourantState => {
    return {
      ...state,
      selected: null,
      selectedStatus: null
    }
  }
};

export const RESTOURANT_CONSTANTS = CONSTANTS_HELPER<RestourantTriggers<string>>(MODULE_NAME, reducedItems);
export const RESTOURANT_ACTIONS = ACTIONS_HELPER<RestourantTriggers<Function>>(RESTOURANT_CONSTANTS);
export const restourantReducer = REDUCER_HELPER(MODULE_NAME, initialState, reducedItems);
