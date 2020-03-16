import { CartActionTypes } from "./cart.types";
const INITIAL_STATE = {
  hiddren: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddren: !state.hiddren
      };

    default:
      return state;
  }
};

export default cartReducer;
