/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Plus = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`plus ${className}`}
      fill="none"
      height="34"
      viewBox="0 0 33 34"
      width="33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_41_24611)">
        <path
          className="path"
          clipRule="evenodd"
          d="M32 16C32 14.894 31.106 14 30 14H18V0H16C14.894 0 14 0.894 14 2V14H0V16C0 17.106 0.896 18 2 18H14V32H16C17.106 32 18 31.106 18 30V18H32V16Z"
          fill="#F1F1F1"
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="34"
          id="filter0_d_41_24611"
          width="33"
          x="0"
          y="0"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dx="1" dy="2" />
          <feColorMatrix className="fe-color-matrix" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_41_24611" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_24611"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
