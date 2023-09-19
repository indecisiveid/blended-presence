/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  size: "large" | "medium" | "small";
  variant: "image" | "logo";
  className: any;
}

export const ElementsElements = ({ size, variant, className }: Props): JSX.Element => {
  return (
    <div className={`elements-elements size-1-${size} ${variant} ${className}`}>
      {variant === "logo" && (
        <>
          <img className="footprint" alt="Footprint" src="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png" />
          <div className="network-provider" />
        </>
      )}
    </div>
  );
};

ElementsElements.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  variant: PropTypes.oneOf(["image", "logo"]),
};
