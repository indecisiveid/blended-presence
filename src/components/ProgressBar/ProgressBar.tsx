/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ProgressBarMaster } from "../ProgressBarMaster";
import "./style.css";

interface Props {
  fill: "twenty-five" | "zero" | "one-hundred" | "ten" | "fifty" | "seventy-five";
  fillColour: "primary" | "secondary";
  className: any;
  progressBarMasterFillClassName: any;
  progressBarMasterOverlapGroupClassName: any;
  progressBarMasterElementClassName: any;
  progressBarMasterProgressBarMasterClassName: any;
  bgClassName: any;
  progressBarMasterClassName: any;
}

export const ProgressBar = ({
  fill,
  fillColour,
  className,
  progressBarMasterFillClassName,
  progressBarMasterOverlapGroupClassName,
  progressBarMasterElementClassName,
  progressBarMasterProgressBarMasterClassName,
  bgClassName,
  progressBarMasterClassName,
}: Props): JSX.Element => {
  return (
    <div className={`progress-bar ${className}`}>
      {fill === "zero" && (
        <div className={`bg-wrapper ${progressBarMasterClassName}`}>
          <div className={`bg ${bgClassName}`} />
        </div>
      )}

      {["fifty", "one-hundred", "seventy-five", "ten", "twenty-five"].includes(fill) && (
        <ProgressBarMaster
          className={progressBarMasterProgressBarMasterClassName}
          elementClassName={progressBarMasterElementClassName}
          fillClassName={progressBarMasterFillClassName}
          overlapGroupClassName={progressBarMasterOverlapGroupClassName}
        />
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  fill: PropTypes.oneOf(["twenty-five", "zero", "one-hundred", "ten", "fifty", "seventy-five"]),
  fillColour: PropTypes.oneOf(["primary", "secondary"]),
};
