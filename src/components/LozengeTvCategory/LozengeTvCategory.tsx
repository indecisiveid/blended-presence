/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HighlightStandard } from "../HighlightStandard";
import "./style.css";

interface Props {
  category: string;
  flatBrand: boolean;
  focus: boolean;
  overlapGroupClassName: any;
  labelClassName: any;
  className: any;
  img: string;
}

export const LozengeTvCategory = ({
  category = "Category",
  flatBrand = true,
  focus,
  overlapGroupClassName,
  labelClassName,
  className,
  img = "https://c.animaapp.com/pLg7BaBQ/img/flat-brand.svg",
}: Props): JSX.Element => {
  return (
    <div className={`lozenge-TV-category focus-1-${focus} ${className}`}>
      <div className={`overlap-group-9 ${overlapGroupClassName}`}>
        {!focus && <div className={`label ${labelClassName}`}>{category}</div>}

        {focus && (
          <>
            <HighlightStandard
              className="highlight-standard-21"
              glintGlintClassName="flat-brand"
              glintKFlare="https://c.animaapp.com/pLg7BaBQ/img/k-flare-48@2x.png"
              overlapGroupClassName="highlight-standard-22"
              strokeI="https://c.animaapp.com/pLg7BaBQ/img/stroke-i-29@2x.png"
              strokeIClassName="highlight-standard-24"
              strokeIi="https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-29@2x.png"
              strokeIiClassName="highlight-standard-23"
              tone="neutral"
            />
            <div className="category-highlight">
              <div className="lozenge" />
            </div>
            <div className="label-2">{category}</div>
            <img className="flat-brand" alt="Flat brand" src={img} />
          </>
        )}
      </div>
    </div>
  );
};

LozengeTvCategory.propTypes = {
  category: PropTypes.string,
  flatBrand: PropTypes.bool,
  focus: PropTypes.bool,
  img: PropTypes.string,
};
