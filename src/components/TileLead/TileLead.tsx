/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HighlightStandard } from "../HighlightStandard";
import "./style.css";

interface Props {
  CTA: string;
  title: string;
  focus: boolean;
  variant: "now-next" | "thirty-four" | "square-standard" | "one-hundred-and-sixty-nine";
  className: any;
  railTitleClassName: any;
  divClassName: any;
}

export const TileLead = ({
  CTA = "View all",
  title = "36 character two line limit marquees and fades",
  focus,
  variant,
  className,
  railTitleClassName,
  divClassName,
}: Props): JSX.Element => {
  return (
    <div className={`tile-lead ${variant} focus-${focus} ${className}`}>
      {!focus && (
        <>
          <p className={`rail-title ${railTitleClassName}`}>{title}</p>
          <div className={`view-all ${divClassName}`}>{CTA}</div>
        </>
      )}

      {focus && (
        <>
          <HighlightStandard
            className={`${
              variant === "now-next"
                ? "class-89"
                : variant === "thirty-four"
                ? "class-90"
                : variant === "square-standard"
                ? "class-91"
                : "class-92"
            }`}
            glintGlintClassName={`${
              variant === "now-next"
                ? "class-81"
                : variant === "thirty-four"
                ? "class-82"
                : variant === "square-standard"
                ? "class-83"
                : "class-84"
            }`}
            glintKFlare="https://c.animaapp.com/pLg7BaBQ/img/k-flare-48@2x.png"
            overlapGroupClassName={`${
              variant === "now-next"
                ? "class-77"
                : variant === "thirty-four"
                ? "class-78"
                : variant === "square-standard"
                ? "class-79"
                : "class-80"
            }`}
            strokeI={
              variant === "now-next"
                ? "https://c.animaapp.com/pLg7BaBQ/img/stroke-i-16@2x.png"
                : variant === "thirty-four"
                ? "https://c.animaapp.com/pLg7BaBQ/img/stroke-i-15@2x.png"
                : variant === "square-standard"
                ? "https://c.animaapp.com/pLg7BaBQ/img/stroke-i-14@2x.png"
                : "https://c.animaapp.com/pLg7BaBQ/img/stroke-i-26@2x.png"
            }
            strokeIClassName={`${
              variant === "now-next"
                ? "class-73"
                : variant === "thirty-four"
                ? "class-74"
                : variant === "square-standard"
                ? "class-75"
                : "class-76"
            }`}
            strokeIi={
              variant === "now-next"
                ? "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-16@2x.png"
                : variant === "thirty-four"
                ? "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-15@2x.png"
                : variant === "square-standard"
                ? "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-14@2x.png"
                : "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-26@2x.png"
            }
            strokeIiClassName={`${
              variant === "now-next"
                ? "class-85"
                : variant === "thirty-four"
                ? "class-86"
                : variant === "square-standard"
                ? "class-87"
                : "class-88"
            }`}
            tone="neutral"
          />
          <p className="rail-title">{title}</p>
          <div className="view-all">{CTA}</div>
        </>
      )}
    </div>
  );
};

TileLead.propTypes = {
  CTA: PropTypes.string,
  title: PropTypes.string,
  focus: PropTypes.bool,
  variant: PropTypes.oneOf(["now-next", "thirty-four", "square-standard", "one-hundred-and-sixty-nine"]),
};
