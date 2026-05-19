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
  const [content, setContent] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from('site_content').select('*');
    const map: Record<string, string> = {};
    data?.forEach((row: SiteContentRow) => {
      map[`${row.page}.${row.section}.${row.field_key}`] = row.field_value ?? '';
    });
    setContent(map);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const get = (page: string, section: string, field: string, fallback: string): string => {
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