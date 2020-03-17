export const addItemToCart = (cardItems, cardItemToAdd) => {
  const exsistingCardItem = cardItems.find(
    cardItem => cardItem.id === cardItemToAdd.id
  );

  if (exsistingCardItem) {
    return cardItems.map(cardItem =>
      cardItem.id === cardItemToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }
  return [...cardItems, { ...cardItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => (cartItem.id = cartItemToRemove.id)
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartitem => cartitem.id !== cartItemToRemove.id);
  }
  return cartItems.map(cartitem =>
    cartitem.id === cartItemToRemove.id
      ? { ...cartitem, quantity: cartitem.quantity - 1 }
      : cartitem
  );
};
