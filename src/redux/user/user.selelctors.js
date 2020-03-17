import { createSelector } from "reselect";

const selelctUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selelctUser],
  user => user.currentUser
);
