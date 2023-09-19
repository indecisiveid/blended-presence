/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const FillOff = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`fill-off ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M20.5 12L7.5 20V4L20.5 12ZM17.9279 12L8.89286 6.44444V17.5556L17.9279 12Z"
        fill="#141417"
        fillRule="evenodd"
      />
    </svg>
  );
};
