# bilgin.net.tr — AI Rules

This file contains the project rules for Hermes and VS Code AI assistants.

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **UI:** shadcn/ui (Base UI) + Tailwind CSS 4 + Framer Motion
- **Deploy:** Static export → GitHub Pages
- **i18n:** tr/en; every user-facing string must exist in both dictionaries

## Product positioning

- Bilgin develops and sells its own software, design, and 3D products.
- Do not position the site as a generic agency or external-services studio.
- Avoid generic agency slogans, client-work claims, or unsupported service promises.
- Product descriptions must be available in both Turkish and English.

## Design

- Logo: boxed “b” + “bilgin” wordmark; low radius. Do not change the existing logo specification.
- Keep the design simple, modern, and refined; do not use oversized typography.
- Ask Halil before changing the font; present comparisons first.
- Present six design variants in one image; “another” means a new set. Do not apply an unselected variant.

## Code discipline

- Commit messages must be English and conventional (`feat:`, `fix:`).
- Do not commit until `next build` passes cleanly.
- Push requires Halil’s approval; merge only when Halil explicitly asks for it.
- PR workflow: open PR → wait for approval → merge only when Halil explicitly asks.
- Keep internal route segments and URL fragments in English (`/projects`, `/privacy`, `/legal`, `#projects`).

## Deploy

- Static export (`out/`) → GitHub Pages. Preview: `npx serve out -p 3999`.
- Every new page or feature must add both Turkish and English dictionary content.
