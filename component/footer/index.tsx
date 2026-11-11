"use client";

import Link from "next/link";
import { MapPin, Phone, MessageCircle, Globe, Mail, ShieldCheck } from "lucide-react";
import { units } from "@/lib/catlog";
import { waLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-steel-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Overview */}
        <div className="space-y-4">
          <div>
            <p className="font-display text-xl font-bold tracking-tight">
              ATHIYAN <span className="text-white/80">FOOD MACHINES</span>
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-soft/80">
              Complete Food Processing & Commercial Kitchen Solutions
            </p>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            An ISO certified manufacturer of food processing machines and
            commercial kitchen equipment in SS 304 food-grade stainless steel.
            Built for business — empowering your kitchen, elevating your production.
          </p>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/70 border border-white/10">
            <ShieldCheck className="h-4 w-4 text-brand" />
            <span>ISO Certified · SS 304 Food Grade</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
            Quick Navigation
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="transition-colors hover:text-white">
                Products Catalog
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-white">
                About Our Factory
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact & Showroom
              </Link>
            </li>
          </ul>
        </div>

        {/* Machine Categories */}
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
            Our Machines
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {units.map((u) => (
              <li key={u.id}>
                <Link
                  href={`/products#${u.id}`}
                  className="transition-colors hover:text-white"
                >
                  {u.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
            Contact Us
          </p>
          <ul className="mt-4 space-y-3.5 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft/80" />
              <span className="text-xs leading-relaxed">
                <strong className="text-white">Showroom:</strong> 33/1, Krishnarayapuram, Avarampalayam Main Road, Coimbatore – 641 006. (Next to SBI Bank)
                <br />
                <span className="mt-1 block text-white/60">
                  <strong className="text-white/80">Factory:</strong> 42B, Chinthamani Nagar, Avarampalayam, Coimbatore – 641 006.
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft/80" />
              <span className="text-xs">
                <a className="hover:text-white" href="tel:+919361953377">+91 93619 53377</a>
                {" · "}
                <a className="hover:text-white" href="tel:+919566195377">+91 95661 95377</a>
                <br />
                <a className="hover:text-white" href="tel:+919514553377">+91 95145 53377</a>
              </span>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
              <a
                className="font-medium text-[#25D366] hover:underline"
                href={waLink("Hello Athiyan Food Machines! I would like to inquire about your machinery.")}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft/80" />
              <span className="text-xs">www.athiyanfoodmachines.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 Athiyan Food Machines, Coimbatore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;