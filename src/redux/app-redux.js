/* eslint-disable jsx-a11y/href-no-hash */

import { createStore, applyMiddleware } from 'redux';
import thinkMiddleware from 'redux-thunk';
import combineReducers from './reducer/index';
import fb from '../components/Firebase/fb';

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



// Store

const store = createStore(itemReducer, applyMiddleware(thinkMiddleware));
export { store };


// Action creator


const setPersonData = (itemData) => {
  return {
    type: 'SET_ITEM_DATA',
    value: itemData,
  };
};

const addCartData = (ItemToBasket) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    value: ItemToBasket,
  };
};

const deleteCartFromData = (ItemToBasket) => {
  return {
    type: 'REMOVE_ITEM',
    value: ItemToBasket,
  };
};

// const getTotalCost = (ItemToBasket) => {
//   return {
//     type: 'TOTAL_COAST',
//     value: ItemToBasket.reduce((result, item) => item.qty * item.price + result, 0),
//   };
// };

// const totalPrice = item => (dispatch) => {
//   dispatch(getTotalCost(item));
// };

const addItemToCart = item => (dispatch) => {
  dispatch(addCartData(item));
};

const deleteItem = item => (dispatch) => {
  dispatch(deleteCartFromData(item));
};

const watchItemData = () => (dispatch) => {
  fb.firestore()
    .collection('items')
    .get()
    .then((collection) => {
      const itemData = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      dispatch(setPersonData(itemData));
    });
};

export { watchItemData, addItemToCart, deleteItem };
