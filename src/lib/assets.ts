/** Prefix a public/ path with the site base URL. GitHub Pages serves the site under /<repo>/. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return (base.endsWith("/") ? base : base + "/") + path.replace(/^\//, "");
}
