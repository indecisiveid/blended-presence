import { MasterButtonFocus } from ".";

export default {
  title: "Components/MasterButtonFocus",
  component: MasterButtonFocus,
  argTypes: {
    focus: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    type: {
      options: ["button-CW", "button"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    focus: "off",
    type: "button-CW",
    className: {},
    masterButtonTextClassName: {},
    masterButtonText: "Button",
    overlapGroupClassName: {},
    masterButtonTextClassNameOverride: {},
    masterButtonMasterButtonClassName: {},
    highlightClassName: {},
    tokenHighlightClassName: {},
    masterButtonDivClassName: {},
    masterButtonMasterButtonClassNameOverride: {},
    progressBarProgressBarMasterClassName: {},
    progressBarBgClassName: {},
    progressBarFillFillColourClassName: {},
    highlightClassNameOverride: {},
    tokenHighlightClassNameOverride: {},
    masterButtonTextWrapperClassName: {},
    kFlare: "https://c.animaapp.com/pLg7BaBQ/img/k-flare-25@2x.png",
  },
};
