/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  filled: boolean;
  className: any;
  shapeClassName: any;
}

export const Placeholder = ({ filled, className, shapeClassName }: Props): JSX.Element => {
  return (
    <div className={`placeholder ${className}`}>
      <div className={`shape filled-${filled} ${shapeClassName}`} />
    </div>
  );
};

Placeholder.propTypes = {
  filled: PropTypes.bool,
};
