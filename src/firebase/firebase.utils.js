// by doing this we are pulling in the firebase utility library
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD7sfxEXRPT5r6CRjd9hyFtcLCnPO8q0B0",
  authDomain: "cw-clothing.firebaseapp.com",
  databaseURL: "https://cw-clothing.firebaseio.com",
  projectId: "cw-clothing",
  storageBucket: "cw-clothing.appspot.com",
  messagingSenderId: "551239194364",
  appId: "1:551239194364:web:628f9256d0a022d3efa979",
  measurementId: "G-VCT05ERKQ7"
};
// this is an asynchronas action
export const createUserProfileDoucument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        ...additionalData,
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

// these code are for authentication

export const auth = firebase.auth();

// this is for fireStore

export const firestore = firebase.firestore();

// to setup google authantication utility

const provider = new firebase.auth.GoogleAuthProvider();

// this means we want to pop up google auth provider every timw we use google auth provider
provider.setCustomParameters({ propmt: "select_account" });

// this is the popup configuration

export const signInWithGoolge = () => auth.signInWithPopup(provider);
// this function is used for adding data to the firebase

export const addCollectionAndDocuments = async (collectionKey, ObjectToAdd) => {
  const collectionRef = await firestore.collection(collectionKey);

  const batch = firestore.batch();
  ObjectToAdd.forEach(object => {
    const docRef = collectionRef.doc();
    
    batch.set(docRef, object);
  });
  return await batch.commit();
};

export const collectionsSnapshotToMap = snapshot=>{
     const transformedCollection = snapshot.docs.map(doc => {
       const { title, items } = doc.data();
       return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
       };
     });

     return transformedCollection.reduce((accumilitaor, collection) => {
       accumilitaor[collection.title.toLowerCase()] = collection;
       return accumilitaor;
     }, {});
}

export default firebase;
