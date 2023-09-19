/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Badge } from "../Badge";
import { RtAudienceScore } from "../RtAudienceScore";
import { RtTomatometerFresh } from "../RtTomatometerFresh";
import "./style.css";

interface Props {
  duration: string;
  startsAt: string;
  s: string;
  criticsScore: string;
  audienceScore: string;
  startedAt: string;
  airdate: string;
  stringOptions: "started-at" | "finished" | "starts-at";
  variant: "episodes" | "movie-program";
  className: any;
}

export const DetailsTvLinear = ({
  duration = "30m",
  startsAt = "Starts at 9:00pm",
  s = "S#:E#",
  criticsScore = "76%",
  audienceScore = "92%",
  startedAt = "Started at 9:00pm",
  airdate = "2020",
  stringOptions,
  variant,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`details-TV-linear ${className}`}>
      <div className={`description-5 ${variant}`}>
        <div className="div-2">
          {variant === "episodes" && <>{s}</>}

          {stringOptions === "finished" && variant === "movie-program" && <>Finished</>}

          {variant === "movie-program" && stringOptions === "started-at" && <>{startedAt}</>}

          {variant === "movie-program" && stringOptions === "starts-at" && <>{startsAt}</>}
        </div>
        <div className="div-2">·</div>
        <div className="div-2">
          {variant === "movie-program" && <>{airdate}</>}

          {stringOptions === "started-at" && variant === "episodes" && <>{startedAt}</>}

          {stringOptions === "starts-at" && variant === "episodes" && <>{startsAt}</>}

          {stringOptions === "finished" && variant === "episodes" && <>Finished</>}
        </div>
        {variant === "episodes" && (
          <>
            <div className="div-2">·</div>
            <div className="div-2">{duration}</div>
            <div className="div-2">·</div>
            <div className="div-2">{airdate}</div>
          </>
        )}
      </div>
      <div className={`badges-3 variant-${variant} ${stringOptions}`}>
        <Badge className="badge-instance" text={variant === "episodes" ? "TV–14" : "R"} variant="label" />
        <Badge className="badge-instance" text="HD" variant="label" />
        <Badge className="badge-instance" text="CC" variant="label" />
      </div>
      {variant === "movie-program" && (
        <div className={`rating string-options-${stringOptions}`}>
          {["started-at", "starts-at"].includes(stringOptions) && (
            <>
              <RtTomatometerFresh />
              <div className="div-2">{criticsScore}</div>
            </>
          )}

          {stringOptions === "finished" && (
            <>
              <div className="rating-2">
                <RtTomatometerFresh />
                <div className="div-2">{criticsScore}</div>
              </div>
              <div className="rating-2">
                <RtAudienceScore />
                <div className="div-2">{audienceScore}</div>
              </div>
            </>
          )}
        </div>
      )}

      {variant === "movie-program" && ["started-at", "starts-at"].includes(stringOptions) && (
        <div className="rating-2">
          <RtAudienceScore />
          <div className="div-2">{audienceScore}</div>
        </div>
      )}
    </div>
  );
};

DetailsTvLinear.propTypes = {
  duration: PropTypes.string,
  startsAt: PropTypes.string,
  s: PropTypes.string,
  criticsScore: PropTypes.string,
  audienceScore: PropTypes.string,
  startedAt: PropTypes.string,
  airdate: PropTypes.string,
  stringOptions: PropTypes.oneOf(["started-at", "finished", "starts-at"]),
  variant: PropTypes.oneOf(["episodes", "movie-program"]),
};
