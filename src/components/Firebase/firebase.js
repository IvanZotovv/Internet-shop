import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBzyJAhaufnx2KvTsKJg46cwzKmaik_maA",
  authDomain: "internet-shop-c807f.firebaseapp.com",
  databaseURL: "https://internet-shop-c807f.firebaseio.com",
  projectId: "internet-shop-c807f",
  storageBucket: "internet-shop-c807f.appspot.com",
  messagingSenderId: "1042342671344"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
    
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');

  // *** Get Data ***

  getData = () => this.db.ref('items')
  getDataId = id => this.db.ref(`items/${id}`)
}

export default Firebase;
