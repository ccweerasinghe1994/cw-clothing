import React from "react";
import "./collection-overview.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selelctCollections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectioOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selelctCollections
});
export default connect(mapStateToProps)(CollectioOverview);
