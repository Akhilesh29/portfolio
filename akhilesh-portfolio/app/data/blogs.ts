export type Blog = {
  slug: string;
  title: string;
  desc: string;
  date: string;
};

export const blogs: Blog[] = [
  {
    slug: "strava-engineering",
    title: "strava engineering",
    desc: "how a noisy gps trace becomes distance, pace, elevation, and a feed item in a couple of seconds.",
    date: "sep 2026",
  },
];
