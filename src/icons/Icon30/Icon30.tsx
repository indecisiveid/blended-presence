/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  opacity: string;
  className: any;
}

export const Icon30 = ({ color = "#F8F7FA", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-30 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.5565 2.61224C15.1941 2.61224 17.7237 3.66004 19.5888 5.52512C21.4539 7.39021 22.5017 9.9198 22.5017 12.5574C22.5017 15.0208 21.599 17.2852 20.1149 19.0295L20.528 19.4426H21.7367L29.3868 27.0927L27.0918 29.3878L19.4416 21.7376V20.5289L19.0285 20.1158C17.2843 21.5999 15.0199 22.5026 12.5565 22.5026C9.91889 22.5026 7.38929 21.4548 5.52421 19.5897C3.65912 17.7247 2.61133 15.1951 2.61133 12.5574C2.61133 9.9198 3.65912 7.39021 5.52421 5.52512C7.38929 3.66004 9.91889 2.61224 12.5565 2.61224ZM12.5565 5.6723C8.73144 5.6723 5.67139 8.73236 5.67139 12.5574C5.67139 16.3825 8.73144 19.4426 12.5565 19.4426C16.3816 19.4426 19.4416 16.3825 19.4416 12.5574C19.4416 8.73236 16.3816 5.6723 12.5565 5.6723Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Icon30.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
