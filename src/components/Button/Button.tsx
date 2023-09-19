/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MasterButtonFocus } from "../MasterButtonFocus";
import "./style.css";

interface Props {
  type: "notification" | "standard" | "one";
  focus: "unfocused" | "focused";
  progressBar: boolean;
  masterButtonFocusMasterButtonTextClassName: any;
  masterButtonFocusMasterButtonText: string;
  className: any;
}

export const Button = ({
  type,
  focus,
  progressBar,
  masterButtonFocusMasterButtonTextClassName,
  masterButtonFocusMasterButtonText = "Button",
  className,
}: Props): JSX.Element => {
  return (
    <button className={`button type-2-${type} focus-3-${focus} ${className}`}>
      <MasterButtonFocus
        className={`${focus === "unfocused" && "class-34"} ${
          type === "standard" && !progressBar && focus === "focused" && "class-35"
        } ${type === "standard" && progressBar && "class-36"} ${
          !progressBar && type === "notification" && focus === "focused" && "class-37"
        } ${type === "notification" && progressBar && "class-38"}`}
        focus={focus === "focused" ? "on" : "off"}
        highlightClassName={`${type === "standard" && !progressBar && focus === "focused" && "class-45"} ${
          !progressBar && type === "notification" && focus === "focused" && "class-46"
        }`}
        highlightClassNameOverride={`${type === "standard" && progressBar && "class-57"} ${
          type === "notification" && progressBar && "class-58"
        }`}
        kFlare={
          type === "notification" && progressBar ? "https://c.animaapp.com/pLg7BaBQ/img/k-flare-12@2x.png" : undefined
        }
        masterButtonDivClassName={`${type === "standard" && progressBar && "class-49"} ${
          type === "notification" && progressBar && "class-50"
        }`}
        masterButtonMasterButtonClassName={`${
          type === "standard" && !progressBar && focus === "focused" && "class-47"
        } ${!progressBar && type === "notification" && focus === "focused" && "class-48"}`}
        masterButtonMasterButtonClassNameOverride={`${type === "standard" && progressBar && "class-59"} ${
          type === "notification" && progressBar && "class-60"
        }`}
        masterButtonText={masterButtonFocusMasterButtonText}
        masterButtonTextClassName={masterButtonFocusMasterButtonTextClassName}
        masterButtonTextClassNameOverride={`${
          type === "standard" && !progressBar && focus === "focused" && "class-49"
        } ${!progressBar && type === "notification" && focus === "focused" && "class-56"}`}
        masterButtonTextWrapperClassName={`${type === "one" && "class-39"} ${
          focus === "unfocused" && type === "notification" && "class-40"
        }`}
        overlapGroupClassName={`${type === "standard" && !progressBar && focus === "focused" && "class-43"} ${
          (progressBar || (focus === "focused" && type === "notification")) && "class-44"
        }`}
        progressBarBgClassName={`${type === "standard" && progressBar && "class-41"} ${
          type === "notification" && progressBar && "class-42"
        }`}
        progressBarFillFillColourClassName={`${type === "standard" && progressBar && "class-53"} ${
          type === "notification" && progressBar && "class-54"
        }`}
        progressBarProgressBarMasterClassName={`${progressBar && "class-55"}`}
        tokenHighlightClassName={`${type === "standard" && !progressBar && focus === "focused" && "class-61"} ${
          !progressBar && type === "notification" && focus === "focused" && "class-62"
        }`}
        tokenHighlightClassNameOverride={`${type === "standard" && progressBar && "class-51"} ${
          type === "notification" && progressBar && "class-52"
        }`}
        type={progressBar ? "button-CW" : "button"}
      />
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["notification", "standard", "one"]),
  focus: PropTypes.oneOf(["unfocused", "focused"]),
  progressBar: PropTypes.bool,
  masterButtonFocusMasterButtonText: PropTypes.string,
};
