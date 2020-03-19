import React, { Component } from "react";
import {
  auth,
  createUserProfileDoucument
} from "../../firebase/firebase.utils";
import CustomButtom from "../custom-button/custom-buttom.component";
import FormInput from "../form-input/form-input.component";

import {SignUpContainer} from './sign-up.styles';
import { TitleContainer } from "../sign-in/sign-in.styles";

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
      <SignUpContainer >
        <TitleContainer >I do not have a account</TitleContainer>
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
      </SignUpContainer>
    );
  }
}

export default SignUp;
