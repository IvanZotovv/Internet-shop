/* eslint-disable jsx-a11y/href-no-hash */
import { combineReducers } from 'redux';
import { itemReducer } from './itemReducer';
import { basketReducer } from './basketReducer';
// import { adminReducer } from './adminReducer';

export default combineReducers({
  items: itemReducer,
  basket: basketReducer,
  // admin: adminReducer,
});
