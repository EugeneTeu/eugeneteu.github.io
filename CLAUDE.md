# eugeneteu.github.io

Eugene's personal website and blog. Deployed to Vercel.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + Tailwind CSS v4
- **Animations:** Framer Motion
- **Blog:** MDX via `next-mdx-remote`, frontmatter via `gray-matter`
- **Icons:** Lucide React
- **Theming:** `next-themes`
- **Package manager:** Bun

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── writings/        # Blog listing + [slug] dynamic route
│   └── fitness/         # Strava/fitness page
├── components/          # Shared UI components
├── content/
│   ├── blog/            # MDX blog posts
│   └── strava/          # Strava-related content
└── lib/                 # Utilities (MDX parsing, etc.)
```

## Blog posts

MDX files live in `src/content/blog/`. Required frontmatter:

```yaml
---
slug: "post-slug"
title: "Post Title"
date: "YYYY-MM-DD"
description: "Short description"
author: "Eugene Teu"
tags: ["tag1", "tag2"]
---
```

## Dev

```bash
bun run dev    # http://localhost:3000
bun run build
bun run lint
```
