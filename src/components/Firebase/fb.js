/* eslint-disable jsx-a11y/href-no-hash */


import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBzyJAhaufnx2KvTsKJg46cwzKmaik_maA",
  authDomain: "internet-shop-c807f.firebaseapp.com",
  databaseURL: "https://internet-shop-c807f.firebaseio.com",
  projectId: "internet-shop-c807f",
  storageBucket: "internet-shop-c807f.appspot.com",
  messagingSenderId: "1042342671344"
};
const fb = firebase.initializeApp(config);
export default fb;
