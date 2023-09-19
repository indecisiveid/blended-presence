import { StarRating } from ".";

export default {
  title: "Components/StarRating",
  component: StarRating,
  argTypes: {
    rating: {
      options: ["twenty-five", "forty-five", "thirty-five", "two", "fifteen", "three", "four", "five"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    rating: "twenty-five",
    concreteComponentNodeEmptyStar: "https://c.animaapp.com/pLg7BaBQ/img/empty-star-21.svg",
    concreteComponentNodeOverlapGroupClassName: {},
  },
};
