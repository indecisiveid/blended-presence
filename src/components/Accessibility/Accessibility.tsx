/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  type: "audio-description" | "subtitles";
  className: any;
  badgeClassName: any;
}

export const Accessibility = ({ type, className, badgeClassName }: Props): JSX.Element => {
  return (
    <div className={`accessibility ${className}`}>
      <div className={`badge-3 ${type} ${badgeClassName}`}>
        {type === "subtitles" && <></>}

        {type === "audio-description" && <></>}
      </div>
    </div>
  );
};

Accessibility.propTypes = {
  type: PropTypes.oneOf(["audio-description", "subtitles"]),
};
