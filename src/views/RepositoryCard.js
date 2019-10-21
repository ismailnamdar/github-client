import React from "react";
import Label from "./Label";

const RepositoryCard = ({ name, description }) => {
  return (
    <>
      <Label bold>{name}</Label>
      <Label>{description}</Label>
    </>
  );
};

export default RepositoryCard;
