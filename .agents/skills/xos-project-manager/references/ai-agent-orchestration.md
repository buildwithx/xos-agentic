# AI Agent Orchestration

## Responsibilities and delegation

Assign each agent one bounded responsibility, one deliverable, and an explicit owner for integration. Provide the relevant context, approved requirements, constraints, dependencies, files or interfaces, and acceptance criteria. Ask for assumptions and blockers early; agents must not silently change agreed scope.

## Parallel execution

Parallelize only work that has stable interfaces and no unresolved shared decision. Identify shared files and integration points before dispatch. Sequence dependent work explicitly, and avoid concurrent edits to the same files unless coordination is intentional. Reconcile outputs and resolve conflicts before treating parallel tasks as complete.

## Dependencies and evidence

Represent dependencies by task identifier and state what they unlock. Each completion report should include the deliverable, changed artifacts, verification performed and results, remaining risks, and any assumptions. Agent reports are evidence to review, not automatic approval.

## Approval gates

Keep founder approval for material scope changes, key design choices when required by the workflow, costly or irreversible actions, security-sensitive decisions, external commitments, and production releases. Pause dependent work at an approval gate. Record the decision and update the plan so downstream agents use the approved version.

## Integration

The project manager or named integrator checks that outputs fit together, meet the same requirements, and have been verified as a whole. Individual task completion does not imply project completion or release readiness.
