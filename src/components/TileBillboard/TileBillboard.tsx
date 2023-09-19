/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MyList10 } from "../../icons/MyList10";
import { FocusUnfocusedWrapper } from "../FocusUnfocusedWrapper";
import "./style.css";

interface Props {
  focus: "unfocused" | "focused";
  className: any;
  focusUnfocusedWrapperMasterBillboardMetaTilesProgrammeTitleProgrammeTitle: string;
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusIcon: JSX.Element;
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText: string;
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName: any;
  focusUnfocusedWrapperMasterBillboardMasterBillboardClassName: any;
  focusUnfocusedWrapperMasterBillboardOverlapGroupClassName: any;
  focusUnfocusedWrapperMasterBillboardMetaTilesProviderLogoProviderLogoClassName: any;
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName: any;
  focusUnfocusedWrapperMasterBillboardMetaTilesTypeMinimisedFocusClassName: any;
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisTypeMovieClassName: any;
}

export const TileBillboard = ({
  focus,
  className,
  focusUnfocusedWrapperMasterBillboardMetaTilesProgrammeTitleProgrammeTitle = "https://c.animaapp.com/pLg7BaBQ/img/programme-title-17.svg",
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusIcon = (
    <MyList10 className="my-list-10" />
  ),
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText = "Added",
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName,
  focusUnfocusedWrapperMasterBillboardMasterBillboardClassName,
  focusUnfocusedWrapperMasterBillboardOverlapGroupClassName,
  focusUnfocusedWrapperMasterBillboardMetaTilesProviderLogoProviderLogoClassName,
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName,
  focusUnfocusedWrapperMasterBillboardMetaTilesTypeMinimisedFocusClassName,
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisTypeMovieClassName,
}: Props): JSX.Element => {
  return (
    <div className={`tile-billboard focus-2-${focus} ${className}`}>
      <FocusUnfocusedWrapper
        className={`${focus === "focused" && "class-30"}`}
        focus={focus === "focused" ? "focused" : "unfocused"}
        highlightClassName={`${focus === "focused" && "class-31"}`}
        masterBillboardMasterBillboardClassName={focusUnfocusedWrapperMasterBillboardMasterBillboardClassName}
        masterBillboardMetaTilesFocus={focus === "focused" ? "focused" : "unfocused"}
        masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName={
          focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName
        }
        masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName={
          focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName
        }
        masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusIcon={
          focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusIcon
        }
        masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText={
          focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText
        }
        masterBillboardMetaTilesMetaSynopsisTypeMovieClassName={
          focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisTypeMovieClassName
        }
        masterBillboardMetaTilesProgrammeTitleProgrammeTitle={
          focusUnfocusedWrapperMasterBillboardMetaTilesProgrammeTitleProgrammeTitle
        }
        masterBillboardMetaTilesProviderLogoProviderLogoClassName={
          focusUnfocusedWrapperMasterBillboardMetaTilesProviderLogoProviderLogoClassName
        }
        masterBillboardMetaTilesTypeMinimisedFocusClassName={
          focusUnfocusedWrapperMasterBillboardMetaTilesTypeMinimisedFocusClassName
        }
        masterBillboardOverlapGroupClassName={focusUnfocusedWrapperMasterBillboardOverlapGroupClassName}
        overlapClassName={`${focus === "focused" && "class-33"}`}
        tokenHighlightClassName={`${focus === "focused" && "class-32"}`}
      />
    </div>
  );
};

TileBillboard.propTypes = {
  focus: PropTypes.oneOf(["unfocused", "focused"]),
  focusUnfocusedWrapperMasterBillboardMetaTilesProgrammeTitleProgrammeTitle: PropTypes.string,
  focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText: PropTypes.string,
};
