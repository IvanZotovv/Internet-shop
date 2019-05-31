/* eslint-disable jsx-a11y/href-no-hash */

const initialState = {
  itemData: {},
};


export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEM_DATA':
      return {
        ...state,
        itemData: action.value,
      };
    default:
      return state;
  }
};
