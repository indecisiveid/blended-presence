/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MyList25 } from "../../icons/MyList25";
import { MyList26 } from "../../icons/MyList26";
import { Star31 } from "../../icons/Star31";
import { Star32 } from "../../icons/Star32";
import { Star33 } from "../../icons/Star33";
import { Star34 } from "../../icons/Star34";
import { MasterMetaSynopsis } from "../MasterMetaSynopsis";
import "./style.css";

interface Props {
  type: "playlist" | "catch-up" | "movie";
  className: any;
  masterMetaSynopsisEpisodeClassName: any;
  masterMetaSynopsisText: string;
  masterMetaSynopsisDuration: boolean;
  masterMetaSynopsisStatusIcon: JSX.Element;
  masterMetaSynopsisStatusText: string;
  masterMetaSynopsisBadges: boolean;
  masterMetaSynopsisStatusDivClassName: any;
  masterMetaSynopsisEpisode: boolean;
  masterMetaSynopsisDurationClassName: any;
  masterMetaSynopsisVideoQualityClassName: any;
  masterMetaSynopsisAccessibilityBadgeClassName: any;
  masterMetaSynopsisAccessibilityBadgeClassNameOverride: any;
  masterMetaSynopsisAgeRatingClassName: any;
  masterMetaSynopsisStatusType: string;
}

export const MetaSynopsis = ({
  type,
  className,
  masterMetaSynopsisEpisodeClassName,
  masterMetaSynopsisText = "S1:E1",
  masterMetaSynopsisDuration,
  masterMetaSynopsisStatusIcon = <MyList26 className="my-list-26" />,
  masterMetaSynopsisStatusText = "Added",
  masterMetaSynopsisBadges,
  masterMetaSynopsisStatusDivClassName,
  masterMetaSynopsisEpisode,
  masterMetaSynopsisDurationClassName,
  masterMetaSynopsisVideoQualityClassName,
  masterMetaSynopsisAccessibilityBadgeClassName,
  masterMetaSynopsisAccessibilityBadgeClassNameOverride,
  masterMetaSynopsisAgeRatingClassName,
  masterMetaSynopsisStatusType,
}: Props): JSX.Element => {
  return (
    <div className={`meta-synopsis ${className}`}>
      <MasterMetaSynopsis
        accessibilityBadgeClassName={masterMetaSynopsisAccessibilityBadgeClassNameOverride}
        accessibilityBadgeClassNameOverride={masterMetaSynopsisAccessibilityBadgeClassName}
        ageRatingClassName={masterMetaSynopsisAgeRatingClassName}
        badges={masterMetaSynopsisBadges}
        className={`${type === "playlist" ? "class-17" : "class-18"}`}
        duration={masterMetaSynopsisDuration}
        durationClassName={masterMetaSynopsisDurationClassName}
        episode={masterMetaSynopsisEpisode}
        episodeClassName={masterMetaSynopsisEpisodeClassName}
        icon={type === "playlist" ? <MyList25 className="my-list-25" /> : undefined}
        override={type === "movie" ? <Star33 className="star-2" /> : undefined}
        playlists={["catch-up", "movie"].includes(type) ? false : undefined}
        starRating={["catch-up", "playlist"].includes(type) ? false : undefined}
        starRating1={type === "movie" ? "https://c.animaapp.com/pLg7BaBQ/img/empty-star-21.svg" : undefined}
        starRatingIcon={type === "movie" ? <Star34 className="star-2" /> : undefined}
        starRatingIcon1={type === "movie" ? <Star32 className="star-2" /> : undefined}
        starRatingIcon2={type === "movie" ? <Star31 className="star-2" /> : undefined}
        startedAt={false}
        status={type === "movie" ? false : undefined}
        statusDivClassName={masterMetaSynopsisStatusDivClassName}
        statusIcon={masterMetaSynopsisStatusIcon}
        statusText={masterMetaSynopsisStatusText}
        statusType={masterMetaSynopsisStatusType}
        text={masterMetaSynopsisText}
        videoQualityClassName={masterMetaSynopsisVideoQualityClassName}
      />
    </div>
  );
};

MetaSynopsis.propTypes = {
  type: PropTypes.oneOf(["playlist", "catch-up", "movie"]),
  masterMetaSynopsisText: PropTypes.string,
  masterMetaSynopsisDuration: PropTypes.bool,
  masterMetaSynopsisStatusText: PropTypes.string,
  masterMetaSynopsisBadges: PropTypes.bool,
  masterMetaSynopsisEpisode: PropTypes.bool,
  masterMetaSynopsisStatusType: PropTypes.string,
};
