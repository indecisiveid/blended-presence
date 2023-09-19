/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const StarFull = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`star-full ${className}`}
      fill="none"
      height="66"
      viewBox="0 0 65 66"
      width="65"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_41_24646)">
        <path
          className="path"
          d="M49.5864 64C50.6742 64 51.5807 63.5467 52.306 62.6402C53.0916 61.492 53.3333 60.2833 53.0312 59.0142L48.7705 40.7026L62.4589 28.4646C63.4863 27.5581 64 26.5005 64 25.2918C64 24.2644 63.6676 23.3881 63.0028 22.6629C62.3381 21.9377 61.4618 21.5449 60.3739 21.4844L42.4249 20.034L35.4448 2.6289C35.1426 1.78281 34.6893 1.13314 34.085 0.679887C33.4806 0.226629 32.7856 0 32 0C31.2144 0 30.5194 0.226629 29.915 0.679887C29.3107 1.13314 28.8574 1.78281 28.5552 2.6289L21.5751 20.034L3.62606 21.4844C2.53824 21.5449 1.66195 21.9377 0.997167 22.6629C0.332389 23.3881 0 24.2644 0 25.2918C0 26.5005 0.483475 27.5581 1.45043 28.4646L15.1388 40.7026L10.9688 59.0142C10.6667 60.4042 10.8782 61.5826 11.6034 62.5496C12.2682 63.5165 13.2049 64 14.4136 64C15.0784 64 15.8036 63.7583 16.5892 63.2748L32 53.4844L47.4108 63.2748C48.0755 63.7583 48.8008 64 49.5864 64Z"
          fill="#F1F1F1"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="66"
          id="filter0_d_41_24646"
          width="65"
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
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_41_24646" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_24646"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
