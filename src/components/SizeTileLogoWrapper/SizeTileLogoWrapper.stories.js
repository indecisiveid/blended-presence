import { SizeTileLogoWrapper } from ".";

export default {
  title: "Components/SizeTileLogoWrapper",
  component: SizeTileLogoWrapper,
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
    hasFade: true,
    titleClassName: {},
    title2: "https://c.animaapp.com/pLg7BaBQ/img/title-147.svg",
    descriptionClassName: {},
    description2: "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
    heightSmallWrapperHeightSmallClassName: {},
    fadeClassName: {},
    fade: "https://c.animaapp.com/pLg7BaBQ/img/fade-103.svg",
    containerClassName: {},
  },
};
