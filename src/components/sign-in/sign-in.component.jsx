import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";
import {
  ButtonContainer,
  SignInContainer,
  TitleContainer
} from "./sign-in.styles";
import { signInWithGoolge, auth } from "../../firebase/firebase.utils";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
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
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <SignInContainer>
        <TitleContainer>I Allready Have An Account</TitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handlSubmit}>
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
          <ButtonContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoolge} isGoogleSignIn>
              Google
            </CustomButton>
          </ButtonContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
