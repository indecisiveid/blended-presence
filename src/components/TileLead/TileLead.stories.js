import { TileLead } from ".";

export default {
  title: "Components/TileLead",
  component: TileLead,
  argTypes: {
    variant: {
      options: ["now-next", "thirty-four", "square-standard", "one-hundred-and-sixty-nine"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    CTA: "View all",
    title: "36 character two line limit marquees and fades",
    focus: true,
    variant: "now-next",
    className: {},
    railTitleClassName: {},
    divClassName: {},
  },
};
