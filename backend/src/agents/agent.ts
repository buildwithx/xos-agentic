import type { AgentRole, AgentTask } from "../domain/task.js";

export interface AgentExecutionContext {
  workspacePath: string;
  signal: AbortSignal;
  onLog: (line: string) => void;
}

export interface AgentResult {
  exitCode: number;
  summary: string;
  artifacts: string[];
}

export interface AgentAdapter {
  readonly role: AgentRole;

  execute(
    task: AgentTask,
    context: AgentExecutionContext,
  ): Promise<AgentResult>;
}
