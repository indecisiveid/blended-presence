/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Dimmer } from "../Dimmer";
import { Glint } from "../Glint";
import "./style.css";

interface Props {
  variant: "unfocused" | "focused" | "selected";
  className: any;
  imageClassName: any;
  highlightStandardClassName: any;
  strokeIi: string;
}

export const VariantUnfocusedWrapper = ({
  variant,
  className,
  imageClassName,
  highlightStandardClassName,
  strokeIi = "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-15@2x.png",
}: Props): JSX.Element => {
  return (
    <div className={`variant-unfocused-wrapper ${variant} ${className}`}>
      {variant === "unfocused" && <Dimmer className="dimmer-instance" />}

      {variant === "selected" && (
        <img
          className={`image-4 ${imageClassName}`}
          alt="Image"
          src="https://c.animaapp.com/pLg7BaBQ/img/image--51@2x.png"
        />
      )}

      {variant === "focused" && (
        <div className={`overlap ${imageClassName}`}>
          <div className={`overlap-group-wrapper ${highlightStandardClassName}`}>
            <div className="overlap-group-4">
              <Glint className="stroke-II" kFlare="https://c.animaapp.com/pLg7BaBQ/img/k-flare-48@2x.png" />
              <img className="stroke-II" alt="Stroke II" src={strokeIi} />
              <img className="stroke-i-2" alt="Stroke i" src="https://c.animaapp.com/pLg7BaBQ/img/stroke-i-15@2x.png" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

VariantUnfocusedWrapper.propTypes = {
  variant: PropTypes.oneOf(["unfocused", "focused", "selected"]),
  strokeIi: PropTypes.string,
};
