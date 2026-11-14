
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Clock3,
  Factory,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
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

const showroomAddress =
  "33/1, Krishnarayapuram, Avarampalayam Main Road, Coimbatore, Tamil Nadu 641006, India";

const factoryAddress =
  "42B, Chinthamani Nagar, Avarampalayam, Coimbatore, Tamil Nadu 641006, India";

const locations = [
  {
    title: "Showroom",
    address:
      "33/1, Krishnarayapuram, Avarampalayam Main Road, Coimbatore – 641 006.",
    map: `https://www.google.com/maps?q=${encodeURIComponent(showroomAddress)}&output=embed`,
    direction: MAPS_LINK,
    icon: Building2,
  },
  {
    title: "Manufacturing Unit",
    address:
      "42B, Chinthamani Nagar, Avarampalayam, Coimbatore – 641 006.",
    map: `https://www.google.com/maps?q=${encodeURIComponent(factoryAddress)}&output=embed`,
    direction: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(factoryAddress)}`,
    icon: Factory,
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [machine, setMachine] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lines = [
      "Hello Athiyan Food Machines!",
      `Name: ${name}`,
      `Phone: ${phone}`,
      machine && `Machine interested in: ${machine}`,
      message && `Requirement: ${message}`,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa] text-[#171717]">

      {/* MAIN CONTACT CONTAINER */}
      <section className="relative mx-auto max-w-[1440px] px-4 pb-12 pt-24 sm:px-6 lg:px-10 lg:pb-16 lg:pt-28">

        {/* Subtle background */}
        <div className="pointer-events-none absolute right-0 top-20 -z-0 h-72 w-72 rounded-full bg-red-100/70 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 -z-0 h-72 w-72 rounded-full bg-rose-100/60 blur-[100px]" />

        <div className="relative z-10">

          {/* HEADER */}
          <Reveal>
            <div className="mb-8 flex flex-col justify-between gap-6 lg:mb-10 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-red-600">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Contact Athiyan
                </div>

                <h1 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight text-[#171717] sm:text-5xl lg:text-[58px]">
                  Let's Talk About
                  <span className="block text-red-600">
                    Your Requirements.
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Have a machinery requirement? Connect with our team for
                  product details, pricing, specifications and assistance.
                  We're ready to help your food business.
                </p>
              </div>

              <a
                href={waLink("Hello Athiyan Food Machines! I have a machinery enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                <MessageCircle size={18} />
                WhatsApp Us
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>

          {/* CONTACT INFORMATION STRIP */}
          <div className="mb-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">

            {/* PHONE */}
            <Reveal delay={50}>
              <div className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/50">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Phone size={20} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#171717]">
                    Phone Numbers
                  </h3>

                  <div className="mt-2 space-y-1.5 text-xs font-semibold text-slate-600">
                    <a href="tel:+919361953377" className="block hover:text-red-600">
                      {PHONE_DISPLAY}
                    </a>
                    <a href="tel:+919566195377" className="block hover:text-red-600">
                      {PHONE_ALT_DISPLAY}
                    </a>
                    <a href="tel:+919514553377" className="block hover:text-red-600">
                      {PHONE_3RD_DISPLAY}
                    </a>
                  </div>

                  <p className="mt-3 flex items-center gap-1.5 text-[10px] text-slate-400">
                    <Clock3 size={12} />
                    9 AM – 7:30 PM (Mon–Sat)
                  </p>
                </div>
              </div>
            </Reveal>

            {/* WHATSAPP */}
            <Reveal delay={100}>
              <div className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/50">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#171717]">
                    WhatsApp Support
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    Get product information, quotations and quick assistance.
                  </p>
                  <a
                    href={waLink("Hello Athiyan Food Machines!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    Chat with us <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* SHOWROOM */}
            <Reveal delay={150}>
              <div className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/50">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Building2 size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#171717]">
                    Showroom
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    33/1, Krishnarayapuram, Avarampalayam Main Road,
                    Coimbatore – 641 006.
                  </p>
                  <p className="mt-2 text-[10px] font-semibold text-red-600">
                    Next to SBI Bank
                  </p>
                </div>
              </div>
            </Reveal>

            {/* FACTORY */}
            <Reveal delay={200}>
              <div className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/50">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Factory size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#171717]">
                    Manufacturing Unit
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    42B, Chinthamani Nagar, Avarampalayam,
                    Coimbatore – 641 006.
                  </p>
                  <p className="mt-2 text-[10px] font-semibold text-red-600">
                    SS304 Fabrication Facility
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* FORM + MAPS IN ONE COMBINED AREA */}
          <div className="grid items-stretch gap-5 lg:grid-cols-2">

            {/* ENQUIRY FORM */}
            <Reveal delay={100}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
                      Quick Enquiry
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#171717]">
                      Send Your Requirement
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Send size={21} />
                  </div>
                </div>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Share your details and our team will receive your enquiry
                  through WhatsApp.
                </p>

                <form onSubmit={submit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-bold text-slate-700"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-200 bg-[#fafafa] px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-xs font-bold text-slate-700"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-slate-200 bg-[#fafafa] px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-machine"
                      className="mb-2 block text-xs font-bold text-slate-700"
                    >
                      Machine Interested In
                    </label>
                    <select
                      id="contact-machine"
                      value={machine}
                      onChange={(e) => setMachine(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-[#fafafa] px-4 py-3 text-sm outline-none transition-all focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                    >
                      <option value="">Select a machine (optional)</option>
                      {units.map((unit) => (
                        <optgroup key={unit.id} label={unit.name}>
                          {unit.products.map((product) => (
                            <option
                              key={`${unit.id}-${product.name}`}
                              value={product.name}
                            >
                              {product.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-bold text-slate-700"
                    >
                      Your Requirements
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Capacity, machine type or other requirements..."
                      className="w-full resize-y rounded-xl border border-slate-200 bg-[#fafafa] px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-red-600/25"
                  >
                    <Send size={16} />
                    Send Enquiry on WhatsApp
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>
              </div>
            </Reveal>

            {/* BOTH MAPS */}
            <Reveal delay={150}>
              <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
                    Our Locations
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#171717]">
                    Find Us on Map
                  </h2>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    Visit our showroom or manufacturing unit in Coimbatore.
                  </p>
                </div>

                <div className="grid flex-1 gap-4 sm:grid-cols-2">
                  {locations.map((location) => {
                    const Icon = location.icon;

                    return (
                      <div
                        key={location.title}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-[#fafafa]"
                      >
                        <div className="flex items-center gap-2.5 p-3.5">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                            <Icon size={17} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-xs font-bold text-[#171717]">
                              {location.title}
                            </h3>
                            <p className="mt-0.5 text-[10px] text-slate-500">
                              Coimbatore, Tamil Nadu
                            </p>
                          </div>
                        </div>

                        <div className="h-[190px] overflow-hidden bg-slate-100">
                          <iframe
                            title={`${location.title} Google Map`}
                            src={location.map}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                          />
                        </div>

                        <div className="p-3.5">
                          <p className="min-h-[55px] text-[11px] leading-5 text-slate-500">
                            {location.address}
                          </p>

                          <a
                            href={location.direction}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-red-600 transition-all hover:gap-2.5"
                          >
                            <Navigation size={13} />
                            Get Directions
                            <ArrowUpRight size={13} />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* SMALL BOTTOM NOTE */}
          <Reveal delay={100}>
            <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-red-100 bg-red-50/70 px-5 py-4 sm:flex-row">
              <p className="text-center text-xs font-medium text-slate-600 sm:text-left">
                Have questions about our machinery? Our team is ready to assist.
              </p>

              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-red-600 transition-colors hover:text-red-800"
              >
                Visit Our Showroom
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
}
