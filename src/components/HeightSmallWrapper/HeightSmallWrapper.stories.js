import { HeightSmallWrapper } from ".";

export default {
  title: "Components/HeightSmallWrapper",
  component: HeightSmallWrapper,
  argTypes: {
    height: {
      options: ["standard", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    height: "standard",
    className: {},
    barMoveUseClassName: {},
    progressClassName: {},
  },
};
