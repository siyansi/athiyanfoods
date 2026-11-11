// "use client";

// import Link from "next/link";
// import {
//   MessageCircle,
//   ShieldCheck,
//   Zap,
//   Cog,
//   Wrench,
//   ArrowRight,
//   Download,
// } from "lucide-react";

// import { units, totalProducts, productImage } from "@/lib/catlog";
// import { waLink, enquiryMessage } from "@/lib/contact";
// import { Reveal } from "@/hooks/Reveal";
// import { CountUp } from "@/hooks/CountUp";

// const taglines = [
//   "Technology · Quality · Hygiene · Performance",
//   "Quality is not an act, it is our Habit",
//   "Tell us your need, we Build it",
//   "Your Growth Our Priority",
//   "Let's Build Your Success Together",
// ];

// const bestSellers: { name: string; img: string; unit: string; unitId: string }[] = [
//   { name: "Uruli Roaster (LPG)", img: "uruli-roaster-lpg", unit: "Masala & Roasting Unit", unitId: "masala-unit" },
//   { name: "Tilting Grinder", img: "tilting-grinder", unit: "Batter Unit", unitId: "batter-unit" },
//   { name: "Batter Mixer", img: "batter-mixer", unit: "Batter Unit", unitId: "batter-unit" },
//   { name: "Ribbon Blender Machine", img: "u-type-batter-mixer", unit: "Blending Unit", unitId: "blending-unit" },
//   { name: "Automatic Chappathi Making Machine", img: "automatic-chappathi", unit: "Chappathi Making Unit", unitId: "chappathi-unit" },
//   { name: "Baking Deck Oven", img: "baking-deck-oven", unit: "Bakery Unit", unitId: "bakery-unit" },
// ];

// export default function HomePage() {
//   return (
//     <>
//       {/* ---------------- Hero — light showcase panel ---------------- */}
//       <section className="px-4 pt-4 sm:px-6">
//         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#ececea]">
//           <div
//             className="pointer-events-none absolute -right-8 top-8 hidden h-56 w-56 rounded-full opacity-50 lg:block"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle, oklch(0.55 0.21 26 / 0.5) 1.5px, transparent 1.5px)",
//               backgroundSize: "17px 17px",
//             }}
//           />
//           <div
//             className="pointer-events-none absolute -left-10 bottom-24 hidden h-40 w-40 rounded-full opacity-40 md:block"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle, oklch(0.34 0.045 245 / 0.45) 1.5px, transparent 1.5px)",
//               backgroundSize: "15px 15px",
//             }}
//           />

//           <div className="relative grid items-center gap-10 px-6 pb-10 pt-10 sm:px-10 lg:grid-cols-2 lg:gap-6 lg:px-14 lg:pb-6 lg:pt-14">
//             <div>
//               <Reveal>
//                 <p className="inline-flex max-w-full items-center gap-3 overflow-hidden rounded-full bg-white p-1 pr-4 text-xs font-semibold shadow-sm">
//                   <span className="rounded-full bg-brand px-3 py-1.5 font-bold text-white">
//                     {totalProducts}+ Machines
//                   </span>
//                   <span className="flex items-center gap-1.5 font-semibold text-steel-dark">
//                     Trusted by 4000+ customers
//                     <ArrowRight className="h-3.5 w-3.5 text-brand" />
//                   </span>
//                 </p>
//               </Reveal>
//               <Reveal delay={100}>
//                 <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-steel-dark text-balance md:text-6xl">
//                   Machines that power{" "}
//                   <span className="text-brand">every food business</span>
//                 </h1>
//               </Reveal>
//               <Reveal delay={200}>
//                 <p className="mt-5 max-w-lg text-sm leading-relaxed text-foreground/60 md:text-base">
//                   Batter units to bakery ovens, roasters to rice steamers —
//                   SS 304 food grade machinery designed and manufactured in
//                   Coimbatore for hotels, food manufacturers and entrepreneurs.
//                 </p>
//               </Reveal>
//               <Reveal delay={300}>
//                 <div className="mt-8 flex flex-wrap items-center gap-3">
//                   <Link
//                     href="/products"
//                     className="group inline-flex items-center gap-2.5 rounded-full bg-steel-dark px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
//                   >
//                     View Machines
//                     <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
//                       <ArrowRight className="h-3.5 w-3.5" />
//                     </span>
//                   </Link>
//                   <a
//                     href={waLink("Hello Athiyan Food Machines! Please send me your product catalogue.")}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-steel-dark shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:scale-[1.03] hover:shadow-md"
//                   >
//                     Get Catalogue
//                     <Download className="h-4 w-4 text-brand" />
//                   </a>
//                 </div>
//               </Reveal>
//             </div>

//             <Reveal delay={250} className="relative">
//               <div className="relative mx-auto flex max-w-md items-center justify-center rounded-[2rem] bg-white p-8 shadow-[0_24px_50px_-24px_rgb(0_0_0/0.3)]">
//                 <img
//                   src={productImage("double-drum-roaster")}
//                   alt="Double Drum Roaster — stainless steel roasting machine"
//                   width={420}
//                   height={480}
//                   className="max-h-[340px] w-auto max-w-full object-contain"
//                   fetchPriority="high"
//                 />
//               </div>
//               <div className="absolute -left-3 bottom-8 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/75 px-4 py-2.5 shadow-lg backdrop-blur-md sm:-left-6">
//                 <ShieldCheck className="h-5 w-5 text-brand" />
//                 <div>
//                   <p className="text-xs font-bold text-steel-dark">SS 304 Food Grade</p>
//                   <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
//                     ISO Certified Company
//                   </p>
//                 </div>
//               </div>
//             </Reveal>
//           </div>

//           {/* stats row */}
//           <div className="relative border-t border-black/5 bg-white/40">
//             <div className="grid grid-cols-2 gap-6 px-6 py-8 sm:px-10 md:grid-cols-4 lg:px-14">
//               {[
//                 { value: 10000, suffix: "+", label: "Machines Sold" },
//                 { value: 4000, suffix: "+", label: "Customers Served" },
//                 { value: units.length, suffix: "", label: "Machine Units" },
//                 { value: totalProducts, suffix: "+", label: "Machines Available" },
//               ].map((s, i) => (
//                 <Reveal key={s.label} delay={i * 70}>
//                   <p className="font-display text-3xl font-bold text-steel-dark md:text-4xl">
//                     <CountUp value={s.value} suffix={s.suffix} />
//                   </p>
//                   <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
//                     {s.label}
//                   </p>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Marquee */}
//         <div className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-full border border-brand/10 bg-brand-soft py-2.5">
//           <div className="flex overflow-hidden">
//             <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
//               {[...taglines, ...taglines].map((t, i) => (
//                 <span
//                   key={i}
//                   className="flex shrink-0 items-center gap-10 whitespace-nowrap text-sm font-semibold italic tracking-wide text-brand"
//                 >
//                   {t}
//                   <span className="h-1.5 w-1.5 rounded-full bg-brand/50" aria-hidden />
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Product units ---------------- */}
//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
//             Our Product Range
//           </p>
//           <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-steel-dark md:text-4xl">
//             Machines for Every Food Business
//           </h2>
//           <p className="mt-4 text-muted-foreground">
//             From batter and masala units to poultry, bakery and steam cooking —
//             explore our complete range, machine by machine.
//           </p>
//         </Reveal>

//         <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {units.map((u, i) => (
//             <Reveal as="li" key={u.id} delay={Math.min(i, 7) * 60} className="h-full">
//               <Link
//                 href={`/products#${u.id}`}
//                 className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_24px_48px_-22px_rgb(0_0_0/0.3)]"
//               >
//                 <span className="absolute inset-x-6 top-0 h-[3px] origin-center scale-x-0 rounded-b-full bg-brand transition-transform duration-300 group-hover:scale-x-100" />
//                 <div className="flex h-36 items-center justify-center overflow-hidden rounded-xl bg-white">
//                   <img
//                     src={productImage(u.products[0]?.img ?? "")}
//                     alt={u.name}
//                     loading="lazy"
//                     width={300}
//                     height={220}
//                     className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="mt-4 flex items-center justify-between gap-2">
//                   <h3 className="font-display text-base font-bold text-steel-dark transition-colors group-hover:text-brand">
//                     {u.name}
//                   </h3>
//                   <span className="shrink-0 rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-bold text-brand">
//                     {u.products.length}
//                   </span>
//                 </div>
//                 <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
//                   {u.tagline}
//                 </p>
//                 <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
//                   View all machines
//                   <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
//                 </span>
//               </Link>
//             </Reveal>
//           ))}
//         </ul>
//       </section>

//       {/* ---------------- Why us ---------------- */}
//       <section className="bg-muted/60">
//         <div className="mx-auto max-w-7xl px-6 py-20">
//           <Reveal className="mx-auto max-w-2xl text-center">
//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
//               Why Athiyan
//             </p>
//             <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-steel-dark md:text-4xl">
//               Built for Business
//             </h2>
//             <p className="mt-4 text-muted-foreground">
//               Empowering your kitchen, elevating your business — with machinery
//               engineered to deliver superior productivity and long lasting performance.
//             </p>
//           </Reveal>
//           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 icon: ShieldCheck,
//                 title: "High Quality Stainless Steel",
//                 text: "Every machine is built with SS 304 food grade stainless steel for durability, safety and hygiene.",
//               },
//               {
//                 icon: Zap,
//                 title: "Energy Efficient Technology",
//                 text: "Designed to reduce manual effort and power consumption while improving productivity.",
//               },
//               {
//                 icon: Cog,
//                 title: "Durable & Reliable Performance",
//                 text: "Premium-grade materials and stringent quality inspections on every machine.",
//               },
//               {
//                 icon: Wrench,
//                 title: "After Sales Support",
//                 text: "Installation, operator training and dependable service from our experienced team.",
//               },
//             ].map((f, i) => (
//               <Reveal key={f.title} delay={i * 80} className="h-full">
//                 <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_22px_44px_-20px_rgb(0_0_0/0.22)]">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
//                     <f.icon className="h-5 w-5" />
//                   </div>
//                   <h3 className="mt-4 font-display text-base font-bold text-steel-dark">{f.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Best sellers ---------------- */}
//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <Reveal className="flex flex-wrap items-end justify-between gap-4">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
//               Best Selling Products
//             </p>
//             <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-steel-dark md:text-4xl">
//               Customer Favourites
//             </h2>
//           </div>
//           <Link href="/products" className="group inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline">
//             View all {totalProducts} machines
//             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>
//         </Reveal>
//         <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
//           {bestSellers.map((p, i) => (
//             <Reveal as="li" key={p.name} delay={i * 60}>
//               <div className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_22px_44px_-20px_rgb(0_0_0/0.25)]">
//                 <div className="flex h-28 items-center justify-center">
//                   <img
//                     src={productImage(p.img)}
//                     alt={p.name}
//                     loading="lazy"
//                     width={200}
//                     height={200}
//                     className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
//                   />
//                 </div>
//                 <p className="mt-3 flex-1 text-xs font-semibold leading-snug">{p.name}</p>
//                 <a
//                   href={waLink(enquiryMessage(p.name, p.unit))}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="mt-3 rounded-full bg-[#25D366] px-3 py-1.5 text-[11px] font-bold text-white transition-all duration-200 hover:scale-[1.04] hover:shadow-md"
//                 >
//                   Enquire Now
//                 </a>
//               </div>
//             </Reveal>
//           ))}
//         </ul>
//       </section>

//       {/* ---------------- Customers band ---------------- */}
//       <section className="border-y border-brand/10 bg-brand-soft/60 py-14">
//         <div className="mx-auto max-w-5xl px-6 text-center">
//           <Reveal>
//             <h2 className="font-display text-2xl font-bold text-steel-dark md:text-3xl">
//               Trusted by Businesses Across Tamil Nadu
//             </h2>
//             <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
//               We are grateful to the customers who trust Athiyan Food Machines for
//               their food processing and commercial kitchen needs —{" "}
//               <span className="font-semibold text-foreground">
//                 Hotels, Restaurants, Catering Units, Cloud Kitchens, Food
//                 Manufacturers, Bakeries, Central Kitchens and Food Entrepreneurs.
//               </span>
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------- CTA ---------------- */}
//       <section className="mx-auto max-w-7xl px-6 py-16">
//         <Reveal>
//           <div className="relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-b from-brand-soft to-white px-8 py-12 text-center md:py-16">
//             <h2 className="relative font-display text-3xl font-bold text-steel-dark md:text-4xl">
//               Tell us your need, we build it
//             </h2>
//             <p className="relative mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
//               Our showroom is in Coimbatore, Tamil Nadu — visit us to explore the
//               machines or send your requirement directly on WhatsApp.
//             </p>
//             <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
//               <a
//                 href={waLink("Hello Athiyan Food Machines! I would like to discuss my requirement.")}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-md"
//               >
//                 <MessageCircle className="h-4 w-4" />
//                 Chat on WhatsApp
//               </a>
//               <Link
//                 href="/contact"
//                 className="group inline-flex items-center gap-2.5 rounded-full bg-steel-dark px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03]"
//               >
//                 Contact Us
//                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
//                   <ArrowRight className="h-3.5 w-3.5" />
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </Reveal>
//       </section>
//     </>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  ShieldCheck,
  Zap,
  Cog,
  Wrench,
  ArrowRight,
  Download,
  ChevronRight,
  Layers,
  CheckCircle2,
} from "lucide-react";
import {  useEffect } from "react";
import { units, totalProducts, productImage } from "@/lib/catlog";
import { waLink, enquiryMessage } from "@/lib/contact";
import { Reveal } from "@/hooks/Reveal";
import { CountUp } from "@/hooks/CountUp";
 import heroImage from "@/assets/hero-kitchen.jpg";
import Image from "next/image";

const taglines = [
  "Technology · Quality · Hygiene · Performance",
  "Quality is not an act, it is our Habit",
  "Tell us your need, we Build it",
  "Your Growth Our Priority",
  "Let's Build Your Success Together",
];

const heroShowcaseMachines = [
  {
    name: "Uruli Roaster (LPG)",
    img: "uruli-roaster-lpg",
    unit: "Masala & Roasting Unit",
    unitId: "masala-unit",
    capacity: "50 - 250 Kg / Batch",
    material: "SS 304 Food Grade Drum",
  },
  {
    name: "Commercial Tilting Grinder",
    img: "tilting-grinder",
    unit: "Batter Unit",
    unitId: "batter-unit",
    capacity: "20 - 40 Liters",
    material: "Natural Granite + SS 304",
  },
  {
    name: "Ribbon Blender Mixer",
    img: "u-type-batter-mixer",
    unit: "Blending Unit",
    unitId: "blending-unit",
    capacity: "100 - 500 Kg / Batch",
    material: "Dual Direction Helical Ribbon",
  },
  {
    name: "Automatic Chappathi Machine",
    img: "automatic-chappathi",
    unit: "Chappathi Making Unit",
    unitId: "chappathi-unit",
    capacity: "1000 Pcs / Hour",
    material: "Automated Press & Double Baking",
  },
  {
    name: "Baking Deck Oven",
    img: "baking-deck-oven",
    unit: "Bakery Unit",
    unitId: "bakery-unit",
    capacity: "Standard 2 & 3 Deck",
    material: "Digital Heating Temperature Control",
  },
];

const heroSliderImages = [
  productImage("double-drum-roaster"),
  productImage("uruli-roaster-lpg"),
  productImage("tilting-grinder"),
  productImage("u-type-batter-mixer"),
  productImage("automatic-chappathi"),
];


  

  // 2-second auto-slide timer

const bestSellers: { name: string; img: string; unit: string; unitId: string }[] = [
  { name: "Uruli Roaster (LPG)", img: "uruli-roaster-lpg", unit: "Masala & Roasting Unit", unitId: "masala-unit" },
  { name: "Tilting Grinder", img: "tilting-grinder", unit: "Batter Unit", unitId: "batter-unit" },
  { name: "Batter Mixer", img: "batter-mixer", unit: "Batter Unit", unitId: "batter-unit" },
  { name: "Ribbon Blender Machine", img: "u-type-batter-mixer", unit: "Blending Unit", unitId: "blending-unit" },
  { name: "Automatic Chappathi Making Machine", img: "automatic-chappathi", unit: "Chappathi Making Unit", unitId: "chappathi-unit" },
  { name: "Baking Deck Oven", img: "baking-deck-oven", unit: "Bakery Unit", unitId: "bakery-unit" },
];

export default function HomePage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeMachine = heroShowcaseMachines[activeIdx];
const [currentIdx, setCurrentIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroSliderImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);


  return (
    <>
      {/* ---------------- Full-Bleed Architectural Hero ---------------- */}
         <section className="relative isolate w-full overflow-hidden bg-[#f7f9fc] pt-28 sm:pt-32">

      {/* =========================================
          BACKGROUND IMAGE - DESKTOP
      ========================================= */}
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[65%] lg:block">

        <Image
          src={heroImage}
          alt="Athiyan Food Machines industrial food processing machinery"
          fill
          priority
          sizes="65vw"
          className="object-cover object-center"
        />

        {/* Left White Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f9fc] via-[#f7f9fc]/90 via-20% to-transparent" />

        {/* Bottom Blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fc]/70 via-transparent to-white/20" />

      </div>


      {/* =========================================
          BACKGROUND IMAGE - MOBILE
      ========================================= */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[430px] lg:hidden">

        <Image
          src={heroImage}
          alt="Industrial food processing machinery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-[#f7f9fc]/80 to-[#f7f9fc]" />

      </div>


      {/* =========================================
          BACKGROUND GRID
      ========================================= */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />


      {/* =========================================
          MAIN HERO CONTENT
      ========================================= */}
      <div className="relative mx-auto max-w-[1450px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">

        <div className="max-w-[680px]">

          {/* Certification Badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-xl">

              <span className="h-2 w-2 rounded-full bg-[#dc2626] shadow-[0_0_10px_#dc2626]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-slate-600 sm:text-xs">
                ISO 9001 : 2015 Certified • Coimbatore
              </span>

            </div>
          </Reveal>


          {/* Main Heading */}
          <Reveal delay={100}>
            <h1 className="mt-9 font-display text-[52px] font-black uppercase leading-[0.98] tracking-[-0.045em] text-[#182234] sm:text-7xl lg:text-[88px]">

              BUILT STRONG.
              <br />

              BUILT FOR
              <br />

              <span className="text-[#dc2626]">
                BUSINESS.
              </span>

            </h1>
          </Reveal>


          {/* Description */}
          <Reveal delay={180}>
            <p className="mt-7 max-w-[590px] text-base leading-8 text-slate-500 sm:text-lg">

              Complete food processing and commercial kitchen
              solutions — from startups and small food units
              to restaurants and established manufacturers.

              <span className="font-semibold text-slate-700">
                {" "}{totalProducts}+ machines
              </span>

              {" "}across{" "}

              <span className="font-semibold text-slate-700">
                {units.length} specialised units.
              </span>

            </p>
          </Reveal>


          {/* CTA BUTTONS */}
          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">

              {/* View Products */}
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-[#182234] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#dc2626] hover:shadow-red-500/20"
              >
                View Products

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>


              {/* Enquire Now */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0eae70] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600"
              >
                Enquire Now

                <MessageCircle className="h-4 w-4" />
              </Link>

            </div>
          </Reveal>

        </div>

      </div>


      {/* =========================================
          STATISTICS STRIP
      ========================================= */}
      <div className="relative mx-auto max-w-[1450px] px-0 sm:px-8 lg:px-12">

        <Reveal delay={350}>
          <div className="relative w-full overflow-hidden rounded-b-[30px] border-t border-slate-200/70 bg-[#f0f1f2]/95 px-6 py-9 shadow-[0_15px_45px_rgba(15,23,42,0.04)] backdrop-blur-xl sm:px-9 sm:py-10 lg:px-10 lg:py-11">

            {/* Subtle Dot Pattern */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-16 w-28 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(#94a3b8 1.5px, transparent 1.5px)",
                backgroundSize: "15px 15px",
              }}
            />

            {/* Statistics Grid */}
            <div className="relative grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-4 md:gap-5">

              {/* 1. Machines Sold */}
              <div className="flex flex-col items-start">

                <p className="font-display text-4xl font-black tracking-tight text-[#152638] sm:text-5xl lg:text-[46px]">
                  <CountUp value={10000} suffix="+" />
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500 sm:text-xs">
                  Machines Sold
                </p>

              </div>


              {/* 2. Customers Served */}
              <div className="flex flex-col items-start">

                <p className="font-display text-4xl font-black tracking-tight text-[#152638] sm:text-5xl lg:text-[46px]">
                  <CountUp value={4000} suffix="+" />
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500 sm:text-xs">
                  Customers Served
                </p>

              </div>


              {/* 3. Machine Units */}
              <div className="flex flex-col items-start">

                <p className="font-display text-4xl font-black tracking-tight text-[#152638] sm:text-5xl lg:text-[46px]">
                  <CountUp value={13} />
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500 sm:text-xs">
                  Machine Units
                </p>

              </div>


              {/* 4. Machines Available */}
              <div className="flex flex-col items-start">

                <p className="font-display text-4xl font-black tracking-tight text-[#152638] sm:text-5xl lg:text-[46px]">
                  <CountUp value={95} suffix="+" />
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500 sm:text-xs">
                  Machines Available
                </p>

              </div>

            </div>

          </div>
        </Reveal>

      </div>


      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

    </section>

      {/* ---------------- Product units ---------------- */}
     <section className="mx-auto max-w-7xl px-6 py-20">
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
        Our Product Range
      </p>

      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-steel-dark md:text-4xl">
        Machines for Every Food Business
      </h2>

      <p className="mt-4 text-muted-foreground">
        From batter and masala units to poultry, bakery and steam cooking —
        explore our complete range, machine by machine.
      </p>
    </Reveal>

    <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {units.map((u, i) => (
        <Reveal
          as="li"
          key={u.id}
          delay={Math.min(i, 7) * 60}
          className="h-full"
        >
          <Link
            href={`/products#${u.id}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_24px_48px_-22px_rgb(0_0_0/0.3)]"
          >
            <span className="absolute inset-x-6 top-0 h-[3px] origin-center scale-x-0 rounded-b-full bg-brand transition-transform duration-300 group-hover:scale-x-100" />

            <div className="flex h-36 items-center justify-center overflow-hidden rounded-xl bg-white">
              <Image
                src={productImage(u.products[0]?.img ?? "") ?? heroImage}
                alt={u.name}
                width={300}
                height={220}
                sizes="(max-width: 640px) 100vw, 300px"
                className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <h3 className="font-display text-base font-bold text-steel-dark transition-colors group-hover:text-brand">
                {u.name}
              </h3>

              <span className="shrink-0 rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-bold text-brand">
                {u.products.length}
              </span>
            </div>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {u.tagline}
            </p>

            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
              View all machines
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  </section>


  {/* ---------------- Why Us ---------------- */}
  <section className="bg-muted/60">
    <div className="mx-auto max-w-7xl px-6 py-20">

      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
          Why Athiyan
        </p>

        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-steel-dark md:text-4xl">
          Built for Business
        </h2>

        <p className="mt-4 text-muted-foreground">
          Empowering your kitchen, elevating your business — with machinery
          engineered to deliver superior productivity and long lasting performance.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: ShieldCheck,
            title: "High Quality Stainless Steel",
            text: "Every machine is built with SS 304 food grade stainless steel for durability, safety and hygiene.",
          },
          {
            icon: Zap,
            title: "Energy Efficient Technology",
            text: "Designed to reduce manual effort and power consumption while improving productivity.",
          },
          {
            icon: Cog,
            title: "Durable & Reliable Performance",
            text: "Premium-grade materials and stringent quality inspections on every machine.",
          },
          {
            icon: Wrench,
            title: "After Sales Support",
            text: "Installation, operator training and dependable service from our experienced team.",
          },
        ].map((f, i) => (
          <Reveal key={f.title} delay={i * 80} className="h-full">
            <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_22px_44px_-20px_rgb(0_0_0/0.22)]">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-display text-base font-bold text-steel-dark">
                {f.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>

            </div>
          </Reveal>
        ))}
      </div>

    </div>
  </section>


  {/* ---------------- Best Sellers ---------------- */}
  <section className="mx-auto max-w-7xl px-6 py-20">

    <Reveal className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
          Best Selling Products
        </p>

        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-steel-dark md:text-4xl">
          Customer Favourites
        </h2>
      </div>

      <Link
        href="/products"
        className="group inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
      >
        View all {totalProducts} machines
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </Reveal>

    <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
      {bestSellers.map((p, i) => (
        <Reveal as="li" key={p.name} delay={i * 60}>
          <div className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_22px_44px_-20px_rgb(0_0_0/0.25)]">

            <div className="flex h-28 items-center justify-center">
              <Image
                src={productImage(p.img) ?? heroImage}
                alt={p.name}
                width={200}
                height={200}
                sizes="(max-width: 768px) 50vw, 200px"
                className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            <p className="mt-3 flex-1 text-xs font-semibold leading-snug">
              {p.name}
            </p>

            <a
              href={waLink(enquiryMessage(p.name, p.unit))}
              target="_blank"
              rel="noreferrer"
              className="mt-3 rounded-full bg-[#25D366] px-3 py-1.5 text-[11px] font-bold text-white transition-all duration-200 hover:scale-[1.04] hover:shadow-md"
            >
              Enquire Now
            </a>

          </div>
        </Reveal>
      ))}
    </ul>

  </section>


  {/* ---------------- Customers Band ---------------- */}
  <section className="border-y border-brand/10 bg-brand-soft/60 py-14">
    <div className="mx-auto max-w-5xl px-6 text-center">

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-steel-dark md:text-3xl">
          Trusted by Businesses Across Tamil Nadu
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          We are grateful to the customers who trust Athiyan Food Machines for
          their food processing and commercial kitchen needs —{" "}
          <span className="font-semibold text-foreground">
            Hotels, Restaurants, Catering Units, Cloud Kitchens, Food
            Manufacturers, Bakeries, Central Kitchens and Food Entrepreneurs.
          </span>
        </p>
      </Reveal>

    </div>
  </section>


  {/* ---------------- CTA ---------------- */}
  <section className="mx-auto max-w-7xl px-6 py-16">

    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-b from-brand-soft to-white px-8 py-12 text-center md:py-16">

        <h2 className="relative font-display text-3xl font-bold text-steel-dark md:text-4xl">
          Tell us your need, we build it
        </h2>

        <p className="relative mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          Our showroom is in Coimbatore, Tamil Nadu — visit us to explore the
          machines or send your requirement directly on WhatsApp.
        </p>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">

          <a
            href={waLink("Hello Athiyan Food Machines! I would like to discuss my requirement.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-steel-dark px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03]"
          >
            Contact Us

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

        </div>

      </div>
    </Reveal>

  </section>
    </>
  );
}