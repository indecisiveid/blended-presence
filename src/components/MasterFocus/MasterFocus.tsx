/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ElementsDimmer } from "../ElementsDimmer";
import { MasterTile } from "../MasterTile";
import { MetaTiles } from "../MetaTiles";
import "./style.css";

interface Props {
  focus: "unfocused" | "focused" | "expanded";
  titled: boolean;
  className: any;
  overlapGroupClassName: any;
  elementsDimmerElementsDimmerClassName: any;
  masterTileMasterTileClassName: any;
  highlightClassName: any;
  tokenHighlightClassName: any;
  masterTileMasterTileClassNameOverride: any;
}

export const MasterFocus = ({
  focus,
  titled,
  className,
  overlapGroupClassName,
  elementsDimmerElementsDimmerClassName,
  masterTileMasterTileClassName,
  highlightClassName,
  tokenHighlightClassName,
  masterTileMasterTileClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`master-focus ${className}`}>
      {(titled || focus === "focused" || focus === "unfocused") && (
        <div className={`overlap-group-3 focus-${focus} titled-${titled} ${overlapGroupClassName}`}>
          {(focus === "expanded" || (titled && focus === "unfocused")) && (
            <MetaTiles
              className={`${focus === "unfocused" ? "meta-tiles-2" : "class-12"}`}
              focus="unfocused"
              overlapClassName="meta-tiles-instance"
              type="centered"
            />
          )}

          {focus === "unfocused" && (
            <ElementsDimmer
              className={
                !titled
                  ? elementsDimmerElementsDimmerClassName
                  : {
                      height: "268px",
                      left: "0",
                      position: "absolute",
                      top: "0",
                      width: "268px",
                    }
              }
            />
          )}

          {focus === "focused" && (
            <MasterTile
              className={
                !titled
                  ? masterTileMasterTileClassName
                  : {
                      backgroundColor: "var(--glassbasebase-focused-panel)",
                      borderRadius: "10px",
                      boxShadow: "var(--base-shadow-focused-panel)",
                      left: "0",
                      position: "absolute",
                      top: "0",
                    }
              }
            />
          )}

          {titled && focus === "focused" && (
            <>
              <MetaTiles className="meta-tiles-2" focus="focused" type="centered" />
              <div className="highlight">
                <div className="token-highlight">
                  <div className="flare-position-wrapper">
                    <div className="k-flare-wrapper">
                      <img
                        className="k-flare-2"
                        alt="K flare"
                        src="https://c.animaapp.com/pLg7BaBQ/img/k-flare-25@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {!titled && focus === "focused" && (
            <div className={`highlight ${highlightClassName}`}>
              <div className={`token-highlight ${tokenHighlightClassName}`}>
                <div className="flare-position-wrapper">
                  <div className="k-flare-wrapper">
                    <img
                      className="k-flare-2"
                      alt="K flare"
                      src="https://c.animaapp.com/pLg7BaBQ/img/k-flare-25@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {focus === "expanded" && !titled && <MasterTile className={masterTileMasterTileClassNameOverride} />}
    </div>
  );
};

MasterFocus.propTypes = {
  focus: PropTypes.oneOf(["unfocused", "focused", "expanded"]),
  titled: PropTypes.bool,
};
