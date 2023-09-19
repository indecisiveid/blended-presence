/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Glint } from "../Glint";
import "./style.css";

interface Props {
  glint: boolean;
  tone: "neutral" | "inverse";
  className: any;
  overlapGroupClassName: any;
  glintGlintClassName: any;
  strokeIiClassName: any;
  strokeIi: string;
  strokeIClassName: any;
  strokeI: string;
  glintKFlare: string;
}

export const HighlightStandard = ({
  glint = true,
  tone,
  className,
  overlapGroupClassName,
  glintGlintClassName,
  strokeIiClassName,
  strokeIi = "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-9@2x.png",
  strokeIClassName,
  strokeI = "https://c.animaapp.com/pLg7BaBQ/img/stroke-i-9@2x.png",
  glintKFlare = "https://c.animaapp.com/pLg7BaBQ/img/k-flare-28@2x.png",
}: Props): JSX.Element => {
  return (
    <div className={`highlight-standard ${className}`}>
      <div className={`overlap-group-2 ${overlapGroupClassName}`}>
        {glint && (
          <Glint
            className={
              tone === "neutral"
                ? glintGlintClassName
                : {
                    height: "65px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "115px",
                  }
            }
            flarePositionClassName="glint-instance"
            kFlare={tone === "neutral" ? glintKFlare : "https://c.animaapp.com/pLg7BaBQ/img/k-flare-48@2x.png"}
            kFlareClassName={`${tone === "neutral" && "class-9"}`}
          />
        )}

        {tone === "neutral" && (
          <>
            <img className={`img-2 ${strokeIiClassName}`} alt="Stroke II" src={strokeIi} />
            <img className={`stroke-i ${strokeIClassName}`} alt="Stroke i" src={strokeI} />
          </>
        )}

        {tone === "inverse" && (
          <img className="img-2" alt="Stroke" src="https://c.animaapp.com/pLg7BaBQ/img/stroke-17@2x.png" />
        )}
      </div>
    </div>
  );
};

HighlightStandard.propTypes = {
  glint: PropTypes.bool,
  tone: PropTypes.oneOf(["neutral", "inverse"]),
  strokeIi: PropTypes.string,
  strokeI: PropTypes.string,
  glintKFlare: PropTypes.string,
};
