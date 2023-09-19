/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  textClassName: any;
  text: string;
  className: any;
}

export const MasterButton = ({ textClassName, text = "Button", className }: Props): JSX.Element => {
  return (
    <button className={`master-button ${className}`}>
      <div className={`text-2 ${textClassName}`}>{text}</div>
    </button>
  );
};

MasterButton.propTypes = {
  text: PropTypes.string,
};
