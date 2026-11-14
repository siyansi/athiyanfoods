
"use client";

import Image from "next/image";
import { MessageCircle, Plus, Minus } from "lucide-react";
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
  const selectedQuantity = cart.quantity(id);
  const image = productImage(product.img);

  return (
    <Reveal
      as="li"
      delay={Math.min(index, 6) * 45}
      className="h-full"
    >
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_16px_35px_-18px_rgba(127,29,29,0.25)] sm:rounded-3xl sm:p-4">
        {/* Small red top accent */}
        <span className="absolute inset-x-8 top-0 h-[2px] origin-center scale-x-0 rounded-full bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

        {/* Product image */}
        <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-xl bg-[#f8f8f8] p-3 sm:h-44 sm:rounded-2xl sm:p-4">
          {image ? (
            <Image
              src={image}
              alt={product.name}
              width={400}
              height={400}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-center text-xs text-slate-400">
              Image unavailable
            </div>
          )}

          {selectedQuantity > 0 && (
            <span className="absolute right-2 top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-1.5 text-[10px] font-bold text-white shadow-sm">
              {selectedQuantity}
            </span>
          )}
        </div>

        {/* Product information */}
        <div className="flex flex-1 flex-col pt-3 text-left sm:pt-4">
          <h3 className="line-clamp-2 min-h-[2.5rem] text-xs font-bold leading-5 text-slate-900 sm:min-h-[3rem] sm:text-sm sm:leading-6">
            {product.name}
          </h3>

          <p className="mt-1 line-clamp-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-red-600 sm:text-[10px]">
            {unitName}
          </p>

          {/* Actions */}
          <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] gap-2 pt-4">
            <a
              href={productEnquiryLink(product.name, unitName)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-2.5 text-[10px] font-bold text-white transition-all duration-200 hover:bg-[#1fb85a] sm:min-h-10 sm:gap-2 sm:px-3 sm:text-xs"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Enquire
            </a>

            {selectedQuantity === 0 ? (
              <button
                type="button"
                onClick={() =>
                  cart.increment({
                    id,
                    name: product.name,
                    unit: unitName,
                  })
                }
                aria-label={`Add ${product.name} to enquiry`}
                className="inline-flex min-h-9 min-w-10 items-center justify-center gap-1 rounded-full border border-red-200 bg-red-50 px-3 text-xs font-bold text-red-600 transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white sm:min-h-10 sm:min-w-[4.5rem]"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Add</span>
              </button>
            ) : (
              <div className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-2 text-red-600 sm:min-h-10 sm:gap-2.5 sm:px-2.5">
                <button
                  type="button"
                  onClick={() => cart.decrement(id)}
                  aria-label={`Decrease ${product.name} quantity`}
                  className="flex h-6 w-6 items-center justify-center rounded-full transition hover:bg-red-100"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>

                <span className="min-w-3 text-center text-xs font-bold tabular-nums">
                  {selectedQuantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    cart.increment({
                      id,
                      name: product.name,
                      unit: unitName,
                    })
                  }
                  aria-label={`Increase ${product.name} quantity`}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
