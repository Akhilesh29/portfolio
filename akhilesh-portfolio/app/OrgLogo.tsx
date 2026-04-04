"use client";

import { useMemo, useState } from "react";

type Props = {
  domain: string;
  fallback: string;
  /** Saved file under /public/logos (favicon PNG, etc.). */
  localSrc?: string;
  /**
   * Direct HTTPS logo URL — e.g. LinkedIn: open company → right‑click logo → Copy image address
   * (`media.licdn.com/...`), or an official org logo from the company site / schema.
   */
  logoUrl?: string;
  className?: string;
};

export function OrgLogo({
  domain,
  fallback,
  localSrc,
  logoUrl,
  className = "",
}: Props) {
  const sources = useMemo(
    () =>
      [
        logoUrl,
        localSrc,
        `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`,
      ].filter((s): s is string => Boolean(s)),
    [logoUrl, localSrc, domain]
  );

  const [idx, setIdx] = useState(0);

  if (idx >= sources.length) {
    return (
      <div className={`work-logo-fallback ${className}`.trim()} aria-hidden>
        {fallback}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sources[idx]}
      alt=""
      width={40}
      height={40}
      className={`work-logo-img ${className}`.trim()}
      referrerPolicy="no-referrer"
      onError={() => setIdx((i) => i + 1)}
    />
  );
}
