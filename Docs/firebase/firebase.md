# **Fire Base**

go to 
[https://firebase.google.com/](https://firebase.google.com/)

go to console and create a new project

get this    

```jsx
{
    apiKey: "AIzaSyD7sfxEXRPT5r6CRjd9hyFtcLCnPO8q0B0",
    authDomain: "cw-clothing.firebaseapp.com",
    databaseURL: "https://cw-clothing.firebaseio.com",
    projectId: "cw-clothing",
    storageBucket: "cw-clothing.appspot.com",
    messagingSenderId: "551239194364",
    appId: "1:551239194364:web:628f9256d0a022d3efa979",
    measurementId: "G-VCT05ERKQ7"
  }

```

create a firebase folder in src file

create a utility `firebase.utils.js`
```jsx

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

```

go to fire store and allow sign in with goolge

[configue access](https://console.firebase.google.com/u/0/project/cw-clothing/authentication/providers)


in `SignIn Component` import  and use it in the button

```jsx 

import {signInWithGoolge} from '../../firebase/firebase.utils';


  <CustomButton onClick={signInWithGoolge} >Google</CustomButton>
```

how to integrate auth into the app

in `App.js`

```jsx
import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
------------------------------------------------------------------------------------------
import { auth } from "./firebase/firebase.utils";
------------------------------------------------------------------------------------------

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }
------------------------------------------------------------------------------------------

  // beacuse this is a open subscription we have to close it
  // because we dont need any memory leaks in our application
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  // to close the subscription

  componentWillUnmount() {
    // this will close the subscription
    this.unsubscribeFromAuth();
  }


------------------------------------------------------------------------------------------

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

```

how to signOut 

```jsx
import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
---------------------------------------------------------------------
import { auth } from "../../firebase/firebase.utils";
---------------------------------------------------------------------
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
-----------------------------------------------------------------------------
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin"></Link>
        )}
-----------------------------------------------------------------------------
      </div>
    </div>
  );
};

export default Header;
```

adding the google button

```jsx
import React from "react";
import "./custom-buttom.style.scss";

export const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

```

lets add style 

```scss
.custom-button {
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
-----------------------------------------
  &.google-sign-in{
      background-color: #4285f4;
      color: white;

      &:hover{
        background-color: #357ae8;
        border: none;
      }
  }
-----------------------------------------
}

```

change the sign in component

```jsx  
import React, { Component } from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";

import { signInWithGoolge } from "../../firebase/firebase.utils";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handlSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I Allready Have An Account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleChange}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            -----------------------------------------------------------------
            <CustomButton onClick={signInWithGoolge} isGoogleSignIn>
              Google
            </CustomButton>
            -----------------------------------------------------------------

          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

```

using firestore in our application

add this code part to the firebase.utils

```js
// this is an asynchronas action
export const createUserProfileDoucument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
```
add this to app.js
```jsx
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
     createUserProfileDoucument(user);
    });
  }
```
change the code to fix the set state
```jsx

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoucument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({ currentUser: snapShot.id, ...snapShot.data() });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
```

lets create a sign-up component
```jsx 
import React, { Component } from "react";
import {
  auth,
  createUserProfileDoucument
} from "../../firebase/firebase.utils";
import CustomButtom from "../custom-button/custom-buttom.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.style.scss";
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords Dont match");
      return;
    }
    try {
        
        
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoucument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirm Password"
            required
          />
          <CustomButtom type="submit">SIGN UP</CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignUp;

```

lets create the functionality of sign in with username password

add auth import to sign in component
```jsx
import { signInWithGoolge, auth } from "../../firebase/firebase.utils";
```

change thw handlesubmit() 
```jsx 
  handlSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };
```
```jsx 

```
```jsx 

```
```jsx 

```