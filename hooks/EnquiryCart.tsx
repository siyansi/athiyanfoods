
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  MessageCircle,
  X,
  Trash2,
  ClipboardList,
  Minus,
  Plus,
} from "lucide-react";
import { waLink } from "@/lib/contact";
import { AnimatePresence } from "@/hooks/AnimatePresence";

export type SelectedMachine = {
  id: string;
  name: string;
  unit: string;
  quantity: number;
};

type CartContextValue = {
  items: SelectedMachine[];
  has: (id: string) => boolean;
  quantity: (id: string) => number;
  increment: (machine: Omit<SelectedMachine, "quantity">) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  openDrawer: () => void;
  isOpen: boolean;
  closeDrawer: () => void;
  totalQuantity: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useEnquiryCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useEnquiryCart must be used inside EnquiryCartProvider");
  }

  return context;
}

export function cartMessage(items: SelectedMachine[]) {
  const lines = [
    "Hello Athiyan Food Machines!",
    "",
    "*Machine Enquiry*",
    "",
    "Selected Machines:",
    ...items.map(
      (machine, index) =>
        `${index + 1}. ${machine.name} — ${machine.unit} (Quantity: ${machine.quantity})`,
    ),
    "",
    `Total machines: ${items.reduce((total, item) => total + item.quantity, 0)}`,
    "",
    "Please share the full details, capacity and price.",
  ];

  return lines.join("\n");
}

export function EnquiryCartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<SelectedMachine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const has = useCallback(
    (id: string) => items.some((item) => item.id === id && item.quantity > 0),
    [items],
  );

  const quantity = useCallback(
    (id: string) => items.find((item) => item.id === id)?.quantity ?? 0,
    [items],
  );

  const increment = useCallback(
    (machine: Omit<SelectedMachine, "quantity">) => {
      setItems((previous) => {
        const existing = previous.find((item) => item.id === machine.id);

        if (existing) {
          return previous.map((item) =>
            item.id === machine.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        return [...previous, { ...machine, quantity: 1 }];
      });
    },
    [],
  );

  const decrement = useCallback((id: string) => {
    setItems((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setItems((previous) => previous.filter((item) => item.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);

  const totalQuantity = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      has,
      quantity,
      increment,
      decrement,
      remove,
      clear,
      openDrawer,
      isOpen,
      closeDrawer,
      totalQuantity,
    }),
    [
      items,
      has,
      quantity,
      increment,
      decrement,
      remove,
      clear,
      openDrawer,
      isOpen,
      closeDrawer,
      totalQuantity,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}

      {/* Floating enquiry bar */}
      <div
        className={`fixed bottom-5 left-1/2 z-40 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 transition-all duration-300 ${
          totalQuantity > 0 && !isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={openDrawer}
          className="flex w-full items-center justify-between gap-3 rounded-2xl border border-red-100 bg-white px-4 py-3 shadow-[0_12px_40px_-12px_rgba(127,29,29,0.25)] transition hover:-translate-y-0.5 hover:shadow-lg sm:px-5"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white">
              <ClipboardList className="h-5 w-5" />
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#7f1d1d] px-1 text-[10px] font-bold text-white">
                {totalQuantity}
              </span>
            </span>

            <span className="min-w-0 text-left">
              <span className="block truncate text-sm font-bold text-slate-900">
                {totalQuantity} machine{totalQuantity === 1 ? "" : "s"} selected
              </span>
              <span className="block text-[11px] text-slate-500">
                Review your enquiry list
              </span>
            </span>
          </span>

          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#1fb85a]">
            <MessageCircle className="h-4 w-4" />
            Send
          </span>
        </button>
      </div>

      {/* Enquiry drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60]">
            <button
              type="button"
              aria-label="Close enquiry panel"
              onClick={closeDrawer}
              className="absolute inset-0 h-full w-full cursor-default bg-slate-950/40 backdrop-blur-[2px]"
            />

            <aside
              className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-red-100 bg-white shadow-2xl"
              style={{ animation: "drawer-in .3s cubic-bezier(.22,1,.36,1)" }}
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
                <div>
                  <p className="text-lg font-bold tracking-tight text-slate-900">
                    Your Enquiry
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {totalQuantity} machine{totalQuantity === 1 ? "" : "s"} selected
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Close enquiry list"
                  className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto px-5 py-5 sm:px-6">
                {items.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-red-200 bg-red-50/40 px-5 py-10 text-center">
                    <ClipboardList className="mx-auto h-8 w-8 text-red-300" />
                    <p className="mt-3 text-sm font-semibold text-slate-800">
                      No machines selected
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Add machines from the product cards to start your enquiry.
                    </p>
                  </div>
                ) : (
                  items.map((machine) => (
                    <div
                      key={machine.id}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-4 transition hover:border-red-100 hover:shadow-sm"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900">
                          {machine.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {machine.unit}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-red-600">
                          Quantity: {machine.quantity}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-1">
                        <button
                          type="button"
                          onClick={() => decrement(machine.id)}
                          aria-label={`Decrease ${machine.name} quantity`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-200 text-red-600 transition hover:bg-red-50"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-bold text-slate-900">
                          {machine.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            increment({
                              id: machine.id,
                              name: machine.name,
                              unit: machine.unit,
                            })
                          }
                          aria-label={`Increase ${machine.name} quantity`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white transition hover:bg-red-700"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => remove(machine.id)}
                          aria-label={`Remove ${machine.name}`}
                          className="ml-1 rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-slate-100 bg-white px-5 py-5 sm:px-6">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Total quantity</span>
                  <span className="font-bold text-slate-900">
                    {totalQuantity} machine{totalQuantity === 1 ? "" : "s"}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-500">
                  Your selected machines and quantities will be included in your
                  WhatsApp enquiry.
                </p>

                <a
                  href={items.length > 0 ? waLink(cartMessage(items)) : undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={items.length === 0}
                  onClick={(event) => {
                    if (items.length === 0) event.preventDefault();
                  }}
                  className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition ${
                    items.length === 0
                      ? "cursor-not-allowed bg-green-300"
                      : "bg-[#25D366] hover:-translate-y-0.5 hover:bg-[#1fb85a] hover:shadow-lg"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Send Enquiry on WhatsApp
                </a>

                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={clear}
                    className="mt-2 w-full rounded-full border border-slate-200 px-6 py-2.5 text-xs font-semibold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  >
                    Clear enquiry list
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
