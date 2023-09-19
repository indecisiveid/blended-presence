import { Badge } from ".";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      options: ["label", "icon", "label-icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "label",
    className: {},
    text: "Badge title",
  },
};
