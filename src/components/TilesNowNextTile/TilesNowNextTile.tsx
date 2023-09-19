/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HighlightStandard } from "../HighlightStandard";
import { TvMetaDataNow } from "../TvMetaDataNow";
import "./style.css";

interface Props {
  focus: boolean;
  TVMetaDataNowTitle: string;
  TVMetaDataNowProgressBarBrandHeightSmallClassName: any;
  TVMetaDataNowProgressBarBrandProgressClassName: any;
  TVMetaDataNowProgressBarBrandBarMoveUseClassName: any;
  TVMetaDataNowFadeClassName: any;
  TVMetaDataNowDescription: string;
  TVMetaDataNowProviderLogo: string;
  TVMetaDataNowFade: string;
  TVMetaDataNowImg: string;
  TVMetaDataNowFadeClassNameOverride: any;
  TVMetaDataNowDescription1: string;
  TVMetaDataNowFade1: string;
  TVMetaDataNowProviderLogoClassName: any;
  TVMetaDataNowTitleClassName: any;
  TVMetaDataNowDescriptionClassName: any;
  TVMetaDataNowTitleClassNameOverride: any;
  TVMetaDataNowDescriptionClassNameOverride: any;
  backgroundClassName: any;
  highlightStandardStrokeIi: string;
  highlightStandardToneNeutralClassName: any;
  TVMetaDataNowTitle1: string;
  TVMetaDataNowProgressBarBrandHeightSmallClassNameOverride: any;
  TVMetaDataNowProgressBarBrandProgressClassNameOverride: any;
  TVMetaDataNowProgressBarBrandBarMoveUseClassNameOverride: any;
  TVMetaDataNowImgClassName: any;
  TVMetaDataNowDescription2: string;
  TVMetaDataNowFade2: string;
  TVMetaDataNowTitle2: string;
  TVMetaDataNowImgClassNameOverride: any;
  TVMetaDataNowDescription3: string;
  TVMetaDataNowFade3: string;
}

export const TilesNowNextTile = ({
  focus,
  TVMetaDataNowTitle = "https://c.animaapp.com/pLg7BaBQ/img/title-66.svg",
  TVMetaDataNowProgressBarBrandHeightSmallClassName,
  TVMetaDataNowProgressBarBrandProgressClassName,
  TVMetaDataNowProgressBarBrandBarMoveUseClassName,
  TVMetaDataNowFadeClassName,
  TVMetaDataNowDescription = "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg",
  TVMetaDataNowProviderLogo = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png",
  TVMetaDataNowFade = "https://c.animaapp.com/pLg7BaBQ/img/fade-65.svg",
  TVMetaDataNowImg = "https://c.animaapp.com/pLg7BaBQ/img/title-66.svg",
  TVMetaDataNowFadeClassNameOverride,
  TVMetaDataNowDescription1 = "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg",
  TVMetaDataNowFade1 = "https://c.animaapp.com/pLg7BaBQ/img/fade-64.svg",
  TVMetaDataNowProviderLogoClassName,
  TVMetaDataNowTitleClassName,
  TVMetaDataNowDescriptionClassName,
  TVMetaDataNowTitleClassNameOverride,
  TVMetaDataNowDescriptionClassNameOverride,
  backgroundClassName,
  highlightStandardStrokeIi = "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-18@2x.png",
  highlightStandardToneNeutralClassName,
  TVMetaDataNowTitle1 = "https://c.animaapp.com/pLg7BaBQ/img/title-64.svg",
  TVMetaDataNowProgressBarBrandHeightSmallClassNameOverride,
  TVMetaDataNowProgressBarBrandProgressClassNameOverride,
  TVMetaDataNowProgressBarBrandBarMoveUseClassNameOverride,
  TVMetaDataNowImgClassName,
  TVMetaDataNowDescription2 = "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg",
  TVMetaDataNowFade2 = "https://c.animaapp.com/pLg7BaBQ/img/fade-63.svg",
  TVMetaDataNowTitle2 = "https://c.animaapp.com/pLg7BaBQ/img/title-66.svg",
  TVMetaDataNowImgClassNameOverride,
  TVMetaDataNowDescription3 = "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg",
  TVMetaDataNowFade3 = "https://c.animaapp.com/pLg7BaBQ/img/fade-62.svg",
}: Props): JSX.Element => {
  return (
    <div className={`tiles-now-next-tile focus-0-${focus}`}>
      {!focus && (
        <>
          <div className={`background ${backgroundClassName}`}>
            <div className="now-background" />
          </div>
          <TvMetaDataNow
            className="TV-meta-data-now-next"
            containerClassName="TV-meta-data-now-instance"
            description2={TVMetaDataNowDescription}
            descriptionClassName={TVMetaDataNowDescriptionClassName}
            fade={TVMetaDataNowFade}
            fadeClassName={TVMetaDataNowFadeClassName}
            img={TVMetaDataNowProviderLogo}
            marqueeClassName="TV-meta-data-now-next-instance"
            progressBarBrandBarMoveUseClassName={TVMetaDataNowProgressBarBrandBarMoveUseClassName}
            progressBarBrandHeightSmallClassName={TVMetaDataNowProgressBarBrandHeightSmallClassName}
            progressBarBrandProgressClassName={TVMetaDataNowProgressBarBrandProgressClassName}
            providerLogoClassName={TVMetaDataNowProviderLogoClassName}
            title2={TVMetaDataNowTitle}
            titleClassName={TVMetaDataNowTitleClassName}
          />
          <TvMetaDataNow
            className="next"
            description2={TVMetaDataNowDescription1}
            descriptionClassName={TVMetaDataNowDescriptionClassNameOverride}
            fade={TVMetaDataNowFade1}
            fadeClassName={TVMetaDataNowFadeClassNameOverride}
            progressBar={false}
            providerLogo={false}
            title2={TVMetaDataNowImg}
            titleClassName={TVMetaDataNowTitleClassNameOverride}
          />
        </>
      )}

      {focus && (
        <>
          <div className="second-background-wrapper">
            <div className="second-background" />
          </div>
          <HighlightStandard
            className={highlightStandardToneNeutralClassName}
            glintGlintClassName="highlight-standard-13"
            glintKFlare="https://c.animaapp.com/pLg7BaBQ/img/k-flare-48@2x.png"
            overlapGroupClassName="highlight-standard-12"
            strokeI="https://c.animaapp.com/pLg7BaBQ/img/stroke-i-19@2x.png"
            strokeIClassName="highlight-standard-15"
            strokeIi={highlightStandardStrokeIi}
            strokeIiClassName="highlight-standard-14"
            tone="neutral"
          />
          <TvMetaDataNow
            className="now"
            containerClassName="now-2"
            description2={TVMetaDataNowDescription2}
            fade={TVMetaDataNowFade2}
            fadeClassName={TVMetaDataNowImgClassName}
            img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-92@2x.png"
            marqueeClassName="TV-meta-data-now-next-instance"
            progressBarBrandBarMoveUseClassName={TVMetaDataNowProgressBarBrandBarMoveUseClassNameOverride}
            progressBarBrandHeightSmallClassName={TVMetaDataNowProgressBarBrandHeightSmallClassNameOverride}
            progressBarBrandProgressClassName={TVMetaDataNowProgressBarBrandProgressClassNameOverride}
            providerLogoClassName="now-3"
            title2={TVMetaDataNowTitle1}
            titleClassName="TV-meta-data-now-2"
          />
          <TvMetaDataNow
            className="next-2"
            description2={TVMetaDataNowDescription3}
            fade={TVMetaDataNowFade3}
            fadeClassName={TVMetaDataNowImgClassNameOverride}
            progressBar={false}
            providerLogo={false}
            title2={TVMetaDataNowTitle2}
            titleClassName="TV-meta-data-now-2"
          />
        </>
      )}
    </div>
  );
};

TilesNowNextTile.propTypes = {
  focus: PropTypes.bool,
  TVMetaDataNowTitle: PropTypes.string,
  TVMetaDataNowDescription: PropTypes.string,
  TVMetaDataNowProviderLogo: PropTypes.string,
  TVMetaDataNowFade: PropTypes.string,
  TVMetaDataNowImg: PropTypes.string,
  TVMetaDataNowDescription1: PropTypes.string,
  TVMetaDataNowFade1: PropTypes.string,
  highlightStandardStrokeIi: PropTypes.string,
  TVMetaDataNowTitle1: PropTypes.string,
  TVMetaDataNowDescription2: PropTypes.string,
  TVMetaDataNowFade2: PropTypes.string,
  TVMetaDataNowTitle2: PropTypes.string,
  TVMetaDataNowDescription3: PropTypes.string,
  TVMetaDataNowFade3: PropTypes.string,
};
