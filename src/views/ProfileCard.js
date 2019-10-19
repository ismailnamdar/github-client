import React from "react";
import Avatar from "./Avatar";
import Label from "./Label";

const ProfileCard = ({url, imageUrl, title, description}) => <>
  <a href={url} target={"_blank"}><Avatar src={imageUrl}/></a>
  <Label bold>{title}</Label>
  <Label>{description}</Label>
</>;

export default ProfileCard;
