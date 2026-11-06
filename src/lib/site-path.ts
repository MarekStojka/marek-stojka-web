/** Prefix local URLs for a subdirectory host; leave fragments and external URLs alone. */
export function withBase(path: string, base = import.meta.env?.BASE_URL ?? '/'): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const prefix = base.replace(/\/+$/, '');
  if (!prefix || path === prefix || path.startsWith(`${prefix}/`)) return path;
  return `${prefix}${path}`;
}

/** Hosts may redirect /page to /page/ during an animated navigation. */
export function samePage(actual: string, target: string): boolean {
  return new URL(actual, 'https://local.invalid').pathname.replace(/\/+$/, '')
    === new URL(target, 'https://local.invalid').pathname.replace(/\/+$/, '');
}
