import { homedir } from "node:os";
import { join } from "node:path";

export function getWorkspaceHome(): string {
  return process.env.X_WORKSPACE_HOME ?? join(homedir(), ".x-workspace");
}

export function getRegistryPath(): string {
  return join(getWorkspaceHome(), "projects.json");
}
