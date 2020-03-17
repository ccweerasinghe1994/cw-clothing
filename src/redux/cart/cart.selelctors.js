import { createSelector } from "reselect";
const selectCart = state => state.cart;

export const selelctCartItems = createSelector(
  [selectCart],
  cart => cart.cardItems
);

export const selectCartItemsCount = createSelector(
  [selelctCartItems],
  cartItems =>
    cartItems.reduce(
      (accumilatedValue, currentValue) =>
        accumilatedValue + currentValue.quantity,
      0
    )
);

export const selelctCartHidden = createSelector(
  [selectCart],
  cartItem => cartItem.hiddren
);
