/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Placeholder } from "../Placeholder";
import "./style.css";

interface Props {
  title: string;
  variant: "title-icon" | "title" | "icon";
  className: any;
}

export const BadgeBase = ({ title = "Badge title", variant, className }: Props): JSX.Element => {
  return (
    <div className={`badge-base ${className}`}>
      {["icon", "title-icon"].includes(variant) && (
        <Placeholder className={`${variant === "icon" ? "class" : "class-2"}`} filled shapeClassName="icon" />
      )}

      {["title-icon", "title"].includes(variant) && <div className="title">{title}</div>}
    </div>
  );
};

BadgeBase.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["title-icon", "title", "icon"]),
};
