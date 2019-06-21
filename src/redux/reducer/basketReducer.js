/* eslint-disable jsx-a11y/href-no-hash */


const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};


export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      const existedItem = state.items[action.value.id];
      const newItem = {
        ...action.value,
        count: existedItem ? existedItem.count + 1 : 1,
        subtotal: existedItem ? parseFloat(action.value.price) * existedItem.count + parseFloat(action.value.price) : action.value.price,
      };
      const items = { ...state.items };
      items[action.value.id] = newItem;
      return {
        items,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + parseFloat(newItem.price),
      };
    }
    case 'REMOVE_ITEM': {
      const items = { ...state.items };
      const matchId = items[action.value.id];
      matchId.count -= 1;
      if (matchId.count < 1) {
        delete items[action.value.id];
      } else {
        const removeItem = {
          ...action.value,
          subtotal: parseFloat(matchId.subtotal) - parseFloat(matchId.price),
        };
        items[action.value.id] = removeItem;
      }
      return {
        ...state,
        items,
        totalCount: state.totalCount > 0 ? state.totalCount - 1 : 1,
        totalPrice: matchId.price ? state.totalPrice - parseFloat(matchId.price) : 0,
      };
    }
    default:
      return state;
  }
};
