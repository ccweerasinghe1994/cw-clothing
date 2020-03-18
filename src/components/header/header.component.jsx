import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selelctCartHidden } from "../../redux/cart/cart.selelctors";
import { selectCurrentUser } from "../../redux/user/user.selelctors";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptonDiv,
  OptionLink
} from "./header.styles";
const Header = ({ currentUser, hiddren }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo></Logo>
      </LogoContainer>
      <OptionsContainer>
        <LogoContainer to="/shop">SHOP</LogoContainer>
        <LogoContainer to="/contact">CONTACT</LogoContainer>

        {currentUser ? (
          <OptonDiv onClick={() => auth.signOut()}>SIGN OUT</OptonDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hiddren ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddren: selelctCartHidden
});
export default connect(mapStateToProps)(Header);
