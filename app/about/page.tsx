import type { Metadata } from "next";
import { ShieldCheck, HeartHandshake, MapPin, Target, MessageCircle } from "lucide-react";
import { Reveal } from "@/hooks/Reveal";
import { CountUp } from "@/hooks/CountUp";
import { waLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About Us | Athiyan Food Machines, Coimbatore",
  description:
    "Athiyan Food Machines is a Coimbatore-based manufacturer and supplier of food processing and commercial kitchen machinery — roasting, grinding, mixing, drying and more.",
  openGraph: {
    title: "About Athiyan Food Machines",
    description: "Reliable food processing machinery, accessible to businesses of all sizes.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-steel-dark to-steel py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              About Us
            </h1>
            <p className="mt-4 max-w-2xl text-white/75">
              Athiyan Food Machines — a Coimbatore-based manufacturer and supplier
              of food processing and commercial kitchen machinery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
              Who We Are
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Machinery that grows your business
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Athiyan Food Machines is a Coimbatore-based manufacturer and
                supplier of food processing and commercial kitchen machinery. We
                offer a range of machines for grinding, roasting, mixing, drying
                and other food processing applications.
              </p>
              <p>
                We work with customers to understand their requirements and help
                them choose suitable machinery for their business — from machine
                selection to customization, installation, operator training and
                dependable after sales support.
              </p>
              <p>
                As an ISO certified company, we specialize in designing and
                manufacturing high-performance machines using{" "}
                <span className="font-semibold text-foreground">
                  SS 304 food grade stainless steel
                </span>
                , engineered to deliver superior productivity, efficiency and long
                lasting performance.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-steel-dark">
                    Our Vision — Why We Started
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Athiyan Food Machines was started with a vision to make reliable
                  food processing machinery accessible to businesses of all sizes.
                  Our aim is to help customers reduce manual effort, improve
                  productivity and grow their businesses with suitable machinery.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-steel-dark">
                    Where We Are
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Our showroom is located in Coimbatore, Tamil Nadu — 33/1,
                  Krishnarayapuram, Avarampalayam Main Road (next to SBI Bank).
                  Customers can visit us to explore our range of machines and
                  discuss their requirements with our team.
                </p>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-steel-dark">
                    Our Quality Promise
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Every machine is manufactured using premium-grade materials and
                  undergoes stringent quality inspections to ensure durability,
                  safety and reliable performance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Journey in numbers */}
      <section className="bg-muted/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
              Our Journey in Numbers
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Trust earned, machine by machine
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
            {[
              { value: 10000, suffix: "+", label: "Machines Sold" },
              { value: 4000, suffix: "+", label: "Customers Served" },
              { value: 3, suffix: "", label: "Years in Business" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="rounded-2xl border border-border/70 bg-card p-8">
                  <p className="font-display text-5xl font-bold text-brand">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve + CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                Who We Serve
              </h2>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              We provide complete and precisely engineered machinery solutions for
              a wide range of food businesses:
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 text-sm font-medium sm:grid-cols-2">
              {[
                "Hotels & Restaurants",
                "Catering Units",
                "Cloud Kitchens",
                "Food Manufacturers",
                "Bakeries & Sweet Stalls",
                "Central Kitchens",
                "Batter & Masala Shops",
                "Food Entrepreneurs",
              ].map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-3xl bg-steel-dark p-8 text-white md:p-10">
              <h3 className="font-display text-2xl font-bold">
                Your success is our success
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Over the years, Athiyan Food Machines has earned the trust of
                customers by delivering high quality equipment and reliable
                service, and building lasting business relationships. We believe
                that your success is our success.
              </p>
              <a
                href={waLink("Hello Athiyan Food Machines! I would like to discuss my requirement.")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to Us on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}