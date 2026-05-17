# YC Directory 🚀

A full-stack startup pitch platform built with Next.js 15, React 19, and Sanity CMS — inspired by Y Combinator's startup directory. Entrepreneurs can submit startup ideas, browse pitches, and vote on projects.

**Live:** [production-ready-full-stack-app.vercel.app](https://production-ready-full-stack-app.vercel.app)  
**Repo:** [github.com/V-le319/Production-Ready-Full-Stack-App](https://github.com/V-le319/Production-Ready-Full-Stack-App)

---

## Features

- GitHub OAuth authentication via Auth.js v5
- Submit startup pitches with title, description, category, image, and markdown pitch content
- Browse and search all submitted startups
- View individual startup pages with live view counters
- Author profile pages
- Sanity Studio CMS at `/studio` for content management
- Error monitoring via Sentry
- Fully deployed on Vercel

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + shadcn/ui |
| CMS | Sanity v5 |
| Auth | Auth.js v5 (NextAuth) with GitHub provider |
| Markdown | EasyMDE + markdown-it |
| Monitoring | Sentry |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 20
- A [Sanity](https://sanity.io) account and project
- A GitHub OAuth app

## Deployment (Vercel)

1. Push to GitHub and import the repo in Vercel
2. Add all environment variables from `.env.local` to Vercel project settings
3. Update GitHub OAuth app's **Authorization callback URL** to:
   ```
 https://production-ready-full-stack-app.vercel.app
   ```
4. Add  Vercel domain to Sanity's **CORS origins** at sanity.io → your project → API → CORS Origins

---

## Deployment Notes

Several compatibility issues were resolved to build successfully with Next.js 15 + React 19 stable.

**1. Removed `'use client'` from `sanity.config.ts`**  
The auto-generated sanity config had a `'use client'` directive that caused webpack to bundle sanity for the browser, triggering `useEffectEvent` errors since it's not exposed in React 19 stable.

**2. Upgraded `sanity` from 5.15.0 to 5.25.1**  
The older version had React 19 incompatibilities in its internal chunks (`structureTool.js`).

**3. Dynamic import in `/app/studio/[[...tool]]/page.tsx`**  
Replaced static imports with dynamic `await import()` to prevent webpack from bundling the Sanity Studio at build time, resolving `createContext is not a function` errors.

**4. Replaced `sanityFetch` / `SanityLive` with `client.fetch`**  
`defineLive` from `next-sanity@11.6.13` is incompatible with Next.js 15 + React 19. Replaced with standard `client.fetch`. Content still refreshes on navigation via Next.js cache revalidation.

**5. GitHub OAuth callback URL**  
Updated the Authorization callback URL in GitHub OAuth app settings to the production Vercel domain.

---

## Project Structure

```
├── app/
│   ├── (ROOT)/          # Main app routes
│   │   ├── page.tsx     # Homepage - startup listings
│   │   ├── startup/     # Individual startup pages
│   │   └── user/        # Author profile pages
│   ├── studio/          # Sanity Studio route
│   └── global-error.tsx
├── components/          # Reusable UI components
├── sanity/
│   ├── lib/             # Sanity client, queries, live
│   ├── schemaTypes/     # Content schemas
│   └── structure/       # Studio structure
├── lib/
│   └── action.ts        # Server actions (form submission)
└── sanity.config.ts     # Sanity Studio config
```

---

## Known Limitations

- Real-time live content updates (`SanityLive`) disabled due to `next-sanity@11` incompatibility with Next.js 15 + React 19. Will be re-enabled when upgrading to Next.js 16 + `next-sanity@12`.

---

## Credits

Built following the [JS Mastery Next.js 15 course](https://www.youtube.com/@javascriptmastery), with additional debugging and production fixes applied independently.
