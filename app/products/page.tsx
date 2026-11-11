import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Home, Sparkles, Layers } from "lucide-react";
import { units, totalProducts } from "@/lib/catlog";
import { waLink } from "@/lib/contact";
import { Reveal } from "@/hooks/Reveal";
import { ProductCard } from "@/hooks/ProductCard";

export const metadata: Metadata = {
  title: `Products | Athiyan Food Machines — ${totalProducts}+ Machines`,
  description:
    "Explore the full range: batter, masala & roasting, blending, health mix, idiyappam, poultry, chappathi, bakery, pickle, snacks, packing and hotel kitchen machines. Enquire on WhatsApp.",
  openGraph: {
    title: "Our Machines | Athiyan Food Machines",
    description:
      "Batter, masala, blending, bakery, poultry, chappathi and kitchen machines — enquire directly on WhatsApp.",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc]">
      {/* Background ambient frosted blobs */}
      <div
        className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-brand/10 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-32 h-[500px] w-[500px] rounded-full bg-steel-dark/10 blur-[140px]"
        aria-hidden
      />

      {/* Hero Header */}
      <section className="relative px-4 pt-8 pb-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/50 bg-gradient-to-br from-steel-dark via-[#1e293b] to-steel-dark p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.4)] backdrop-blur-2xl md:p-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-soft backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Heavy-Duty SS 304 Food Grade
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              {totalProducts}+ Machines Across{" "}
              <span className="text-brand">{units.length} Units</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              Every machine card connects straight to our direct WhatsApp
              inquiry channel. Select any unit or machine to receive technical
              drawings, motor horsepower details, and factory direct quotes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Unit Sticky Quick-Nav */}
      <nav className="sticky top-[72px] z-30 border-y border-white/40 bg-white/70 shadow-sm backdrop-blur-xl sm:top-[88px]">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex shrink-0 items-center gap-1.5 pr-2 text-xs font-bold text-steel-dark">
            <Layers className="h-4 w-4 text-brand" />
            <span className="hidden sm:inline">Jump to:</span>
          </div>
          {units.map((u) => (
            <a
              key={u.id}
              href={`#${u.id}`}
              className="shrink-0 rounded-full border border-slate-200/80 bg-white/60 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white hover:text-brand"
            >
              {u.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Product Sections */}
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {units.map((u, i) => (
          <section
            key={u.id}
            id={u.id}
            className="scroll-mt-36 py-10"
            aria-label={u.name}
          >
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                    Unit {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-steel-dark md:text-3xl">
                  {u.name}
                </h2>
                <p className="mt-1.5 max-w-2xl text-xs text-slate-500 sm:text-sm">
                  {u.description}
                </p>
              </div>
              <span className="rounded-full border border-brand/20 bg-brand-soft/80 px-3.5 py-1 text-xs font-bold text-brand shadow-sm backdrop-blur-md">
                {u.products.length} Machines
              </span>
            </Reveal>

            <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
              {u.products.map((p, j) => (
                <ProductCard
                  key={p.img}
                  product={p}
                  unitId={u.id}
                  unitName={u.name}
                  index={j}
                />
              ))}
            </ul>

            {i < units.length - 1 && (
              <div className="mt-14 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            )}
          </section>
        ))}

        {/* Bottom CTA Glass Card */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-steel-dark via-[#1e293b] to-steel-dark p-8 text-center text-white shadow-2xl backdrop-blur-2xl md:p-14">
            <h2 className="relative font-display text-2xl font-bold tracking-tight md:text-4xl">
              Not sure which machine fits your business?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-xs text-slate-300 md:text-base">
              Send us your raw material and expected output quantity (kg/hr or
              pieces/hr). Our engineering team will recommend the right capacity
              and motor setup.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink(
                  "Hello Athiyan Food Machines! I need guidance to select the right machines for my business."
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.03] hover:bg-[#20ba59] sm:text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                Ask on WhatsApp
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-steel-dark sm:text-sm"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}