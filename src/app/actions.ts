
export const ADD_ITEM = 'ADD_TODO';
export const TOGGLE_ITEM = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  };

let nextItemId = 0;
export const addItem = text => {
  return {
    type: ADD_ITEM,
    id: nextItemId++,
    text
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter
  };
};

export const toggleItem = id => {
  return {
    type: TOGGLE_ITEM,
    id
  };
};
