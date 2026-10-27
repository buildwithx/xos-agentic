# Risk and Release

## Risk register

Track risks that could affect user outcomes, security, scope, cost, schedule, or operations. For each, record a concise cause and event, likelihood, impact, owner, mitigation, and trigger or review date. Use qualitative ratings when evidence does not support precise numbers. Escalate risks that need a decision; do not bury them in status prose.

## Change control

For a proposed change, state its value, affected requirements and tasks, dependencies, verification impact, and likely delivery impact. Recommend whether to include, defer, replace, or decline it. Get founder approval for material changes to approved scope, then update the source-of-truth artifacts and notify affected owners.

## Launch readiness

Confirm applicable acceptance criteria, test and review evidence, critical defect disposition, configuration and migration steps, deployment owner, smoke checks, monitoring, communications, and support ownership. Call out unknowns explicitly. Do not recommend launch while a critical readiness item is unverified unless an authorized decision accepts the risk.

## Rollback and recovery

Define observable rollback triggers, the decision owner, rollback steps, and how to verify recovery. Consider data migrations, backups, compatibility, and whether rollback can safely reverse data changes. If rollback is not viable, document the forward-recovery plan and required safeguards before release.

## Maintenance

After launch, review operational signals and user feedback. Assign ownership for incidents and follow-up work. Prioritize defects by severity, impact, and frequency; track reliability, support burden, and cost where relevant. Close the release loop with verified outcomes and lessons that change future plans.
