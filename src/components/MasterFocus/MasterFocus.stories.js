import { MasterFocus } from ".";

export default {
  title: "Components/MasterFocus",
  component: MasterFocus,
  argTypes: {
    focus: {
      options: ["unfocused", "focused", "expanded"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    focus: "unfocused",
    titled: true,
    className: {},
    overlapGroupClassName: {},
    elementsDimmerElementsDimmerClassName: {},
    masterTileMasterTileClassName: {},
    highlightClassName: {},
    tokenHighlightClassName: {},
    masterTileMasterTileClassNameOverride: {},
  },
};
