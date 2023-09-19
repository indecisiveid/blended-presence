import { MetaSynopsis } from ".";

export default {
  title: "Components/MetaSynopsis",
  component: MetaSynopsis,
  argTypes: {
    type: {
      options: ["playlist", "catch-up", "movie"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "playlist",
    className: {},
    masterMetaSynopsisEpisodeClassName: {},
    masterMetaSynopsisText: "S1:E1",
    masterMetaSynopsisDuration: true,
    masterMetaSynopsisStatusText: "Added",
    masterMetaSynopsisBadges: true,
    masterMetaSynopsisStatusDivClassName: {},
    masterMetaSynopsisEpisode: true,
    masterMetaSynopsisDurationClassName: {},
    masterMetaSynopsisVideoQualityClassName: {},
    masterMetaSynopsisAccessibilityBadgeClassName: {},
    masterMetaSynopsisAccessibilityBadgeClassNameOverride: {},
    masterMetaSynopsisAgeRatingClassName: {},
    masterMetaSynopsisStatusType: "abc",
  },
};
