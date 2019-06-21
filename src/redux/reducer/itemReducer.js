const initialState = [];


export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEM_DATA':
      return action.value;
    case 'CREATE_ITEM':
      console.log('add', action.value);
      return state;
    case 'CREATE_ITEM_ERROR':
      console.log('add', action.err);
      return state;
    case 'UPLOAD_IMAGE':
      console.log('upload image', action.img);
      return state;
    default:
      return state;
  }
};
