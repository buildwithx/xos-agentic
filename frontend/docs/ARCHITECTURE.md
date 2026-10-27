# Architecture

## Design goals

1. Local-first execution: project files and workers run on the developer's machine.
2. Multiple projects: each project has its own repository path, tasks, logs, and working directories.
3. Clear boundaries: CLI presentation does not own orchestration or persistence rules.
4. Human approval: workflow transitions with meaningful consequences pause for review.
5. Safe defaults: no agent execution or external mutation until the relevant capability is implemented and explicitly configured.

## Proposed modules

- **CLI** — Ink screens, prompts, and human-readable status.
- **Application services** — use cases such as register project, create task, approve design, and start a run.
- **Project registry** — local project metadata.
- **Task store** — planned durable task/workflow state.
- **Workflow engine** — planned state transitions, approvals, retries, cancellation, and concurrency limits.
- **Agent runtime** — planned adapters for model providers and local tool execution.
- **Tool adapters** — planned Git, GitHub, Figma, test runner, and later Linear integration.
- **Audit log** — planned record of agent actions, approvals, commands, and results.

## Planned task lifecycle

`draft → ready → running → needs_approval → running → completed`

Alternative terminal states: `failed`, `cancelled`, `blocked`.

A design task must reach `needs_approval` and receive explicit user approval before implementation can begin. Failed tasks should retain logs and support safe retry.

## Concurrency

The workflow engine should enforce per-project and global concurrency limits. Each active task should have an isolated working directory or Git worktree. Two agents must not modify the same working tree concurrently.

## Persistence evolution

The current project registry is JSON. Keep persistence behind service interfaces so tasks can later move to SQLite without changing the CLI or workflow logic.
