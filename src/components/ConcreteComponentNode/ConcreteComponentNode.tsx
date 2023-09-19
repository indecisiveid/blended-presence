/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StarFull } from "../../icons/StarFull";
import "./style.css";

interface Props {
  star: "full" | "empty" | "half";
  starEmptyClassName: any;
  overlapGroupClassName: any;
  emptyStarClassName: any;
  emptyStar: string;
}

export const ConcreteComponentNode = ({
  star,
  starEmptyClassName,
  overlapGroupClassName,
  emptyStarClassName,
  emptyStar = "https://c.animaapp.com/pLg7BaBQ/img/empty-star-1.svg",
}: Props): JSX.Element => {
  return (
    <>
      {star === "full" && <StarFull className="star-full" />}

      {["empty", "half"].includes(star) && (
        <div className={`concrete-component-node ${starEmptyClassName}`}>
          <div className={`overlap-group-10 ${star} ${overlapGroupClassName}`}>
            {star === "empty" && (
              <img className={`empty-star ${emptyStarClassName}`} alt="Empty star" src={emptyStar} />
            )}

            {star === "half" && (
              <>
                <div className="star-3">
                  <div className="empty-star-wrapper">
                    <img
                      className="empty-star"
                      alt="Empty star"
                      src="https://c.animaapp.com/pLg7BaBQ/img/empty-star.svg"
                    />
                  </div>
                </div>
                <img className="half-star" alt="Half star" src="https://c.animaapp.com/pLg7BaBQ/img/half-star.svg" />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  star: PropTypes.oneOf(["full", "empty", "half"]),
  emptyStar: PropTypes.string,
};
