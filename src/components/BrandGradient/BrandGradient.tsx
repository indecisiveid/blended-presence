/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  position: "seven" | "two" | "three" | "four" | "one" | "five" | "eight" | "six";
  className: any;
  img: string;
  position1: string;
  position2: string;
}

export const BrandGradient = ({
  position,
  className,
  img = "https://c.animaapp.com/pLg7BaBQ/img/position-5.svg",
  position1 = "https://c.animaapp.com/pLg7BaBQ/img/position-6.svg",
  position2 = "https://c.animaapp.com/pLg7BaBQ/img/position-1.svg",
}: Props): JSX.Element => {
  return (
    <img
      className={`brand-gradient ${className}`}
      alt="Position"
      src={
        position === "two"
          ? "https://c.animaapp.com/pLg7BaBQ/img/position-2.svg"
          : position === "three"
          ? "https://c.animaapp.com/pLg7BaBQ/img/position-3.svg"
          : position === "four"
          ? "https://c.animaapp.com/pLg7BaBQ/img/position-4.svg"
          : position === "five"
          ? img
          : position === "six"
          ? position1
          : position === "seven"
          ? "https://c.animaapp.com/pLg7BaBQ/img/position-7.svg"
          : position === "eight"
          ? "https://c.animaapp.com/pLg7BaBQ/img/position-8.svg"
          : position2
      }
    />
  );
};

BrandGradient.propTypes = {
  position: PropTypes.oneOf(["seven", "two", "three", "four", "one", "five", "eight", "six"]),
  img: PropTypes.string,
  position1: PropTypes.string,
  position2: PropTypes.string,
};
