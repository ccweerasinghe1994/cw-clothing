import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selelctCartItems } from "../../redux/cart/cart.selelctors";
import { createStructuredSelector } from "reselect";

const CartDropDown = ({ cardItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cardItems.map(cardItem => (
          <CartItem key={cardItem.id} item={cardItem} />
        ))}
      </div>
      <CustomButton>GO TO CHEKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cardItems: selelctCartItems
});

export default connect(mapStateToProps)(CartDropDown);
