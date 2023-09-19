/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MyList5 } from "../../icons/MyList5";
import { MasterMetaTile } from "../MasterMetaTile";
import { MetaSynopsis } from "../MetaSynopsis";
import { ProgrammeTitle } from "../ProgrammeTitle";
import { ProgressBar } from "../ProgressBar";
import { ProviderLogo } from "../ProviderLogo";
import "./style.css";

interface Props {
  type: "centered" | "billboard" | "series" | "minimised" | "standard" | "mini-guide" | "minimal";
  focus: "unfocused" | "focused";
  className: any;
  providerLogoProviderLogoClassName: any;
  programmeTitleProgrammeTitle: string;
  metaSynopsisMasterMetaSynopsisStatusText: string;
  metaSynopsisMasterMetaSynopsisStatusIcon: JSX.Element;
  metaSynopsisMasterMetaSynopsisEpisodeClassName: any;
  metaSynopsisMasterMetaSynopsisStatusDivClassName: any;
  metaSynopsisTypeMovieClassName: any;
  programmeTitleProgrammeTitleClassName: any;
  overlapClassName: any;
}

export const MetaTiles = ({
  type,
  focus,
  className,
  providerLogoProviderLogoClassName,
  programmeTitleProgrammeTitle = "https://c.animaapp.com/pLg7BaBQ/img/programme-title-6.svg",
  metaSynopsisMasterMetaSynopsisStatusText = "Added",
  metaSynopsisMasterMetaSynopsisStatusIcon = <MyList5 className="my-list-5" />,
  metaSynopsisMasterMetaSynopsisEpisodeClassName,
  metaSynopsisMasterMetaSynopsisStatusDivClassName,
  metaSynopsisTypeMovieClassName,
  programmeTitleProgrammeTitleClassName,
  overlapClassName,
}: Props): JSX.Element => {
  return (
    <div className={`meta-tiles type-${type} ${className}`}>
      {["minimised", "series", "standard"].includes(type) && (
        <MasterMetaTile
          className={`${
            focus === "focused" && ["minimised", "standard"].includes(type)
              ? "class-23"
              : focus === "unfocused" && type === "series"
              ? "class-24"
              : type === "series" && focus === "focused"
              ? "class-25"
              : "class-26"
          }`}
          divClassName={`${type === "standard" && focus === "focused" && "class-27"}`}
          programmeTitleProgrammeTitle={
            type === "minimised" && focus === "focused"
              ? "https://c.animaapp.com/pLg7BaBQ/img/programme-title-11.svg"
              : focus === "unfocused" && type === "standard"
              ? "https://c.animaapp.com/pLg7BaBQ/img/programme-title-10.svg"
              : type === "standard" && focus === "focused"
              ? "https://c.animaapp.com/pLg7BaBQ/img/programme-title-9.svg"
              : focus === "unfocused" && type === "series"
              ? "https://c.animaapp.com/pLg7BaBQ/img/programme-title-8.svg"
              : type === "series" && focus === "focused"
              ? "https://c.animaapp.com/pLg7BaBQ/img/programme-title-7.svg"
              : "https://c.animaapp.com/pLg7BaBQ/img/programme-title-12.svg"
          }
          progressBar={type === "minimised" ? false : undefined}
          progressBarClassName={`${focus === "focused" && ["series", "standard"].includes(type) && "class-19"} ${
            focus === "unfocused" && type === "series" && "class-20"
          }`}
          progressBarClassName1={`${focus === "focused" && ["series", "standard"].includes(type) && "class-28"} ${
            focus === "unfocused" && type === "series" && "class-29"
          }`}
          progressBarClassName2={`${focus === "focused" && ["series", "standard"].includes(type) && "class-28"} ${
            focus === "unfocused" && type === "series" && "class-29"
          }`}
          progressBarClassNameOverride={`${
            focus === "focused" && ["series", "standard"].includes(type) && "class-21"
          } ${focus === "unfocused" && type === "series" && "class-22"}`}
          providerLogo={type === "series" ? false : undefined}
          subline={["minimised", "series"].includes(type) ? false : undefined}
        />
      )}

      {["billboard", "centered", "mini-guide", "minimal"].includes(type) && (
        <div className={`overlap-16 type-0-${type} focus-0-${focus} ${overlapClassName}`}>
          {["mini-guide", "minimal"].includes(type) && (
            <div className="meta">
              {type === "mini-guide" && (
                <>
                  <ProviderLogo className="provider-logo-4" />
                  <ProgressBar
                    className="progress-bar-2"
                    fill="fifty"
                    fillColour="primary"
                    progressBarMasterElementClassName="progress-bar-5"
                    progressBarMasterFillClassName="progress-bar-3"
                    progressBarMasterOverlapGroupClassName="progress-bar-4"
                    progressBarMasterProgressBarMasterClassName="progress-bar-5"
                  />
                </>
              )}

              {type === "minimal" && <>Subline</>}
            </div>
          )}

          {type === "billboard" && (
            <>
              <ProviderLogo className={providerLogoProviderLogoClassName} />
              <div className="title-subline-wrapper">
                <div className="title-subline-2">
                  <ProgrammeTitle
                    className={programmeTitleProgrammeTitleClassName}
                    programmeTitle={programmeTitleProgrammeTitle}
                  />
                  <MetaSynopsis
                    className={metaSynopsisTypeMovieClassName}
                    masterMetaSynopsisBadges={false}
                    masterMetaSynopsisDuration={false}
                    masterMetaSynopsisEpisodeClassName={metaSynopsisMasterMetaSynopsisEpisodeClassName}
                    masterMetaSynopsisStatusDivClassName={metaSynopsisMasterMetaSynopsisStatusDivClassName}
                    masterMetaSynopsisStatusIcon={metaSynopsisMasterMetaSynopsisStatusIcon}
                    masterMetaSynopsisStatusText={metaSynopsisMasterMetaSynopsisStatusText}
                    masterMetaSynopsisStatusType="default"
                    masterMetaSynopsisText="Watch all episodes"
                    type="catch-up"
                  />
                </div>
              </div>
            </>
          )}

          {type === "centered" && <>HDMI 1</>}
        </div>
      )}
    </div>
  );
};

MetaTiles.propTypes = {
  type: PropTypes.oneOf(["centered", "billboard", "series", "minimised", "standard", "mini-guide", "minimal"]),
  focus: PropTypes.oneOf(["unfocused", "focused"]),
  programmeTitleProgrammeTitle: PropTypes.string,
  metaSynopsisMasterMetaSynopsisStatusText: PropTypes.string,
};
