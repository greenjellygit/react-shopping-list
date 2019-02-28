import {SearchActionType} from "../actions/search.action";

const initialState = {
  selectedItems: []
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionType.ADD_TO_SHOPPING_LIST:
      return {...state, selectedItems: [action.item, ...state.selectedItems]};
    case SearchActionType.REMOVE_FROM_SHOPPING_LIST:
      const selectedItemIndex = state.selectedItems.findIndex(e => e.id === action.item.id);
      const items = [...state.selectedItems];
      items.splice(selectedItemIndex, 1);
      return {...state, selectedItems: items};
    default:
      return state;
  }
};

export default SearchReducer;