import { TilesTv } from ".";

export default {
  title: "Components/TilesTv",
  component: TilesTv,
  argTypes: {
    mode: {
      options: ["expanded", "resting", "focus"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "standard"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    badge: true,
    playButton: false,
    mdBottom: true,
    mode: "expanded",
    size: "large",
    className: {},
    TVMetaDataTilesDescriptionClassName: {},
    TVMetaDataTilesProviderLogo: "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-108@2x.png",
    TVMetaDataTilesTitle: "https://c.animaapp.com/pLg7BaBQ/img/title-106.svg",
    TVMetaDataTilesProviderLogoClassName: {},
    TVMetaDataTilesFadeClassName: {},
    TVMetaDataTilesDescription: "https://c.animaapp.com/pLg7BaBQ/img/description-106.svg",
    TVMetaDataTilesTitleClassName: {},
    TVMetaDataTilesFade: "https://c.animaapp.com/pLg7BaBQ/img/fade-39.svg",
    overlapGroupClassName: {},
    fadeClassName: {},
    highlightStandard: "abc",
  },
};
