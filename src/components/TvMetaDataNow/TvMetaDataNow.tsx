/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ProgressBarBrand } from "../ProgressBarBrand";
import "./style.css";

interface Props {
  title: string;
  description: string;
  progressBar: boolean;
  providerLogo: boolean;
  title1: boolean;
  description1: boolean;
  className: any;
  containerClassName: any;
  providerLogoClassName: any;
  img: string;
  marqueeClassName: any;
  fadeClassName: any;
  fade: string;
  titleClassName: any;
  title2: string;
  description2: string;
  progressBarBrandHeightSmallClassName: any;
  progressBarBrandBarMoveUseClassName: any;
  progressBarBrandProgressClassName: any;
  descriptionClassName: any;
}

export const TvMetaDataNow = ({
  title = "Title",
  description = "Description",
  progressBar = true,
  providerLogo = true,
  title1 = true,
  description1 = true,
  className,
  containerClassName,
  providerLogoClassName,
  img = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-84@2x.png",
  marqueeClassName,
  fadeClassName,
  fade = "https://c.animaapp.com/pLg7BaBQ/img/fade-61.svg",
  titleClassName,
  title2 = "https://c.animaapp.com/pLg7BaBQ/img/title-66.svg",
  description2 = "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg",
  progressBarBrandHeightSmallClassName,
  progressBarBrandBarMoveUseClassName,
  progressBarBrandProgressClassName,
  descriptionClassName,
}: Props): JSX.Element => {
  return (
    <div className={`TV-meta-data-now ${className}`}>
      <div className={`container-3 ${containerClassName}`}>
        {providerLogo && <img className={`provider-logo-7 ${providerLogoClassName}`} alt="Provider logo" src={img} />}

        <div className={`marquee-5 ${marqueeClassName}`}>
          <img className={`fade-6 ${fadeClassName}`} alt="Fade" src={fade} />
          {title1 && <img className={`title-4 ${titleClassName}`} alt="Title" src={title2} />}

          {description1 && (
            <img className={`description-4 ${descriptionClassName}`} alt="Description" src={description2} />
          )}
        </div>
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

TvMetaDataNow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  progressBar: PropTypes.bool,
  providerLogo: PropTypes.bool,
  title1: PropTypes.bool,
  description1: PropTypes.bool,
  img: PropTypes.string,
  fade: PropTypes.string,
  title2: PropTypes.string,
  description2: PropTypes.string,
};
