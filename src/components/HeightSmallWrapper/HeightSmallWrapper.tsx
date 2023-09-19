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

export const HeightSmallWrapper = ({
  height,
  className,
  barMoveUseClassName,
  progressClassName,
}: Props): JSX.Element => {
  return (
    <div className={`height-small-wrapper height-2-${height} ${className}`}>
      <div className={`progress-wrapper ${barMoveUseClassName}`}>
        <div className={`progress-2 ${progressClassName}`} />
      </div>
    </div>
  );
};

HeightSmallWrapper.propTypes = {
  height: PropTypes.oneOf(["standard", "small"]),
};
