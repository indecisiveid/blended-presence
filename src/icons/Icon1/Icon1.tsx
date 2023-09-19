/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  opacity: string;
  className: any;
}

export const Icon1 = ({ color = "#F8F7FA", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-1 ${className}`}
      fill="none"
      height="41"
      viewBox="0 0 41 41"
      width="41"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.09342 33.6456H15.3284V22.3644H26.3073V33.6456H32.497V16.5702L20.7952 8.05439L9.09342 16.5555V33.6456ZM9.09342 36.85C8.16722 36.85 7.38596 36.5409 6.74967 35.9227C6.11337 35.3045 5.79523 34.5455 5.79523 33.6456V16.5702C5.79523 16.0731 5.90889 15.6004 6.13621 15.1518C6.36353 14.7032 6.68661 14.3274 7.10547 14.0242L18.8073 5.46454C19.1174 5.25969 19.4423 5.10606 19.782 5.00363C20.1217 4.90121 20.4624 4.85 20.8041 4.85C21.1458 4.85 21.4845 4.90121 21.8202 5.00363C22.1558 5.10606 22.4768 5.25969 22.7832 5.46454L34.485 14.0242C34.9038 14.3274 35.2269 14.7032 35.4542 15.1518C35.6816 15.6004 35.7952 16.0731 35.7952 16.5702V33.6456C35.7952 34.5455 35.4771 35.3045 34.8408 35.9227C34.2045 36.5409 33.4232 36.85 32.497 36.85H23.0091V25.5688H18.6266V36.85H9.09342Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Icon1.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
