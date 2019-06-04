const initialState = [];


export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEM_DATA':
      return action.value;
    default:
      return state;
  }
};
