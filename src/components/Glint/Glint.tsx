/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  flarePositionClassName: any;
  kFlareClassName: any;
  kFlare: string;
}

export const Glint = ({
  className,
  flarePositionClassName,
  kFlareClassName,
  kFlare = "https://c.animaapp.com/pLg7BaBQ/img/k-flare-48@2x.png",
}: Props): JSX.Element => {
  return (
    <div className={`glint ${className}`}>
      <div className={`flare-position ${flarePositionClassName}`}>
        <img className={`k-flare ${kFlareClassName}`} alt="K flare" src={kFlare} />
      </div>
    </div>
  );
};

Glint.propTypes = {
  kFlare: PropTypes.string,
};
