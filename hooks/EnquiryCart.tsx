
"use client";


import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { MessageCircle, X, Check, Trash2, ClipboardList } from "lucide-react";
import { waLink } from "@/lib/contact";
import { AnimatePresence } from "@/hooks/AnimatePresence";

export type SelectedMachine = {
  id: string; // unitId:img
  name: string;
  unit: string;
};

type CartContextValue = {
  items: SelectedMachine[];
  has: (id: string) => boolean;
  toggle: (m: SelectedMachine) => void;
  remove: (id: string) => void;
  clear: () => void;
  openDrawer: () => void;
  isOpen: boolean;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useEnquiryCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useEnquiryCart must be used inside EnquiryCartProvider");
  return ctx;
}

export function cartMessage(items: SelectedMachine[]): string {
  const lines = [
    "Hello Athiyan Food Machines!",
    "",
    "*Machine Enquiry*",
    "",
    "Selected Machines :",
    ...items.map((m, i) => `${i + 1}. ${m.name} — ${m.unit}`),
    "",
    "Please share the full details, capacity and price.",
  ];
  return lines.join("\n");
}

export function EnquiryCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<SelectedMachine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const has = useCallback((id: string) => items.some((i) => i.id === id), [items]);
  const toggle = useCallback((m: SelectedMachine) => {
    setItems((prev) =>
      prev.some((i) => i.id === m.id) ? prev.filter((i) => i.id !== m.id) : [...prev, m],
    );
  }, []);
  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);
  const clear = useCallback(() => setItems([]), []);
  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ items, has, toggle, remove, clear, openDrawer, isOpen, closeDrawer }),
    [items, has, toggle, remove, clear, openDrawer, isOpen, closeDrawer],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      {/* Floating bar */}
      <div
        className={`fixed bottom-5 left-1/2 z-40 w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 transition-all duration-500 ${
          items.length > 0 && !isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={openDrawer}
          className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/80 px-5 py-3.5 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.35)] backdrop-blur-xl transition-transform duration-200 hover:scale-[1.02]"
        >
          <span className="flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
              <ClipboardList className="h-4 w-4" />
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-steel-dark px-1 text-[10px] font-bold text-white">
                {items.length}
              </span>
            </span>
            <span className="text-left">
              <span className="block text-sm font-bold text-steel-dark">
                {items.length} machine{items.length > 1 ? "s" : ""} selected
              </span>
              <span className="block text-[11px] font-medium text-muted-foreground">
                Send all selections on WhatsApp
              </span>
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white">
            <MessageCircle className="h-3.5 w-3.5" />
            Send
          </span>
        </button>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60]">
            <div
              className="animate-in absolute inset-0 bg-steel-dark/40 backdrop-blur-[2px]"
              onClick={closeDrawer}
            />
            <aside
              className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ animation: "drawer-in .3s cubic-bezier(.22,1,.36,1)" }}
            >
              <div className="flex items-center justify-between border-b border-border/70 px-6 py-5">
                <div>
                  <p className="font-display text-lg font-bold text-steel-dark">Machine selected</p>
                  <p className="text-xs text-muted-foreground">
                    {items.length} machine{items.length > 1 ? "s" : ""} in your enquiry list
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Close enquiry list"
                  className="rounded-xl border border-border bg-card p-2 text-steel-dark transition-transform hover:scale-105"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto px-6 py-5">
                {items.length === 0 && (
                  <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                    No machines selected yet. Tap{" "}
                    <span className="font-semibold text-steel-dark">Add to Enquiry</span> on any
                    machine card.
                  </p>
                )}
                {items.map((m) => (
                  <div
                    key={m.id}
                    className="group flex items-start justify-between gap-3 rounded-2xl border border-border/70 bg-card p-4 transition-all duration-200 hover:border-brand/30 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-bold text-steel-dark">{m.name}</p>
                      <p className="text-xs text-brand">{m.unit}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(m.id)}
                      aria-label={`Remove ${m.name}`}
                      className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-brand-soft hover:text-brand"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-border/70 px-6 py-5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Your selected machines will be sent as a WhatsApp message with
                  their names and categories.
                </p>
                <a
                  href={items.length > 0 ? waLink(cartMessage(items)) : undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={items.length === 0}
                  className={`mt-3 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 ${
                    items.length === 0
                      ? "cursor-not-allowed bg-[#25D366]/40"
                      : "bg-[#25D366] hover:scale-[1.02] hover:shadow-lg"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Send Enquiry on WhatsApp
                </a>
                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={clear}
                    className="mt-2 w-full rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    Clear list
                  </button>
                )}
              </div>
            </aside>
          </div>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
}

export { Check };
