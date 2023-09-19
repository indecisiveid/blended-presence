import { TileStandard } from ".";

export default {
  title: "Components/TileStandard",
  component: TileStandard,
  argTypes: {
    focus: {
      options: ["unfocused", "focused", "expanded"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: false,
    icon: false,
    focus: "unfocused",
    className: {},
    masterFocusFocusUnfocusedClassName: {},
    masterFocusOverlapGroupClassName: {},
    masterFocusElementsDimmerElementsDimmerClassName: {},
  },
};
