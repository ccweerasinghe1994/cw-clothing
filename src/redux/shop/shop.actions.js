import { ShopTypes } from "./shop.typs";
export const updateCollections = collections => ({
  type: ShopTypes.UPDATE_COLLECTIONS,
  payload: collections
});
