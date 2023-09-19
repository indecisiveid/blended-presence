import { Status } from ".";

export default {
  title: "Components/Status",
  component: Status,
  argTypes: {
    type: {
      options: ["series", "playlist", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "series",
    divClassName: {},
    text: "Added",
  },
};
