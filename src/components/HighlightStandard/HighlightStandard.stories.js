import { HighlightStandard } from ".";

export default {
  title: "Components/HighlightStandard",
  component: HighlightStandard,
  argTypes: {
    tone: {
      options: ["neutral", "inverse"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    glint: true,
    tone: "neutral",
    className: {},
    overlapGroupClassName: {},
    glintGlintClassName: {},
    strokeIiClassName: {},
    strokeIi: "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-9@2x.png",
    strokeIClassName: {},
    strokeI: "https://c.animaapp.com/pLg7BaBQ/img/stroke-i-9@2x.png",
    glintKFlare: "https://c.animaapp.com/pLg7BaBQ/img/k-flare-28@2x.png",
  },
};
