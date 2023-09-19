/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MasterBadge } from "../MasterBadge";
import "./style.css";

interface Props {
  region: "DE" | "IT" | "UK";
  cert: "fourteen" | "sixteen" | "zero" | "u" | "fifteen" | "twelve" | "PA" | "PG" | "PT" | "eighteen" | "BA" | "six";
  className: any;
  masterBadgeBadgeClassName: any;
}

export const AgeRating = ({ region, cert, className, masterBadgeBadgeClassName }: Props): JSX.Element => {
  return (
    <div className={`age-rating ${className}`}>
      <MasterBadge
        badgeClassName={masterBadgeBadgeClassName}
        className="master-badge-instance"
        text={
          cert === "twelve"
            ? ""
            : cert === "PG"
            ? ""
            : cert === "eighteen"
            ? ""
            : cert === "zero"
            ? ""
            : cert === "six"
            ? ""
            : cert === "fourteen"
            ? ""
            : cert === "sixteen"
            ? ""
            : cert === "BA"
            ? ""
            : cert === "PA"
            ? ""
            : cert === "PT"
            ? ""
            : ""
        }
      />
    </div>
  );
};

AgeRating.propTypes = {
  region: PropTypes.oneOf(["DE", "IT", "UK"]),
  cert: PropTypes.oneOf([
    "fourteen",
    "sixteen",
    "zero",
    "u",
    "fifteen",
    "twelve",
    "PA",
    "PG",
    "PT",
    "eighteen",
    "BA",
    "six",
  ]),
};
