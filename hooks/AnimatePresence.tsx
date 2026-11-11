"use client";


import type { ReactNode } from "react";

/** Minimal AnimatePresence substitute for conditional rendering. */
export function AnimatePresence({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
