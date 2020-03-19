
# styled componets

lets try the home page

create a homepage.styles.jsx
```jsx
import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //  y-20 x-80
  padding: 20px 80px;
`;

```
add it to home page
```jsx
import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePAge = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePAge;
```


lets do header 
```jsx
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const optionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${optionContainerStyles}
`;

export const OptonDiv = styled.div`
  ${optionContainerStyles}
`;

```

```jsx 
import React from "react";
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
```