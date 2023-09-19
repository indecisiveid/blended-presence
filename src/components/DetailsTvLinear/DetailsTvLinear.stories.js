import { DetailsTvLinear } from ".";

export default {
  title: "Components/DetailsTvLinear",
  component: DetailsTvLinear,
  argTypes: {
    stringOptions: {
      options: ["started-at", "finished", "starts-at"],
      control: { type: "select" },
    },
    variant: {
      options: ["episodes", "movie-program"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    duration: "30m",
    startsAt: "Starts at 9:00pm",
    s: "S#:E#",
    criticsScore: "76%",
    audienceScore: "92%",
    startedAt: "Started at 9:00pm",
    airdate: "2020",
    stringOptions: "started-at",
    variant: "episodes",
    className: {},
  },
};
