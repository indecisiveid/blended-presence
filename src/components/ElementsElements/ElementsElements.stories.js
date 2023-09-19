import { ElementsElements } from ".";

export default {
  title: "Components/ElementsElements",
  component: ElementsElements,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    variant: {
      options: ["image", "logo"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    variant: "image",
    className: {},
  },
};
