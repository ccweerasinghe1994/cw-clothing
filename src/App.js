import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
       
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUp} ></Route>
      </Switch>
    </div>
  );
}

export default App;
