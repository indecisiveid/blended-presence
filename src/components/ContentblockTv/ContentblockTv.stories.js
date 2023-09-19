import { ContentblockTv } from ".";

export default {
  title: "Components/ContentblockTv",
  component: ContentblockTv,
  argTypes: {
    feature: {
      options: ["lozenge", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    description:
      "Description 215 max characters: met dol consectetur adipiscing elit quisque enim eros, tut magn elementummet dol consectetur adipiscing elit quisque enim eros, ",
    callout: "Callout",
    description1: true,
    details: true,
    providerRow: true,
    callout1: true,
    feature: "lozenge",
    className: {},
    providerRowClassName: {},
    calloutClassName: {},
    hasDivider: true,
    providerLogo: "https://c.animaapp.com/pLg7BaBQ/img/providerlogo-1@2x.png",
    titleOptionsTvDivClassName: {},
    titleOptionsTvProgramTitle: "Program title one line",
    descriptionClassName: {},
  },
};
