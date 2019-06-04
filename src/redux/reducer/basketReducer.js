/* eslint-disable jsx-a11y/href-no-hash */

const initialState = {
  items: {},
  totalCount: 0,
};


export const basketReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      const existedItem = state.items[action.value.id];
      const newItem = {
        ...action.value,
        count: existedItem ? existedItem.count + 1 : 1,
      };
      const items = { ...state.items };
      items[action.value.id] = newItem;
      return {
        items,
        totalCount: state.totalCount + 1,
      };
    }
    case 'REMOVE_ITEM': {
      const newState = state.items[action.value.id];
      return {
        ...state,
        items: newState,
        totalCount: state.totalCount - 1,
      };
    }

    default:
      return state;
  }
};
