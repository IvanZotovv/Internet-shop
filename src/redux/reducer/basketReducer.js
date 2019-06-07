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
      };
      const items = { ...state.items };
      items[action.value.id] = newItem;
      console.log(newItem.price);
      return {
        items,
        totalCount: state.totalCount + 1,
        // totalPrice: newItem.price + state.totalCount,
      };
    }
    case 'REMOVE_ITEM': {
      const items = { ...state.items };
      items[action.value.id].count -= 1;
      if (items[action.value.id].count < 1) {
        delete items[action.value.id];
      }
      // console.log(items);
      return {
        ...state,
        items,
        totalCount: state.totalCount > 1 ? state.totalCount - 1 : 0,
      };
    }
    default:
      return state;
  }
};
