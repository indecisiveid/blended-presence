import { MasterCircleTile } from ".";

export default {
  title: "Components/MasterCircleTile",
  component: MasterCircleTile,
  argTypes: {
    type: {
      options: ["image", "icon", "text"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "image",
    className: {},
  },
};
