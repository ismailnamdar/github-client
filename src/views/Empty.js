import React from "react";
import {useTranslation} from "react-i18next";

const Empty = () => {
  const { t } = useTranslation("translations");
  return <div>
    <h1>{t("empty")}</h1>
  </div>
};

export default Empty
