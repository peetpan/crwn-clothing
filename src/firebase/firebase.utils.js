import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDbOCmcbwM0i0sXD45x3ILOjBaQ5ERq-5Q",
  authDomain: "crwn-db-73060.firebaseapp.com",
  projectId: "crwn-db-73060",
  storageBucket: "crwn-db-73060.appspot.com",
  messagingSenderId: "328451098483",
  appId: "1:328451098483:web:26d455fbf50c323c862706",
  measurementId: "G-FN945WCSN0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = userRef.get();
  if (!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){console.log('Error creating user: ',error)};
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
