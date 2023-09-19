/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BadgeBase } from "../BadgeBase";
import "./style.css";

interface Props {
  className: any;
  runtimeOrSeasonsClassName: any;
}

export const HeroMetadata = ({ className, runtimeOrSeasonsClassName }: Props): JSX.Element => {
  return (
    <div className={`hero-metadata ${className}`}>
      <div className="badges">
        <BadgeBase className="badge-base-instance" title="R" variant="title" />
      </div>
      <div className="text-wrapper">2020</div>
      <div className="text-wrapper">Sci-fi/fantasy</div>
      <div className={`runtime-or-seasons ${runtimeOrSeasonsClassName}`}>2hr 41m</div>
    </div>
  );
};
