/* eslint-disable jsx-a11y/href-no-hash */

import { createStore, applyMiddleware } from 'redux';
import thinkMiddleware from 'redux-thunk';
import fb from '../components/Firebase/fb';


// Initial State

const initialState = {
  itemData: {},
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPersonData':
      return { ...state, itemData: action.value };
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
    type: 'setPersonData',
    value: itemData,
  };
};


const watchItemData = () => (dispatch) => {
  // This is how to get data from realtime database
  // const data = fb.database().ref('items');
  // data.on('value', (snapshot) => {
  //   var itemData = snapshot.val();
  //   console.log(itemData);
  //   dispatch(setPersonData(itemData));
  // });

  // This is how to get data from cloud database

  fb.firestore()
    .collection('items')
    .get()
    .then((collection) => {
      const itemData = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      dispatch(setPersonData(itemData));
    });
};

export { setPersonData, watchItemData };
