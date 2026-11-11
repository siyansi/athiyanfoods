"use client";

import { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Phone,
  Factory,
  Building2,
  Navigation,
  Send,
  Clock,
  Sparkles,
} from "lucide-react";
import { units } from "@/lib/catlog";
import {
  waLink,
  PHONE_DISPLAY,
  PHONE_ALT_DISPLAY,
  PHONE_3RD_DISPLAY,
  MAPS_LINK,
} from "@/lib/contact";
import { Reveal } from "@/hooks/Reveal";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [machine, setMachine] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Athiyan Food Machines!",
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      machine && `Machine interested in: ${machine}`,
      message && `Requirement: ${message}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc]">
      {/* Background ambient glass glow blobs */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-steel-dark/10 blur-[130px]"
        aria-hidden
      />

      {/* Hero Header */}
      <section className="relative px-4 pt-8 pb-12 sm:px-6 lg:px-8">
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
              Direct Factory Assistance
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Connect with <span className="text-brand">Athiyan</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              From machinery sizing and custom stainless steel fabrication to
              doorstep installation and training — our engineering team in
              Coimbatore is ready to power your production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Contact Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Phone Card */}
          <Reveal delay={60}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/90 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft/80 text-brand transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-steel-dark">
                  Direct Lines
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Call our technical sales reps
                </p>
                <div className="mt-4 space-y-2 text-sm font-semibold text-steel-dark">
                  <div>
                    <a
                      href="tel:+919361953377"
                      className="transition-colors hover:text-brand"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+919566195377"
                      className="transition-colors hover:text-brand"
                    >
                      {PHONE_ALT_DISPLAY}
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+919514553377"
                      className="transition-colors hover:text-brand"
                    >
                      {PHONE_3RD_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                <Clock className="h-3.5 w-3.5" />
                9:00 AM – 7:30 PM (Mon–Sat)
              </div>
            </div>
          </Reveal>

          {/* WhatsApp Card */}
          <Reveal delay={120}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-[0_10px_30px_-15px_rgba(37,211,102,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50/80 hover:shadow-[0_20px_40px_-15px_rgba(37,211,102,0.2)]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/25 transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-steel-dark">
                  Instant WhatsApp
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Get quick quotes, machinery specs, videos, and factory price
                  lists directly in chat.
                </p>
              </div>
              <div className="mt-5">
                <a
                  href={waLink("Hello Athiyan Food Machines!")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-[#20ba59]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat with Sales
                </a>
              </div>
            </div>
          </Reveal>

          {/* Showroom Card */}
          <Reveal delay={180}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/90 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-steel-dark transition-transform duration-300 group-hover:scale-110">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-steel-dark">
                  Showroom
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  33/1, Krishnarayapuram, Avarampalayam Main Road, Coimbatore –
                  641 006.
                </p>
                <div className="mt-2 inline-block rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                  Landmark: Next to SBI Bank
                </div>
              </div>
              <div className="mt-5 border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-400">
                Live demo units available
              </div>
            </div>
          </Reveal>

          {/* Factory Card */}
          <Reveal delay={240}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/90 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-steel-dark transition-transform duration-300 group-hover:scale-110">
                  <Factory className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-steel-dark">
                  Manufacturing Unit
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  42B, Chinthamani Nagar, Avarampalayam, Coimbatore – 641 006.
                </p>
                <div className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  SS 304 Fabrication Facility
                </div>
              </div>
              <div className="mt-5 border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-400">
                Custom engineering workshop
              </div>
            </div>
          </Reveal>
        </div>

        {/* Interactive Glass Quote Form & Map Row */}
        <Reveal className="mt-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Form Column */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/80 p-8 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:p-12 lg:col-span-7">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  Quick Quotation
                </p>
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-steel-dark md:text-3xl">
                Tell us your requirement
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 md:text-sm">
                Fill in your details and click submit. We instantly prepare and
                format your inquiry into WhatsApp without delays.
              </p>

              <form onSubmit={submit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Your Name
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh"
                      className="w-full rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 backdrop-blur-md outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Phone Number
                    </label>
                    <input
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98765 43210"
                      className="w-full rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 backdrop-blur-md outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Machine Interested In
                  </label>
                  <select
                    value={machine}
                    onChange={(e) => setMachine(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-900 backdrop-blur-md outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                  >
                    <option value="">Select a machine (optional)</option>
                    {units.map((u) => (
                      <optgroup key={u.id} label={u.name}>
                        {u.products.map((p) => (
                          <option key={p.img} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Capacity & Specific Requirements
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="E.g., 50 kg/hr capacity, gas heated, for cloud kitchen..."
                    className="w-full rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 backdrop-blur-md outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.01] hover:bg-[#20ba59] hover:shadow-xl hover:shadow-emerald-500/30 sm:w-auto"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Forward Enquiry to WhatsApp
                </button>
              </form>
            </div>

            {/* Map Column */}
            <div className="flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/20 bg-steel-dark p-8 text-white shadow-2xl backdrop-blur-2xl md:p-10 lg:col-span-5">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
                  <Navigation className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                  Visit Coimbatore Showroom
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-300 md:text-sm">
                  We welcome factory visits and demonstrations. Inspect machine
                  thickness, motor horsepower, and weld quality in person before
                  ordering.
                </p>

                <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
                    <div className="text-xs leading-relaxed text-slate-300">
                      <strong className="block text-white">Main Office:</strong>
                      33/1, Krishnarayapuram, Avarampalayam Main Road, Coimbatore –
                      641 006. (Adjacent to SBI Bank)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-steel-dark"
                >
                  <MapPin className="h-4 w-4 text-brand group-hover:text-steel-dark" />
                  Get Google Maps Route
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}