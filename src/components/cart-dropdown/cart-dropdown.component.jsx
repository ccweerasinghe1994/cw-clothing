import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

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

const mapStateToProps = ({ cart: { cardItems } }) => ({ cardItems });

export default connect(mapStateToProps)(CartDropDown);
