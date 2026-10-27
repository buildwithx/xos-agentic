import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import type { Project, ProjectRegistry } from "../types/project";
import { getRegistryPath } from "../utils/paths";

const EMPTY_REGISTRY: ProjectRegistry = { schemaVersion: 1, projects: [] };

export class ProjectRegistryService {
  constructor(private readonly filePath = getRegistryPath()) {}

  async list(): Promise<Project[]> {
    return (await this.read()).projects;
  }

  async add(input: { name: string; repositoryPath: string; githubUrl?: string }): Promise<Project> {
    const name = input.name.trim();
    const repositoryPath = input.repositoryPath.trim();
    if (!name) throw new Error("Project name is required.");
    if (!repositoryPath) throw new Error("Repository path is required.");

    const registry = await this.read();
    const duplicate = registry.projects.some(
      (project) => project.repositoryPath === repositoryPath || project.name.toLowerCase() === name.toLowerCase(),
    );
    if (duplicate) throw new Error("A project with the same name or repository path already exists.");

    const project: Project = {
      id: crypto.randomUUID(),
      name,
      repositoryPath,
      ...(input.githubUrl?.trim() ? { githubUrl: input.githubUrl.trim() } : {}),
      status: "active",
      createdAt: new Date().toISOString(),
    };
    registry.projects.push(project);
    await this.write(registry);
    return project;
  }

  private async read(): Promise<ProjectRegistry> {
    try {
      const raw = await readFile(this.filePath, "utf8");
      const parsed: unknown = JSON.parse(raw);
      if (!isRegistry(parsed)) throw new Error("Project registry has an invalid format.");
      return parsed;
    } catch (error) {
      if (isNodeError(error) && error.code === "ENOENT") return structuredClone(EMPTY_REGISTRY);
      throw error;
    }
  }

  private async write(registry: ProjectRegistry): Promise<void> {
    await mkdir(dirname(this.filePath), { recursive: true });
    const temporaryPath = `${this.filePath}.tmp`;
    await writeFile(temporaryPath, `${JSON.stringify(registry, null, 2)}\n`, { mode: 0o600 });
    await rename(temporaryPath, this.filePath);
  }
}

function isRegistry(value: unknown): value is ProjectRegistry {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<ProjectRegistry>;
  return candidate.schemaVersion === 1 && Array.isArray(candidate.projects);
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && "code" in error;
}
