import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    star: {
      options: ["full", "empty", "half"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    star: "full",
    starEmptyClassName: {},
    overlapGroupClassName: {},
    emptyStarClassName: {},
    emptyStar: "https://c.animaapp.com/pLg7BaBQ/img/empty-star-1.svg",
  },
};
