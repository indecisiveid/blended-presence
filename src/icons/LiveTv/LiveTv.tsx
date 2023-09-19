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

export const LiveTv = ({ color = "#F8F7FA", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`live-tv ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 41 40"
      width="41"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M33.3528 10.4H22.3273L27.1128 5.136L26.0801 4L20.2619 10.4H20.2183L14.4001 4L13.3964 5.136L18.1673 10.4H7.17098C5.57098 10.4 4.26189 11.84 4.26189 13.6V32.8C4.26189 34.56 5.57098 36 7.17098 36H33.3528C34.9528 36 36.2619 34.56 36.2619 32.8V13.6C36.2619 11.84 34.9528 10.4 33.3528 10.4ZM33.3528 32.8H7.17098V13.6H33.3528V32.8Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        className="path"
        d="M26.0801 23.1298C26.0801 23.5343 25.9225 23.8387 25.6073 24.0429L18.2619 29.2429C17.9225 29.5096 17.5831 29.5283 17.2437 29.2989C16.9043 29.0696 16.7346 28.7443 16.7346 28.3229V17.9229C16.7346 17.5016 16.9043 17.1763 17.2437 16.9469C17.5831 16.7176 17.9225 16.7229 18.2619 16.9629L25.6073 22.2029C25.9225 22.4163 26.0801 22.7252 26.0801 23.1298Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

LiveTv.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
