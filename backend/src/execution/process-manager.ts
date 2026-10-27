import { spawn } from "node:child_process";

export interface ProcessOptions {
  command: string;
  args: string[];
  cwd: string;
  timeoutMs: number;
  signal: AbortSignal;
  onLog: (line: string) => void;
}

export class ProcessManager {
  async run(options: ProcessOptions): Promise<number> {
    const { command, args, cwd, timeoutMs, signal, onLog } = options;

    if (signal.aborted) {
      throw new Error("Execution cancelled");
    }

    return new Promise<number>((resolve, reject) => {
      const child = spawn(command, args, {
        cwd,
        shell: false,
        stdio: ["ignore", "pipe", "pipe"],
        env: {
          PATH: process.env.PATH ?? "",
          HOME: process.env.HOME ?? "",
          LANG: "en_US.UTF-8",
        },
      });

      let settled = false;
      let stdoutBuffer = "";
      let stderrBuffer = "";

      const cleanup = () => {
        clearTimeout(timeout);
        signal.removeEventListener("abort", abort);
      };

      const finish = (error?: Error, code?: number) => {
        if (settled) return;

        settled = true;
        cleanup();

        if (error) {
          reject(error);
        } else {
          resolve(code ?? 1);
        }
      };

      const abort = () => {
        child.kill("SIGTERM");
      };

      const timeout = setTimeout(() => {
        child.kill("SIGTERM");

        const forceKill = setTimeout(() => {
          child.kill("SIGKILL");
        }, 3_000);

        forceKill.unref();

        finish(new Error("Execution timed out"));
      }, timeoutMs);

      signal.addEventListener("abort", abort, { once: true });

      const consume = (chunk: string, stream: "stdout" | "stderr") => {
        const buffer = stream === "stdout" ? stdoutBuffer : stderrBuffer;

        const lines = (buffer + chunk).split("\n");
        const remainder = lines.pop() ?? "";

        if (stream === "stdout") {
          stdoutBuffer = remainder;
        } else {
          stderrBuffer = remainder;
        }

        for (const line of lines) {
          onLog(stream === "stderr" ? `[stderr] ${line}` : line);
        }
      };

      child.stdout.setEncoding("utf8");
      child.stderr.setEncoding("utf8");

      child.stdout.on("data", (chunk: string) => consume(chunk, "stdout"));

      child.stderr.on("data", (chunk: string) => consume(chunk, "stderr"));

      child.once("error", (error) => finish(error));

      child.once("close", (code) => {
        if (stdoutBuffer) onLog(stdoutBuffer);
        if (stderrBuffer) onLog(`[stderr] ${stderrBuffer}`);

        if (signal.aborted) {
          finish(new Error("Execution cancelled"));
        } else {
          finish(undefined, code ?? 1);
        }
      });
    });
  }
}
