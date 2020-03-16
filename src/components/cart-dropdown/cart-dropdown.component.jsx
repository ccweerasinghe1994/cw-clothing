import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-buttom.component";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHEKOUT</CustomButton>
    </div>
  );
};
export default CartDropDown;
