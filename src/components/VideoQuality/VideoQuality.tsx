/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MasterBadge } from "../MasterBadge";
import "./style.css";

interface Props {
  format: "HD" | "SD" | "four-k";
  className: any;
  masterBadgeBadgeClassName: any;
}

export const VideoQuality = ({ format, className, masterBadgeBadgeClassName }: Props): JSX.Element => {
  return (
    <div className={`video-quality ${className}`}>
      <MasterBadge
        badgeClassName={masterBadgeBadgeClassName}
        className="master-badge-2"
        text={format === "HD" ? "" : format === "four-k" ? "" : ""}
      />
    </div>
  );
};

VideoQuality.propTypes = {
  format: PropTypes.oneOf(["HD", "SD", "four-k"]),
};
