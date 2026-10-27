# Engineering Workflow

## Branches and tasks

Use the repository's existing branch and naming conventions. Keep a branch focused on one reviewable outcome and connect it to the task or issue. Confirm the target branch and any release constraints before work that could affect shared delivery.

## Pull requests

A pull request should explain the user or engineering outcome, summarize the change, link its task, and state verification performed and remaining risks. Keep changes scoped so reviewers can assess them. Do not claim checks passed without recorded evidence.

## Code review

Review correctness, security and data handling, compatibility, maintainability, and coverage of acceptance criteria. Resolve blocking findings before merge or record an explicit authorized exception. Review approval is not a substitute for required automated checks or product approval.

## Testing and CI

Choose verification from the change's risk and acceptance criteria: focused tests, integration checks, manual review, and regression checks as appropriate. Coordinate with existing CI rules; identify failing or unavailable checks and their impact. Do not weaken or bypass required checks without authorization.

## Release coordination

Before merge or deployment, confirm dependencies, migrations, configuration, release ownership, smoke checks, and rollback steps where applicable. Coordinate sequence across repositories or teams and report status as verified, blocked, or unverified.
