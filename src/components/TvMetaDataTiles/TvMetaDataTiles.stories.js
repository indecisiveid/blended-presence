import { TvMetaDataTiles } from ".";

export default {
  title: "Components/TvMetaDataTiles",
  component: TvMetaDataTiles,
  argTypes: {
    size: {
      options: ["tile"],
      control: { type: "select" },
    },
    logoPosition: {
      options: ["right", "top"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    providerLogo: true,
    title: "Title",
    description: true,
    description1: "Description",
    title1: true,
    progressBar: true,
    size: "tile",
    logoPosition: "right",
    className: {},
    providerLogoClassName: {},
    img: "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-149@2x.png",
    fadeClassName: {},
    fade: "https://c.animaapp.com/pLg7BaBQ/img/fade-37.svg",
    titleClassName: {},
    title2: "https://c.animaapp.com/pLg7BaBQ/img/title-108.svg",
    descriptionClassName: {},
    description2: "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg",
    containerClassName: {},
    progressBarBrandHeightSmallClassName: {},
    progressBarBrandBarMoveUseClassName: {},
    progressBarBrandProgressClassName: {},
  },
};
