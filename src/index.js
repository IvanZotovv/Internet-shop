/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/app-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}><App /></Provider>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
