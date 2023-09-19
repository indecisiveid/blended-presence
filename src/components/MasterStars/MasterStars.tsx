/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Star } from "../../icons/Star";
import { Star1 } from "../../icons/Star1";
import { Star2 } from "../../icons/Star2";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import "./style.css";

interface Props {
  icon: JSX.Element;
  override: JSX.Element;
  icon1: JSX.Element;
  concreteComponentNodeEmptyStar: string;
  concreteComponentNodeImg: string;
  concreteComponentNodeOverlapGroupClassName: any;
}

export const MasterStars = ({
  icon = <Star2 className="star-7" />,
  override = <Star1 className="star-7" />,
  icon1 = <Star className="star-7" />,
  concreteComponentNodeEmptyStar = "https://c.animaapp.com/pLg7BaBQ/img/empty-star-3.svg",
  concreteComponentNodeImg = "https://c.animaapp.com/pLg7BaBQ/img/empty-star-2.svg",
  concreteComponentNodeOverlapGroupClassName,
}: Props): JSX.Element => {
  return (
    <div className="master-stars">
      {icon}
      {override}
      {icon1}
      <div className="overlap-wrapper">
        <div className="overlap-3">
          <ConcreteComponentNode
            emptyStar={concreteComponentNodeEmptyStar}
            emptyStarClassName="star-5"
            overlapGroupClassName="star-4"
            star="empty"
            starEmptyClassName="star-instance"
          />
          <img className="half-star-2" alt="Half star" src="https://c.animaapp.com/pLg7BaBQ/img/half-star-7.svg" />
        </div>
      </div>
      <ConcreteComponentNode
        emptyStar={concreteComponentNodeImg}
        emptyStarClassName="star-5"
        overlapGroupClassName={concreteComponentNodeOverlapGroupClassName}
        star="empty"
        starEmptyClassName="star-6"
      />
    </div>
  );
};

MasterStars.propTypes = {
  concreteComponentNodeEmptyStar: PropTypes.string,
  concreteComponentNodeImg: PropTypes.string,
};
