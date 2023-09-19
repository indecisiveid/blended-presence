import { BadgeBase } from ".";

export default {
  title: "Components/BadgeBase",
  component: BadgeBase,
  argTypes: {
    variant: {
      options: ["title-icon", "title", "icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    title: "Badge title",
    variant: "title-icon",
    className: {},
  },
};
