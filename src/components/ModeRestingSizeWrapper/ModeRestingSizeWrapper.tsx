/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BadgeTvDefaultWrapper } from "../BadgeTvDefaultWrapper";
import { ElementsFade } from "../ElementsFade";
import { Glint } from "../Glint";
import { SizeTileLogoWrapper } from "../SizeTileLogoWrapper";
import "./style.css";

interface Props {
  badge: boolean;
  playButton: boolean;
  mdBottom: boolean;
  mode: "expanded" | "resting" | "focus";
  size: "large" | "standard";
  className: any;
  sizeTileLogoWrapperDescriptionClassName: any;
  sizeTileLogoWrapperTitleClassName: any;
  sizeTileLogoWrapperFade: string;
  sizeTileLogoWrapperDescription: string;
  sizeTileLogoWrapperProviderLogo: string;
  sizeTileLogoWrapperTitle: string;
  sizeTileLogoWrapperFadeClassName: any;
  sizeTileLogoWrapperProviderLogoClassName: any;
  overlapGroupClassName: any;
  image: string;
  SKYFadeClassName: any;
  sizeTileLogoWrapperImg: string;
  sizeTileLogoWrapperTitle1: string;
  sizeTileLogoWrapperFadeClassNameOverride: any;
  sizeTileLogoWrapperDescription1: string;
  highlightStandardClassName: any;
  strokeIi: string;
}

export const ModeRestingSizeWrapper = ({
  badge = true,
  playButton = false,
  mdBottom = true,
  mode,
  size,
  className,
  sizeTileLogoWrapperDescriptionClassName,
  sizeTileLogoWrapperTitleClassName,
  sizeTileLogoWrapperFade = "https://c.animaapp.com/pLg7BaBQ/img/fade-108.svg",
  sizeTileLogoWrapperDescription = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  sizeTileLogoWrapperProviderLogo = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-149@2x.png",
  sizeTileLogoWrapperTitle = "https://c.animaapp.com/pLg7BaBQ/img/title-147.svg",
  sizeTileLogoWrapperFadeClassName,
  sizeTileLogoWrapperProviderLogoClassName,
  overlapGroupClassName,
  image = "https://c.animaapp.com/pLg7BaBQ/img/image--129@2x.png",
  SKYFadeClassName,
  sizeTileLogoWrapperImg = "https://c.animaapp.com/pLg7BaBQ/img/fade-106.svg",
  sizeTileLogoWrapperTitle1 = "https://c.animaapp.com/pLg7BaBQ/img/title-107.svg",
  sizeTileLogoWrapperFadeClassNameOverride,
  sizeTileLogoWrapperDescription1 = "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg",
  highlightStandardClassName,
  strokeIi = "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-25@2x.png",
}: Props): JSX.Element => {
  return (
    <div
      className={`mode-resting-size-wrapper size-2-${size} mode-1-${mode} ${className}`}
      data-responsive-tokens-mode={size === "large" ? "TV" : undefined}
    >
      {(mode === "resting" || size === "large") && (
        <div className={`overlap-group-6 ${overlapGroupClassName}`}>
          {mode === "resting" && size === "large" && (
            <div className="elements-fade-wrapper">
              <ElementsFade className="elements-fade-instance" />
            </div>
          )}

          {mode === "resting" && (
            <>
              <>
                {mdBottom && (
                  <SizeTileLogoWrapper
                    className={`${size === "standard" ? "class-64" : "class-65"}`}
                    description2={
                      size === "standard"
                        ? sizeTileLogoWrapperDescription
                        : "https://c.animaapp.com/pLg7BaBQ/img/description-106.svg"
                    }
                    descriptionClassName={
                      size === "standard"
                        ? sizeTileLogoWrapperDescriptionClassName
                        : {
                            alignSelf: "unset",
                            width: "unset",
                          }
                    }
                    fade={
                      size === "standard" ? sizeTileLogoWrapperFade : "https://c.animaapp.com/pLg7BaBQ/img/fade-105.svg"
                    }
                    fadeClassName={
                      size === "standard"
                        ? sizeTileLogoWrapperFadeClassName
                        : {
                            left: "-104px",
                            top: "-577px",
                            width: "475px",
                          }
                    }
                    img={
                      size === "standard"
                        ? sizeTileLogoWrapperProviderLogo
                        : "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-108@2x.png"
                    }
                    logoPosition="top"
                    progressBar={false}
                    providerLogoClassName={size === "standard" ? sizeTileLogoWrapperProviderLogoClassName : undefined}
                    size="tile"
                    title2={
                      size === "standard"
                        ? sizeTileLogoWrapperTitle
                        : "https://c.animaapp.com/pLg7BaBQ/img/title-106.svg"
                    }
                    titleClassName={
                      size === "standard"
                        ? sizeTileLogoWrapperTitleClassName
                        : {
                            alignSelf: "unset",
                            width: "unset",
                          }
                    }
                  />
                )}
              </>
            </>
          )}

          {mode === "resting" && (
            <>
              <>
                {badge && (
                  <BadgeTvDefaultWrapper className={`${size === "large" ? "class-66" : "class-67"}`} label="Badge" />
                )}
              </>
              <div className="dimmer-3" />
            </>
          )}

          {mode === "focus" && (
            <>
              <div className="fade-5">
                <div className="SKY-fade-4" />
              </div>
              <>
                {mdBottom && (
                  <SizeTileLogoWrapper
                    className="TV-meta-data-tiles-9"
                    containerClassName="TV-meta-data-tiles-8"
                    description2="https://c.animaapp.com/pLg7BaBQ/img/description-105.svg"
                    descriptionClassName="TV-meta-data-tiles-11"
                    fade="https://c.animaapp.com/pLg7BaBQ/img/fade-104.svg"
                    fadeClassName="TV-meta-data-tiles-10"
                    heightSmallWrapperHeightSmallClassName="TV-meta-data-tiles-12"
                    img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-108@2x.png"
                    logoPosition="top"
                    size="tile"
                    title2="https://c.animaapp.com/pLg7BaBQ/img/title-105.svg"
                    titleClassName="TV-meta-data-tiles-11"
                  />
                )}
              </>
              <div className="highlight-standard-10">
                <div className="overlap-group-7">
                  <Glint
                    className="highlight-standard-10"
                    kFlare="https://c.animaapp.com/pLg7BaBQ/img/k-flare-48@2x.png"
                  />
                  <img
                    className="highlight-standard-10"
                    alt="Stroke II"
                    src="https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-21.png"
                  />
                  <img
                    className="stroke-i-3"
                    alt="Stroke i"
                    src="https://c.animaapp.com/pLg7BaBQ/img/stroke-i-21@2x.png"
                  />
                </div>
              </div>
              <>{badge && <BadgeTvDefaultWrapper className="badge-TV-default-4" label="Badge" />}</>
            </>
          )}
        </div>
      )}

      {mode === "expanded" && (
        <>
          <img className="image-5" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--130@2x.png" />
          <div className="SKY-fade-5" />
        </>
      )}

      {size === "standard" && mode === "focus" && <img className="image-6" alt="Image" src={image} />}

      {(mode === "expanded" || (mode === "focus" && size === "standard")) && (
        <>
          <>
            {badge && (
              <BadgeTvDefaultWrapper className={`${mode === "focus" ? "class-68" : "class-69"}`} label="Badge" />
            )}
          </>
        </>
      )}

      {size === "standard" && mode === "focus" && <div className={`SKY-fade-6 ${SKYFadeClassName}`} />}

      {(mode === "expanded" || (mode === "focus" && size === "standard")) && (
        <>
          <>
            {mdBottom && (
              <SizeTileLogoWrapper
                className={`${mode === "expanded" ? "class-71" : "class-72"}`}
                description2={
                  mode === "expanded"
                    ? "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg"
                    : sizeTileLogoWrapperDescription1
                }
                descriptionClassName="TV-meta-data-tiles-11"
                fade={mode === "expanded" ? "https://c.animaapp.com/pLg7BaBQ/img/fade-107.svg" : sizeTileLogoWrapperImg}
                fadeClassName={`${mode === "expanded" ? "class-70" : sizeTileLogoWrapperFadeClassNameOverride}`}
                img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-149@2x.png"
                logoPosition="top"
                progressBar={false}
                size="tile"
                title2={
                  mode === "expanded" ? "https://c.animaapp.com/pLg7BaBQ/img/title-108.svg" : sizeTileLogoWrapperTitle1
                }
                titleClassName="TV-meta-data-tiles-11"
              />
            )}
          </>
        </>
      )}

      {size === "standard" && mode === "focus" && (
        <div className={`highlight-standard-11 ${highlightStandardClassName}`}>
          <div className="overlap-group-8">
            <Glint className="glint-4" kFlare="https://c.animaapp.com/pLg7BaBQ/img/k-flare-48@2x.png" />
            <img className="glint-4" alt="Stroke II" src={strokeIi} />
            <img className="stroke-i-4" alt="Stroke i" src="https://c.animaapp.com/pLg7BaBQ/img/stroke-i-25@2x.png" />
          </div>
        </div>
      )}
    </div>
  );
};

ModeRestingSizeWrapper.propTypes = {
  badge: PropTypes.bool,
  playButton: PropTypes.bool,
  mdBottom: PropTypes.bool,
  mode: PropTypes.oneOf(["expanded", "resting", "focus"]),
  size: PropTypes.oneOf(["large", "standard"]),
  sizeTileLogoWrapperFade: PropTypes.string,
  sizeTileLogoWrapperDescription: PropTypes.string,
  sizeTileLogoWrapperProviderLogo: PropTypes.string,
  sizeTileLogoWrapperTitle: PropTypes.string,
  image: PropTypes.string,
  sizeTileLogoWrapperImg: PropTypes.string,
  sizeTileLogoWrapperTitle1: PropTypes.string,
  sizeTileLogoWrapperDescription1: PropTypes.string,
  strokeIi: PropTypes.string,
};
