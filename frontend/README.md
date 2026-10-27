# X-Workspace

**A local-first AI software development orchestrator for XOS.**

X-Workspace is intended to help a solo founder manage multiple software projects and coordinate AI-assisted planning, design, implementation, QA, and delivery—with human approval at important checkpoints.

> Status: early MVP scaffold. Project registration is implemented. Agent execution, Figma integration, GitHub automation, and Linear integration are not implemented yet.

## MVP goals

- Register and list local Git repositories.
- Keep each project's files and agent work isolated.
- Create tasks and run a workflow through explicit state transitions.
- Support specialized planning, design, development, and QA agents.
- Require approval before consequential actions such as moving from design to implementation or merging/deploying code.
- Support multiple projects without mixing their task state or credentials.

## Technology

- Bun + TypeScript
- Ink + React for the terminal UI
- Local JSON registry under `~/.x-workspace/projects.json`
- Git and GitHub integrations planned
- Figma design workflow planned
- Linear integration deferred until the core workflow is stable

## Requirements

- Bun (current stable release)
- Git

## Run locally

```bash
bun install
bun run dev
```

To run type checks and tests:

```bash
bun run check
```

## First milestone

1. Launch the CLI.
2. Choose **Add project**.
3. Enter a project name and the absolute path to its local repository.
4. Optionally add the GitHub repository URL.
5. Choose **Projects** to view registered projects.

The registry location can be overridden for development or tests:

```bash
X_WORKSPACE_HOME=/tmp/x-workspace-dev bun run start
```

## Repository structure

```text
src/
  cli/                 Ink terminal UI
  services/             Application services and local persistence
  types/                Shared domain types
  utils/                Paths and small utilities
docs/                   Architecture, workflow, security, roadmap
.github/workflows/      CI
```

## Security principles

- Agent execution is disabled in this starter.
- Do not commit API keys, OAuth tokens, or `.env` files.
- Keep default GitHub workflow permissions read-only.
- Use project-scoped workspaces and least-privilege credentials.
- Require explicit human approval for destructive or external actions.
- Never let an agent merge or deploy to production without an explicit policy and approval gate.

## Roadmap

See [`docs/ROADMAP.md`](docs/ROADMAP.md) and [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## License

Private, proprietary project for XOS. Add a license before distributing externally.
