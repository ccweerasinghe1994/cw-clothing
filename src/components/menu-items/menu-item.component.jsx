import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";
import {
  SubtitleContainer,
  TitleContainer,
  BackgroundImageContainer,
  ContentContainer,
  MenuItemContainer
} from "./menu-item.style";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer className="background-image" imageUrl={imageUrl} />
    <ContentContainer>
      <TitleContainer>{title}</TitleContainer>
      <SubtitleContainer>SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
