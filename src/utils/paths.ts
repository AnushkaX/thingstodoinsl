// Utility function to get the base path for assets
// This ensures images work correctly on GitHub Pages with subdirectories
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Vite provides BASE_URL which includes the base path (e.g., '/thingstodoinsl/')
  const basePath = import.meta.env.BASE_URL;
  // Ensure basePath ends with a slash
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  return `${normalizedBase}${cleanPath}`;
}
