"use client";

import { waLink } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(
        "Hello Athiyan Food Machines! I would like to enquire about your machines.",
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.2 7L4.6 28l6.3-1.6c1.9 1 4 1.6 6.2 1.6h.1c6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.8c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.7 1 1-3.6-.3-.4a9.2 9.2 0 0 1-1.4-5.2c0-5.2 4.3-9.4 9.5-9.4 2.5 0 4.9 1 6.7 2.8a9.3 9.3 0 0 1 2.8 6.6c0 5.2-4.3 9.4-9.6 9.4zm5.3-7c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.5-.6-2.8-1.8-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5v-.5c0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
      </svg>
    </a>
  );
}
