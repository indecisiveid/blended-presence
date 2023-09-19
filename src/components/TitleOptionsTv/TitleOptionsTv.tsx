/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  programTitle: string;
  className: any;
  divClassName: any;
}

export const TitleOptionsTv = ({
  programTitle = "Program title one line",
  className,
  divClassName,
}: Props): JSX.Element => {
  return (
    <div className={`title-options-TV ${className}`}>
      <div className={`program-title-one ${divClassName}`}>{programTitle}</div>
    </div>
  );
};

TitleOptionsTv.propTypes = {
  programTitle: PropTypes.string,
};
