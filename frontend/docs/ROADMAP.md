# Roadmap

## Milestone 0 — Foundation (current)

- [x] Bun + TypeScript + Ink scaffold
- [x] Local project registry
- [x] Add/list project interaction
- [x] Registry tests
- [x] Basic CI workflow
- [ ] Verify installation and checks in the target development environment

## Milestone 1 — Project and task management

- [ ] Open/select a registered project
- [ ] Create, list, update, and cancel tasks
- [ ] Persist tasks and status transitions
- [ ] Show project/task status and recent activity
- [ ] Add project validation (path exists and is a Git repository)

## Milestone 2 — Safe local execution

- [ ] Git worktree per task
- [ ] Explicit allowlist of executable tools
- [ ] Timeouts, cancellation, output capture, and audit logs
- [ ] Per-project and global concurrency limits
- [ ] Dry-run mode and approval for destructive commands

## Milestone 3 — First AI workflow

- [ ] Provider-neutral model adapter
- [ ] Planning agent creates structured task plans
- [ ] Developer agent operates only in task worktree
- [ ] Tests and lint checks run after changes
- [ ] Human review before opening a pull request

## Milestone 4 — Design-first workflow

- [ ] Figma connector and design context retrieval
- [ ] Design output / link attached to task
- [ ] Explicit user approval checkpoint
- [ ] Development starts only after approval

## Milestone 5 — GitHub delivery

- [ ] Branch and pull request creation
- [ ] CI status and review summaries
- [ ] Human approval before merge
- [ ] Release workflow with protected environment gates

## Milestone 6 — Scale and integrations

- [ ] Multiple concurrent project runs
- [ ] Retry/recovery and resumable task state
- [ ] Linear integration
- [ ] Optional web dashboard
