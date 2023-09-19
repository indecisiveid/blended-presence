import { BrandGradient } from ".";

export default {
  title: "Components/BrandGradient",
  component: BrandGradient,
  argTypes: {
    position: {
      options: ["seven", "two", "three", "four", "one", "five", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    position: "seven",
    className: {},
    img: "https://c.animaapp.com/pLg7BaBQ/img/position-5.svg",
    position1: "https://c.animaapp.com/pLg7BaBQ/img/position-6.svg",
    position2: "https://c.animaapp.com/pLg7BaBQ/img/position-1.svg",
  },
};
