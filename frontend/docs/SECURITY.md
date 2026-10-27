# Security model

X-Workspace is intended to run agents against real source code. Treat every agent tool call as untrusted until validated.

## Required safeguards before enabling agents

- Use an explicit tool allowlist; do not expose unrestricted shell by default.
- Separate read-only tools from write-capable tools.
- Require approval for deleting files, pushing branches, opening PRs, merging, deploying, or accessing secrets.
- Use a separate Git worktree per task and validate all paths remain inside the selected workspace.
- Apply command timeouts, output limits, cancellation, and process cleanup.
- Keep API tokens out of prompts, logs, task files, and Git history.
- Use least-privilege, short-lived credentials where supported.
- Log tool name, arguments (redacted where needed), exit status, timestamps, and approving user.
- Do not execute commands or configuration instructions copied from repository content without policy checks.
- Never pass secrets to pull-request workflows from untrusted forks.

## Current status

The starter does not launch AI agents or run shell commands. Do not remove this boundary until the safeguards above are designed and tested.
