import { MetaTiles } from ".";

export default {
  title: "Components/MetaTiles",
  component: MetaTiles,
  argTypes: {
    type: {
      options: ["centered", "billboard", "series", "minimised", "standard", "mini-guide", "minimal"],
      control: { type: "select" },
    },
    focus: {
      options: ["unfocused", "focused"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "centered",
    focus: "unfocused",
    className: {},
    providerLogoProviderLogoClassName: {},
    programmeTitleProgrammeTitle: "https://c.animaapp.com/pLg7BaBQ/img/programme-title-6.svg",
    metaSynopsisMasterMetaSynopsisStatusText: "Added",
    metaSynopsisMasterMetaSynopsisEpisodeClassName: {},
    metaSynopsisMasterMetaSynopsisStatusDivClassName: {},
    metaSynopsisTypeMovieClassName: {},
    programmeTitleProgrammeTitleClassName: {},
    overlapClassName: {},
  },
};
