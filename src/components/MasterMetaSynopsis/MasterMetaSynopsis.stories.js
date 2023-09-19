import { MasterMetaSynopsis } from ".";

export default {
  title: "Components/MasterMetaSynopsis",
  component: MasterMetaSynopsis,
};

export const Default = {
  args: {
    startedAt: true,
    starRating: true,
    playlists: true,
    duration: true,
    badges: true,
    episode: true,
    status: true,
    className: {},
    episodeClassName: {},
    text: "S1:E1",
    statusText: "Added",
    statusDivClassName: {},
    durationClassName: {},
    ageRatingClassName: {},
    videoQualityClassName: {},
    accessibilityBadgeClassName: {},
    accessibilityBadgeClassNameOverride: {},
    starRating1: "https://c.animaapp.com/pLg7BaBQ/img/empty-star-20.svg",
    statusType: "default",
  },
};
