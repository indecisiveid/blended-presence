/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Placeholder } from "../Placeholder";
import "./style.css";

interface Props {
  variant: "label" | "icon" | "label-icon";
  className: any;
  text: string;
}

export const Badge = ({ variant, className, text = "Badge title" }: Props): JSX.Element => {
  return (
    <div className={`badge ${className}`}>
      {["icon", "label-icon"].includes(variant) && (
        <Placeholder
          className={`${variant === "icon" ? "class-97" : "class-98"}`}
          filled
          shapeClassName="placeholder-instance"
        />
      )}

      {["label-icon", "label"].includes(variant) && <div className="title-5">{text}</div>}
    </div>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf(["label", "icon", "label-icon"]),
  text: PropTypes.string,
};
