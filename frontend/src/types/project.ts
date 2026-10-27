export type ProjectStatus = "active" | "paused" | "archived";

export interface Project {
  id: string;
  name: string;
  repositoryPath: string;
  githubUrl?: string;
  status: ProjectStatus;
  createdAt: string;
}

export interface ProjectRegistry {
  schemaVersion: 1;
  projects: Project[];
}
