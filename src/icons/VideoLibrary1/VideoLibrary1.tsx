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

export const VideoLibrary1 = ({ color = "#F8F7FA", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`video-library-1 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.5326 19.489L23.4216 13.7779L14.5326 8.06678V19.489ZM9.33265 24.889C8.73265 24.889 8.21228 24.6686 7.77155 24.2279C7.33082 23.7872 7.11045 23.2668 7.11045 22.6668V4.88895C7.11045 4.28895 7.33082 3.76858 7.77155 3.32785C8.21228 2.88712 8.73265 2.66675 9.33265 2.66675H27.1105C27.7105 2.66675 28.2309 2.88712 28.6716 3.32785C29.1123 3.76858 29.3327 4.28895 29.3327 4.88895V22.6668C29.3327 23.2668 29.1123 23.7872 28.6716 24.2279C28.2309 24.6686 27.7105 24.889 27.1105 24.889H9.33265ZM9.33265 22.6668H27.1105V4.88895H9.33265V22.6668ZM4.88822 29.3334C4.28822 29.3334 3.76785 29.1131 3.32712 28.6723C2.88638 28.2316 2.66602 27.7112 2.66602 27.1112V7.11118H4.88822V27.1112H24.8883V29.3334H4.88822Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

VideoLibrary1.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
