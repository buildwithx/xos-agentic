import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/health", () => ({
  status: "ok",
  service: "xos",
  runtime: "node",
}));

await app.listen({
  host: "127.0.0.1",
  port: 4317,
});
