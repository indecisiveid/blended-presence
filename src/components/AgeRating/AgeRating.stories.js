import { AgeRating } from ".";

export default {
  title: "Components/AgeRating",
  component: AgeRating,
  argTypes: {
    region: {
      options: ["DE", "IT", "UK"],
      control: { type: "select" },
    },
    cert: {
      options: ["fourteen", "sixteen", "zero", "u", "fifteen", "twelve", "PA", "PG", "PT", "eighteen", "BA", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    region: "DE",
    cert: "fourteen",
    className: {},
    masterBadgeBadgeClassName: {},
  },
};
