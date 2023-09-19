/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  badgeClassName: any;
  text: string;
}

export const MasterBadge = ({ className, badgeClassName, text = "" }: Props): JSX.Element => {
  return (
    <div className={`master-badge ${className}`}>
      <div className={`badge-2 ${badgeClassName}`}>{text}</div>
    </div>
  );
};

MasterBadge.propTypes = {
  text: PropTypes.string,
};
