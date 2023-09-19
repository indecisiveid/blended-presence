/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MyList22 } from "../../icons/MyList22";
import "./style.css";

interface Props {
  type: "series" | "playlist" | "default";
  divClassName: any;
  text: string;
  icon: JSX.Element;
}

export const Status = ({
  type,
  divClassName,
  text = "Added",
  icon = <MyList22 className="my-list" />,
}: Props): JSX.Element => {
  return (
    <div className="status">
      <div className={`added ${type} ${divClassName}`}>
        {["default", "playlist"].includes(type) && <>{text}</>}

        {type === "series" && <>Series Added</>}
      </div>
      {["default", "series"].includes(type) && <>{icon}</>}
    </div>
  );
};

Status.propTypes = {
  type: PropTypes.oneOf(["series", "playlist", "default"]),
  text: PropTypes.string,
};
