import { ButtonRail } from ".";

export default {
  title: "Components/ButtonRail",
  component: ButtonRail,
  argTypes: {
    focus: {
      options: ["unfocused", "focused", "scrolled-end", "end"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    focus: "unfocused",
    scrolled: true,
    className: {},
    buttonMasterButtonFocusMasterButtonText: "Button",
    buttonMasterButtonFocusMasterButtonTextClassName: {},
    visible: true,
    visible1: true,
  },
};
