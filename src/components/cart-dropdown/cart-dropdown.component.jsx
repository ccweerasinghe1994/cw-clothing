import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selelctCartItems } from "../../redux/cart/cart.selelctors";
import { createStructuredSelector } from "reselect";
import Checkout from "../../pages/checkout/checkout.component";
import { withRouter } from "react-router-dom";
const CartDropDown = ({ cardItems, history }) => {
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
      <CustomButton onClick={() => history.push("/checkout")}>
        GO TO CHEKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cardItems: selelctCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
