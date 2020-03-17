import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectoryList = createSelector(
  [selectDirectory],
  directory => directory.secction
);