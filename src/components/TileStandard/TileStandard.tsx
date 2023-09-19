/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MasterFocus } from "../MasterFocus";
import "./style.css";

interface Props {
  text: boolean;
  icon: boolean;
  focus: "unfocused" | "focused" | "expanded";
  className: any;
  masterFocusFocusUnfocusedClassName: any;
  masterFocusOverlapGroupClassName: any;
  masterFocusElementsDimmerElementsDimmerClassName: any;
}

export const TileStandard = ({
  text = false,
  icon = false,
  focus,
  className,
  masterFocusFocusUnfocusedClassName,
  masterFocusOverlapGroupClassName,
  masterFocusElementsDimmerElementsDimmerClassName,
}: Props): JSX.Element => {
  return (
    <div className={`tile-standard ${className}`}>
      <MasterFocus
        className={masterFocusFocusUnfocusedClassName}
        elementsDimmerElementsDimmerClassName={masterFocusElementsDimmerElementsDimmerClassName}
        focus={focus === "focused" ? "focused" : focus === "expanded" ? "expanded" : "unfocused"}
        highlightClassName={`${focus === "focused" && "class-16"}`}
        masterTileMasterTileClassName={`${focus === "focused" && "class-13"}`}
        masterTileMasterTileClassNameOverride={`${focus === "expanded" && "class-15"}`}
        overlapGroupClassName={masterFocusOverlapGroupClassName}
        titled={false}
        tokenHighlightClassName={`${focus === "focused" && "class-14"}`}
      />
    </div>
  );
};

TileStandard.propTypes = {
  text: PropTypes.bool,
  icon: PropTypes.bool,
  focus: PropTypes.oneOf(["unfocused", "focused", "expanded"]),
};
