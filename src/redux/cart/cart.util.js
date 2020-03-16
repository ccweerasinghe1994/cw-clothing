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
