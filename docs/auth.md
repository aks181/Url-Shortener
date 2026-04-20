# Authentication

All authentication is handled exclusively by **Clerk**. Do not implement custom auth, use sessions manually, or introduce any other auth library.

## Rules

- **No custom auth.** Never write custom login/logout logic, JWT handling, or session management.
- **Sign in and sign up must always open as a Clerk modal.** Do not navigate to a dedicated sign-in or sign-up page.
- **`/dashboard` is a protected route.** Unauthenticated users attempting to access it must be redirected to `/`.
- **Authenticated users visiting `/` must be redirected to `/dashboard`.**

## Middleware

Use Clerk's `clerkMiddleware` in `middleware.ts` to enforce route protection. Mark `/dashboard` (and any sub-routes) as protected using `createRouteMatcher`.

```ts
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
});
```

## Redirecting Authenticated Users from Homepage

In the homepage Server Component, check auth state and redirect to `/dashboard` if signed in:

```ts
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");
  // render homepage...
}
```

## Sign In / Sign Up Modals

Use Clerk's `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` components. Never link directly to `/sign-in` or `/sign-up` pages.

```tsx
import { SignInButton, SignUpButton } from "@clerk/nextjs";

<SignInButton mode="modal">
  <button>Sign In</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign Up</button>
</SignUpButton>
```

## Getting the Current User

- **Server Components / Route Handlers:** use `auth()` from `@clerk/nextjs/server`.
- **Client Components:** use `useAuth()` or `useUser()` from `@clerk/nextjs`.

```ts
// Server
import { auth } from "@clerk/nextjs/server";
const { userId } = await auth();

// Client
import { useAuth } from "@clerk/nextjs";
const { userId } = useAuth();
```

## Required Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
