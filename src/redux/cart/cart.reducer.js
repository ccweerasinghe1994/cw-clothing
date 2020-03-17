import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.util";
const INITIAL_STATE = {
  hiddren: true,
  cardItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddren: !state.hiddren
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cardItems: addItemToCart(state.cardItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cardItems: state.cardItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cardItems: removeItemFromCart(state.cardItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
