/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const FilledTrue = ({ color = "#F6F6F9", className }: Props): JSX.Element => {
  return (
    <svg
      className={`filled-true ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.63855 28.8C5.89759 28.8 5.27259 28.5527 4.76355 28.0582C4.25452 27.5636 4 26.9564 4 26.2365V12.5761C4 12.1723 4.08886 11.7919 4.26657 11.4349C4.44428 11.0778 4.70482 10.7793 5.04819 10.5394L14.4096 3.69164C14.6577 3.52777 14.9149 3.40486 15.1811 3.32292C15.4473 3.24098 15.7227 3.20001 16.0071 3.20001C16.2915 3.20001 16.5652 3.24098 16.8282 3.32292C17.0912 3.40486 17.3453 3.52777 17.5904 3.69164L26.9518 10.5394C27.2952 10.7793 27.5557 11.0778 27.7334 11.4349C27.9111 11.7919 28 12.1723 28 12.5761V26.2365C28 26.9564 27.7455 27.5636 27.2364 28.0582C26.7274 28.5527 26.1024 28.8 25.3614 28.8H19.0723V18.5108H12.9277V28.8H6.63855Z"
        fill={color}
      />
    </svg>
  );
};

FilledTrue.propTypes = {
  color: PropTypes.string,
};
