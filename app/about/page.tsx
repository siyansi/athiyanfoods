
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChefHat,
  Factory,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Utensils,
  Wheat,
} from "lucide-react";

import { Reveal } from "@/hooks/Reveal";
import { CountUp } from "@/hooks/CountUp";
import { waLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About Us | Athiyan Food Machines, Coimbatore",
  description:
    "Athiyan Food Machines is a Coimbatore-based manufacturer and supplier of food processing and commercial kitchen machinery — roasting, grinding, mixing, drying and more.",
  openGraph: {
    title: "About Athiyan Food Machines",
    description:
      "Reliable food processing machinery, accessible to businesses of all sizes.",
    type: "website",
  },
};

const highlights = [
  {
    number: "01",
    title: "Our Vision",
    description:
      "Make reliable food processing machinery accessible to businesses of all sizes.",
    icon: Target,
    color: "bg-orange-100 text-orange-600",
    accent: "from-orange-400 to-amber-500",
  },
  {
    number: "02",
    title: "Our Location",
    description:
      "Visit our showroom in Coimbatore to explore our machines and discuss your requirements.",
    icon: MapPin,
    color: "bg-emerald-100 text-emerald-700",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    number: "03",
    title: "Our Quality",
    description:
      "We focus on durable construction, food-grade materials, safety and dependable performance.",
    icon: ShieldCheck,
    color: "bg-sky-100 text-sky-700",
    accent: "from-sky-400 to-blue-500",
  },
];

const industries = [
  { name: "Hotels & Restaurants", icon: Utensils, color: "bg-orange-50 text-orange-600" },
  { name: "Catering Units", icon: ChefHat, color: "bg-emerald-50 text-emerald-700" },
  { name: "Cloud Kitchens", icon: Building2, color: "bg-sky-50 text-sky-700" },
  { name: "Food Manufacturers", icon: Factory, color: "bg-violet-50 text-violet-700" },
  { name: "Bakeries & Sweet Stalls", icon: Wheat, color: "bg-amber-50 text-amber-700" },
  { name: "Central Kitchens", icon: Utensils, color: "bg-rose-50 text-rose-700" },
  { name: "Batter & Masala Shops", icon: Sparkles, color: "bg-teal-50 text-teal-700" },
  { name: "Food Entrepreneurs", icon: HeartHandshake, color: "bg-indigo-50 text-indigo-700" },
];

const stats = [
  { value: 10000, suffix: "+", label: "Machines Sold" },
  { value: 4000, suffix: "+", label: "Customers Served" },
  { value: 3, suffix: "", label: "Years in Business" },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#F7F6F1] text-[#172B3A]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#172B3A] text-white">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:54px_54px]" />
          <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-orange-400/20 blur-[110px]" />
          <div className="absolute -bottom-48 left-0 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[100px]" />
          <div className="absolute right-[12%] top-[15%] h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute right-[16%] top-[21%] h-56 w-56 rounded-full border border-white/10" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_#F4A340]" />
                About Athiyan Food Machines
              </div>

              <h1 className="mt-7 max-w-3xl font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Building better
                <span className="block text-orange-400">
                  food businesses.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                Reliable food processing and commercial kitchen machinery,
                designed to help businesses work smarter, produce more and
                grow with confidence.
              </p>

              {/* <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#our-story"
                  className="group inline-flex items-center gap-3 rounded-full bg-orange-400 px-7 py-3.5 text-sm font-bold text-[#172B3A] shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-300"
                >
                  Discover Our Story
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>

                <a
                  href={waLink("Hello Athiyan Food Machines! I would like to know more about your machines.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  Talk to Us
                </a>
              </div> */}
            </Reveal>

            {/* Hero visual */}
            <Reveal delay={180}>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-5 rounded-[2.5rem] border border-white/10 rotate-6" />
                <div className="absolute -inset-2 rounded-[2.5rem] border border-orange-400/20 -rotate-3" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#28485A] via-[#1B3546] to-[#102332] p-7 shadow-2xl shadow-black/30 sm:p-9">
                  <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-orange-400/20 blur-3xl" />
                  <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-300">
                        Built for performance
                      </span>
                      <Factory className="h-6 w-6 text-white/60" />
                    </div>

                    <div className="flex h-64 items-center justify-center sm:h-72">
                      <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] sm:h-56 sm:w-56">
                        <div className="absolute inset-4 rounded-full border border-dashed border-orange-300/30" />
                        <div className="absolute inset-8 rounded-full border border-white/10" />
                        <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-300 to-orange-500 text-[#172B3A] shadow-[0_20px_60px_rgba(244,163,64,0.25)] transition-transform duration-700 hover:rotate-12 sm:h-32 sm:w-32">
                          <Factory className="h-16 w-16" strokeWidth={1.4} />
                        </div>
                        <span className="absolute -right-1 top-9 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[#24485A] text-emerald-300 shadow-xl">
                          <CheckCircle2 className="h-5 w-5" />
                        </span>
                        {/* <span className="absolute -bottom-1 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[#24485A] text-orange-300 shadow-xl">
                          <Sparkles className="h-5 w-5" />
                        </span> */}
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                        Our commitment
                      </p>
                      <p className="mt-2 text-xl font-bold tracking-tight">
                        Quality. Reliability. Growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-12 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#29495A] px-5 py-4 shadow-xl sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Quality focused</p>
                    <p className="text-xs text-white/50">SS 304 food grade steel</p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400" />
      </section>

      {/* INTRODUCTION */}
      <section id="our-story" className="relative scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                  <span className="h-1.5 w-7 rounded-full bg-orange-400" />
                  Who We Are
                </div>

                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Machinery that
                  <span className="block text-[#D9892D]">
                    grows your business.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#64717A] sm:text-base">
                  We combine practical engineering with an understanding of
                  real food business needs to help our customers choose the
                  right machinery.
                </p>

                <div className="mt-9 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#172B3A] text-orange-300">
                    <Factory className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-[#172B3A]">Athiyan Food Machines</p>
                    <p className="text-xs text-[#89939A]">Coimbatore, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-6 text-sm leading-8 text-[#66727A] sm:text-base">
                <p>
                  Athiyan Food Machines is a Coimbatore-based manufacturer and
                  supplier of food processing and commercial kitchen machinery.
                  We offer a range of machines for grinding, roasting, mixing,
                  drying and other food processing applications.
                </p>

                <p>
                  We work with customers to understand their requirements and
                  help them choose suitable machinery for their business — from
                  machine selection to customization, installation, operator
                  training and dependable after sales support.
                </p>

                <p>
                  As an ISO certified company, we specialize in designing and
                  manufacturing high-performance machines using{" "}
                  <strong className="font-bold text-[#172B3A]">
                    SS 304 food grade stainless steel
                  </strong>
                  , engineered to deliver superior productivity, efficiency
                  and long lasting performance.
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#E8E5DC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#172B3A]/5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-[#172B3A]">
                      Quality Materials
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-[#7B858B]">
                      Built around SS 304 food grade stainless steel.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E8E5DC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#172B3A]/5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <HeartHandshake className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-[#172B3A]">
                      Customer Support
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-[#7B858B]">
                      Support from selection through operator training.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
              What Drives Us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#172B3A] sm:text-4xl">
              Built around what matters.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#7A858C] sm:text-base">
              Our focus is to make food processing easier, more reliable and
              more productive for every customer.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 110}>
                  <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-[#EAE8E1] bg-[#FAFAF7] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:bg-white hover:shadow-[0_24px_65px_rgba(23,43,58,0.10)] sm:p-8">
                    <div
                      className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.accent} opacity-70 transition-all duration-500 group-hover:h-1.5`}
                    />

                    <div className="flex items-center justify-between">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="font-display text-4xl font-bold text-[#E7E5DD]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-bold text-[#172B3A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#7A858C]">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9892D]">
                      Our commitment
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="relative isolate overflow-hidden bg-[#172B3A] py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-orange-400/15 blur-[100px]" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
              Our Journey in Numbers
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Trust earned, machine by machine.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Every number represents the relationships and businesses we
              continue to serve.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-300/30 hover:bg-white/[0.09] sm:p-10">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-400/10 blur-2xl transition-all duration-500 group-hover:bg-orange-400/20" />

                  <p className="relative font-display text-5xl font-bold tracking-tight text-orange-300 sm:text-6xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>

                  <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-orange-400 to-amber-200 transition-all duration-500 group-hover:w-20" />

                  <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/55">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                  Who We Serve
                </p>

                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Solutions for every
                  <span className="block text-[#D9892D]">
                    food business.
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-8 text-[#77838A] sm:text-base">
                  We provide complete and precisely engineered machinery
                  solutions for a wide range of food businesses, helping
                  customers find equipment suited to their needs.
                </p>

                <a
                  href={waLink("Hello Athiyan Food Machines! I would like to discuss machinery for my food business.")}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#172B3A] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#25485B]"
                >
                  Discuss Your Requirement
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {industries.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.name} delay={index * 65}>
                    <div className="group flex h-full min-h-[92px] items-center gap-4 rounded-2xl border border-[#EAE8E1] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-[#172B3A]/5 sm:p-5">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color} transition-transform duration-300 group-hover:rotate-6`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-2">
                        <h3 className="text-sm font-bold leading-5 text-[#273D4A]">
                          {item.name}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[#B9BDBB] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION + QUALITY */}
      <section className="bg-[#ECEFE9] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-7 shadow-sm sm:p-9">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
                  Find Our Showroom
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#172B3A]">
                  Visit us in Coimbatore.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#77838A]">
                  33/1, Krishnarayapuram, Avarampalayam Main Road,
                  next to SBI Bank, Coimbatore, Tamil Nadu.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-sky-700">
                <MapPin className="h-4 w-4" />
                Coimbatore, Tamil Nadu
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#1D3C4B] to-[#102735] p-7 text-white shadow-sm sm:p-9">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Our Quality Promise
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  Quality in every detail.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  Every machine is manufactured using premium-grade materials
                  and undergoes stringent quality inspections to ensure
                  durability, safety and reliable performance.
                </p>
              </div>

              <div className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
                Quality focused manufacturing
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#F7F6F1] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#172B3A] px-7 py-14 text-center text-white shadow-2xl shadow-[#172B3A]/10 sm:px-14 sm:py-20">
              <div className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full bg-orange-400/20 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-36 -right-20 h-80 w-80 rounded-full bg-emerald-400/15 blur-[100px]" />

              <div className="relative mx-auto max-w-2xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400 text-[#172B3A] shadow-lg shadow-orange-500/20">
                  <HeartHandshake className="h-7 w-7" />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                  Let's Grow Together
                </p>

                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Your success is
                  <span className="text-orange-300"> our success.</span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Over the years, Athiyan Food Machines has earned the trust
                  of customers by delivering high quality equipment and
                  reliable service, and building lasting business
                  relationships. We believe that your success is our success.
                </p>

                <a
                  href={waLink("Hello Athiyan Food Machines! I would like to discuss my requirement.")}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BD5A] hover:shadow-xl"
                >
                  <MessageCircle className="h-5 w-5" />
                  Talk to Us on WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
