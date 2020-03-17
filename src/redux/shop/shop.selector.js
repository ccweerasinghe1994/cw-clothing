import { createSelector } from "reselect";

const COLLECTION_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selctShop = state => state.shop;

export const selelctCollections = createSelector(
  [selctShop],
  shop => shop.collections
);
export const selectCollection = collectionUrlParam =>
  createSelector([selelctCollections], collections =>
    collections.find(
      collection => collection.id === COLLECTION_MAP[collectionUrlParam]
    )
  );
