import { createSelector } from "reselect";

const selctShop = state => state.shop;

export const selelctCollections = createSelector(
  [selctShop],
  shop => shop.collections
);

export const selelctCollectionPreviewCollections = createSelector(
  [selelctCollections],
  collections => Object.keys(collections).map(key => collections[key])
);
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selelctCollections],
    collections => collections[collectionUrlParam]
  );
