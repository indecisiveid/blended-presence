/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Tick = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`tick ${className}`}
      fill="none"
      height="44"
      viewBox="0 0 44 44"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M43.2342 6.94425L41.388 5L15.5386 32.2223L2.61001 18.6125L0.76381 20.5568C-0.254603 21.632 -0.254603 23.3728 0.76381 24.4453L11.8436 36.1135L13.6924 38.0578C14.7108 39.133 16.3638 39.133 17.3848 38.0578L19.231 36.1135L43.2342 10.8355C44.2553 9.76025 44.2553 8.0195 43.2342 6.94425Z"
        fill="#F1F1F1"
        fillRule="evenodd"
      />
    </svg>
  );
};
