import { Accessibility } from ".";

export default {
  title: "Components/Accessibility",
  component: Accessibility,
  argTypes: {
    type: {
      options: ["audio-description", "subtitles"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "audio-description",
    className: {},
    badgeClassName: {},
  },
};
