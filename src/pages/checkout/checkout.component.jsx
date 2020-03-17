import React from "react";
import "./checkout.style.scss";

import {
  selelctCartItemsPrice,
  selelctCartItems
} from "../../redux/cart/cart.selelctors";

import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { connect } from "react-redux";

const Checkout = ({ total, selelctedItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {selelctedItems.map(cartItem => (
        <CheckoutItem item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selelctCartItemsPrice,
  selelctedItems: selelctCartItems
});
export default connect(mapStateToProps)(Checkout);
