import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selelctCartItems } from "../../redux/cart/cart.selelctors";
import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";
import { toggleCardHidden } from "../../redux/cart/cart.action";
const CartDropDown = ({ cardItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cardItems.length ? (
          cardItems.map(cardItem => (
            <CartItem key={cardItem.id} item={cardItem} />
          ))
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCardHidden());
        }}
      >
        GO TO CHEKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cardItems: selelctCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
