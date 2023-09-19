/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Star10 } from "../../icons/Star10";
import { Star11 } from "../../icons/Star11";
import { Star16 } from "../../icons/Star16";
import { Star17 } from "../../icons/Star17";
import { Star18 } from "../../icons/Star18";
import { Star3 } from "../../icons/Star3";
import { Star8 } from "../../icons/Star8";
import { Star9 } from "../../icons/Star9";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import { MasterStars } from "../MasterStars";
import "./style.css";

interface Props {
  rating: "twenty-five" | "forty-five" | "thirty-five" | "two" | "fifteen" | "three" | "four" | "five";
  icon: JSX.Element;
  override: JSX.Element;
  icon1: JSX.Element;
  icon2: JSX.Element;
  concreteComponentNodeEmptyStar: string;
  concreteComponentNodeOverlapGroupClassName: any;
}

export const StarRating = ({
  rating,
  icon = <Star11 className="star-13" />,
  override = <Star10 className="star-13" />,
  icon1 = <Star9 className="star-13" />,
  icon2 = <Star8 className="star-13" />,
  concreteComponentNodeEmptyStar = "https://c.animaapp.com/pLg7BaBQ/img/empty-star-21.svg",
  concreteComponentNodeOverlapGroupClassName,
}: Props): JSX.Element => {
  return (
    <div className="star-rating">
      {(rating === "fifteen" ||
        rating === "five" ||
        rating === "forty-five" ||
        rating === "four" ||
        rating === "three" ||
        rating === "twenty-five" ||
        rating === "two") && (
        <div className="master-stars-2">
          {icon}

          {["five", "forty-five", "four", "three", "twenty-five", "two"].includes(rating) && <>{override}</>}

          {["fifteen", "twenty-five"].includes(rating) && (
            <div className="star-8">
              <div className="overlap-4">
                <ConcreteComponentNode
                  emptyStar="https://c.animaapp.com/pLg7BaBQ/img/empty-star-21.svg"
                  emptyStarClassName="star-11"
                  overlapGroupClassName="star-10"
                  star="empty"
                  starEmptyClassName="star-9"
                />
                <img
                  className="half-star-3"
                  alt="Half star"
                  src="https://c.animaapp.com/pLg7BaBQ/img/half-star-7.svg"
                />
              </div>
            </div>
          )}

          {rating === "twenty-five" && (
            <>
              {icon2}
              <ConcreteComponentNode
                emptyStar="https://c.animaapp.com/pLg7BaBQ/img/empty-star-18.svg"
                emptyStarClassName="star-11"
                overlapGroupClassName="instance-node-2"
                star="empty"
                starEmptyClassName="star-12"
              />
            </>
          )}

          {["fifteen", "five", "forty-five", "four", "three", "two"].includes(rating) && (
            <>
              {icon1}
              {icon2}
            </>
          )}

          {rating === "forty-five" && (
            <div className="star-8">
              <div className="overlap-4">
                <ConcreteComponentNode
                  emptyStar={concreteComponentNodeEmptyStar}
                  emptyStarClassName="star-11"
                  overlapGroupClassName={concreteComponentNodeOverlapGroupClassName}
                  star="empty"
                  starEmptyClassName="star-9"
                />
                <img
                  className="half-star-3"
                  alt="Half star"
                  src="https://c.animaapp.com/pLg7BaBQ/img/half-star-7.svg"
                />
              </div>
            </div>
          )}

          {rating === "five" && <Star3 className="star-3-instance" />}

          {["fifteen", "four", "three", "two"].includes(rating) && (
            <ConcreteComponentNode
              emptyStar="https://c.animaapp.com/pLg7BaBQ/img/empty-star-18.svg"
              emptyStarClassName="star-11"
              overlapGroupClassName="instance-node-2"
              star="empty"
              starEmptyClassName="star-12"
            />
          )}
        </div>
      )}

      {rating === "thirty-five" && (
        <MasterStars
          concreteComponentNodeEmptyStar="https://c.animaapp.com/pLg7BaBQ/img/empty-star-21.svg"
          concreteComponentNodeImg="https://c.animaapp.com/pLg7BaBQ/img/empty-star-18.svg"
          concreteComponentNodeOverlapGroupClassName="instance-node-2"
          icon={<Star18 className="star-13" />}
          icon1={<Star16 className="star-13" />}
          override={<Star17 className="star-13" />}
        />
      )}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.oneOf(["twenty-five", "forty-five", "thirty-five", "two", "fifteen", "three", "four", "five"]),
  concreteComponentNodeEmptyStar: PropTypes.string,
};
