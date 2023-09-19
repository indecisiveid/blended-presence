import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["notification", "standard", "one"],
      control: { type: "select" },
    },
    focus: {
      options: ["unfocused", "focused"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "notification",
    focus: "unfocused",
    progressBar: true,
    masterButtonFocusMasterButtonTextClassName: {},
    masterButtonFocusMasterButtonText: "Button",
    className: {},
  },
};
