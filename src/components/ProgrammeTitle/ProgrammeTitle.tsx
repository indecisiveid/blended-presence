/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  programmeTitle: string;
}

export const ProgrammeTitle = ({
  className,
  programmeTitle = "https://c.animaapp.com/pLg7BaBQ/img/programme-title-3.svg",
}: Props): JSX.Element => {
  return <img className={`programme-title ${className}`} alt="Programme title" src={programmeTitle} />;
};

ProgrammeTitle.propTypes = {
  programmeTitle: PropTypes.string,
};
