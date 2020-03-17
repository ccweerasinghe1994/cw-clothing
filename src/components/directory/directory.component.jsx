import React from "react";
import MenuItem from "../menu-items/menu-item.component";
import "./directory.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryList } from "../../redux/directory/directory.selelctor";
const Directory = ({ secction }) => {
  return (
    <div className="directory-menu">
      {secction.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  secction: selectDirectoryList
});
export default connect(mapStateToProps)(Directory);
