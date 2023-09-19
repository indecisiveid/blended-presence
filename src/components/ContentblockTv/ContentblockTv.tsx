/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DetailsTvLinear } from "../DetailsTvLinear";
import { TitleOptionsTv } from "../TitleOptionsTv";
import "./style.css";

interface Props {
  description: string;
  callout: string;
  description1: boolean;
  details: boolean;
  providerRow: boolean;
  callout1: boolean;
  feature: "lozenge" | "default";
  className: any;
  providerRowClassName: any;
  calloutClassName: any;
  hasDivider: boolean;
  providerLogo: string;
  titleOptionsTvDivClassName: any;
  titleOptionsTvProgramTitle: string;
  descriptionClassName: any;
  override: JSX.Element;
}

export const ContentblockTv = ({
  description = "Description 215 max characters: met dol consectetur adipiscing elit quisque enim eros, tut magn elementummet dol consectetur adipiscing elit quisque enim eros, ",
  callout = "Callout",
  description1 = true,
  details = true,
  providerRow = true,
  callout1 = true,
  feature,
  className,
  providerRowClassName,
  calloutClassName,
  hasDivider = true,
  providerLogo = "https://c.animaapp.com/pLg7BaBQ/img/providerlogo-1@2x.png",
  titleOptionsTvDivClassName,
  titleOptionsTvProgramTitle = "Program title one line",
  descriptionClassName,
  override = (
    <DetailsTvLinear
      airdate="2020"
      audienceScore="92%"
      className="details-TV-linear-instance"
      criticsScore="76%"
      startedAt="Started at 9:00pm"
      stringOptions="started-at"
      variant="movie-program"
    />
  ),
}: Props): JSX.Element => {
  return (
    <div className={`contentblock-TV ${className}`} data-responsive-tokens-mode="TV">
      {feature === "default" && (
        <>
          <>
            {providerRow && (
              <div className={`provider-row ${providerRowClassName}`}>
                {callout1 && (
                  <div className="callout">
                    <div className={`div ${calloutClassName}`}>{callout}</div>
                    {hasDivider && (
                      <img className="divider" alt="Divider" src="https://c.animaapp.com/pLg7BaBQ/img/divider.svg" />
                    )}
                  </div>
                )}

                <img className="img" alt="Provider logo" src={providerLogo} />
              </div>
            )}
          </>
        </>
      )}

      <TitleOptionsTv
        className="title-options-TV-title"
        divClassName={`${feature === "lozenge" ? "class-3" : titleOptionsTvDivClassName}`}
        programTitle={feature === "lozenge" ? "Program title one line" : titleOptionsTvProgramTitle}
      />
      {feature === "default" && (
        <div className="content">
          {description1 && (
            <div className="description">
              {description1 && <p className={`p ${descriptionClassName}`}>{description}</p>}
            </div>
          )}

          {details && <>{override}</>}
        </div>
      )}

      {feature === "lozenge" && (
        <>
          <>
            {description1 && (
              <div className="content">
                <div className="description">{description1 && <p className="p">{description}</p>}</div>
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};

ContentblockTv.propTypes = {
  description: PropTypes.string,
  callout: PropTypes.string,
  description1: PropTypes.bool,
  details: PropTypes.bool,
  providerRow: PropTypes.bool,
  callout1: PropTypes.bool,
  feature: PropTypes.oneOf(["lozenge", "default"]),
  hasDivider: PropTypes.bool,
  providerLogo: PropTypes.string,
  titleOptionsTvProgramTitle: PropTypes.string,
};
