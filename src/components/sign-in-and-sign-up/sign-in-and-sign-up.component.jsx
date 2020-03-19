import React from "react";

import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import { SignInSignUpContainer } from "./sign-in-and-sign-up.style";
const SignInAndSignUp = () => {
  return (
    <SignInSignUpContainer >
      <SignIn />
      <SignUp />
    </SignInSignUpContainer>
  );
};

export default SignInAndSignUp;
