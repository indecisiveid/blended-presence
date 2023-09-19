import { VideoQuality } from ".";

export default {
  title: "Components/VideoQuality",
  component: VideoQuality,
  argTypes: {
    format: {
      options: ["HD", "SD", "four-k"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    format: "HD",
    className: {},
    masterBadgeBadgeClassName: {},
  },
};
