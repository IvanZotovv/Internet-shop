/* eslint-disable default-case */
/* eslint-disable jsx-a11y/href-no-hash */

import { createStore, applyMiddleware } from 'redux';
import thinkMiddleware from 'redux-thunk';
import combineReducers from './reducer/index';
import fb from '../components/Firebase/fb';
import { firebaseReducer } from 'react-redux-firebase';

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

export const adminField = (item) => {
  return {
    type: 'CREATE_ITEM',
    value: item,
  };
};

export const adminFieldError = (err) => {
  return {
    type: 'CREATE_ITEM',
    value: err,
  };
};

// export const uploadFiles = (img) => {
//   return {
//     type: 'UPLOAD_IMAGE',
//     value: img,
//   };
// };

const addItemToCart = item => (dispatch) => {
  dispatch(addCartData(item));
};

const deleteItem = item => (dispatch) => {
  console.log(item);
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


const createItem = item => (dispatch) => {
  console.log(item);
  // console.log(uploadImage(item.img));

  fb.firestore()
    .collection('items')
    .add({
      ...item,
      img: item.img,
      title: item.title,
      price: item.price,
      description: item.description,
    })
    .then(() => {
      dispatch(adminField(item));
    }).catch((err) => {
      dispatch(adminFieldError(err));
    });
};


export {
  watchItemData, addItemToCart, deleteItem, createItem,
};
