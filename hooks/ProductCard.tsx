"use client";



import { MessageCircle, Plus, Check } from "lucide-react";
import { productEnquiryLink } from "@/lib/contact";
import { productImage, type Product } from "@/lib/catlog";
import { useEnquiryCart } from "@/hooks/EnquiryCart";
import { Reveal } from "@/hooks/Reveal";

export function ProductCard({
  product,
  unitId,
  unitName,
  index = 0,
}: {
  product: Product;
  unitId: string;
  unitName: string;
  index?: number;
}) {
  const cart = useEnquiryCart();
  const id = `${unitId}:${product.img}`;
  const added = cart.has(id);

  return (
    <Reveal as="li" delay={Math.min(index, 7) * 60} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_22px_44px_-20px_rgb(0_0_0/0.25)]">
        <span className="absolute inset-x-6 top-0 h-[3px] origin-center scale-x-0 rounded-b-full bg-brand transition-transform duration-300 group-hover:scale-x-100" />

        <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-2">
          <img
            src={productImage(product.img)?.src}
            alt={product.name}
            loading="lazy"
            width={300}
            height={300}
            className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-3 text-sm font-bold leading-snug text-steel-dark">{product.name}</h3>
        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {unitName}
        </p>

        <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
          <a
            href={productEnquiryLink(product.name, unitName)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-md"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Enquire
          </a>
          <button
            type="button"
            onClick={() => cart.toggle({ id, name: product.name, unit: unitName })}
            aria-pressed={added}
            className={`inline-flex items-center justify-center gap-1 rounded-full border px-3 py-2 text-xs font-bold transition-all duration-200 ${
              added
                ? "border-[#25D366]/50 bg-[#25D366]/10 text-[#128C4A]"
                : "border-border bg-card text-steel-dark hover:border-brand/40 hover:text-brand"
            }`}
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5" /> Added
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </Reveal>
  );
}
