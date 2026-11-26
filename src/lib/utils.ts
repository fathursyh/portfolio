export { cn } from "cn";

export function withBase(path: string): string {
  if (path.startsWith("http")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
