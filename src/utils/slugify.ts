// URL-safe slug for a tag: "Node.js" -> "node-js", "C++" -> "cplusplus".
// Tags are free text, so they can't be used as route params directly.
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replaceAll('+', 'plus')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
