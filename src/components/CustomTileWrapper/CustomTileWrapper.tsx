/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { SizeTileLogoWrapper } from "../SizeTileLogoWrapper";

interface Props {
    backgroundImage: any;
    title: string;
    description: string;
    streamingLogo: string;
}

export const CustomTileWrapper = ({ backgroundImage, title, streamingLogo }: Props): JSX.Element => {



    return (
      <div className="element-76" style={{backgroundImage: backgroundImage}}>
        <div className="overlap-group-16">
          <SizeTileLogoWrapper
            className="TV-meta-data-tiles-42"
            description2="https://c.animaapp.com/pLg7BaBQ/img/description-5.svg"
            descriptionClassName="TV-meta-data-tiles-23"
            fade="https://c.animaapp.com/pLg7BaBQ/img/fade-5@2x.png"
            fadeClassName="TV-meta-data-tiles-48"
            img={streamingLogo}
            logoPosition="top"
            progressBar={false}
            providerLogoClassName="TV-meta-data-tiles-43"
            size="tile"
            title={title}
            titleClassName="TV-meta-data-tiles-23"
          />
          <div className="dimmer-7" />
        </div>
      </div>
    );
};