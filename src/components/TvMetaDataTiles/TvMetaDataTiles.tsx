/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ProgressBarBrand } from "../ProgressBarBrand";
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
  fadeClassName: any;
  fade: string;
  titleClassName: any;
  title2: string;
  descriptionClassName: any;
  description2: string;
  containerClassName: any;
  progressBarBrandHeightSmallClassName: any;
  progressBarBrandBarMoveUseClassName: any;
  progressBarBrandProgressClassName: any;
}

export const TvMetaDataTiles = ({
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
  fadeClassName,
  fade = "https://c.animaapp.com/pLg7BaBQ/img/fade-37.svg",
  titleClassName,
  title2 = "https://c.animaapp.com/pLg7BaBQ/img/title-108.svg",
  descriptionClassName,
  description2 = "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg",
  containerClassName,
  progressBarBrandHeightSmallClassName,
  progressBarBrandBarMoveUseClassName,
  progressBarBrandProgressClassName,
}: Props): JSX.Element => {
  return (
    <div className={`TV-meta-data-tiles ${logoPosition} ${className}`}>
      <div className={`container ${containerClassName}`}>
        {logoPosition === "top" && (
          <>
            <>
              {providerLogo && (
                <img className={`provider-logo-2 ${providerLogoClassName}`} alt="Provider logo" src={img} />
              )}
            </>
            <div className="marquee">
              <img className={`fade ${fadeClassName}`} alt="Fade" src={fade} />
              {title1 && <img className={`title-2 ${titleClassName}`} alt="Title" src={title2} />}

              {description && (
                <img className={`description-2 ${descriptionClassName}`} alt="Description" src={description2} />
              )}
            </div>
          </>
        )}

        {logoPosition === "right" && (
          <div className="frame">
            <div className="marquee-2">
              <img className="fade-2" alt="Fade" src="https://c.animaapp.com/pLg7BaBQ/img/fade-36.svg" />
              {title1 && (
                <img className="title-2" alt="Title" src="https://c.animaapp.com/pLg7BaBQ/img/title-108.svg" />
              )}

              {description && (
                <img
                  className="description-2"
                  alt="Description"
                  src="https://c.animaapp.com/pLg7BaBQ/img/description-140.svg"
                />
              )}
            </div>
            {providerLogo && (
              <img
                className="provider-logo-3"
                alt="Provider logo"
                src="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-105@2x.png"
              />
            )}
          </div>
        )}
      </div>
      {progressBar && (
        <ProgressBarBrand
          barMoveUseClassName={progressBarBrandBarMoveUseClassName}
          className={progressBarBrandHeightSmallClassName}
          height="small"
          progressClassName={progressBarBrandProgressClassName}
        />
      )}
    </div>
  );
};

TvMetaDataTiles.propTypes = {
  providerLogo: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.bool,
  description1: PropTypes.string,
  title1: PropTypes.bool,
  progressBar: PropTypes.bool,
  size: PropTypes.oneOf(["tile"]),
  logoPosition: PropTypes.oneOf(["right", "top"]),
  img: PropTypes.string,
  fade: PropTypes.string,
  title2: PropTypes.string,
  description2: PropTypes.string,
};
