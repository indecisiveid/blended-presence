/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  icon: boolean;
  label: string;
  className: any;
}

export const BadgeTvDefaultWrapper = ({ icon = false, label = "Badge", className }: Props): JSX.Element => {
  return (
    <div className={`badge-TV-default-wrapper ${className}`}>
      <div className="text-3">{label}</div>
    </div>
  );
};

BadgeTvDefaultWrapper.propTypes = {
  icon: PropTypes.bool,
  label: PropTypes.string,
};
