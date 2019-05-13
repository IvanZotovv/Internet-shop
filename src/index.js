import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
// import * as firebase from 'firebase'

// const config = {
//   apiKey: "AIzaSyBzyJAhaufnx2KvTsKJg46cwzKmaik_maA",
//   authDomain: "internet-shop-c807f.firebaseapp.com",
//   databaseURL: "https://internet-shop-c807f.firebaseio.com",
//   projectId: "internet-shop-c807f",
//   storageBucket: "internet-shop-c807f.appspot.com",
//   messagingSenderId: "1042342671344"
// };
// firebase.initializeApp(config)

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
