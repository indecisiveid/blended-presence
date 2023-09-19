/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ElementsElements } from "../ElementsElements";
import "./style.css";

interface Props {
  slot: boolean;
  slot1: boolean;
  fade: boolean;
  mode: "new" | "inactive" | "active";
  className: any;
  elementsElementsSizeSmallVariantClassName: any;
}

export const StandardHeader = ({
  slot = false,
  slot1 = false,
  fade = false,
  mode,
  className,
  elementsElementsSizeSmallVariantClassName,
}: Props): JSX.Element => {
  return (
    <div className={`standard-header ${mode} ${className}`}>
      {["active", "inactive"].includes(mode) && (
        <div className="element-slot">
          <div className="row">
            <div className="element-logo-size">
              <div className="elements-elements-wrapper">
                <ElementsElements
                  className={`${mode === "inactive" ? "class-10" : "class-11"}`}
                  size="large"
                  variant="image"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === "new" && (
        <ElementsElements className={elementsElementsSizeSmallVariantClassName} size="large" variant="image" />
      )}
    </div>
  );
};

StandardHeader.propTypes = {
  slot: PropTypes.bool,
  slot1: PropTypes.bool,
  fade: PropTypes.bool,
  mode: PropTypes.oneOf(["new", "inactive", "active"]),
};
