import { TileBillboard } from ".";

export default {
  title: "Components/TileBillboard",
  component: TileBillboard,
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
    className: {},
    focusUnfocusedWrapperMasterBillboardMetaTilesProgrammeTitleProgrammeTitle:
      "https://c.animaapp.com/pLg7BaBQ/img/programme-title-17.svg",
    focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText: "Added",
    focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName: {},
    focusUnfocusedWrapperMasterBillboardMasterBillboardClassName: {},
    focusUnfocusedWrapperMasterBillboardOverlapGroupClassName: {},
    focusUnfocusedWrapperMasterBillboardMetaTilesProviderLogoProviderLogoClassName: {},
    focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName: {},
    focusUnfocusedWrapperMasterBillboardMetaTilesTypeMinimisedFocusClassName: {},
    focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisTypeMovieClassName: {},
  },
};
