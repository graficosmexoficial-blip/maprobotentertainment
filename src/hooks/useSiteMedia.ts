import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";

interface MediaItem {
  id: number;
  section: string;
  media_key: string;
  media_type: string;
  url: string;
  filename: string;
  sort_order: number;
}

const cache: Record<string, MediaItem[]> = {};

export function useSiteMedia(section: string) {
  const [items, setItems] = useState<MediaItem[]>(cache[section] || []);
  const [loading, setLoading] = useState(!cache[section]);
  const fetchedRef = useRef(false);

  const fetchMedia = useCallback(async () => {
    if (cache[section]) {
      setItems(cache[section]);
      setLoading(false);
      return;
    }
    const { data, error } = await supabase
      .from("site_media")
      .select("*")
      .eq("section", section)
      .order("sort_order", { ascending: true });

    if (!error && data) {
      cache[section] = data as MediaItem[];
      setItems(data as MediaItem[]);
    }
    setLoading(false);
  }, [section]);

  useEffect(() => {
    if (!fetchedRef.current) {
      fetchedRef.current = true;
      fetchMedia();
    }
  }, [fetchMedia]);

  const getMedia = useCallback(
    (key: string, fallback: string): string => {
      const found = items.find((i) => i.media_key === key);
      if (!found?.url) return fallback;
      // Si la URL apunta al bucket de Supabase vacío, usar fallback
      if (found.url.includes('helloreaddy.com') || found.url.includes('/storage/v1/object/public/site-assets/')) {
        return fallback || found.url;
      }
      return found.url;
    },
    [items]
  );

  const refresh = useCallback(() => {
    delete cache[section];
    fetchedRef.current = false;
    setLoading(true);
    fetchMedia();
  }, [section, fetchMedia]);

  return { items, getMedia, loading, refresh };
}

export function clearSiteMediaCache() {
  Object.keys(cache).forEach((k) => delete cache[k]);
}