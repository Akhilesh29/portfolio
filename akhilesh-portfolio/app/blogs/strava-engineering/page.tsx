import type { Metadata } from "next";
import Link from "next/link";
import { stravaEngineering } from "../../data/strava-engineering";

export const metadata: Metadata = {
  title: "strava engineering · akhilesh",
  description: stravaEngineering.lede,
  openGraph: {
    title: "strava engineering · akhilesh",
    description:
      "how a noisy gps trace becomes distance, pace, elevation, and a feed item.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/98381403?v=4",
        width: 460,
        height: 460,
        alt: "akhilesh",
      },
    ],
  },
};

export default function StravaEngineeringPage() {
  return (
    <main className="page page-blog">
      <header className="subpage-header fade-up">
        <Link href="/blogs" className="subpage-back">
          ← blogs
        </Link>
      </header>

      <article className="blog-article fade-up delay-1">
        <p className="blog-kicker">{stravaEngineering.date}</p>
        <h1 className="blog-title">{stravaEngineering.title}</h1>
        <p className="blog-lede">{stravaEngineering.lede}</p>
        {stravaEngineering.blocks.map((block, i) =>
          block.type === "h" ? (
            <h2 key={i} className="blog-h">
              {block.text}
            </h2>
          ) : (
            <p key={i} className="blog-p">
              {block.text}
            </p>
          )
        )}
      </article>
    </main>
  );
}
