/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MyList23 } from "../../icons/MyList23";
import { MyList24 } from "../../icons/MyList24";
import { Star27 } from "../../icons/Star27";
import { Star28 } from "../../icons/Star28";
import { Star29 } from "../../icons/Star29";
import { Star30 } from "../../icons/Star30";
import { Accessibility } from "../Accessibility";
import { AgeRating } from "../AgeRating";
import { MasterSignpost } from "../MasterSignpost";
import { StarRating } from "../StarRating";
import { Status } from "../Status";
import { VideoQuality } from "../VideoQuality";
import "./style.css";

interface Props {
  startedAt: boolean;
  starRating: boolean;
  playlists: boolean;
  duration: boolean;
  badges: boolean;
  episode: boolean;
  status: boolean;
  className: any;
  episodeClassName: any;
  text: string;
  statusText: string;
  statusDivClassName: any;
  statusIcon: JSX.Element;
  durationClassName: any;
  ageRatingClassName: any;
  videoQualityClassName: any;
  accessibilityBadgeClassName: any;
  accessibilityBadgeClassNameOverride: any;
  starRatingIcon: JSX.Element;
  override: JSX.Element;
  starRatingIcon1: JSX.Element;
  starRatingIcon2: JSX.Element;
  starRating1: string;
  icon: JSX.Element;
  statusType: string;
}

export const MasterMetaSynopsis = ({
  startedAt = true,
  starRating = true,
  playlists = true,
  duration = true,
  badges = true,
  episode = true,
  status = true,
  className,
  episodeClassName,
  text = "S1:E1",
  statusText = "Added",
  statusDivClassName,
  statusIcon = <MyList23 className="my-list-23" />,
  durationClassName,
  ageRatingClassName,
  videoQualityClassName,
  accessibilityBadgeClassName,
  accessibilityBadgeClassNameOverride,
  starRatingIcon = <Star30 className="icon-instance-node" />,
  override = <Star29 className="icon-instance-node" />,
  starRatingIcon1 = <Star28 className="icon-instance-node" />,
  starRatingIcon2 = <Star27 className="icon-instance-node" />,
  starRating1 = "https://c.animaapp.com/pLg7BaBQ/img/empty-star-20.svg",
  icon = <MyList24 className="my-list-24" />,
  statusType = "default",
}: Props): JSX.Element => {
  return (
    <div className={`master-meta-synopsis ${className}`}>
      {playlists && (
        <div className="signposts">
          {icon}
          <MasterSignpost className="master-signpost-instance" />
          <MasterSignpost className="master-signpost-instance" />
          <MasterSignpost className="master-signpost-instance" />
          <MasterSignpost className="master-signpost-instance" />
          <MasterSignpost className="master-signpost-instance" />
          <MasterSignpost className="master-signpost-instance" />
        </div>
      )}

      {starRating && (
        <StarRating
          concreteComponentNodeEmptyStar={starRating1}
          concreteComponentNodeOverlapGroupClassName="star-rating-instance"
          icon={starRatingIcon}
          icon1={starRatingIcon1}
          icon2={starRatingIcon2}
          override={override}
          rating="forty-five"
        />
      )}

      {episode && <div className={`text-wrapper-2 ${episodeClassName}`}>{text}</div>}

      {duration && <div className={`text-wrapper-2 ${durationClassName}`}>58m</div>}

      {startedAt && <div className="text-wrapper-2">Started at</div>}

      {badges && (
        <div className="badges-2">
          <AgeRating
            cert="PG"
            className="design-component-instance-node"
            masterBadgeBadgeClassName={ageRatingClassName}
            region="UK"
          />
          <VideoQuality
            className="design-component-instance-node"
            format="HD"
            masterBadgeBadgeClassName={videoQualityClassName}
          />
          <Accessibility
            badgeClassName={accessibilityBadgeClassName}
            className="design-component-instance-node"
            type="subtitles"
          />
          <Accessibility
            badgeClassName={accessibilityBadgeClassNameOverride}
            className="design-component-instance-node"
            type="audio-description"
          />
        </div>
      )}

      {status && <Status divClassName={statusDivClassName} icon={statusIcon} text={statusText} type={statusType} />}
    </div>
  );
};

MasterMetaSynopsis.propTypes = {
  startedAt: PropTypes.bool,
  starRating: PropTypes.bool,
  playlists: PropTypes.bool,
  duration: PropTypes.bool,
  badges: PropTypes.bool,
  episode: PropTypes.bool,
  status: PropTypes.bool,
  text: PropTypes.string,
  statusText: PropTypes.string,
  starRating1: PropTypes.string,
  statusType: PropTypes.string,
};
