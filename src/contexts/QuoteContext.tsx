import { createContext, useContext, useState, useCallback, useEffect } from 'react';

export interface QuoteServiceItem {
  id: string;
  serviceId: string;
  img: string;
  icon: string;
}

interface QuoteContextType {
  items: QuoteServiceItem[];
  addItem: (serviceId: string, img: string, icon: string) => void;
  removeItem: (id: string) => void;
  hasItem: (serviceId: string) => boolean;
  clearItems: () => void;
  itemCount: number;
  isPanelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
  togglePanel: () => void;
}

const QuoteContext = createContext<QuoteContextType | null>(null);

const STORAGE_KEY = 'map_robot_quote_items';

function loadItems(): QuoteServiceItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveItems(items: QuoteServiceItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

let itemCounter = Date.now();

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteServiceItem[]>(loadItems);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    saveItems(items);
  }, [items]);

  const addItem = useCallback((serviceId: string, img: string, icon: string) => {
    setItems((prev) => {
      if (prev.some((i) => i.serviceId === serviceId)) return prev;
      return [...prev, { id: `${serviceId}_${++itemCounter}`, serviceId, img, icon }];
    });
    setIsPanelOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const hasItem = useCallback((serviceId: string) => {
    return items.some((i) => i.serviceId === serviceId);
  }, [items]);

  const clearItems = useCallback(() => {
    setItems([]);
  }, []);

  const openPanel = useCallback(() => setIsPanelOpen(true), []);
  const closePanel = useCallback(() => setIsPanelOpen(false), []);
  const togglePanel = useCallback(() => setIsPanelOpen((p) => !p), []);

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        hasItem,
        clearItems,
        itemCount: items.length,
        isPanelOpen,
        openPanel,
        closePanel,
        togglePanel,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error('useQuote must be used within QuoteProvider');
  }
  return ctx;
}