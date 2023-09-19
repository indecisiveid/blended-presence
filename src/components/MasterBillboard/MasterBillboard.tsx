/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MyList6 } from "../../icons/MyList6";
import { MetaTiles } from "../MetaTiles";
import "./style.css";

interface Props {
  className: any;
  overlapGroupClassName: any;
  metaTilesTypeMinimisedFocusClassName: any;
  metaTilesProgrammeTitleProgrammeTitle: string;
  metaTilesMetaSynopsisMasterMetaSynopsisStatusIcon: JSX.Element;
  metaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName: any;
  metaTilesProviderLogoProviderLogoClassName: any;
  metaTilesMetaSynopsisMasterMetaSynopsisStatusText: string;
  metaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName: any;
  metaTilesMetaSynopsisTypeMovieClassName: any;
  metaTilesProgrammeTitleProgrammeTitleClassName: any;
  metaTilesFocus: string;
}

export const MasterBillboard = ({
  className,
  overlapGroupClassName,
  metaTilesTypeMinimisedFocusClassName,
  metaTilesProgrammeTitleProgrammeTitle = "https://c.animaapp.com/pLg7BaBQ/img/programme-title-13.svg",
  metaTilesMetaSynopsisMasterMetaSynopsisStatusIcon = <MyList6 className="my-list-6" />,
  metaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName,
  metaTilesProviderLogoProviderLogoClassName,
  metaTilesMetaSynopsisMasterMetaSynopsisStatusText = "Added",
  metaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName,
  metaTilesMetaSynopsisTypeMovieClassName,
  metaTilesProgrammeTitleProgrammeTitleClassName,
  metaTilesFocus = "unfocused",
}: Props): JSX.Element => {
  return (
    <div className={`master-billboard ${className}`}>
      <div className={`meta-tiles-wrapper ${overlapGroupClassName}`}>
        <MetaTiles
          className={metaTilesTypeMinimisedFocusClassName}
          focus={metaTilesFocus}
          metaSynopsisMasterMetaSynopsisEpisodeClassName={metaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName}
          metaSynopsisMasterMetaSynopsisStatusDivClassName={metaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName}
          metaSynopsisMasterMetaSynopsisStatusIcon={metaTilesMetaSynopsisMasterMetaSynopsisStatusIcon}
          metaSynopsisMasterMetaSynopsisStatusText={metaTilesMetaSynopsisMasterMetaSynopsisStatusText}
          metaSynopsisTypeMovieClassName={metaTilesMetaSynopsisTypeMovieClassName}
          programmeTitleProgrammeTitle={metaTilesProgrammeTitleProgrammeTitle}
          programmeTitleProgrammeTitleClassName={metaTilesProgrammeTitleProgrammeTitleClassName}
          providerLogoProviderLogoClassName={metaTilesProviderLogoProviderLogoClassName}
          type="billboard"
        />
      </div>
    </div>
  );
};

MasterBillboard.propTypes = {
  metaTilesProgrammeTitleProgrammeTitle: PropTypes.string,
  metaTilesMetaSynopsisMasterMetaSynopsisStatusText: PropTypes.string,
  metaTilesFocus: PropTypes.string,
};
