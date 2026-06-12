export const STORAGE_BASE = `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/storage/v1/object/public/site-assets`;

export function storageUrl(filename: string): string {
  return `${STORAGE_BASE}/${filename}`;
}