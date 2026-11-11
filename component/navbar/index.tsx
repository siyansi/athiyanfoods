"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-2.5 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.18)] backdrop-blur-xl transition-all duration-300 sm:px-5",
          scrolled && "bg-white/85 shadow-[0_14px_40px_-14px_rgb(0_0_0/0.3)]",
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src="/images/athiyan-logo.jpg"
            alt="Athiyan Food Machines logo"
            className="h-10 w-auto rounded-lg bg-white md:h-11"
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-base font-bold tracking-tight text-steel-dark">
              ATHIYAN
            </span>
            <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-brand">
              Food Machines
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold text-foreground/70 transition-all duration-200 hover:scale-[1.04] hover:bg-white hover:text-steel-dark hover:shadow-sm",
                pathname === item.to && "bg-brand-soft text-brand",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink("Hello Athiyan Food Machines! I would like to enquire about your machines.")}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:scale-[1.05] hover:shadow-md sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Enquire
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl bg-white/80 p-2 text-steel-dark transition-transform hover:scale-105 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/60 bg-white/90 p-2 shadow-xl backdrop-blur-xl lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted",
                pathname === item.to && "bg-brand-soft text-brand",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={waLink("Hello Athiyan Food Machines! I would like to enquire about your machines.")}
            target="_blank"
            rel="noreferrer"
            className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}