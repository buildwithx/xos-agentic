# Repository Guidelines

## Project Structure & Module Organization

Application code lives in `src/`; `src/index.ts` creates the Fastify server and exposes `/health`. TypeScript configuration is in `tsconfig.json`. `dist/` contains generated build output and should not be edited by hand. There are currently no test or asset directories. Keep new source modules under `src/` and add tests alongside the code or in a clearly named test directory as the project grows.

## Build, Test, and Development Commands

Install dependencies with `bun install`.

- `bun run dev` starts the TypeScript server with watch mode.
- `bun run build` compiles `src/` into `dist/`.
- `bun run start` runs the compiled server from `dist/index.js` (build first).
- `bun run typecheck` checks types without emitting files.
- `bun test` runs tests when present; the repository currently has no test script or test files.

The server listens on `127.0.0.1:4317`.

## Coding Style & Naming Conventions

Use TypeScript with the strict settings already enabled in `tsconfig.json`. Follow the existing two-space indentation, double-quoted imports, and semicolon style. Use descriptive `camelCase` names for values and functions, and `PascalCase` for types and classes. Prefer small, focused modules and keep generated files out of source changes. Use Bun for dependency management and package scripts.

## Testing Guidelines

Add tests for new behavior and bug fixes. Use Bun's built-in test runner (`bun:test`), naming files `*.test.ts` and placing them near the code they cover or under a dedicated test directory. Run `bun test` and `bun run typecheck` before submitting changes; run `bun run build` when changes affect compilation or packaging.

## Commit & Pull Request Guidelines

The available Git history contains only an initial commit, so no commit-message convention is established. Write concise commit subjects that describe the change. Pull requests should explain the behavior and motivation, list relevant validation commands and results, and include request/response examples or screenshots when they clarify a user-visible change. Link related issues when applicable.

## Security & Configuration

Do not commit credentials or local environment files; `.env*` files are ignored. Bind external interfaces deliberately: the current server listens on loopback. Validate untrusted request data at the boundary and avoid logging secrets.
