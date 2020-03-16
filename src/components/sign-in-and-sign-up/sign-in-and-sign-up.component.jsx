import React from "react";
import "./sign-in-and-sign-up.style.scss";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
