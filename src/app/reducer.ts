import { AppState } from './reducer';
 
import { combineReducers, createStore, Reducer } from 'redux';
import { SET_VISIBILITY_FILTER, ADD_ITEM, TOGGLE_ITEM, VisibilityFilters } from './actions';

const { SHOW_ALL } = VisibilityFilters;

export interface Action {
  type: string;
  payload?: string;
}

export interface Item {
  id: number;
  text: string;
  completed: Boolean;
}
export interface AppState {
  visibilityFilter: 'SHOW_ALL';
  items: Item[];

}
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  items: []
};

export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};
export const items = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_ITEM:
      return state.map(item =>
        (item.id === action.id)
          ? {...item, completed: !item.completed}
          : item
      );
    default:
      return state;
  }
};

 
export const reducer: Reducer<AppState> = combineReducers({ visibilityFilter, items });
