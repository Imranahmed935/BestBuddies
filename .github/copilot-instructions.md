<!-- Purpose: concise, actionable guidance for AI coding agents working in this repo -->
# BestBuddies Server — Copilot Instructions

Purpose
- Keep responses focused on this TypeScript + Express + Prisma codebase. Make minimal, targeted edits and preserve existing project structure.

Big picture
- Runtime: Node.js + TypeScript. Entry points: [src/app.ts](src/app.ts#L1) and [src/server.ts](src/server.ts#L1).
- Modules: feature folders under [src/app/modules](src/app/modules) follow a three-file convention: `*.service.ts`, `*.controller.ts`, `*.routes.ts` (see the `user` module layout: [src/app/modules/user](src/app/modules/user)).
- Data layer: Prisma with a PostgreSQL adapter. Prisma is initialized in [src/app/shared/prisma.ts](src/app/shared/prisma.ts#L1) using `@prisma/adapter-pg` and a `pg` Pool; generated client lives under `prisma/generated/prisma`.

Developer workflows & commands
- Development (live-reload): `npm run dev` -> runs `npx tsx watch src/server.ts` (see `package.json`).
- Build: `npm run build` -> `tsc`.
- Lint: `npm run lint` -> `npx eslint ./src`.
- Prisma: when changing schema, run `npx prisma generate` and `npx prisma migrate dev --name <desc>`; do NOT edit files under `prisma/generated/prisma` by hand.
- Environment: `DATABASE_URL` is required (used by [src/app/shared/prisma.ts](src/app/shared/prisma.ts#L1)). The server listens on port 5000 by default ([src/server.ts](src/server.ts#L1)).

Project-specific patterns and constraints
- Prisma adapter pattern: the app injects a `pg` Pool into `PrismaPg` and then constructs `new PrismaClient({ adapter })`. Keep this pattern when changing DB initialization.
- Imports reference the generated client with a relative path (example: `../../../prisma/generated/prisma/client`). Preserve relative import layout if moving files.
- Route/service/controller split: services contain business logic and DB calls, controllers coordinate request handling, routes wire Express routers. Match existing naming and export conventions.
- Minimal middleware: `app.ts` configures `cors` and `express.json()`; add module routers to `app` rather than altering global middleware unless necessary.

Integration & external dependencies
- Key dependencies: `@prisma/client`, `@prisma/adapter-pg`, `pg`, `express`, `dotenv`.
- Migrations are stored in `prisma/migrations` and schema files live in `prisma/schema`.

When editing files
- Small changes: prefer focused edits and add/adjust unit tests if present (none found presently).
- Schema changes: update `prisma/schema/*.prisma`, run migrate/generate, and ensure the generated client is used (do not check in manual edits to `prisma/generated`).
- Database connection: respect `DATABASE_URL` and the pool/adapter pattern; avoid replacing with `new PrismaClient()` without the adapter unless intentionally simplifying.

What not to do
- Do not modify `prisma/generated/prisma` files directly.
- Do not change absolute paths of imports that reference the generated client without updating import locations.

Examples to look at
- Server bootstrap: [src/server.ts](src/server.ts#L1)
- App setup: [src/app.ts](src/app.ts#L1)
- Prisma init: [src/app/shared/prisma.ts](src/app/shared/prisma.ts#L1)
- Prisma schema: files under `prisma/schema/` (models like `user.prisma`).

If you need clarification
- Ask the human for the desired behavior when changes affect DB schema, runtime env, or public API surface.

Feedback
- Please review this draft and tell me which sections need more detail or examples.
