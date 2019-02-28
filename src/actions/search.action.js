export const addToShoppingList = (item) => ({
  type: SearchActionType.ADD_TO_SHOPPING_LIST,
  item: item
});

export const removeFromShoppingList = (item) => ({
  type: SearchActionType.REMOVE_FROM_SHOPPING_LIST,
  item: item
});

export const SearchActionType = {
  ADD_TO_SHOPPING_LIST: 'ADD_TO_SHOPPING_LIST',
  REMOVE_FROM_SHOPPING_LIST: 'REMOVE_FROM_SHOPPING_LIST',
};