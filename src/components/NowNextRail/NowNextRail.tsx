/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HighlightStandard } from "../HighlightStandard";
import { TileLead } from "../TileLead";
import { TilesNowNextTile } from "../TilesNowNextTile";
import "./style.css";

interface Props {
  leadTile: boolean;
  showTitle: boolean;
  railTitle: string;
  scrolled: boolean;
  focus: boolean;
  className: any;
  tilesClassName: any;
  tileLeadDivClassName: any;
  tileLeadRailTitleClassName: any;
  tileLeadTitle: string;
  visible: boolean;
  tilesNowNextTileTvMetaDataNowTitle: string;
  tilesNowNextTileTvMetaDataNowProviderLogo: string;
  tilesNowNextTileTvMetaDataNowDescription: string;
  tilesNowNextTileTvMetaDataNowFadeClassName: any;
  tilesNowNextTileTvMetaDataNowFade: string;
  tilesNowNextTileTvMetaDataNowImg: string;
  tilesNowNextTileTvMetaDataNowFadeClassNameOverride: any;
  tilesNowNextTileTvMetaDataNowDescription1: string;
  tilesNowNextTileTvMetaDataNowTitle1: string;
  tilesNowNextTileTvMetaDataNowTitle2: string;
  tilesNowNextTileTvMetaDataNowProviderLogo1: string;
  tilesNowNextTileTvMetaDataNowDescription2: string;
  tilesNowNextTileTvMetaDataNowImgClassName: any;
  tilesNowNextTileTvMetaDataNowFade1: string;
  tilesNowNextTileTvMetaDataNowFade2: string;
  tilesNowNextTileTvMetaDataNowImgClassNameOverride: any;
  tilesNowNextTileTvMetaDataNowDescription3: string;
  tilesNowNextTileTvMetaDataNowTitle3: string;
  tilesNowNextTileTvMetaDataNowTitle4: string;
  tilesNowNextTileTvMetaDataNowProviderLogo2: string;
  tilesNowNextTileTvMetaDataNowDescription4: string;
  tilesNowNextTileTvMetaDataNowFadeClassName1: any;
  tilesNowNextTileTvMetaDataNowFade3: string;
  tilesNowNextTileTvMetaDataNowFade4: string;
  tilesNowNextTileTvMetaDataNowFadeClassName2: any;
  tilesNowNextTileTvMetaDataNowDescription5: string;
  tilesNowNextTileTvMetaDataNowTitle5: string;
  tilesNowNextTileTvMetaDataNowTitle6: string;
  tilesNowNextTileTvMetaDataNowProviderLogo3: string;
  tilesNowNextTileTvMetaDataNowDescription6: string;
  tilesNowNextTileTvMetaDataNowFadeClassName3: any;
  tilesNowNextTileTvMetaDataNowFade5: string;
  tilesNowNextTileTvMetaDataNowFade6: string;
  tilesNowNextTileTvMetaDataNowFadeClassName4: any;
  tilesNowNextTileTvMetaDataNowDescription7: string;
  tilesNowNextTileTvMetaDataNowTitle7: string;
  tilesNowNextTileTvMetaDataNowDescriptionClassName: any;
  tilesNowNextTileTvMetaDataNowTitle8: string;
  tilesNowNextTileTvMetaDataNowProviderLogo4: string;
  tilesNowNextTileTvMetaDataNowProviderLogoClassName: any;
  tilesNowNextTileTvMetaDataNowDescriptionClassNameOverride: any;
  tilesNowNextTileTvMetaDataNowTitleClassName: any;
  tilesNowNextTileTvMetaDataNowFade7: string;
  tilesNowNextTileTvMetaDataNowFadeClassName5: any;
  tilesNowNextTileTvMetaDataNowFadeClassName6: any;
  tilesNowNextTileTvMetaDataNowDescription8: string;
  tilesNowNextTileTvMetaDataNowFade8: string;
  tilesNowNextTileTvMetaDataNowTitleClassNameOverride: any;
  tilesNowNextTileTvMetaDataNowDescription9: string;
  tilesNowNextTileTvMetaDataNowTitle9: string;
}

export const NowNextRail = ({
  leadTile = true,
  showTitle = true,
  railTitle = "Rail title",
  scrolled,
  focus,
  className,
  tilesClassName,
  tileLeadDivClassName,
  tileLeadRailTitleClassName,
  tileLeadTitle = "Title",
  visible = true,
  tilesNowNextTileTvMetaDataNowTitle = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
  tilesNowNextTileTvMetaDataNowProviderLogo = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png",
  tilesNowNextTileTvMetaDataNowDescription = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowFadeClassName,
  tilesNowNextTileTvMetaDataNowFade = "https://c.animaapp.com/pLg7BaBQ/img/fade-98.svg",
  tilesNowNextTileTvMetaDataNowImg = "https://c.animaapp.com/pLg7BaBQ/img/fade-99.svg",
  tilesNowNextTileTvMetaDataNowFadeClassNameOverride,
  tilesNowNextTileTvMetaDataNowDescription1 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowTitle1 = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
  tilesNowNextTileTvMetaDataNowTitle2 = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
  tilesNowNextTileTvMetaDataNowProviderLogo1 = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png",
  tilesNowNextTileTvMetaDataNowDescription2 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowImgClassName,
  tilesNowNextTileTvMetaDataNowFade1 = "https://c.animaapp.com/pLg7BaBQ/img/fade-96.svg",
  tilesNowNextTileTvMetaDataNowFade2 = "https://c.animaapp.com/pLg7BaBQ/img/fade-97.svg",
  tilesNowNextTileTvMetaDataNowImgClassNameOverride,
  tilesNowNextTileTvMetaDataNowDescription3 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowTitle3 = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
  tilesNowNextTileTvMetaDataNowTitle4 = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
  tilesNowNextTileTvMetaDataNowProviderLogo2 = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png",
  tilesNowNextTileTvMetaDataNowDescription4 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowFadeClassName1,
  tilesNowNextTileTvMetaDataNowFade3 = "https://c.animaapp.com/pLg7BaBQ/img/fade-94.svg",
  tilesNowNextTileTvMetaDataNowFade4 = "https://c.animaapp.com/pLg7BaBQ/img/fade-95.svg",
  tilesNowNextTileTvMetaDataNowFadeClassName2,
  tilesNowNextTileTvMetaDataNowDescription5 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowTitle5 = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
  tilesNowNextTileTvMetaDataNowTitle6 = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
  tilesNowNextTileTvMetaDataNowProviderLogo3 = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png",
  tilesNowNextTileTvMetaDataNowDescription6 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowFadeClassName3,
  tilesNowNextTileTvMetaDataNowFade5 = "https://c.animaapp.com/pLg7BaBQ/img/fade-92.svg",
  tilesNowNextTileTvMetaDataNowFade6 = "https://c.animaapp.com/pLg7BaBQ/img/fade-93.svg",
  tilesNowNextTileTvMetaDataNowFadeClassName4,
  tilesNowNextTileTvMetaDataNowDescription7 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowTitle7 = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
  tilesNowNextTileTvMetaDataNowDescriptionClassName,
  tilesNowNextTileTvMetaDataNowTitle8 = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
  tilesNowNextTileTvMetaDataNowProviderLogo4 = "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-99@2x.png",
  tilesNowNextTileTvMetaDataNowProviderLogoClassName,
  tilesNowNextTileTvMetaDataNowDescriptionClassNameOverride,
  tilesNowNextTileTvMetaDataNowTitleClassName,
  tilesNowNextTileTvMetaDataNowFade7 = "https://c.animaapp.com/pLg7BaBQ/img/fade-91.svg",
  tilesNowNextTileTvMetaDataNowFadeClassName5,
  tilesNowNextTileTvMetaDataNowFadeClassName6,
  tilesNowNextTileTvMetaDataNowDescription8 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowFade8 = "https://c.animaapp.com/pLg7BaBQ/img/fade-90.svg",
  tilesNowNextTileTvMetaDataNowTitleClassNameOverride,
  tilesNowNextTileTvMetaDataNowDescription9 = "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
  tilesNowNextTileTvMetaDataNowTitle9 = "https://c.animaapp.com/pLg7BaBQ/img/title-102.svg",
}: Props): JSX.Element => {
  return (
    <div
      className={`now-next-rail scrolled-1-${scrolled} ${className}`}
      data-responsive-tokens-mode={!focus ? "TV" : undefined}
    >
      {!scrolled && (
        <div className={`tiles ${tilesClassName}`}>
          {!focus && (
            <>
              <>
                {leadTile && (
                  <TileLead
                    CTA="View all"
                    className="tile-lead-instance"
                    divClassName={tileLeadDivClassName}
                    focus={false}
                    railTitleClassName={tileLeadRailTitleClassName}
                    title={tileLeadTitle}
                    variant="one-hundred-and-sixty-nine"
                  />
                )}
              </>
            </>
          )}

          {focus && (
            <div className="lead-tiletv">
              <HighlightStandard
                className="highlight-standard-16"
                glintGlintClassName="highlight-standard-18"
                glintKFlare="https://c.animaapp.com/pLg7BaBQ/img/k-flare-48@2x.png"
                overlapGroupClassName="highlight-standard-17"
                strokeI="https://c.animaapp.com/pLg7BaBQ/img/stroke-i-20@2x.png"
                strokeIClassName="highlight-standard-20"
                strokeIi="https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-20@2x.png"
                strokeIiClassName="highlight-standard-19"
                tone="neutral"
              />
              <div className="rail-title-2">Title</div>
              <div className="text-wrapper-4">View all</div>
            </div>
          )}

          {visible && (
            <TilesNowNextTile
              TVMetaDataNowDescription="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowDescription1="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowFade={
                focus
                  ? "https://c.animaapp.com/pLg7BaBQ/img/fade-89.svg"
                  : "https://c.animaapp.com/pLg7BaBQ/img/fade-101.svg"
              }
              TVMetaDataNowFade1={
                focus
                  ? "https://c.animaapp.com/pLg7BaBQ/img/fade-88.svg"
                  : "https://c.animaapp.com/pLg7BaBQ/img/fade-100.svg"
              }
              TVMetaDataNowFadeClassName={`${focus ? "class-95" : "class-96"}`}
              TVMetaDataNowFadeClassNameOverride={`${focus ? "class-93" : "class-94"}`}
              TVMetaDataNowImg="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
              TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
              TVMetaDataNowProgressBarBrandProgressClassName="element-3"
              TVMetaDataNowProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png"
              TVMetaDataNowProviderLogoClassName="element"
              TVMetaDataNowTitle="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
              TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
              backgroundClassName={`${!focus && "element-4"}`}
              focus={false}
            />
          )}

          <TilesNowNextTile
            TVMetaDataNowDescription={tilesNowNextTileTvMetaDataNowDescription1}
            TVMetaDataNowDescription1={tilesNowNextTileTvMetaDataNowDescription}
            TVMetaDataNowFade={tilesNowNextTileTvMetaDataNowImg}
            TVMetaDataNowFade1={tilesNowNextTileTvMetaDataNowFade}
            TVMetaDataNowFadeClassName={tilesNowNextTileTvMetaDataNowFadeClassNameOverride}
            TVMetaDataNowFadeClassNameOverride={tilesNowNextTileTvMetaDataNowFadeClassName}
            TVMetaDataNowImg={tilesNowNextTileTvMetaDataNowTitle1}
            TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
            TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
            TVMetaDataNowProgressBarBrandProgressClassName="element-3"
            TVMetaDataNowProviderLogo={tilesNowNextTileTvMetaDataNowProviderLogo}
            TVMetaDataNowProviderLogoClassName="element"
            TVMetaDataNowTitle={tilesNowNextTileTvMetaDataNowTitle}
            TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
            TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
            focus={false}
          />
          <TilesNowNextTile
            TVMetaDataNowDescription={tilesNowNextTileTvMetaDataNowDescription3}
            TVMetaDataNowDescription1={tilesNowNextTileTvMetaDataNowDescription2}
            TVMetaDataNowFade={tilesNowNextTileTvMetaDataNowFade2}
            TVMetaDataNowFade1={tilesNowNextTileTvMetaDataNowFade1}
            TVMetaDataNowFadeClassName={tilesNowNextTileTvMetaDataNowImgClassNameOverride}
            TVMetaDataNowFadeClassNameOverride={tilesNowNextTileTvMetaDataNowImgClassName}
            TVMetaDataNowImg={tilesNowNextTileTvMetaDataNowTitle3}
            TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
            TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
            TVMetaDataNowProgressBarBrandProgressClassName="element-3"
            TVMetaDataNowProviderLogo={tilesNowNextTileTvMetaDataNowProviderLogo1}
            TVMetaDataNowProviderLogoClassName="element"
            TVMetaDataNowTitle={tilesNowNextTileTvMetaDataNowTitle2}
            TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
            TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
            focus={false}
          />
          <TilesNowNextTile
            TVMetaDataNowDescription={tilesNowNextTileTvMetaDataNowDescription5}
            TVMetaDataNowDescription1={tilesNowNextTileTvMetaDataNowDescription4}
            TVMetaDataNowFade={tilesNowNextTileTvMetaDataNowFade4}
            TVMetaDataNowFade1={tilesNowNextTileTvMetaDataNowFade3}
            TVMetaDataNowFadeClassName={tilesNowNextTileTvMetaDataNowFadeClassName2}
            TVMetaDataNowFadeClassNameOverride={tilesNowNextTileTvMetaDataNowFadeClassName1}
            TVMetaDataNowImg={tilesNowNextTileTvMetaDataNowTitle5}
            TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
            TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
            TVMetaDataNowProgressBarBrandProgressClassName="element-3"
            TVMetaDataNowProviderLogo={tilesNowNextTileTvMetaDataNowProviderLogo2}
            TVMetaDataNowProviderLogoClassName="element"
            TVMetaDataNowTitle={tilesNowNextTileTvMetaDataNowTitle4}
            TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
            TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
            focus={false}
          />
          <TilesNowNextTile
            TVMetaDataNowDescription={tilesNowNextTileTvMetaDataNowDescription7}
            TVMetaDataNowDescription1={tilesNowNextTileTvMetaDataNowDescription6}
            TVMetaDataNowFade={tilesNowNextTileTvMetaDataNowFade6}
            TVMetaDataNowFade1={tilesNowNextTileTvMetaDataNowFade5}
            TVMetaDataNowFadeClassName={tilesNowNextTileTvMetaDataNowFadeClassName4}
            TVMetaDataNowFadeClassNameOverride={tilesNowNextTileTvMetaDataNowFadeClassName3}
            TVMetaDataNowImg={tilesNowNextTileTvMetaDataNowTitle7}
            TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
            TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
            TVMetaDataNowProgressBarBrandProgressClassName="element-3"
            TVMetaDataNowProviderLogo={tilesNowNextTileTvMetaDataNowProviderLogo3}
            TVMetaDataNowProviderLogoClassName="element"
            TVMetaDataNowTitle={tilesNowNextTileTvMetaDataNowTitle6}
            TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
            TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
            focus={false}
          />
          <TilesNowNextTile
            TVMetaDataNowDescription={tilesNowNextTileTvMetaDataNowDescription9}
            TVMetaDataNowDescription1={tilesNowNextTileTvMetaDataNowDescription8}
            TVMetaDataNowDescriptionClassName={tilesNowNextTileTvMetaDataNowDescriptionClassNameOverride}
            TVMetaDataNowDescriptionClassNameOverride={tilesNowNextTileTvMetaDataNowDescriptionClassName}
            TVMetaDataNowFade={tilesNowNextTileTvMetaDataNowFade7}
            TVMetaDataNowFade1={tilesNowNextTileTvMetaDataNowFade8}
            TVMetaDataNowFadeClassName={tilesNowNextTileTvMetaDataNowFadeClassName6}
            TVMetaDataNowFadeClassNameOverride={tilesNowNextTileTvMetaDataNowFadeClassName5}
            TVMetaDataNowImg={tilesNowNextTileTvMetaDataNowTitle9}
            TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
            TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
            TVMetaDataNowProgressBarBrandProgressClassName="element-3"
            TVMetaDataNowProviderLogo={tilesNowNextTileTvMetaDataNowProviderLogo4}
            TVMetaDataNowProviderLogoClassName={tilesNowNextTileTvMetaDataNowProviderLogoClassName}
            TVMetaDataNowTitle={tilesNowNextTileTvMetaDataNowTitle8}
            TVMetaDataNowTitleClassName={tilesNowNextTileTvMetaDataNowTitleClassNameOverride}
            TVMetaDataNowTitleClassNameOverride={tilesNowNextTileTvMetaDataNowTitleClassName}
            focus={false}
          />
        </div>
      )}

      {scrolled && (
        <>
          <>{showTitle && <div className="rail-title-3">{railTitle}</div>}</>
          <div className="tiles-2">
            <TileLead
              CTA="View all"
              className="tile-lead-2"
              divClassName="tile-lead-4"
              focus={false}
              railTitleClassName="tile-lead-3"
              title="36 character max 2 lines"
              variant="one-hundred-and-sixty-nine"
            />
            <TilesNowNextTile
              TVMetaDataNowDescription2="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowDescription3="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowFade2="https://c.animaapp.com/pLg7BaBQ/img/fade-77.svg"
              TVMetaDataNowFade3="https://c.animaapp.com/pLg7BaBQ/img/fade-76.svg"
              TVMetaDataNowImgClassName="element-7"
              TVMetaDataNowImgClassNameOverride="element-8"
              TVMetaDataNowProgressBarBrandBarMoveUseClassNameOverride="element-6"
              TVMetaDataNowProgressBarBrandHeightSmallClassNameOverride="element-2"
              TVMetaDataNowProgressBarBrandProgressClassNameOverride="element-3"
              TVMetaDataNowTitle1="https://c.animaapp.com/pLg7BaBQ/img/title-78.svg"
              TVMetaDataNowTitle2="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              focus
              highlightStandardStrokeIi="https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-19@2x.png"
              highlightStandardToneNeutralClassName="element-5"
            />
            <TilesNowNextTile
              TVMetaDataNowDescription="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowDescription1="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowFade="https://c.animaapp.com/pLg7BaBQ/img/fade-75.svg"
              TVMetaDataNowFade1="https://c.animaapp.com/pLg7BaBQ/img/fade-74.svg"
              TVMetaDataNowFadeClassName="element-9"
              TVMetaDataNowFadeClassNameOverride="element-10"
              TVMetaDataNowImg="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
              TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
              TVMetaDataNowProgressBarBrandProgressClassName="element-3"
              TVMetaDataNowProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png"
              TVMetaDataNowProviderLogoClassName="element"
              TVMetaDataNowTitle="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
              TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
              backgroundClassName="element-4"
              focus={false}
            />
            <TilesNowNextTile
              TVMetaDataNowDescription="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowDescription1="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowFade="https://c.animaapp.com/pLg7BaBQ/img/fade-73.svg"
              TVMetaDataNowFade1="https://c.animaapp.com/pLg7BaBQ/img/fade-72.svg"
              TVMetaDataNowFadeClassName="element-11"
              TVMetaDataNowFadeClassNameOverride="element-12"
              TVMetaDataNowImg="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
              TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
              TVMetaDataNowProgressBarBrandProgressClassName="element-3"
              TVMetaDataNowProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png"
              TVMetaDataNowProviderLogoClassName="element"
              TVMetaDataNowTitle="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
              TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
              backgroundClassName="element-4"
              focus={false}
            />
            <TilesNowNextTile
              TVMetaDataNowDescription="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowDescription1="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowFade="https://c.animaapp.com/pLg7BaBQ/img/fade-71.svg"
              TVMetaDataNowFade1="https://c.animaapp.com/pLg7BaBQ/img/fade-70.svg"
              TVMetaDataNowFadeClassName="element-13"
              TVMetaDataNowFadeClassNameOverride="element-14"
              TVMetaDataNowImg="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
              TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
              TVMetaDataNowProgressBarBrandProgressClassName="element-3"
              TVMetaDataNowProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png"
              TVMetaDataNowProviderLogoClassName="element"
              TVMetaDataNowTitle="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
              TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
              backgroundClassName="element-4"
              focus={false}
            />
            <TilesNowNextTile
              TVMetaDataNowDescription="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowDescription1="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowFade="https://c.animaapp.com/pLg7BaBQ/img/fade-69.svg"
              TVMetaDataNowFade1="https://c.animaapp.com/pLg7BaBQ/img/fade-68.svg"
              TVMetaDataNowFadeClassName="element-15"
              TVMetaDataNowFadeClassNameOverride="element-16"
              TVMetaDataNowImg="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
              TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
              TVMetaDataNowProgressBarBrandProgressClassName="element-3"
              TVMetaDataNowProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png"
              TVMetaDataNowProviderLogoClassName="element"
              TVMetaDataNowTitle="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
              TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
              backgroundClassName="element-4"
              focus={false}
            />
            <TilesNowNextTile
              TVMetaDataNowDescription="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowDescription1="https://c.animaapp.com/pLg7BaBQ/img/description-147.svg"
              TVMetaDataNowFade="https://c.animaapp.com/pLg7BaBQ/img/fade-67.svg"
              TVMetaDataNowFade1="https://c.animaapp.com/pLg7BaBQ/img/fade-66.svg"
              TVMetaDataNowFadeClassName="element-17"
              TVMetaDataNowFadeClassNameOverride="element-18"
              TVMetaDataNowImg="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowProgressBarBrandBarMoveUseClassName="element-3"
              TVMetaDataNowProgressBarBrandHeightSmallClassName="element-2"
              TVMetaDataNowProgressBarBrandProgressClassName="element-3"
              TVMetaDataNowProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-104@2x.png"
              TVMetaDataNowProviderLogoClassName="element"
              TVMetaDataNowTitle="https://c.animaapp.com/pLg7BaBQ/img/title-102.svg"
              TVMetaDataNowTitleClassName="tiles-now-next-tile-instance"
              TVMetaDataNowTitleClassNameOverride="tiles-now-next-tile-instance"
              backgroundClassName="element-4"
              focus={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

NowNextRail.propTypes = {
  leadTile: PropTypes.bool,
  showTitle: PropTypes.bool,
  railTitle: PropTypes.string,
  scrolled: PropTypes.bool,
  focus: PropTypes.bool,
  tileLeadTitle: PropTypes.string,
  visible: PropTypes.bool,
  tilesNowNextTileTvMetaDataNowTitle: PropTypes.string,
  tilesNowNextTileTvMetaDataNowProviderLogo: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription: PropTypes.string,
  tilesNowNextTileTvMetaDataNowFade: PropTypes.string,
  tilesNowNextTileTvMetaDataNowImg: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription1: PropTypes.string,
  tilesNowNextTileTvMetaDataNowTitle1: PropTypes.string,
  tilesNowNextTileTvMetaDataNowTitle2: PropTypes.string,
  tilesNowNextTileTvMetaDataNowProviderLogo1: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription2: PropTypes.string,
  tilesNowNextTileTvMetaDataNowFade1: PropTypes.string,
  tilesNowNextTileTvMetaDataNowFade2: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription3: PropTypes.string,
  tilesNowNextTileTvMetaDataNowTitle3: PropTypes.string,
  tilesNowNextTileTvMetaDataNowTitle4: PropTypes.string,
  tilesNowNextTileTvMetaDataNowProviderLogo2: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription4: PropTypes.string,
  tilesNowNextTileTvMetaDataNowFade3: PropTypes.string,
  tilesNowNextTileTvMetaDataNowFade4: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription5: PropTypes.string,
  tilesNowNextTileTvMetaDataNowTitle5: PropTypes.string,
  tilesNowNextTileTvMetaDataNowTitle6: PropTypes.string,
  tilesNowNextTileTvMetaDataNowProviderLogo3: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription6: PropTypes.string,
  tilesNowNextTileTvMetaDataNowFade5: PropTypes.string,
  tilesNowNextTileTvMetaDataNowFade6: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription7: PropTypes.string,
  tilesNowNextTileTvMetaDataNowTitle7: PropTypes.string,
  tilesNowNextTileTvMetaDataNowTitle8: PropTypes.string,
  tilesNowNextTileTvMetaDataNowProviderLogo4: PropTypes.string,
  tilesNowNextTileTvMetaDataNowFade7: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription8: PropTypes.string,
  tilesNowNextTileTvMetaDataNowFade8: PropTypes.string,
  tilesNowNextTileTvMetaDataNowDescription9: PropTypes.string,
  tilesNowNextTileTvMetaDataNowTitle9: PropTypes.string,
};
