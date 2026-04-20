# UrlShortener — Agent Instructions

> ⚠️ **CRITICAL: You MUST read every relevant file in the `/docs` directory BEFORE writing or generating any code, no exceptions.** Failure to do so will result in incorrect, non-compliant implementations. Do not assume you know the conventions — read the docs first, every time.

This file is the entry point for LLM agents working in this codebase. The `/docs` directory contains mandatory instruction files that govern how every part of this codebase must be written.

## Documentation Index

| File | Contents |
|---|---|
| [docs/auth.md](docs/auth.md) | Clerk integration, middleware, modal sign-in/sign-up, protected routes, and user ID retrieval |
| [docs/ui.md](docs/ui.md) | shadcn/ui usage rules, component conventions, and how to add new components |

## Non-Negotiable Rules

1. **ALWAYS read the relevant `/docs` file(s) BEFORE generating any code.** This is non-negotiable. If you are touching auth, read `docs/auth.md`. If you are touching UI, read `docs/ui.md`. If you are touching the database, read `docs/database.md`. Do not write a single line of code until you have read and understood the relevant docs.
2. **Use the App Router.** All routes live under `app/`. Never create a `pages/` directory.
3. **TypeScript only.** No `.js` or `.jsx` files in `app/`, `components/`, `lib/`, or `db/`.
4. **No raw SQL.** All database access goes through the Drizzle `db` client from `@/db`.
5. **No custom auth.** All authentication flows go through Clerk.
6. **Server Components by default.** Add `"use client"` only when required (event handlers, browser APIs, React hooks).
7. **`cn()` for class merging.** Import it from `@/lib/utils`; do not use string concatenation for Tailwind classes.
8. **Do not modify `components/ui/`.** These are shadcn-generated files. Create wrapper components in `components/` instead.
9. **Environment variables.** Never hard-code secrets. Read from `process.env` and ensure variables are documented in `docs/project-overview.md`.
10. **Run `next lint` and fix all errors before considering a task complete.**
