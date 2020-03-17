import { createSelector } from "reselect";

const selctShop = state => state.shop;

export const selelctCollections = createSelector(
  [selctShop],
  shop => shop.collections
);
