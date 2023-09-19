import { ModeRestingSizeWrapper } from ".";

export default {
  title: "Components/ModeRestingSizeWrapper",
  component: ModeRestingSizeWrapper,
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
    sizeTileLogoWrapperDescriptionClassName: {},
    sizeTileLogoWrapperTitleClassName: {},
    sizeTileLogoWrapperFade: "https://c.animaapp.com/pLg7BaBQ/img/fade-108.svg",
    sizeTileLogoWrapperDescription: "https://c.animaapp.com/pLg7BaBQ/img/description-147.svg",
    sizeTileLogoWrapperProviderLogo: "https://c.animaapp.com/pLg7BaBQ/img/provider-logo-149@2x.png",
    sizeTileLogoWrapperTitle: "https://c.animaapp.com/pLg7BaBQ/img/title-147.svg",
    sizeTileLogoWrapperFadeClassName: {},
    sizeTileLogoWrapperProviderLogoClassName: {},
    overlapGroupClassName: {},
    image: "https://c.animaapp.com/pLg7BaBQ/img/image--129@2x.png",
    SKYFadeClassName: {},
    sizeTileLogoWrapperImg: "https://c.animaapp.com/pLg7BaBQ/img/fade-106.svg",
    sizeTileLogoWrapperTitle1: "https://c.animaapp.com/pLg7BaBQ/img/title-107.svg",
    sizeTileLogoWrapperFadeClassNameOverride: {},
    sizeTileLogoWrapperDescription1: "https://c.animaapp.com/pLg7BaBQ/img/description-140.svg",
    highlightStandardClassName: {},
    strokeIi: "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-25@2x.png",
  },
};
