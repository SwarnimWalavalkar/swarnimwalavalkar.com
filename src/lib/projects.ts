import { z } from "zod";

const projectSchema = z.object({
  name: z.string(),
  repoURL: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export async function getProjects(): Promise<Project[]> {
  return [
    {
      name: "Web Service Starter",
      repoURL: "https://github.com/SwarnimWalavalkar/webServiceStarter",
      description: "An opinionated backend web service scaffolding",
    },
    {
      name: "Haskell Scheme",
      repoURL: "https://github.com/SwarnimWalavalkar/haskell-scheme",
      description: "A Scheme implementation in Haskell",
    },
    {
      name: "Hermes",
      repoURL: "https://github.com/SwarnimWalavalkar/hermes",
      description:
        "Type safe message bus, and RPC style services. Powered by Redis Streams",
    },
    {
      name: "Redis Clone",
      repoURL: "https://github.com/SwarnimWalavalkar/lilredis",
      description: "A very naive redis clone, written in Rust",
    },
    {
      name: "CQLite",
      repoURL: "https://github.com/SwarnimWalavalkar/cql-lite",
      description: "A simple SQLite database clone in C",
    },
    {
      name: "Container Provisioning Engine",
      repoURL:
        "https://github.com/SwarnimWalavalkar/container_provisioning_engine",
      description:
        "provision + manage docker containers, exposed behind a Traefik reverse proxy with TLS",
    },
  ];
}
