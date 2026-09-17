import Link from "next/link";
import { Logo } from "@/components/Logo";
import { shopLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            {site.tagline}. A Winnipeg no-nonsense crew for marking paint, pin
            flags, and survey stakes.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
            Catalog
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/shop" className="text-white/80 hover:text-white">
                Shop
              </Link>
            </li>
            {shopLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/price-list" className="text-white/80 hover:text-white">
                Price list
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
            Contact
          </h2>
          <address className="mt-3 space-y-2 text-sm not-italic text-white/80">
            <p>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
            </p>
            <p>
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p>{site.hours.display}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
