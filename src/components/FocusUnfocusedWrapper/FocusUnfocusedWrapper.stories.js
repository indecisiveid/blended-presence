import { FocusUnfocusedWrapper } from ".";

export default {
  title: "Components/FocusUnfocusedWrapper",
  component: FocusUnfocusedWrapper,
  argTypes: {
    focus: {
      options: ["unfocused", "focused"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    focus: "unfocused",
    masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName: {},
    masterBillboardMetaTilesProviderLogoProviderLogoClassName: {},
    masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText: "Added",
    masterBillboardOverlapGroupClassName: {},
    masterBillboardMetaTilesProgrammeTitleProgrammeTitle: "https://c.animaapp.com/pLg7BaBQ/img/programme-title-15.svg",
    masterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName: {},
    masterBillboardMasterBillboardClassName: {},
    masterBillboardMetaTilesFocus: "abc",
    className: {},
    overlapClassName: {},
    masterBillboardMetaTilesMetaSynopsisTypeMovieClassName: {},
    masterBillboardMetaTilesTypeMinimisedFocusClassName: {},
    highlightClassName: {},
    tokenHighlightClassName: {},
  },
};
