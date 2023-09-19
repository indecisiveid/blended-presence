/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Plus } from "../../icons/Plus";
import "./style.css";

interface Props {
  type: "image" | "icon" | "text";
  className: any;
}

export const MasterCircleTile = ({ type, className }: Props): JSX.Element => {
  return (
    <div className={`master-circle-tile type-${type} ${className}`}>
      {type === "icon" && <Plus className="plus-instance" />}

      {type === "text" && <div className="text-4">AB</div>}
    </div>
  );
};

MasterCircleTile.propTypes = {
  type: PropTypes.oneOf(["image", "icon", "text"]),
};
