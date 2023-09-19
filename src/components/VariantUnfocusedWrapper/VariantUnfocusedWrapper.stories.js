import { VariantUnfocusedWrapper } from ".";

export default {
  title: "Components/VariantUnfocusedWrapper",
  component: VariantUnfocusedWrapper,
  argTypes: {
    variant: {
      options: ["unfocused", "focused", "selected"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "unfocused",
    className: {},
    imageClassName: {},
    highlightStandardClassName: {},
    strokeIi: "https://c.animaapp.com/pLg7BaBQ/img/stroke-ii-15@2x.png",
  },
};
