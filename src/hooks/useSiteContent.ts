import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

export interface SiteContentRow {
  id: number;
  page: string;
  section: string;
  field_key: string;
  field_value: string | null;
  updated_at: string;
}

export function useSiteContent() {
  const [content, setContent] = useState<Record<string, string>>();
  const [loading, setLoading] = useState(true);

  const buildMap = useCallback((rows: SiteContentRow[]) => {
    const map: Record<string, string> = {};
    rows?.forEach((row: SiteContentRow) => {
      map[`${row.page}.${row.section}.${row.field_key}`] = row.field_value ?? '';
    });
    setContent(map);
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from('site_content').select('*');
    buildMap(data ?? []);
    setLoading(false);
  }, [buildMap]);

  useEffect(() => {
    load();

    // Realtime subscription for live updates
    const channel = supabase
      .channel('site_content_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'site_content' },
        (payload) => {
          setContent((prev) => {
            const next = { ...prev };
            if (payload.eventType === 'DELETE' && payload.old) {
              const old = payload.old as SiteContentRow;
              delete next[`${old.page}.${old.section}.${old.field_key}`];
            } else if (payload.new) {
              const row = payload.new as SiteContentRow;
              next[`${row.page}.${row.section}.${row.field_key}`] = row.field_value ?? '';
            }
            return next;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [load]);

  const get = (page: string, section: string, field: string, fallback: string): string => {
    if (!content) return fallback;
    return content[`${page}.${section}.${field}`] ?? fallback;
  };

  return { content, get, loading, refresh: load };
}

export function useSiteContentRaw() {
  const [rows, setRows] = useState<SiteContentRow[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from('site_content').select('*').order('id');
    setRows(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const upsert = useCallback(async (updates: { page: string; section: string; field_key: string; field_value: string }[]) => {
    const { error } = await supabase.from('site_content').upsert(
      updates.map((u) => ({ ...u, updated_at: new Date().toISOString() })),
      { onConflict: 'page,section,field_key' }
    );
    if (error) throw error;
    await load();
  }, [load]);

  return { rows, loading, refresh: load, upsert };
}