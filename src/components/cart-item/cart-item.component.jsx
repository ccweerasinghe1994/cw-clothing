import React from "react";
import "./cart-item.style.scss";
const CartItem = ({ item: { name, quantity, price, imageUrl } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <div className="name">{name}</div>
        <div className="price">
          {quantity}*${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
