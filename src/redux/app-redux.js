/* eslint-disable jsx-a11y/href-no-hash */

import { createStore, applyMiddleware } from 'redux';
import thinkMiddleware from 'redux-thunk';
import fb from '../components/Firebase/fb';


// Initial State

const initialState = {
  itemData: {},
  setItemToData: [],
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PERSON_DATA':
      return { ...state, itemData: action.value };
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        setItemToData: [
          ...state.setItemToData,
          action.value,
        ],
      };
    default:
      return state;
  }
};

// Store

const store = createStore(reducer, applyMiddleware(thinkMiddleware));
export { store };


// Action creator


const setPersonData = (itemData) => {
  return {
    type: 'SET_PERSON_DATA',
    value: itemData,
  };
};

const addCartData = (setItemToData) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    value: setItemToData,
  };
};

const addItemToCart = item => (dispatch) => {

  dispatch(addCartData(item));
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

export { watchItemData, addItemToCart };
