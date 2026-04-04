# Akhilesh Kumar Meena — Portfolio

A minimal, dark terminal-aesthetic portfolio site built with **Next.js 14 + TypeScript**, inspired by [amritwt.me](https://amritwt.me/).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Pure CSS** (no Tailwind, no component libraries)
- **DM Mono + DM Sans** fonts

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done.

### Option 2 — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

No environment variables needed. Zero config.

## Customization

All content lives in `app/page.tsx`:

- `workExperience` — your job history
- `projects` — your projects with links
- `beliefs` — personal philosophy
- `skills` — tech stack tags

Styles are in `app/globals.css`. Colors use CSS variables at the top of the file.

## Structure

```
akhilesh-portfolio/
├── app/
│   ├── layout.tsx      # Root layout + fonts
│   ├── page.tsx        # Main portfolio page (all content here)
│   └── globals.css     # All styles
├── next.config.js
├── tsconfig.json
├── vercel.json
└── package.json
```
