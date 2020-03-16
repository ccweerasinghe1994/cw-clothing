import React, { Component } from "react";

import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDoucument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  // beacuse this is a open subscription we have to close it
  // because we dont need any memory leaks in our application
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoucument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ currentUser: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  // to close the subscription

  componentWillUnmount() {
    // this will close the subscription
    this.unsubscribeFromAuth();
  }
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
