/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MyList8 } from "../../icons/MyList8";
import { ElementsDimmer } from "../ElementsDimmer";
import { MasterBillboard } from "../MasterBillboard";
import "./style.css";

interface Props {
  focus: "unfocused" | "focused";
  masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName: any;
  masterBillboardMetaTilesProviderLogoProviderLogoClassName: any;
  masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText: string;
  masterBillboardOverlapGroupClassName: any;
  masterBillboardMetaTilesProgrammeTitleProgrammeTitle: string;
  masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName: any;
  masterBillboardMasterBillboardClassName: any;
  masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusIcon: JSX.Element;
  masterBillboardMetaTilesFocus: string;
  className: any;
  overlapClassName: any;
  masterBillboardMetaTilesMetaSynopsisTypeMovieClassName: any;
  masterBillboardMetaTilesTypeMinimisedFocusClassName: any;
  highlightClassName: any;
  tokenHighlightClassName: any;
}

export const FocusUnfocusedWrapper = ({
  focus,
  masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName,
  masterBillboardMetaTilesProviderLogoProviderLogoClassName,
  masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText = "Added",
  masterBillboardOverlapGroupClassName,
  masterBillboardMetaTilesProgrammeTitleProgrammeTitle = "https://c.animaapp.com/pLg7BaBQ/img/programme-title-15.svg",
  masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName,
  masterBillboardMasterBillboardClassName,
  masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusIcon = <MyList8 className="my-list-8" />,
  masterBillboardMetaTilesFocus,
  className,
  overlapClassName,
  masterBillboardMetaTilesMetaSynopsisTypeMovieClassName,
  masterBillboardMetaTilesTypeMinimisedFocusClassName,
  highlightClassName,
  tokenHighlightClassName,
}: Props): JSX.Element => {
  return (
    <div className={`focus-unfocused-wrapper ${className}`}>
      <div className={`overlap-2 ${overlapClassName}`}>
        <MasterBillboard
          className={masterBillboardMasterBillboardClassName}
          metaTilesFocus={masterBillboardMetaTilesFocus}
          metaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName={
            masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName
          }
          metaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName={
            masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName
          }
          metaTilesMetaSynopsisMasterMetaSynopsisStatusIcon={
            masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusIcon
          }
          metaTilesMetaSynopsisMasterMetaSynopsisStatusText={
            masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText
          }
          metaTilesMetaSynopsisTypeMovieClassName={masterBillboardMetaTilesMetaSynopsisTypeMovieClassName}
          metaTilesProgrammeTitleProgrammeTitle={masterBillboardMetaTilesProgrammeTitleProgrammeTitle}
          metaTilesProgrammeTitleProgrammeTitleClassName="master-billboard-tile"
          metaTilesProviderLogoProviderLogoClassName={masterBillboardMetaTilesProviderLogoProviderLogoClassName}
          metaTilesTypeMinimisedFocusClassName={masterBillboardMetaTilesTypeMinimisedFocusClassName}
          overlapGroupClassName={masterBillboardOverlapGroupClassName}
        />
        {focus === "unfocused" && <ElementsDimmer className="elements-dimmer-instance" />}

        {focus === "focused" && (
          <div className={`token-highlight-wrapper ${highlightClassName}`}>
            <div className={`glint-wrapper ${tokenHighlightClassName}`}>
              <div className="glint-2">
                <div className="img-wrapper">
                  <img
                    className="k-flare-3"
                    alt="K flare"
                    src="https://c.animaapp.com/pLg7BaBQ/img/k-flare-25@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

FocusUnfocusedWrapper.propTypes = {
  focus: PropTypes.oneOf(["unfocused", "focused"]),
  masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText: PropTypes.string,
  masterBillboardMetaTilesProgrammeTitleProgrammeTitle: PropTypes.string,
  masterBillboardMetaTilesFocus: PropTypes.string,
};
