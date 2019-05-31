/* eslint-disable jsx-a11y/href-no-hash */

const initialState = {
  ItemToBasket: [
    {
      data: {},
      count: 0,
    },
  ],
};


export const basketReducer = (state = initialState, action) => {
  const itemCount = state.initialState.ItemToBasket.filter(i => (i.id === action.payload.id))[0];
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        ItemToBasket: [
          ...{
            data: {
              itemCount,
            },
            count: action.value[0].count + 1,
          },
        ],
        // count: state.count + 1,
      };
    // case 'REMOVE_ITEM':
    //   return {
    //     ...state,
    //     ItemToBasket: [
    //       ...{
    //         data: state.ItemToBasket.data.filter(item => action.value !== item),
    //       },
    //     ],
    //   };
    default:
      return state;
  }
};
