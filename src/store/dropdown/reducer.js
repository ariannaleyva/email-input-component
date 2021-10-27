import { SET_OPTION_LIST, ADD_SELECTED_OPTION, REMOVE_SELECTED_OPTION} from './actionTypes';

const initialState = { optionList: [], selectedItems: [] };

function reducer(state, action) {
    switch (action.type) {
      case SET_OPTION_LIST:
        return {...state, optionList: action.payload};
      case ADD_SELECTED_OPTION:
        return {...state, selectedItems: [...state.selectedItems, action.payload]};
      case REMOVE_SELECTED_OPTION:
        const newSelectedItems = state.selectedItems.filter((selection) => (selection.text !== action.payload));
        return {...state, selectedItems: newSelectedItems};
      default:
        return state;
    }
}

export {initialState, reducer};