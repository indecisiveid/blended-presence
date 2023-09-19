/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BadgeTvDefault } from "../BadgeTvDefault";
import { ElementsFade } from "../ElementsFade";
import { HighlightStandard } from "../HighlightStandard";
import { TvMetaDataTiles } from "../TvMetaDataTiles";
import "./style.css";

interface Props {
  badge: boolean;
  playButton: boolean;
  mdBottom: boolean;
  mode: "expanded" | "resting" | "focus";
  size: "large" | "standard";
  className: any;
  TVMetaDataTilesDescriptionClassName: any;
  TVMetaDataTilesProviderLogo: string;
  TVMetaDataTilesTitle: string;
  TVMetaDataTilesProviderLogoClassName: any;
  TVMetaDataTilesFadeClassName: any;
  TVMetaDataTilesDescription: string;
  TVMetaDataTilesTitleClassName: any;
  TVMetaDataTilesFade: string;
  overlapGroupClassName: any;
  fadeClassName: any;
  highlightStandard: string;
}

export const TilesTv = ({
  badge = true,
  playButton = false,
  mdBottom = true,
  mode,
  size,
  className,
  TVMetaDataTilesDescriptionClassName,
  TVMetaDataTilesProviderLogo = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-108@2x.png",
  TVMetaDataTilesTitle = "https://c.animaapp.com/pLg7BaBQ/img/title-106.svg",
  TVMetaDataTilesProviderLogoClassName,
  TVMetaDataTilesFadeClassName,
  TVMetaDataTilesDescription = "https://c.animaapp.com/pLg7BaBQ/img/description-106.svg",
  TVMetaDataTilesTitleClassName,
  TVMetaDataTilesFade = "https://c.animaapp.com/pLg7BaBQ/img/fade-39.svg",
  overlapGroupClassName,
  fadeClassName,
  highlightStandard,
}: Props): JSX.Element => {
  return (
    <div
      className={`tiles-TV ${size} ${mode} ${className}`}
      data-responsive-tokens-mode={size === "large" ? "TV" : undefined}
    >
      {(mode === "resting" || size === "large") && (
        <div className={`overlap-group ${overlapGroupClassName}`}>
          {mode === "resting" && size === "large" && (
            <div className={`SKY-fade-wrapper ${fadeClassName}`}>
              <ElementsFade className="SKY-fade" />
            </div>
          )}

          {mode === "resting" && (
            <>
              <>
                {mdBottom && (
                  <TvMetaDataTiles
                    className={`${size === "standard" ? "class-5" : "class-6"}`}
                    description2={
                      size === "standard"
                        ? "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
                        : TVMetaDataTilesDescription
                    }
                    descriptionClassName={`${
                      size === "standard" ? "instance-node" : TVMetaDataTilesDescriptionClassName
                    }`}
                    fade={size === "standard" ? "https://c.animaapp.com/pLg7BaBQ/img/fade-42.svg" : TVMetaDataTilesFade}
                    fadeClassName={`${size === "standard" ? "class-4" : TVMetaDataTilesFadeClassName}`}
                    img={
                      size === "standard"
                        ? "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-149@2x.png"
                        : TVMetaDataTilesProviderLogo
                    }
                    logoPosition="top"
                    progressBar={false}
                    providerLogoClassName={`${
                      size === "standard" ? "TV-meta-data-tiles-instance" : TVMetaDataTilesProviderLogoClassName
                    }`}
                    size="tile"
                    title2={
                      size === "standard" ? "https://c.animaapp.com/pLg7BaBQ/img/title-147.svg" : TVMetaDataTilesTitle
                    }
                    titleClassName={`${size === "standard" ? "instance-node" : TVMetaDataTilesTitleClassName}`}
                  />
                )}
              </>
            </>
          )}

          {mode === "resting" && (
            <>
              <>{badge && <BadgeTvDefault className={`${size === "large" ? "class-7" : "class-8"}`} label="Badge" />}</>
              <div className="dimmer-2" />
            </>
          )}

          {mode === "focus" && (
            <>
              <div className={`div-wrapper ${fadeClassName}`}>
                <div className="SKY-fade-2" />
              </div>
              <>
                {mdBottom && (
                  <TvMetaDataTiles
                    className="TV-meta-data-tiles-2"
                    containerClassName="TV-meta-data-tiles-3"
                    description2={TVMetaDataTilesDescription}
                    descriptionClassName={TVMetaDataTilesDescriptionClassName}
                    fade={TVMetaDataTilesFade}
                    fadeClassName={TVMetaDataTilesFadeClassName}
                    img={TVMetaDataTilesProviderLogo}
                    logoPosition="top"
                    progressBarBrandHeightSmallClassName="TV-meta-data-tiles-instance"
                    providerLogoClassName={TVMetaDataTilesProviderLogoClassName}
                    size="tile"
                    title2={TVMetaDataTilesTitle}
                    titleClassName={TVMetaDataTilesTitleClassName}
                  />
                )}
              </>
              <HighlightStandard
                className="highlight-standard-instance"
                glintGlintClassName="highlight-standard-instance"
                glintKFlare={highlightStandard}
                overlapGroupClassName="highlight-standard-2"
                strokeI="https://c.animaapp.com/pLg7BaBQ/img/stroke-i-21@2x.png"
                strokeIClassName="highlight-standard-4"
                strokeIi="https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-21.png"
                strokeIiClassName="highlight-standard-3"
                tone="neutral"
              />
              <>{badge && <BadgeTvDefault className="badge-TV-default-instance" label="Badge" />}</>
            </>
          )}
        </div>
      )}

      {mode === "expanded" && (
        <img className="image-2" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--130@2x.png" />
      )}

      {size === "standard" && mode === "focus" && (
        <>
          <img className="image-3" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--129@2x.png" />
          <>{badge && <BadgeTvDefault className="badge-TV-default-2" label="Badge" />}</>
        </>
      )}

      {(mode === "expanded" || (mode === "focus" && size === "standard")) && <div className="SKY-fade-3" />}

      {size === "standard" && mode === "focus" && (
        <>
          <>
            {mdBottom && (
              <TvMetaDataTiles
                className="TV-meta-data-tiles-4"
                description2="https://c.animaapp.com/pLg7BaBQ/img/description-140.svg"
                descriptionClassName="instance-node"
                fade="https://c.animaapp.com/pLg7BaBQ/img/fade-40.svg"
                fadeClassName="TV-meta-data-tiles-5"
                img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-149@2x.png"
                logoPosition="top"
                progressBar={false}
                size="tile"
                title2="https://c.animaapp.com/pLg7BaBQ/img/title-41.svg"
                titleClassName="instance-node"
              />
            )}
          </>
          <HighlightStandard
            className="highlight-standard-5"
            glintGlintClassName="highlight-standard-7"
            overlapGroupClassName="highlight-standard-6"
            strokeI="https://c.animaapp.com/pLg7BaBQ/img/stroke-i-25@2x.png"
            strokeIClassName="highlight-standard-9"
            strokeIi="https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-25@2x.png"
            strokeIiClassName="highlight-standard-8"
            tone="neutral"
          />
        </>
      )}

      {mode === "expanded" && (
        <>
          <>{badge && <BadgeTvDefault className="badge-TV-default-3" label="Badge" />}</>
          <>
            {mdBottom && (
              <TvMetaDataTiles
                className="TV-meta-data-tiles-6"
                description2="https://c.animaapp.com/pLg7BaBQ/img/description-140.svg"
                descriptionClassName="instance-node"
                fade="https://c.animaapp.com/pLg7BaBQ/img/fade-41.svg"
                fadeClassName="TV-meta-data-tiles-7"
                img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-149@2x.png"
                logoPosition="top"
                progressBar={false}
                size="tile"
                title2="https://c.animaapp.com/pLg7BaBQ/img/title-108.svg"
                titleClassName="instance-node"
              />
            )}
          </>
        </>
      )}
    </div>
  );
};

TilesTv.propTypes = {
  badge: PropTypes.bool,
  playButton: PropTypes.bool,
  mdBottom: PropTypes.bool,
  mode: PropTypes.oneOf(["expanded", "resting", "focus"]),
  size: PropTypes.oneOf(["large", "standard"]),
  TVMetaDataTilesProviderLogo: PropTypes.string,
  TVMetaDataTilesTitle: PropTypes.string,
  TVMetaDataTilesDescription: PropTypes.string,
  TVMetaDataTilesFade: PropTypes.string,
  highlightStandard: PropTypes.string,
};
