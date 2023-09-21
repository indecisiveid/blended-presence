/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HeightSmallWrapper } from "../HeightSmallWrapper";
import "./style.css";

interface Props {
  providerLogo: boolean;
  title: string;
  description: boolean;
  description1: string;
  title1: boolean;
  progressBar: boolean;
  size: "tile";
  logoPosition: "right" | "top";
  className: any;
  providerLogoClassName: any;
  img: string;
  hasFade: boolean;
  titleClassName: any;
  title2: string;
  descriptionClassName: any;
  description2: string;
  heightSmallWrapperHeightSmallClassName: any;
  fadeClassName: any;
  fade: string;
  containerClassName: any;
}

export const SizeTileLogoWrapper = ({
  providerLogo = true,
  title = "Title",
  description = true,
  description1 = "Description",
  title1 = true,
  progressBar = true,
  size,
  logoPosition,
  className,
  providerLogoClassName,
  img = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-149@2x.png",
  hasFade = true,
  titleClassName,
  title2 = "https://c.animaapp.com/pLg7BaBQ/img/title-147.svg",
  descriptionClassName,
  description2 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  heightSmallWrapperHeightSmallClassName,
  fadeClassName,
  fade = "https://c.animaapp.com/pLg7BaBQ/img/fade-103.svg",
  containerClassName,
}: Props): JSX.Element => {
  return (
    <div className={`size-tile-logo-wrapper logo-position-${logoPosition} ${className}`}>
      <div className={`container-2 ${containerClassName}`}>
        {logoPosition === "top" && (
          <>
            <>
              
            </>
            <div className="marquee-3">
              {hasFade && <img className={`fade-3 ${fadeClassName}`} alt="Fade" src={fade} />}
              <div className="custom-title">
                {title}
              </div>
            </div>
          </>
        )}

        {logoPosition === "right" && (
          <div className="frame-2">
            <div className="marquee-4">
              <img className="fade-4" alt="Fade" src="https://c.animaapp.com/pLg7BaBQ/img/fade-102.svg" />
              {title1 && (
                <img className="title-3" alt="Title" src="https://c.animaapp.com/pLg7BaBQ/img/title-147.svg" />
              )}

              {description && (
                <img
                  className="description-3"
                  alt="Description"
                  src="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
                />
              )}
            </div>
            {providerLogo && (
              <img
                className="provider-logo-6"
                alt="Provider logo"
                src="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-105@2x.png"
              />
            )}
          </div>
        )}
      </div>
      {progressBar && (
        <HeightSmallWrapper
          barMoveUseClassName="progress-bar-brand-instance"
          className={heightSmallWrapperHeightSmallClassName}
          height="small"
          progressClassName="progress-bar-brand-instance"
        />
      )}
    </div>
  );
};

SizeTileLogoWrapper.propTypes = {
  providerLogo: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.bool,
  description1: PropTypes.string,
  title1: PropTypes.bool,
  progressBar: PropTypes.bool,
  size: PropTypes.oneOf(["tile"]),
  logoPosition: PropTypes.oneOf(["right", "top"]),
  img: PropTypes.string,
  hasFade: PropTypes.bool,
  title2: PropTypes.string,
  description2: PropTypes.string,
  fade: PropTypes.string,
};
