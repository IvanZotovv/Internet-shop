/* eslint-disable jsx-a11y/href-no-hash */

import { createStore, applyMiddleware } from 'redux';
import thinkMiddleware from 'redux-thunk';
import combineReducers from './reducer/index';
import fb from '../components/Firebase/fb';

// Store

const store = createStore(combineReducers, applyMiddleware(thinkMiddleware));
export { store };


// Action creator


const setPersonData = (itemData) => {
  return {
    type: 'SET_ITEM_DATA',
    value: itemData,
  };
};

export const addCartData = (ItemToBasket) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    value: ItemToBasket,
  };
};

export const deleteCartFromData = (removeItem) => {
  return {
    type: 'REMOVE_ITEM',
    value: removeItem,
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

const deleteItem = removeItem => (dispatch) => {
  dispatch(deleteCartFromData(removeItem));
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
