import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shoopingBag.svg";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.action";
const CartIcon = ({ toggleCardHidden, count }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
});
const mapStateToProps = ({ cart: { cardItems } }) => ({
  count: cardItems.reduce(
    (accumilatedValue, currentValue) =>
      accumilatedValue + currentValue.quantity,
    0
  )
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
