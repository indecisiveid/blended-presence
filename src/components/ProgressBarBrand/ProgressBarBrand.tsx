/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  height: "standard" | "small";
  className: any;
  barMoveUseClassName: any;
  progressClassName: any;
}

export const ProgressBarBrand = ({ height, className, barMoveUseClassName, progressClassName }: Props): JSX.Element => {
  return (
    <div className={`progress-bar-brand height-${height} ${className}`}>
      <div className={`bar-move-use ${barMoveUseClassName}`}>
        <div className={`progress ${progressClassName}`} />
      </div>
    </div>
  );
};

ProgressBarBrand.propTypes = {
  height: PropTypes.oneOf(["standard", "small"]),
};
