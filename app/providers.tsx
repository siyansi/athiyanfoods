"use client";

import type { ReactNode } from "react";
import { EnquiryCartProvider } from "@/hooks/EnquiryCart";
import { WhatsAppFloat } from "@/hooks/WhatsAppFloat";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <EnquiryCartProvider>
      {children}
      <WhatsAppFloat />
    </EnquiryCartProvider>
  );
}