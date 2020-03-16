import { CartActionTypes } from "./cart.types";
const INITIAL_STATE = {
  hiddren: true,
  cardItems:[]
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddren: !state.hiddren
      };
      case CartActionTypes.ADD_ITEM:
        return{
          ...state,
          cardItems:[...state.cardItems,action.payload]

        }
    default:
      return state;
  }
};

export default cartReducer;
