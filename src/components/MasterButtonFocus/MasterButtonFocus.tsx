/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MasterButton } from "../MasterButton";
import { ProgressBar } from "../ProgressBar";
import "./style.css";

interface Props {
  focus: "off" | "on";
  type: "button-CW" | "button";
  className: any;
  masterButtonTextClassName: any;
  masterButtonText: string;
  overlapGroupClassName: any;
  masterButtonTextClassNameOverride: any;
  masterButtonMasterButtonClassName: any;
  highlightClassName: any;
  tokenHighlightClassName: any;
  masterButtonDivClassName: any;
  masterButtonMasterButtonClassNameOverride: any;
  progressBarProgressBarMasterClassName: any;
  progressBarBgClassName: any;
  progressBarFillFillColourClassName: any;
  highlightClassNameOverride: any;
  tokenHighlightClassNameOverride: any;
  masterButtonTextWrapperClassName: any;
  kFlare: string;
}

export const MasterButtonFocus = ({
  focus,
  type,
  className,
  masterButtonTextClassName,
  masterButtonText = "Button",
  overlapGroupClassName,
  masterButtonTextClassNameOverride,
  masterButtonMasterButtonClassName,
  highlightClassName,
  tokenHighlightClassName,
  masterButtonDivClassName,
  masterButtonMasterButtonClassNameOverride,
  progressBarProgressBarMasterClassName,
  progressBarBgClassName,
  progressBarFillFillColourClassName,
  highlightClassNameOverride,
  tokenHighlightClassNameOverride,
  masterButtonTextWrapperClassName,
  kFlare = "https://c.animaapp.com/pLg7BaBQ/img/k-flare-25@2x.png",
}: Props): JSX.Element => {
  return (
    <div className={`master-button-focus ${className}`}>
      {focus === "off" && (
        <MasterButton
          className={masterButtonTextWrapperClassName}
          text={masterButtonText}
          textClassName={masterButtonTextClassName}
        />
      )}

      {focus === "on" && (
        <div className={`overlap-group-5 ${overlapGroupClassName}`}>
          <MasterButton
            className={
              type === "button" ? masterButtonMasterButtonClassName : masterButtonMasterButtonClassNameOverride
            }
            text="Button"
            textClassName={type === "button" ? masterButtonTextClassNameOverride : masterButtonDivClassName}
          />
          {type === "button-CW" && (
            <ProgressBar
              bgClassName={progressBarBgClassName}
              className={progressBarFillFillColourClassName}
              fill="zero"
              fillColour="primary"
              progressBarMasterClassName={progressBarProgressBarMasterClassName}
            />
          )}

          <div
            className={`highlight-2 ${
              type === "button" ? highlightClassName : type === "button-CW" ? highlightClassNameOverride : undefined
            }`}
          >
            <div
              className={`token-highlight-2 ${
                type === "button"
                  ? tokenHighlightClassName
                  : type === "button-CW"
                  ? tokenHighlightClassNameOverride
                  : undefined
              }`}
            >
              <div className="glint-3">
                <div className="flare-position-2">
                  <img
                    className="k-flare-4"
                    alt="K flare"
                    src={type === "button-CW" ? kFlare : "https://c.animaapp.com/pLg7BaBQ/img/k-flare-25@2x.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

MasterButtonFocus.propTypes = {
  focus: PropTypes.oneOf(["off", "on"]),
  type: PropTypes.oneOf(["button-CW", "button"]),
  masterButtonText: PropTypes.string,
  kFlare: PropTypes.string,
};
