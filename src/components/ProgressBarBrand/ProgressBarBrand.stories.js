import { ProgressBarBrand } from ".";

export default {
  title: "Components/ProgressBarBrand",
  component: ProgressBarBrand,
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
