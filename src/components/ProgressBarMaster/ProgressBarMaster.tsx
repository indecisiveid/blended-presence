/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
  overlapGroupClassName: any;
  elementClassName: any;
  fillClassName: any;
}

export const ProgressBarMaster = ({
  className,
  overlapGroupClassName,
  elementClassName,
  fillClassName,
}: Props): JSX.Element => {
  return (
    <div className={`progress-bar-master ${className}`}>
      <div className={`element-wrapper ${overlapGroupClassName}`}>
        <div className={`fill-wrapper ${elementClassName}`}>
          <div className={`fill ${fillClassName}`} />
        </div>
      </div>
    </div>
  );
};
