import { StandardHeader } from ".";

export default {
  title: "Components/StandardHeader",
  component: StandardHeader,
  argTypes: {
    mode: {
      options: ["new", "inactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    slot: false,
    slot1: false,
    fade: false,
    mode: "new",
    className: {},
    elementsElementsSizeSmallVariantClassName: {},
  },
};
