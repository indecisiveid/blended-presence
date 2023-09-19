/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const FillOn = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`fill-on ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M7.5 4V20L20.5 12L7.5 4Z" fill="#141417" />
    </svg>
  );
};
