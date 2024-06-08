This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## NextJS 14 - Does a child component of a client component also become a client component?

Don't think about it in terms of component composition, think in terms of imports.

If you import a component in a file with "use client," it also becomes a client component.

Bad usage create server to client hydration problem.
