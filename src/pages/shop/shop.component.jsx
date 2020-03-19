import React from "react";

import "./shop.style.scss";
import CollectioOverview from "../../components/collectio-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  collectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unssubscribeFromSnapshot = null;

  componentDidMount() {
    const {} = this.props;
    const collectionRef = firestore.collection("collections");

    this.unssubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionMap = collectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    });
  }
  render() {
    const { match } = this.props;
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
  }
}
const mapDispatchToProps = dispath => ({
  updateCollections: collection => dispath(updateCollections(collection))
});
export default connect(null, mapDispatchToProps)(ShopPage);
