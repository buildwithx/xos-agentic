import { z } from "zod";

export const AgentRoleSchema = z.enum([
  "product",
  "designer",
  "developer",
  "reviewer",
  "qa",
]);

export type AgentRole = z.infer<typeof AgentRoleSchema>;

export const TaskStatusSchema = z.enum([
  "pending",
  "ready",
  "running",
  "awaiting_approval",
  "succeeded",
  "failed",
  "cancelled",
]);

export type TaskStatus = z.infer<typeof TaskStatusSchema>;

export const CreateTaskSchema = z.object({
  projectId: z.string().min(1),
  title: z.string().min(1).max(200),
  description: z.string().min(1),
  acceptanceCriteria: z.array(z.string()).default([]),
  role: AgentRoleSchema,
  priority: z.number().int().min(0).max(100).default(50),
  dependsOn: z.array(z.string()).default([]),
});

export type CreateTaskInput = z.infer<typeof CreateTaskSchema>;

export interface AgentTask extends CreateTaskInput {
  id: string;
  status: TaskStatus;
  createdAt: string;
}
