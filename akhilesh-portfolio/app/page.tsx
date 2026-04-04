import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OrgLogo } from "./OrgLogo";

/** From https://api.github.com/users/Akhilesh29 — update if you change GitHub username. */
const GITHUB_AVATAR =
  "https://avatars.githubusercontent.com/u/98381403?v=4";

type WorkEntry = {
  localSrc: string;
  fallback: string;
  logoDomain: string;
  company: string;
  url: string;
  role: string;
  period: string;
  desc: string;
  /** LinkedIn “copy image address” or any stable HTTPS logo. */
  logoUrl?: string;
};

export const metadata: Metadata = {
  title: "akhilesh",
  description: "software engineer building reliable systems.",
};

const workExperience: WorkEntry[] = [
  {
    localSrc: "/logos/dynasas-brand.png",
    fallback: "Dy",
    logoDomain: "dynasas.co",
    company: "Dynasas",
    url: "https://www.linkedin.com/company/dynasas-dynasoft-applied-systems/",
    role: "Software Engineer | Full-time",
    period: "Oct 2024 – present",
    desc: "Led backend engineering team of 4. Built scalable backend systems and product infrastructure.",
  },
  {
    localSrc: "/logos/secureu-brand.png",
    fallback: "Se",
    logoDomain: "secureu.in",
    company: "Secureu",
    url: "https://www.linkedin.com/company/secureu/",
    role: "Software Engineering Intern",
    period: "Jul 2024 – Oct 2024",
    desc: "Integral part of the backend and infra team, contributed to the core product features of Nebula.",
  },
  {
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D560BAQEnfnwYIkq6LA/company-logo_200_200/company-logo_200_200/0/1726188847716/open_source_projects_global_logo?e=2147483647&v=beta&t=6rKJ0IMxbP9WgITIenN_q-7RuPi9k3SUS9hc9uE6Wz4",
    localSrc: "/logos/open-source-global.svg",
    fallback: "os",
    logoDomain: "linkedin.com",
    company: "Open Source",
    url: "https://www.linkedin.com/company/open-source-projects-global/",
    role: "Contributor",
    period: "Jun 2023 – present",
    desc: "Contributor with Open Source Projects Global. shipping fixes, docs, and features across community projects.",
  },
];

const education = [
  {
    localSrc: "/logos/iiit-fav.png",
    fallback: "II",
    logoDomain: "iiitu.ac.in",
    school: "Indian Institute of Information Technology, Una",
    degree: "B.Tech · Electronics & Communication Engineering",
    period: "2020 – 2024",
  },
];

const skills = [
  "TypeScript",
  "Go",
  "Python",
  "C++",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Redis",
  "System Design",
  "Distributed Systems",
  "REST APIs",
  "gRPC",
  "Linux",
];

export default function Home() {
  return (
    <main className="page">
      {/* Header */}
      <header className="header fade-up">
        <div className="header-top">
          <div>
            <p className="hi-line">
              hi, <span className="hi-accent">akhilesh</span> here
            </p>
          </div>
          <a
            href="https://github.com/Akhilesh29"
            target="_blank"
            rel="noopener noreferrer"
            className="avatar"
            aria-label="GitHub profile"
          >
            <Image
              src={GITHUB_AVATAR}
              alt="akhilesh"
              width={72}
              height={72}
              className="avatar-photo"
              priority
            />
          </a>
        </div>
      </header>

      {/* About */}
      <section className="section fade-up delay-1">
        <div className="section-label section-label-sentence">about</div>
        <div className="about-text">
          <p>
            <span className="about-tldr">tldr;</span> learnt by hacking around
            on the internet.
          </p>
          <p>i build reliable and scalable software.</p>
          <p>I write code agentically. A lot of it.</p>
          <p className="about-projects-cta">
            <Link href="/projects" className="about-projects-link">
              here are the projects i&apos;ve built.
      
            </Link>
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="section fade-up delay-2">
        <div className="section-label section-label-sentence">
          places i worked at
        </div>
        <div className="work-list">
          {workExperience.map((job) => (
            <div key={job.url} className="work-entry">
              <div className="work-logo-wrap">
                <OrgLogo
                  domain={job.logoDomain}
                  fallback={job.fallback}
                  localSrc={job.localSrc}
                  logoUrl={job.logoUrl}
                />
              </div>
              <div className="work-body">
                <div className="work-header">
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-company work-link"
                  >
                    {job.company}
                  </a>
                  <span className="work-period">{job.period}</span>
                </div>
                <div className="work-role">{job.role}</div>
                <div className="work-desc">{job.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section fade-up delay-2b">
        <div className="section-label section-label-sentence">education</div>
        <div className="work-list">
          {education.map((edu) => (
            <div key={edu.school} className="work-entry edu-entry">
              <div className="work-logo-wrap">
                <OrgLogo
                  domain={edu.logoDomain}
                  fallback={edu.fallback}
                  localSrc={edu.localSrc}
                />
              </div>
              <div className="work-body">
                <div className="work-header">
                  <span className="work-company">{edu.school}</span>
                  <span className="work-period">{edu.period}</span>
                </div>
                <div className="work-role">{edu.degree}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section fade-up delay-3">
        <div className="section-label">skills</div>
        <div className="skills-wrap">
          {skills.map((s) => (
            <span key={s} className="skill-tag">
              {s}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}
