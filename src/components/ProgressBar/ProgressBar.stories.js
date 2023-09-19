import { ProgressBar } from ".";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    fill: {
      options: ["twenty-five", "zero", "one-hundred", "ten", "fifty", "seventy-five"],
      control: { type: "select" },
    },
    fillColour: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    fill: "twenty-five",
    fillColour: "primary",
    className: {},
    progressBarMasterFillClassName: {},
    progressBarMasterOverlapGroupClassName: {},
    progressBarMasterElementClassName: {},
    progressBarMasterProgressBarMasterClassName: {},
    bgClassName: {},
    progressBarMasterClassName: {},
  },
};
