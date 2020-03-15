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

export const signInWithGoolge = ()=>auth.signInWithPopup(provider)


export default firebase;