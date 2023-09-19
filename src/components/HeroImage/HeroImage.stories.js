import { HeroImage } from ".";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    mask: {
      options: [
        "four-trailer",
        "zero-web-modal",
        "one-tile-fade",
        "five-TV-guide",
        "two-program-logo",
        "three-content-block",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    mask: "four-trailer",
    maskTileFadeClassName: {},
    maskContentBlock: "https://c.animaapp.com/pLg7BaBQ/img/mask-3-content-block.svg",
  },
};
