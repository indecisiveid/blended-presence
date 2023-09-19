/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ProgrammeTitle } from "../ProgrammeTitle";
import { ProgressBar } from "../ProgressBar";
import { ProviderLogo } from "../ProviderLogo";
import "./style.css";

interface Props {
  metaSynopsis: boolean;
  providerLogo: boolean;
  subline: boolean;
  progressBar: boolean;
  className: any;
  programmeTitleProgrammeTitle: string;
  divClassName: any;
  progressBarClassName: any;
  progressBarClassNameOverride: any;
  progressBarClassName1: any;
  progressBarClassName2: any;
}

export const MasterMetaTile = ({
  metaSynopsis = false,
  providerLogo = true,
  subline = true,
  progressBar = true,
  className,
  programmeTitleProgrammeTitle = "https://c.animaapp.com/pLg7BaBQ/img/programme-title-4.svg",
  divClassName,
  progressBarClassName,
  progressBarClassNameOverride,
  progressBarClassName1,
  progressBarClassName2,
}: Props): JSX.Element => {
  return (
    <div className={`master-meta-tile ${className}`}>
      {providerLogo && <ProviderLogo className="provider-logo-instance" />}

      <div className="meta-group">
        <div className="title-subline">
          <ProgrammeTitle className="programme-title-instance" programmeTitle={programmeTitleProgrammeTitle} />
          {subline && <div className={`text-wrapper-3 ${divClassName}`}>Subline</div>}
        </div>
        {progressBar && (
          <ProgressBar
            className="progress-bar-instance"
            fill="fifty"
            fillColour="primary"
            progressBarMasterElementClassName={progressBarClassName2}
            progressBarMasterFillClassName={progressBarClassName}
            progressBarMasterOverlapGroupClassName={progressBarClassNameOverride}
            progressBarMasterProgressBarMasterClassName={progressBarClassName1}
          />
        )}
      </div>
    </div>
  );
};

MasterMetaTile.propTypes = {
  metaSynopsis: PropTypes.bool,
  providerLogo: PropTypes.bool,
  subline: PropTypes.bool,
  progressBar: PropTypes.bool,
  programmeTitleProgrammeTitle: PropTypes.string,
};
