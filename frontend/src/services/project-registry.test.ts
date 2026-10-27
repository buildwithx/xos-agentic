import { afterEach, describe, expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ProjectRegistryService } from "./project-registry";

let tempDir = "";
afterEach(async () => {
  if (tempDir) await rm(tempDir, { recursive: true, force: true });
  tempDir = "";
});

describe("ProjectRegistryService", () => {
  test("starts with an empty registry and adds a project", async () => {
    tempDir = await mkdtemp(join(tmpdir(), "x-workspace-test-"));
    const service = new ProjectRegistryService(join(tempDir, "projects.json"));
    expect(await service.list()).toEqual([]);
    const project = await service.add({
      name: "Savorly",
      repositoryPath: "/Projects/savorly",
    });
    expect(project.name).toBe("Savorly");
    expect(await service.list()).toHaveLength(1);
  });

  test("rejects duplicate project names", async () => {
    tempDir = await mkdtemp(join(tmpdir(), "x-workspace-test-"));
    const service = new ProjectRegistryService(join(tempDir, "projects.json"));
    await service.add({ name: "Savorly", repositoryPath: "/Projects/savorly" });
    await expect(
      service.add({ name: "savorly", repositoryPath: "/other/path" }),
    ).rejects.toThrow("already exists");
  });
});
