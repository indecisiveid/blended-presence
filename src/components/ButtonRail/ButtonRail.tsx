/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

interface Props {
  focus: "unfocused" | "focused" | "scrolled-end" | "end";
  scrolled: boolean;
  className: any;
  buttonMasterButtonFocusMasterButtonText: string;
  buttonMasterButtonFocusMasterButtonTextClassName: any;
  visible: boolean;
  visible1: boolean;
}

export const ButtonRail = ({
  focus,
  scrolled,
  className,
  buttonMasterButtonFocusMasterButtonText = "Button",
  buttonMasterButtonFocusMasterButtonTextClassName,
  visible = true,
  visible1 = true,
}: Props): JSX.Element => {
  return (
    <div className={`button-rail scrolled-${scrolled} ${className}`}>
      <div className="group">
        {(!scrolled || focus === "focused") && (
          <Button
            focus={
              scrolled || focus === "unfocused" ? "unfocused" : focus === "focused" && !scrolled ? "focused" : undefined
            }
            masterButtonFocusMasterButtonText={buttonMasterButtonFocusMasterButtonText}
            masterButtonFocusMasterButtonTextClassName={buttonMasterButtonFocusMasterButtonTextClassName}
            progressBar={false}
            type="standard"
          />
        )}

        {visible && (
          <>
            <>
              {["focused", "scrolled-end", "unfocused"].includes(focus) && (
                <Button
                  focus={
                    !scrolled || focus === "scrolled-end"
                      ? "unfocused"
                      : scrolled && focus === "focused"
                      ? "focused"
                      : undefined
                  }
                  masterButtonFocusMasterButtonText={!scrolled || focus === "scrolled-end" ? "Button" : undefined}
                  progressBar={false}
                  type="standard"
                />
              )}
            </>
          </>
        )}

        {scrolled && focus === "focused" && (
          <Button
            className="button-instance"
            focus="unfocused"
            masterButtonFocusMasterButtonText="Button"
            progressBar={false}
            type="standard"
          />
        )}

        {(!scrolled || focus === "focused") && (
          <>
            <>
              {visible1 && (
                <Button
                  className={`${scrolled && "class-63"}`}
                  focus="unfocused"
                  masterButtonFocusMasterButtonText="•••"
                  masterButtonFocusMasterButtonTextClassName="button-2"
                  progressBar={false}
                  type="one"
                />
              )}
            </>
          </>
        )}

        {["end", "scrolled-end"].includes(focus) && (
          <>
            <Button
              focus={focus === "end" ? "unfocused" : "focused"}
              masterButtonFocusMasterButtonText={focus === "end" ? "Button" : undefined}
              progressBar={false}
              type="standard"
            />
            <Button
              className={`${focus === "scrolled-end" && "button-instance"}`}
              focus={focus === "end" ? "focused" : "unfocused"}
              masterButtonFocusMasterButtonText={focus === "scrolled-end" ? "Button" : undefined}
              progressBar={false}
              type="standard"
            />
            <>{visible1 && <></>}</>
          </>
        )}
      </div>
    </div>
  );
};

ButtonRail.propTypes = {
  focus: PropTypes.oneOf(["unfocused", "focused", "scrolled-end", "end"]),
  scrolled: PropTypes.bool,
  buttonMasterButtonFocusMasterButtonText: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
};
