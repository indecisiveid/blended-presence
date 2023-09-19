/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  mask:
    | "four-trailer"
    | "zero-web-modal"
    | "one-tile-fade"
    | "five-TV-guide"
    | "two-program-logo"
    | "three-content-block";
  maskTileFadeClassName: any;
  maskContentBlock: string;
}

export const HeroImage = ({
  mask,
  maskTileFadeClassName,
  maskContentBlock = "https://c.animaapp.com/pLg7BaBQ/img/mask-3-content-block.svg",
}: Props): JSX.Element => {
  return (
    <>
      {mask === "one-tile-fade" && (
        <div className={`hero-image mask-tile-fade ${maskTileFadeClassName}`}>
          <div className="tile-fade" />
        </div>
      )}

      {["five-TV-guide", "four-trailer", "three-content-block", "two-program-logo", "zero-web-modal"].includes(
        mask
      ) && (
        <img
          className={`hero-image mask-program-logo ${maskTileFadeClassName}`}
          alt="Mask program logo"
          src={
            mask === "three-content-block"
              ? maskContentBlock
              : mask === "zero-web-modal"
              ? "https://c.animaapp.com/pLg7BaBQ/img/mask-0-web-modal.svg"
              : mask === "four-trailer"
              ? "https://c.animaapp.com/pLg7BaBQ/img/mask-4-trailer.svg"
              : mask === "five-TV-guide"
              ? "https://c.animaapp.com/pLg7BaBQ/img/mask-5-tv-guide.svg"
              : "https://c.animaapp.com/pLg7BaBQ/img/mask-2-program-logo.svg"
          }
        />
      )}
    </>
  );
};

HeroImage.propTypes = {
  mask: PropTypes.oneOf([
    "four-trailer",
    "zero-web-modal",
    "one-tile-fade",
    "five-TV-guide",
    "two-program-logo",
    "three-content-block",
  ]),
  maskContentBlock: PropTypes.string,
};
