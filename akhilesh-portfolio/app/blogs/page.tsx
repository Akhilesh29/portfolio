import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "../data/blogs";

export const metadata: Metadata = {
  title: "blogs · akhilesh",
  description: "blogs about engineering and life.",
  openGraph: {
    title: "blogs · akhilesh",
    description: "blogs about engineering and life.",
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

export default function BlogsPage() {
  return (
    <main className="page">
      <header className="subpage-header fade-up">
        <Link href="/" className="subpage-back">
          ← home
        </Link>
      </header>

      <div className="section-label section-label-sentence fade-up">
        blogs about engineering and life
      </div>

      <div className="blogs-list fade-up delay-1">
        {blogs.map((b) => (
          <Link
            key={b.slug}
            href={`/blogs/${b.slug}`}
            className="blog-index-row"
          >
            <span className="blog-index-title">{b.title}</span>
            <span className="blog-index-date">{b.date}</span>
            <p className="blog-index-desc">{b.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
