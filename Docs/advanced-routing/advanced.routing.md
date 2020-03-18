lets create a colllectoin page
```jsx
import React from "react";
import "./collection.style.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ collection }) => {
  console.log("collection", collection);

  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
```
lets style it
```scss
```

lets create shop selelctor
```js
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
```
lets add this to shop page
```jsx
import React from "react";

import "./shop.style.scss";
import CollectioOverview from "../../components/collectio-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectioOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
```