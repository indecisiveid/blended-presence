/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Battery = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`battery ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_103_96215)">
        <path
          className="path"
          d="M32.7435 17.094C32.9928 17.026 33.2762 16.992 33.5935 16.992C34.1602 16.992 34.4435 17.23 34.4435 17.706V23.758C34.4435 24.234 34.1602 24.472 33.5935 24.472C33.2762 24.472 32.9928 24.438 32.7435 24.37V27.43C32.7435 27.6567 32.6528 27.8607 32.4715 28.042C32.3128 28.2007 32.1202 28.28 31.8935 28.28H6.39349C6.16683 28.28 5.96283 28.2007 5.78149 28.042C5.62283 27.8607 5.54349 27.6567 5.54349 27.43V13.83C5.54349 13.5807 5.62283 13.3767 5.78149 13.218C5.96283 13.0593 6.16683 12.98 6.39349 12.98H31.8935C32.1428 12.98 32.3468 13.0593 32.5055 13.218C32.6642 13.3767 32.7435 13.5807 32.7435 13.83V17.094ZM31.0435 26.58V14.68H7.24349V26.58H31.0435ZM8.97749 24.88V16.38H13.3295V24.88H8.97749Z"
          fill="#F1F1F1"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="17.3"
          id="filter0_d_103_96215"
          width="29.9"
          x="5.54349"
          y="12.98"
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
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_103_96215" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_96215"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
