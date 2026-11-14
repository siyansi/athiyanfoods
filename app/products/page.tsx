
import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  ArrowRight,
  Layers3,
  MoveUpRight,
} from "lucide-react";
import { units, totalProducts } from "@/lib/catlog";
import { waLink } from "@/lib/contact";
import { Reveal } from "@/hooks/Reveal";
import { ProductCard } from "@/hooks/ProductCard";

export const metadata: Metadata = {
  title: `Products | Athiyan Food Machines — ${totalProducts}+ Machines`,
  description:
    "Explore food processing, commercial kitchen, bakery, poultry, packing and industrial food machines from Athiyan Food Machines.",
  openGraph: {
    title: "Our Machines | Athiyan Food Machines",
    description:
      "Explore our range of food processing and commercial kitchen machines.",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Subtle page background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[420px] w-full bg-gradient-to-b from-red-50/60 to-transparent"
      />

      {/* Page heading */}
      <section className="relative px-4 pb-8  pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-26">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700 sm:text-xs">
                  Athiyan Food Machines
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                Machines built for
                <span className="text-red-600"> better business.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Explore our complete range of reliable food processing and
                commercial kitchen machines. Choose the machines you need and
                send your enquiry directly to our team.
              </p>

              {/* <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#machine-units"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-xs font-bold text-white shadow-sm shadow-red-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md sm:text-sm"
                >
                  Explore Machines
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={waLink(
                    "Hello Athiyan Food Machines! I would like to know more about your machines."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-700 sm:text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  Talk to our team
                </a>
              </div> */}
            </div>
          </Reveal>

          {/* Compact stats */}
          {/* <Reveal delay={100}> */}
            {/* <div className="mt-10 grid grid-cols-2 gap-3 border-y border-slate-100 py-5 sm:flex sm:items-center sm:gap-0">
              <div className="sm:flex-1 sm:px-6 sm:first:pl-0">
                <p className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  {totalProducts}+
                </p>
                <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                  Products available
                </p>
              </div>

              <div className="sm:flex-1 sm:border-l sm:border-slate-200 sm:px-6">
                <p className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  {units.length}
                </p>
                <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                  Machine categories
                </p>
              </div>

              <div className="sm:flex-1 sm:border-l sm:border-slate-200 sm:px-6">
                <p className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  SS 304
                </p>
                <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                  Food-grade options
                </p>
              </div>

              <div className="sm:flex-1 sm:border-l sm:border-slate-200 sm:px-6">
                <p className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  Direct
                </p>
                <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                  Factory enquiries
                </p>
              </div>
            </div> */}
          {/* </Reveal> */}
        </div>
      </section>

      {/* Category navigation */}
      <nav
        id="machine-units"
        aria-label="Machine categories"
        className="sticky top-[72px] z-30 border-y border-slate-100 bg-white/95 backdrop-blur-xl sm:top-[88px]"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6 lg:px-8">
          <span className="mr-1 inline-flex shrink-0 items-center gap-2 pr-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <Layers3 className="h-4 w-4 text-red-600" />
            Categories
          </span>

          {units.map((unit) => (
            <a
              key={unit.id}
              href={`#${unit.id}`}
              className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold text-slate-600 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              {unit.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Product categories */}
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 sm:pt-0 lg:px-8">
        {units.map((unit, index) => (
          <section
            key={unit.id}
            id={unit.id}
            aria-label={unit.name}
            className="scroll-mt-36 py-8 sm:py-10"
          >
            <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-5 rounded-full bg-red-600" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-600">
                    Category {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                  {unit.name}
                </h2>

                <p className="mt-1.5 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
                  {unit.description}
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-[10px] font-bold text-red-700 sm:text-xs">
                {unit.products.length} Machines
              </span>
            </Reveal>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {unit.products.map((product, productIndex) => (
                <ProductCard
                  key={`${unit.id}-${product.img}`}
                  product={product}
                  unitId={unit.id}
                  unitName={unit.name}
                  index={productIndex}
                />
              ))}
            </ul>

            {index !== units.length - 1 && (
              <div className="mt-12 h-px bg-slate-100 sm:mt-16" />
            )}
          </section>
        ))}

        {/* Bottom enquiry section */}
        <Reveal className="mt-8">
          <section className="relative overflow-hidden rounded-3xl border border-red-100 bg-red-50/60 px-5 py-10 text-center sm:px-10 sm:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-red-100/70 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm">
                <MessageCircle className="h-5 w-5" />
              </span>

              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                Need help choosing the right machine?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
                Tell us about your business, raw materials and expected
                production capacity. Our team will help you find the right
                machine.
              </p>

              <a
                href={waLink(
                  "Hello Athiyan Food Machines! I need help choosing the right machine for my business."
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-xs font-bold text-white shadow-sm shadow-red-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md sm:text-sm"
              >
                Enquire Now
                <MoveUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </Reveal>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-xs font-semibold text-slate-400 transition hover:text-red-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
